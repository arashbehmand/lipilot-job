# Phoenix Pilot: LiPilot → Job Seeker Pivot + Phoenix Integration

## Context

**Rename**: LiPilot → **Phoenix Pilot** (phoenix-pilot).

The extension currently generates LinkedIn content for sales. The pivot:
1. Reframes all copy, scoring, and tone options for **job seekers** (comments/posts keep the local LLM path)
2. Routes **LinkedIn DM generation** through the Phoenix backend's existing `linkedin_response` task
3. Introduces a **block-based communication_history sync** so multiple LinkedIn contacts and existing email threads can coexist in the same Phoenix session's artifact without clobbering each other

---

## Architecture

### DM Generation Flow

```
User clicks AI button in LinkedIn DM
  │
  ├─ content script scrapes conversation → GENERATE_MESSAGES to background
  │
  └─ background/index.ts: handleGenerateMessages()
        │
        ├─ 1. POST /api/v1/sessions/{id}/pilot-block         ← NEW Phoenix endpoint
        │       { username, headline, messages_text }
        │       Phoenix reads current communication_history,
        │       finds/replaces <phoenix-pilot-messages username="…"> block,
        │       saves new artifact version
        │
        ├─ 2. POST /api/v1/sessions/{id}/tasks
        │       { task_id: "linkedin_response",
        │         user_inputs: { draft_content: userThoughts } }
        │       Phoenix loads honest_context + updated communication_history
        │       → runs llm_generate with linkedin_response.yaml prompt
        │       → returns artifact.text_payload (plain text)
        │
        └─ 3. Wrap text as single ScoredReply → MessagingPanel displays + inserts
```

### Why Blocks?

The `communication_history` artifact in a Phoenix session accumulates context over time: email threads, Slack snippets, notes. Replacing the whole artifact on every DM sync would destroy that context.

Instead, each LinkedIn contact gets a named block. Multiple contacts for the same job application coexist:

```
<phoenix-pilot-messages username="Jane Doe" headline="Recruiter at Google" updated="2026-05-06T10:00:00Z">
[2026-05-06 10:00] Jane Doe: Hi, I came across your profile and thought you'd be a great fit for…
[2026-05-06 10:15] Me: Thanks for reaching out! I've been following Google's work on…
</phoenix-pilot-messages>

<phoenix-pilot-messages username="John Smith" headline="Eng Manager, Stripe" updated="2026-05-06T11:00:00Z">
[2026-05-06 11:00] John Smith: Loved your comment on that distributed systems post.
[2026-05-06 11:05] Me: Thanks! That topic is close to home for me…
</phoenix-pilot-messages>

[Existing email/other context preserved here, untouched]
```

---

## Changes Required

### A — Phoenix Backend (one new endpoint)

**A1. New Pydantic schema** in `interfaces/api/v1/routers.py` (or a new `pilot.py` module):

```python
class PilotBlockRequest(BaseModel):
    username: str                        # LinkedIn display name — used as block key
    headline: Optional[str] = None       # Contact's headline for context
    messages_text: str                   # Formatted conversation text
    linkedin_url: Optional[str] = None   # Optional, for reference
```

**A2. New endpoint** `POST /api/v1/sessions/{session_id}/pilot-block`:

```python
@router.post("/{session_id}/pilot-block", response_model=ArtifactPublic)
async def upsert_pilot_block(
    session_id: UUID,
    request: PilotBlockRequest,
    uow: UnitOfWork = Depends(get_uow),
    current_user: User = Depends(get_current_user),
):
    async with uow:
        await uow.assert_session_owner(session_id, current_user.id)
        
        # 1. Read current communication_history (may not exist yet)
        existing = await uow.artifacts.latest(session_id, ArtifactType.COMMUNICATION_HISTORY.value)
        current_text = (existing.content_raw or "") if existing else ""
        
        # 2. Build new block
        now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        headline_attr = f' headline="{request.headline}"' if request.headline else ""
        new_block = (
            f'<phoenix-pilot-messages username="{request.username}"{headline_attr} updated="{now_iso}">\n'
            f'{request.messages_text.strip()}\n'
            f'</phoenix-pilot-messages>'
        )
        
        # 3. Replace existing block for this username or append
        pattern = re.compile(
            r'<phoenix-pilot-messages username="' + re.escape(request.username) + r'"[^>]*>.*?</phoenix-pilot-messages>',
            re.DOTALL
        )
        if pattern.search(current_text):
            updated_text = pattern.sub(new_block, current_text)
        else:
            updated_text = current_text.rstrip() + ("\n\n" if current_text.strip() else "") + new_block
        
        # 4. Save as new artifact version (existing Phoenix pattern)
        new_artifact = await uow.artifacts.add_version(
            session_id=session_id,
            name=ArtifactType.COMMUNICATION_HISTORY.value,
            content_raw=updated_text,
            content_structured=None,
            created_by_importer="phoenix-pilot",
            created_by_pipeline_run_id=None,
            schema_version=None,
            creation_context={"source": "linkedin", "username": request.username},
            refinement_history=existing.refinement_history if existing else None,
        )
        await uow.commit()
        return ArtifactPublic.model_validate(new_artifact)
```

