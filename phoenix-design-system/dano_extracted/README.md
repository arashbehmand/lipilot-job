# Handoff: Dano Systems Website Redesign

## Overview
This package contains the design reference for the `dano.systems` website redesign — a customer-facing showcase and portfolio site for Dano Systems, an LLM-based literary translation platform. The site lives at `https://dano.systems` and is deployed on Vercel.

## About the Design Files
The files in this bundle are **design references created in HTML** — high-fidelity prototypes showing intended look, copy, and interactive behavior. The task is to **recreate these designs inside the existing `dano-system-site` Next.js codebase** using its established patterns (App Router, TypeScript, Tailwind CSS, `next-intl`, Zod, Resend). Do not ship the HTML files directly.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are all final and should be matched precisely. The developer should treat `dano-systems.html` as the pixel reference.

---

## Design Tokens

### Colors — Light (default)
```css
--paper:   #F2EDE2   /* page background */
--ink:     #18181A   /* primary text */
--copper:  #B56839   /* accent */
--ink-dim: rgba(24,24,26,0.08)    /* borders, dividers */
--ink-mid: rgba(24,24,26,0.45)    /* secondary text */
--btn-primary-bg: #18181A
--btn-primary-fg: #F2EDE2
--nav-bg:  rgba(242,237,226,0.92) /* frosted nav */
--surface-reader:  #ffffff
--surface-contact: #18181A        /* always dark */
--surface-footer:  #18181A        /* always dark */
```

### Colors — Dark (`prefers-color-scheme: dark`)
```css
--paper:   #0F0E0C
--ink:     #EDE8DE
--copper:  #D4845A   /* brighter against dark bg */
--ink-dim: rgba(237,232,222,0.08)
--ink-mid: rgba(237,232,222,0.44)
--btn-primary-bg: #D4845A        /* copper pill replaces ink pill */
--btn-primary-fg: #0F0E0C
--nav-bg:  rgba(15,14,12,0.92)
--surface-reader:  #131210
--surface-contact: #0A0909       /* slightly darker than page */
--surface-footer:  #18181A
```

Dark mode body also gets a subtle copper warmth:
```css
background:
  radial-gradient(ellipse 60% 40% at 15% 0%, rgba(212,132,90,0.07) 0%, transparent 70%),
  radial-gradient(ellipse 40% 30% at 85% 90%, rgba(212,132,90,0.04) 0%, transparent 60%),
  #0F0E0C;
```

**Contact section and footer are always dark** regardless of OS theme — they never follow `prefers-color-scheme`. Their internal text colors use hardcoded `rgba(237,232,222,...)` values.

### Typography
- **Display / headings**: `'Cormorant Garamond', Georgia, serif` — weights 300, 400, 500
- **Body / UI**: `system-ui, -apple-system, sans-serif`
- **Labels / eyebrows**: system-ui, 0.68–0.75rem, `letter-spacing: 0.18–0.22em`, `text-transform: uppercase`

### Spacing
- Section padding: `clamp(5rem, 10vw, 9rem)` vertical, `clamp(1.5rem, 5vw, 4rem)` horizontal
- Max content width: `1080px`, centered
- Grid gaps: `1px` (with `background: var(--ink-dim)` on the grid container for hairline borders)

### Borders & Surfaces
- Dividers: `1px solid rgba(24,24,26,0.08)`
- Cards/grids: `1px solid rgba(24,24,26,0.08)` border, `border-radius: 3–4px` (minimal, not the current rounded-2xl)
- No box shadows, no backdrop-filter glass surfaces

---

## Sections / Views

### 1. Navigation
**Sticky top bar**, `height: 60px`, `background: rgba(242,237,226,0.92)`, `backdrop-filter: blur(12px)`, bottom border `1px solid var(--ink-dim)`.

- **Left**: `Dano` wordmark — Cormorant Garamond 500, 1.35rem
- **Right nav links**: Library · How it works · About · Get in touch
  - Links: system-ui 0.8125rem, color `var(--ink-mid)`, hover `var(--ink)`
  - "Get in touch" is a ghost pill button: `border: 1px solid var(--ink-dim)`, `padding: 0.4rem 1rem`, `border-radius: 100px`; hover: `border-color: var(--copper)`, `color: var(--copper)`
- Remove: ThemeToggle, LocaleSwitcher

### 2. Hero
Full-height section (`min-height: calc(88vh - 60px)`).