**A3. Register route** in `routers.py` — add the router or include the new endpoint in the existing session router.

**A4. Add `import re`** at top of the module if not present.

**Files to modify:**
- `.phoenix/phoenix-job-assistant/src/phoenix_job_assistant/interfaces/api/v1/routers.py` — add endpoint (or new `pilot.py` file + include)

No other backend files need changes. The `linkedin_response` task, its prompt, and all artifact infrastructure already exist.

---

### B — Extension Types (`src/types/index.ts`)

**B1. Extend `UserSettings` (lines 39–48)** — keep LLM fields (still used for comments/posts):
```typescript
export interface UserSettings {
  llmProvider: LLMProvider;
  apiKey: string;
  model: string;
  persona: string;
  enableEmojis: boolean;
  languageLevel: LanguageLevel;
  enableImageAnalysis: boolean;
  jobSearchContext: string;       // replaces serviceDescription
  phoenixBaseUrl: string;         // "http://localhost:8000"
  phoenixToken: string;           // JWT Bearer token
  phoenixUserId: string;          // UUID in Phoenix
  phoenixSessionId: string;       // selected session ID
  phoenixSessionName: string;     // display name (cached, avoids extra API call in panel)
}
```

**B2. Add `PhoenixSession` type**
```typescript
export interface PhoenixSession {
  id: string;
  display_name: string;
  created_at: string;
}
```

**B3. Update `GenerateRequest` (lines 103–113)**
Remove: `includeServiceOffer: boolean`, `serviceDescription?: string`
Add: `jobSearchContext?: string`

**B4. Update `MessagingRequest` (lines 244–253)**
Remove: `includeServiceOffer: boolean`, `serviceDescription?: string`
Add: `jobSearchContext?: string`

**B5. Update `CommentScores` (lines 120–124)**
`conversion: number` → `authenticity: number`

**B6. Replace `RecommendationTag` (lines 126–132)**
`'Best for Sales'` → `'Best for Getting a Reply'`

**B7. Replace `MessagingRecommendationTag` (lines 267–272)**
`'Close the Deal'` → `'Get the Meeting'`

**B8. Replace `MessagingToneType` (lines 209–214) and `MESSAGING_TONE_OPTIONS` (216–242)**
`'closing-deal'` / `'Closing Deal'` / `"Moving toward agreement or next steps"` →
`'informational'` / `'Informational Interview'` / `"Requesting an informational call or meeting"`

**B9. Add `MessageIntent` + extend `ConversationContext` (after line 207)**
```typescript
export type MessageIntent =
  | 'recruiter-inbound' | 'cold-outreach' | 'follow-up'
  | 'thank-you' | 'informational' | 'connection-request' | 'general';

// Add to ConversationContext:
detectedIntent?: MessageIntent;
isRecruiter?: boolean;
```

---

### C — Storage (`src/utils/storage.ts`)

**C1. Update `STORAGE_KEYS` (lines 3–15)**
Remove: `SERVICE_DESCRIPTION: 'service_description'`
Add:
```typescript
JOB_SEARCH_CONTEXT: 'job_search_context',
PHOENIX_BASE_URL: 'phoenix_base_url',
PHOENIX_TOKEN: 'phoenix_token',
PHOENIX_USER_ID: 'phoenix_user_id',
PHOENIX_SESSION_ID: 'phoenix_session_id',
PHOENIX_SESSION_NAME: 'phoenix_session_name',
```

**C2. Update `DEFAULT_SETTINGS` (lines 20–29)**
Replace `serviceDescription: ''` with `jobSearchContext: ''` and the five new Phoenix fields (all empty strings).