- **Eyebrow**: `Context-aware literary translation` — 0.7rem, uppercase, letter-spacing 0.22em, color `var(--copper)`
- **H1**: `Books that need *memory* to translate well.` — Cormorant Garamond 300, `clamp(3.2rem, 8vw, 7rem)`, `max-width: 14ch`, `text-wrap: balance`. The word "memory" is italic, color `var(--copper)`.
- **Subline**: `Dano builds a knowledge graph of your text before translation begins…` — 1rem–1.2rem, color `var(--ink-mid)`, `max-width: 44ch`
- **CTAs**:
  - Primary: `See a sample translation` — dark pill (`background: var(--ink)`, `color: var(--paper)`), `padding: 0.75rem 1.75rem`, `border-radius: 100px`, arrow icon. Scrolls to `#library`.
  - Ghost: `Discuss a project` — no border, `color: var(--ink-mid)`, arrow icon, hover `color: var(--copper)`. Scrolls to `#contact`.
- No decorative background, no HeroOrnament, no bounce indicator.

### 3. How It Works
5-column responsive grid (`grid-template-columns: repeat(auto-fit, minmax(180px, 1fr))`).

Each step:
- **Number**: Cormorant Garamond 300, 2.5rem, `color: rgba(24,24,26,0.08)` — very faint
- **Title**: Cormorant Garamond 500, 1.15rem
- **Body**: system-ui 0.875rem, color `var(--ink-mid)`, 1 sentence max

Steps:
1. **Entity profiling** — Characters, places, recurring objects, and motifs are extracted and named consistently before any translation work begins.
2. **Context graph** — Entities and their relationships are mapped into a structured graph. Narrative pressure, tone, and cultural weight are recorded as graph properties.
3. **Translation with memory** — Each paragraph is translated with the full graph in view — not in isolation. Terminology, register, and voice stay consistent chapter to chapter.
4. **Review surface** — Translators and editors see the same graph slice used during translation, making quality review grounded rather than intuitive.
5. **Export** — Clean EPUB and structured JSON output, ready for editorial pipeline or downstream localization systems.

### 4. Sample Library (`#library`)
Three-column grid of book cards. Grid uses `1px` gap with `background: var(--ink-dim)` to create hairline borders between cards.

**Book card** (`background: var(--paper)`, hover `background: #fff`):
- Year + language: 0.68rem, copper, uppercase, letter-spacing 0.18em
- Title: Cormorant Garamond 400, 1.5rem
- Author: 0.8125rem, `var(--ink-mid)`
- Language tags (for available books): 0.65rem pill tags, `border: 1px solid var(--ink-dim)`
- Placeholder books show italic "Excerpt reader coming soon" instead of tags
- Clicking an active book card switches the reader below (currently only Metamorphosis has data)

Books:
1. **Die Verwandlung** — Kafka, 1915, German → EN ES FA JA ZH AR IT *(full data)*
2. **The Tell-Tale Heart** — Poe, 1843, English *(placeholder)*
3. **The Gift of the Magi** — O. Henry, 1905, English *(placeholder)*

### 5. Sample Reader (`#sample`)
Appears below the library grid. Shows excerpts for the selected book.

**Header row**: book title (Cormorant Garamond 400, ~2.8rem) + author/year line left; language picker right.

**Language picker**: small pill buttons (0.75rem, uppercase, letter-spacing 0.08em). Active state: `background: var(--ink)`, `color: var(--paper)`. Available: EN ES FA JA ZH AR IT.

**Excerpt tabs**: copper active state, pill buttons. Tabs: Opening · The weather · The profession.

**Two-panel layout**: `grid-template-columns: 1fr 1fr`, separated by `1px` hairline. Left = original German. Right = selected translation.
- Panel label: 0.65rem, uppercase, muted (`var(--ink-mid)`)
- Active language label: 0.65rem, uppercase, `var(--copper)`
- Text: Cormorant Garamond, 1.05rem, line-height 1.85
- RTL support: Persian and Arabic panels get `dir="rtl"`, slightly larger font (1.1rem), line-height 2

**Footer row**: quality note (left, muted, 0.8rem) + EPUB download link (right, copper).

### 6. Context Map (`#graph`)
Two-column layout: caption left, SVG diagram right.

**Caption**:
- H2: "The graph behind the translation" — Cormorant Garamond 400, ~2.6rem
- Two short paragraphs, muted
- Legend: 3 dot + label rows — copper (Characters), moss/green (Places & spaces), slate/purple (Themes & pressures)

**SVG diagram**: A hand-crafted (or `graph_svg.py`-generated) static SVG on `background: #faf8f4`. Shows: Gregor Samsa (center, copper), Father Samsa, Mother Samsa, The Room, Work & Obligation, Body & Form, Isolation, Family Pressure. Edges labeled in 9px muted type. Bottom-right caption: `Illustrative — internal scores not shown`.