**C3. Update `getSettings` (lines 65–97)**
Replace `STORAGE_KEYS.SERVICE_DESCRIPTION` with the six new keys in the `chrome.storage.local.get()` array and resolve mapping.

**C4. Update `saveSettings` (lines 99–123)**
Mirror key changes: remove SERVICE_DESCRIPTION, add new keys.

**Note: No migration function needed.** This is a fresh pivot — existing users reconfigure from scratch via the new Options page.

---

### D — Phoenix Client (`src/utils/phoenix-client.ts`) — NEW FILE

```typescript
import type { PhoenixSession, ScoredReply } from '../types';

// List user's sessions (for dropdown in Options)
export async function fetchPhoenixSessions(
  baseUrl: string, token: string
): Promise<PhoenixSession[]>
// GET /api/v1/sessions
// Returns [] on any failure

// Test connection + count available sessions
export async function testPhoenixConnection(
  baseUrl: string, token: string, userId: string
): Promise<{ success: boolean; error?: string; sessionCount?: number }>
// GET /api/v1/sessions — verifies auth

// Two-step DM generation:
// 1. Sync conversation to communication_history via pilot-block
// 2. Run linkedin_response task
export async function generateLinkedInReply(
  baseUrl: string,
  token: string,
  sessionId: string,
  pilotBlock: {
    username: string;
    headline?: string;
    messagesText: string;
  },
  draftContent?: string,
): Promise<{ success: boolean; reply?: string; error?: string }>
// Step 1: POST /api/v1/sessions/{sessionId}/pilot-block
// Step 2: POST /api/v1/sessions/{sessionId}/tasks
//         { task_id: "linkedin_response", user_inputs: { draft_content: draftContent } }
// Extracts: response.artifact.text_payload
// On "missing honest_context" 422: return specific error message
```

**`formatMessagesText(context: ConversationContext): string`** — helper used inside phoenix-client:
```
[2026-05-06 10:00] Jane Doe: Hi, I came across your profile…
[2026-05-06 10:05] Me: Thanks for reaching out!
```
Format: `[timestamp or ""] {senderName}: {content}` per message, joined by `\n`.

All exported functions return result objects — never throw. Network or 4xx errors → `{ success: false, error: <human-readable> }`.

---

### E — Background (`src/background/index.ts`)

**E1. Update imports (line 1)**
Add `migrateFromSalesVersion` placeholder (no-op — just remove old keys on first run).
Add: `import { generateLinkedInReply, fetchPhoenixSessions } from '../utils/phoenix-client';`

**E2. `handleGenerateMessages` (lines 292–322) — replace entirely**
```typescript
async function handleGenerateMessages(payload: MessagingRequest): Promise<MessageResponse> {
  const { conversationContext, userThoughts } = payload;
  const settings = await getSettings();

  if (!settings.phoenixBaseUrl || !settings.phoenixToken || !settings.phoenixSessionId) {
    return {
      success: false,
      error: 'Phoenix session not configured. Open Settings (gear icon) to connect.',
    };
  }

  const result = await generateLinkedInReply(
    settings.phoenixBaseUrl,
    settings.phoenixToken,
    settings.phoenixSessionId,
    {
      username: conversationContext.participantName,
      headline: conversationContext.participantHeadline,
      messagesText: formatMessagesText(conversationContext),
    },
    userThoughts,
  );

  if (!result.success) {
    return { success: false, error: result.error };
  }

  const replies: ScoredReply[] = [{ text: result.reply!, recommendationTag: 'Most Authentic' }];
  return { success: true, replies };
}
```

Add `formatMessagesText(ctx: ConversationContext): string` helper (see phoenix-client.ts section).

Remove: `buildMessagingSystemPrompt`, `buildMessagingUserPrompt` — all DM prompting now lives in Phoenix's `linkedin_response.yaml`.

**E3. `handleGenerateComments` (lines 79–136) — local LLM path, update sales language**
- Remove destructuring of `includeServiceOffer`, `serviceDescription`
- Add `jobSearchContext` from payload
- Update `buildSystemPrompt` call: pass `jobSearchContext` instead of service fields

**E4. `buildSystemPrompt` (lines 412–611)**
- Replace opening framing (line ~504): `"world-class LinkedIn engagement specialist"` →
  `"skilled professional helping a job seeker build an authentic LinkedIn presence"`
- Remove SERVICE BRIDGING block (~lines 431–446). Replace with:
  ```typescript
  const jobContextInstruction = jobSearchContext
    ? `JOB SEEKER CONTEXT:\nThe commenter's goal: "${jobSearchContext}"\n` +
      `→ If the post overlaps with their target areas, let expertise speak naturally.\n` +
      `   Never say "I'm looking for a job."`
    : '';
  ```
- Update JSON output scoring tag in the spec string: `"Best for Sales"` → `"Best for Getting a Reply"`

**E5. `buildSystemPrompt` function signature (line 412)**
`serviceDescription?: string` → `jobSearchContext?: string`

**E6. Update `parseScoredComments` valid tags**
`'Best for Sales'` → `'Best for Getting a Reply'`

**E7. `handleCheckConfig` — update validation**
For DMs: check `phoenixBaseUrl + phoenixToken + phoenixSessionId`
For comments: still check `apiKey` (local LLM still in use)
Return both statuses in the config response so UIs can show appropriate state.

---

### F — Messaging Panel (`src/content/components/MessagingPanel.tsx`)

**F1. Remove `includeServiceOffer` (line 67) and `hasServiceDescription` (line 68) state**

**F2. Remove service offer toggle JSX block** (~30 lines)

**F3. Add Phoenix session badge** (replaces toggle):
```tsx
<div className="phoenix-session-badge">
  {sessionName
    ? <><BriefcaseIcon /> <span>{sessionName}</span></>
    : <span className="warning">⚠ No Phoenix session</span>
  }
</div>
```
Load `settings.phoenixSessionName` on mount — no live API call needed.

**F4. If no session configured** — replace generate button with CTA:
```tsx
<div className="phoenix-required">
  <p>A Phoenix session is required to generate messages.</p>
  <button onClick={() => chrome.runtime.sendMessage({ type: 'OPEN_OPTIONS' })}>
    Open Settings →
  </button>
</div>
```

**F5. Update tone option**: `closing-deal` → `informational`, label `'Informational Interview'`

**F6. Update `handleGenerate` payload** — remove `includeServiceOffer`/`serviceDescription`, add `jobSearchContext`

**F7. Update placeholder**: `"e.g., Ask for a 20-min call, thank them for the intro, schedule next steps…"`

---

### G — Floating Panel (`src/content/components/FloatingPanel.tsx`)

**G1. Remove `hasServiceDescription` (line 84) and `includeServiceOffer` (line 83) state**

**G2. Remove service-offer-toggle JSX block** entirely

**G3. Update `userConfig` state shape**: `serviceDescription` → `jobSearchContext`

**G4. Update score label rendering**: wherever `conversion` score label appears → `authenticity`

**G5. Update `handleGenerate` payload**: remove `includeServiceOffer`/`serviceDescription`, add `jobSearchContext`

---

### H — Options UI (`src/options/App.tsx`)

**H1. Replace "Service Description" section** with "Job Search Context":
```
Job Search Context (optional)
────────────────────────────────────────────────────────────
Used in AI-generated comments to subtly position you — without
sounding like you're actively job hunting.

[textarea, 4 rows]
placeholder: "e.g., Transitioning from PM to AI engineering.
              Targeting Series B startups in climate tech..."
```

**H2. Add "Phoenix — Message Generation" section** (new, after Job Search Context):
```
Phoenix — Message Generation
────────────────────────────────────────────────────────────
Connect a Phoenix session so LinkedIn DMs are generated using
your resume and honest job preferences.