See `graph_svg.py` for the generator — run it against any exported graph JSON to produce a styled SVG in this design language. Do not use the D3 force graph.

### 7. About (`#about`)
Two-column layout: text left, capability list right.

**Left**:
- H2: "Translation infrastructure for texts that resist automation." — Cormorant Garamond 400
- Two paragraphs about the team and the name (دانو)

**Right** — numbered capability list, borderless table style:
- Top border, each item separated by 1px `var(--ink-dim)` border
- Number in copper (0.7rem), description in muted body text
1. Literary translation with persistent context
2. Context-aware localization pipelines
3. Editorial AI tooling
4. R&D prototypes for publishers and labs

### 8. Contact (`#contact`)
**Full-width dark section**: `background: var(--ink)`, `color: var(--paper)`.

Two-column layout: headline + brief copy left, form right.

**Headline**: "Bring a hard translation problem." — Cormorant Garamond 300, ~3rem

**Form fields** (simplified from current — remove timeline, scope, sourceLanguage as separate required fields):
1. Name + Email — side by side (`grid-template-columns: 1fr 1fr`)
2. Project type — `<select>`: Literary translation / Localization pipeline / Editorial AI tooling / Research & prototype / Other
3. Languages involved — free text, placeholder "e.g. German → English, Persian"
4. Project brief — `<textarea>`, min-height 120px

**Field styling**: `background: rgba(242,237,226,0.06)`, `border: 1px solid rgba(242,237,226,0.14)`, `border-radius: 3px`, focus `border-color: rgba(242,237,226,0.35)`.

**Submit button**: copper pill (`background: var(--copper)`, `color: #fff`), hover `#c97040`.

**Success state**: green text "Sent — I'll be in touch soon."
**Error state**: red-ish text "Something went wrong. Email me directly at hello@dano.systems."

Backend: existing `/api/contact` Resend route. Simplify Zod schema to: `name`, `email`, `projectType`, `languages`, `message`.

### 9. Footer
`background: var(--ink)`, `border-top: 1px solid rgba(242,237,226,0.08)`, `padding: 2.5rem`.

- Left: "Dano Systems" — Cormorant Garamond 1.1rem, muted
- Right: "Context-aware translation infrastructure for literary and long-form texts. © 2025 Dano Systems."

---

## Interactions & Behavior

| Interaction | Behavior |
|---|---|
| Language picker | Swaps translation panel text + direction (RTL for FA/AR) + language label |
| Excerpt tabs | Swaps both source and translation paragraphs |
| Book card click | Marks card active; future: swaps reader content |
| Nav links | Smooth scroll to section anchors |
| Contact form submit | POST `/api/contact`, show success/error inline |
| Hover states | See individual component notes above |

---

## What to Remove from the Existing Codebase

| Item | Action |
|---|---|
| `framer-motion` | Remove from `package.json` |
| `d3-force` | Remove — replace force graph with static SVG |
| `next-themes` | Remove — dark mode handled via `prefers-color-scheme` CSS only, no JS toggle |
| `LocaleSwitcher` | Remove from header (keep i18n routing structure dormant for v1) |
| `/es` and `/fa` locale routes | Disable for v1 (remove from `routing.ts` locales array or just remove the switcher UI) |
| `HeroOrnament` | Delete |
| `ThemeToggle` | Delete — no manual toggle needed |
| `surface`, `grid-paper`, `contrast-band` CSS classes | Replace with simpler token system |
| `shadow-panel`, `shadow-glow` | Remove |
| Rounded-2xl / rounded-3xl on everything | Replace with `border-radius: 3–4px` |
| Radial gradient backgrounds on `:root` | Replace with dark-mode-only subtle copper warmth (see tokens above) |

---

## Files in This Package

| File | Purpose |
|---|---|
| `dano-systems.html` | Full hi-fi design reference — single scrolling page prototype with real content |
| `graph_svg.py` | Python script to generate context map SVGs from graph JSON in the Dano design language |
| `README.md` | This document |

---

## Notes

- The contact form endpoint in the prototype points to `/api/contact` — this matches the existing Resend-backed route. Update the `CONTACT_TO_EMAIL` env var to the team inbox before going live.
- The EPUB download link in the reader footer should point to `/api/epub/[slug]?lang=[lang]` — the existing endpoint.
- The `graph_svg.py` script should be run as part of the content pipeline (after `pnpm export:content`) to regenerate the context map SVG for each book. Commit the SVG outputs as static assets.
- Three books are shown in the library: only Metamorphosis has full data. The other two cards are placeholders — wire them up once their generated bundles exist.
- The دانو etymology in the About section should be verified with the team before launch.