Base URL:   [http://localhost:8000              ]
User ID:    [your-uuid                          ]
Token:      [••••••••••••••••••   ] [Test]

  ✓ Connected · 3 sessions available

Active Session:
[▼  "Google SWE Application — May 2026"       ]

  Note: The session must have an honest context configured.
```

State additions:
```typescript
const [isTestingPhoenix, setIsTestingPhoenix] = useState(false);
const [phoenixTestResult, setPhoenixTestResult] = useState<
  { success: boolean; error?: string; sessionCount?: number } | null
>(null);
const [phoenixSessions, setPhoenixSessions] = useState<PhoenixSession[]>([]);
```

Handler:
```typescript
const handleTestPhoenix = async () => {
  setIsTestingPhoenix(true);
  const result = await testPhoenixConnection(
    settings.phoenixBaseUrl, settings.phoenixToken, settings.phoenixUserId
  );
  setPhoenixTestResult(result);
  if (result.success) {
    const sessions = await fetchPhoenixSessions(settings.phoenixBaseUrl, settings.phoenixToken);
    setPhoenixSessions(sessions);
  }
  setIsTestingPhoenix(false);
};
```

On mount: if `phoenixBaseUrl + phoenixToken` already set, auto-fetch sessions.

Session dropdown `onChange`: save `phoenixSessionId` + `phoenixSessionName` to storage.

**H3. Keep LLM settings section unchanged** — still needed for comments and posts.

**H4. Update extension name/footer** → `"Phoenix Pilot — AI job search assistant for LinkedIn"`

---

### I — Manifest (`manifest.json`)

Update `name` → `"Phoenix Pilot"` (or keep `"LiPilot"` if Store update isn't planned yet — cosmetic only).

Add to `host_permissions`:
```json
"http://localhost/*",
"http://127.0.0.1/*"
```

---

### J — Messaging Scraper (`src/content/utils/messaging-scraper.ts`)

Update `inferConversationTopic` to recognize job-seeker patterns:
```typescript
{ pattern: /recruiter|talent|hiring|role|position|opportunity/i, topic: 'Recruiter outreach' },
{ pattern: /informational|your experience|career path/i,         topic: 'Informational interview' },
{ pattern: /thank you|thanks for|great speaking/i,               topic: 'Post-interview follow-up' },
{ pattern: /application|applied|interview|screening/i,           topic: 'Application follow-up' },
{ pattern: /follow.?up|checking in|touch base/i,                 topic: 'Follow-up' },
{ pattern: /connect|mutual|introduction/i,                       topic: 'Networking connection' },
```

---

## Implementation Sequence

```
Phase A (Phoenix backend — do first so extension can be tested end-to-end):
  A1–A4: New pilot-block endpoint in phoenix-job-assistant

Phase B (Extension — in dependency order):
  1. src/types/index.ts
  2. src/utils/storage.ts
  3. src/utils/phoenix-client.ts           (new file)
  4. src/background/index.ts
  5. src/options/App.tsx
  6. src/content/components/MessagingPanel.tsx
  7. src/content/components/FloatingPanel.tsx
  8. src/content/utils/messaging-scraper.ts
  9. manifest.json
```

---

## What NOT to Change

- `src/utils/llm-client.ts` — unchanged, used for comments + posts
- `src/content/utils/linkedin-selectors.ts` — DOM scraping unchanged
- Shadow DOM, MutationObserver, SPA navigation handling in `content/index.tsx`
- `handleRefineComment` / `REFINE_COMMENT` — local refinement still works
- `handleStreamUpdatePersona` / persona learning system
- `PostAssistantPanel.tsx` — no sales references
- History, feedback, persona observation storage

---

## Verification

**Phoenix backend:**
```bash
# Test pilot-block endpoint
curl -X POST http://localhost:8000/api/v1/sessions/{id}/pilot-block \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{"username":"Jane Doe","headline":"Recruiter at Google","messages_text":"[Jane Doe]: Hi!\n[Me]: Hello!"}'
# → returns artifact with updated communication_history text containing the block

# Verify block coexistence (run again with different username)
curl ... -d '{"username":"John Smith","messages_text":"[John Smith]: Hey\n[Me]: Hi!"}'
# → second block appended, Jane Doe's block still present

# Test task still works
curl -X POST http://localhost:8000/api/v1/sessions/{id}/tasks \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{"task_id":"linkedin_response","user_inputs":{"draft_content":"Ask for a call"}}'
# → artifact.text_payload contains generated LinkedIn message
```

**Extension:**
1. `npm run build` — no TypeScript errors
2. Options page: Phoenix section renders, Test shows session count, session dropdown populates
3. MessagingPanel: session name badge visible; if no session → CTA shown
4. Generate DM: pilot-block creates/updates block in Phoenix, task runs, reply appears in panel, insertable into LinkedIn
5. Generate comment: local LLM used, `authenticity` score shown, `'Best for Getting a Reply'` tag visible
6. Phoenix offline: DMs show error, comments still work
7. Same contact messaged twice: second pilot-block call patches the existing block, doesn't duplicate
8. Two contacts in same session: each gets their own block, both preserved after updates
