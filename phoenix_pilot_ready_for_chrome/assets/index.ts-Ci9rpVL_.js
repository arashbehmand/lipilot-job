import{m as b,f as N,g as d,a as P,h as A}from"./storage-C12OAd8Y.js";import{c as w,g as O,b as C}from"./phoenix-client-ColsjAQ5.js";b();N();chrome.runtime.onMessage.addListener((t,e,i)=>t.type==="GENERATE_COMMENTS"?(k(t.payload).then(i).catch(n=>{i({success:!1,error:n.message||"Failed to generate comments"})}),!0):t.type==="GENERATE_MESSAGES"?($(t.payload).then(i).catch(n=>{i({success:!1,error:n.message||"Failed to generate message replies"})}),!0):t.type==="REFINE_COMMENT"?(L(t.payload).then(i).catch(n=>{i({success:!1,error:n.message||"Failed to refine comment"})}),!0):t.type==="CHECK_CONFIG"?(M().then(i).catch(n=>{i({success:!1,error:n.message||"Failed to check configuration"})}),!0):t.type==="STREAM_UPDATE_PERSONA"?(R(t.payload).then(i).catch(n=>{i({success:!1,error:n.message||"Failed to update persona"})}),!0):t.type==="OPEN_OPTIONS"?(chrome.runtime.openOptionsPage(),!1):t.type==="generate-post"?t.data?(G(t.data).then(i).catch(n=>{i({success:!1,error:n.message||"Failed to generate post"})}),!0):(i({success:!1,error:"Invalid request: missing data"}),!0):!1);async function k(t){var S;const{postData:e,tone:i,userThoughts:n,enableImageAnalysis:r,jobSearchContext:s}=t,a=await d();if(!a.apiKey)return{success:!1,error:"API key not configured. Please add it in the extension settings (click the gear icon)."};const o=a.persona,l=a.enableEmojis,c=a.languageLevel,u=r&&e.imageUrl,h=await P(),p=B(o,((S=e.threadContext)==null?void 0:S.mode)==="reply",l,c,n,!!u,s,h.map(m=>m.text)),E=Y(e,i,n,s);let f,y;if(u&&e.imageUrl){const m=await D(e.imageUrl);m&&(f=m.base64,y=m.mimeType)}const g=await w(a.llmProvider,a.apiKey,a.model,{systemPrompt:p,userPrompt:E,imageBase64:f,imageMimeType:y,jsonMode:!0,temperature:.8,maxTokens:1500});if(!g.success)return{success:!1,error:g.error};const v=j(g.content);if(v.length===0){const m=F(g.content);return m.length===0?{success:!1,error:"Could not parse generated comments."}:{success:!0,comments:m}}return{success:!0,scoredComments:v,comments:v.map(m=>m.text)}}async function L(t){const{comment:e,refinementType:i}=t,n=await d();if(!n.apiKey)return{success:!1,error:"API key not configured. Please add it in the extension settings."};const r=`You are a professional LinkedIn comment editor. You edit comments while keeping them natural and human-sounding.
RULES:
- Respond with ONLY the edited comment text, nothing else
- Never use em-dashes (—). Use commas, semicolons, or " - " instead
- Never wrap the output in quotation marks
- Keep the same language as the original comment
- Preserve the same tone and meaning`,s=i==="concise"?`Make this LinkedIn comment shorter and more concise. Cut filler words, tighten the prose. Keep the core message and impact.

Comment to shorten:
${e}

Write ONLY the shortened comment:`:`Rephrase this LinkedIn comment using different words. Keep the same meaning, tone, and length. Make it sound fresh.

Comment to rephrase:
${e}

Write ONLY the rephrased comment:`;try{const a=await w(n.llmProvider,n.apiKey,n.model,{systemPrompt:r,userPrompt:s,jsonMode:!1,temperature:.7,maxTokens:500});if(!a.success)return{success:!1,error:a.error};let o=a.content.trim();return o=o.replace(/^["'"'\u201C\u201D]+|["'"'\u201C\u201D]+$/g,""),o=o.replace(/\u2014/g," - "),o=o.trim(),!o||o.length<5?{success:!1,error:"Refinement returned empty result. Please try again."}:{success:!0,comment:o}}catch(a){return console.error("[Phoenix Pilot] Refine error:",a),{success:!1,error:a instanceof Error?a.message:"Failed to refine comment"}}}async function M(){var r,s,a,o,l;const t=await d(),e=!!((r=t.apiKey)!=null&&r.trim()),i=!!((s=t.persona)!=null&&s.trim()),n=!!((a=t.phoenixBaseUrl)!=null&&a.trim()&&((o=t.phoenixToken)!=null&&o.trim())&&((l=t.phoenixSessionId)!=null&&l.trim()));if(!e||!i){const c=[];return i||c.push("persona"),e||c.push("API key"),{success:!1,error:`Please complete your setup in settings: ${c.join(", ")}`,settings:t,configStatus:{commentsConfigured:!1,phoenixConfigured:n}}}return{success:!0,settings:{...t,phoenixSessionName:n?t.phoenixSessionName:""},configStatus:{commentsConfigured:!0,phoenixConfigured:n}}}async function R(t){try{const{originalAiSuggestion:e,finalUserVersion:i}=t;if(U(e,i)>.95)return{success:!0};const r=await d();if(!r.apiKey)return{success:!0};const s=await w(r.llmProvider,r.apiKey,r.model,{systemPrompt:"You analyze how a user edits AI-generated text to understand their writing preferences.",userPrompt:`Compare these two texts and extract 1-3 concise observations about the user's writing preferences.

Original AI suggestion: "${e}"
User's final version: "${i}"

Examples of good observations: "Prefers shorter comments", "Removes technical jargon", "Adds personal anecdotes", "Uses more direct language"

Respond as JSON: { "observations": ["observation1", "observation2"] }`,jsonMode:!0,temperature:.3,maxTokens:200});if(s.success)try{const a=JSON.parse(s.content);if(a.observations&&Array.isArray(a.observations))for(const o of a.observations)typeof o=="string"&&o.length>3&&await A(o)}catch{}return{success:!0}}catch(e){return console.error("[Phoenix Pilot] Persona learning error:",e),{success:!0}}}function U(t,e){const i=t.toLowerCase().split(/\s+/),n=e.toLowerCase().split(/\s+/),r=new Set(i),s=new Set(n),a=new Set([...r].filter(l=>s.has(l))),o=new Set([...r,...s]);return o.size===0?1:a.size/o.size}async function $(t){const{conversationContext:e,userThoughts:i}=t,n=await d();if(!n.phoenixBaseUrl||!n.phoenixToken||!n.phoenixSessionId)return{success:!1,error:"Phoenix session not configured. Open Settings (gear icon) to connect."};const r=await O(n.phoenixBaseUrl,n.phoenixToken,n.phoenixSessionId,{username:e.participantName,headline:e.participantHeadline,messagesText:C(e)},i);return r.success?{success:!0,replies:[{text:r.reply,recommendationTag:"Most Authentic"}]}:{success:!1,error:r.error}}async function G(t){const e=await d();if(!e.apiKey)return{success:!1,error:"API key not configured. Please add it in the extension settings."};const i=`You are an expert LinkedIn content strategist. Generate a compelling LinkedIn post based on the user's topic and tone.

RULES:
1. Write in the first person as the user
2. Use line breaks for readability (LinkedIn format)
3. Include 3-5 relevant hashtags at the end
4. Keep it between 150-300 words
5. NO markdown formatting (no **, no ##, no bullet points with -)
6. Use plain text with line breaks
7. Make it engaging and shareable
8. Start with a hook that grabs attention
9. ABSOLUTELY NO em-dashes (—) or en-dashes (–). Use commas, semicolons, or " - " instead
10. Match the persona's language and style`,n={professional:"Write in a polished, executive tone. Data-driven, strategic insights.",raw:"Write authentically and vulnerably. Share real experiences, lessons learned. Be genuine.",bold:"Write with strong opinions. Take a stance. Be provocative but respectful."},r=`Generate a LinkedIn post about: ${t.topic}

Tone: ${t.tone}
${n[t.tone]||""}

${t.keyPoints?`Key points to include:
${t.keyPoints}`:""}

Write the post directly. No preamble, no "Here's your post:" prefix.`,s=await w(e.llmProvider,e.apiKey,e.model,{systemPrompt:i,userPrompt:r,jsonMode:!1,temperature:.8,maxTokens:1e3});if(!s.success)return{success:!1,error:s.error};let a=s.content.trim();return a=a.replace(/\*\*/g,""),a=a.replace(/^#+\s*/gm,""),a=a.replace(/^[-*]\s/gm,""),a=a.replace(/\u2014/g," - "),a=a.replace(/\u2013/g," - "),{success:!0,data:{post:a,originalPost:s.content.trim()}}}async function D(t){try{const i=await(await fetch(t)).blob(),n=i.type||"image/jpeg";return new Promise(r=>{const s=new FileReader;s.onloadend=()=>{const o=s.result.split(",")[1];r({base64:o,mimeType:n})},s.onerror=()=>r(void 0),s.readAsDataURL(i)})}catch(e){console.error("[Phoenix Pilot] Error converting image to base64:",e);return}}function B(t,e=!1,i=!1,n="fluent",r,s=!1,a,o){const l="You are a seasoned professional who writes high-value, thought-provoking comments on LinkedIn.",c=i?"Use 1-2 relevant emojis sparingly to add warmth and make the tone friendlier. Place emojis naturally, not at the beginning.":"Do NOT use any emojis. Keep the text strictly professional and text-only.",u=s?`

IMAGE ANALYSIS:
You have been provided with an image from the LinkedIn post. Use this visual information to:
1. Reference specific details from the image (charts, graphs, screenshots, UI elements, text in images)
2. Make your comment more specific and insightful based on what you see
3. If the image contains data or statistics, mention them to show you've analyzed the content
4. If it's a screenshot or UI mockup, comment on specific design or feature elements
5. Connect the visual content with the text content for a more comprehensive response`:"",h=a?`

JOB SEEKER CONTEXT:
The commenter's goal: "${a}"
If the post overlaps with their target areas, let expertise speak naturally.
   Never say "I'm looking for a job."`:"",p={native:`LANGUAGE LEVEL: Native/Bilingual
- Use sophisticated vocabulary, idioms, and nuanced expressions
- Complex sentence structures are fine
- Feel free to use industry jargon and advanced terminology
- Natural flow with varied rhythm and pacing`,fluent:`LANGUAGE LEVEL: Fluent/Advanced (B2-C1)
- Use rich vocabulary but avoid obscure words
- Natural sentence flow with some complexity
- Occasional advanced terms are okay, but not overly academic
- Sound professional but accessible`,intermediate:`LANGUAGE LEVEL: Intermediate (B1-B2)
- Use clear, straightforward vocabulary
- Prefer simpler sentence structures
- Avoid idioms, slang, and complex expressions
- Short to medium sentences (15-20 words max)
- Focus on clarity over sophistication
- Common words preferred over fancy alternatives`,basic:`LANGUAGE LEVEL: Basic (A2-B1)
- Use simple, everyday words only
- Very short sentences (8-12 words)
- No idioms, no metaphors, no complex grammar
- Subject-verb-object structure preferred
- One idea per sentence
- Write like explaining to someone learning the language`},E=p[n]||p.fluent,f=r?`

USER'S KEY POINT (PRIORITY):
The user wants to make this specific point or angle in their comment:
"${r}"

CRITICAL INSTRUCTIONS FOR USER'S KEY POINT:
1. You MUST incorporate this point naturally into ALL 3 comment variations
2. TRANSLATE the user's point to match the language of the original post/conversation - do NOT copy it verbatim if it's in a different language
3. This is the user's main intention - weave it organically into each response while maintaining the selected tone
4. Don't just append it; integrate it as the central thesis or key argument of the comment
5. The final comment must be entirely in the SAME language as the post being commented on`:"",y=o&&o.length>0?`

LEARNED USER PREFERENCES:
Based on past interactions, the user prefers:
${o.map(T=>`- ${T}`).join(`
`)}
Incorporate these preferences naturally into your comments.`:"";return`You are a skilled professional helping a job seeker build an authentic LinkedIn presence. Your mission is to craft high-value, professional comments that establish the commenter as thoughtful, credible, and worth replying to.${f}

${t?`The commenter's professional identity: "${t}"`:l}

CORE PRINCIPLES FOR HIGH-VALUE COMMENTS:

1. **Add Unique Perspective**: Share a fresh angle, contrarian view, or complementary insight that wasn't in the original post. Reference relevant industry trends, data points, or experiences.

2. **Demonstrate Expertise**: Use precise language and domain-specific knowledge. Avoid vague statements. Show you understand the nuances of the topic.

3. **Create Engagement Value**: Write comments that others will want to like or reply to. Provoke thought without being controversial. Ask questions that the author would genuinely want to answer.

4. **Sound Authentically Human**:
   - Vary sentence structure and length
   - Use natural transitions ("That said...", "What I've found...", "This reminds me of...")
   - Occasionally start with lowercase or use contractions
   - NO hashtags, NO exclamation marks overuse

5. **Be Concise but Substantive**: Aim for 2-3 impactful sentences. Every word should earn its place. Cut filler phrases like "I think that..." or "In my opinion..."

6. **Match the Conversation's Language**: Detect and respond in the SAME language as the post and existing comments (English, Spanish, French, German, etc.)

EMOJI POLICY:
${c}

${E}${u}${h}${y}`+`

STRICT FORMATTING RULES:
1. **ABSOLUTELY NO EM-DASHES (—)**: NEVER use the long dash character (—) anywhere in ANY comment. This is a hard rule with zero exceptions. Use a comma, semicolon, period, or " - " (hyphen with spaces) instead. Examples:
   - WRONG: "Great insight—this changes everything"
   - RIGHT: "Great insight, this changes everything"
   - RIGHT: "Great insight - this changes everything"
2. **NO Quotation Marks**: Do not wrap the entire comment in quotation marks. Write the comment as plain text.
3. **NO Leading Quotes**: Never start a comment with " or ' characters.
4. **Clean Output**: Each comment should be ready to paste directly - no formatting artifacts.
5. **NO En-Dashes (–)**: Also avoid en-dashes. Use " - " (hyphen with spaces) instead.`+`

DISCUSSION CONTEXT AWARENESS:
- Analyze any existing comments provided. If you see a consensus forming, you can either add a new perspective or build upon a specific point.
- Avoid repeating what others have already said. Look for gaps in the discussion.
- If multiple people are making similar points, acknowledge it subtly ("Building on what others have noted...") then add fresh value.`+(e?`

REPLY MODE - THREAD CONVERSATION:
- You are replying to a SPECIFIC person in a comment thread, not the original post directly.
- Address their point directly while staying aligned with the original post's topic.
- Be conversational and direct - you're having a dialogue with this person.
- You can agree, respectfully disagree, ask follow-up questions, or extend their thinking.
- Use their name naturally if appropriate ("@Name, that's interesting because...")
- Keep replies slightly shorter than top-level comments - 1-2 sentences is often ideal for thread replies.`:"")+`

AVOID AT ALL COSTS:
- Generic praise ("Great post!", "Love this!", "So true!")
- Obvious statements that add no value
- Self-promotion or pitching
- Corporate buzzword soup
- Starting with "I"
- Sycophantic or overly agreeable tone
- Repeating points already made by other commenters
- Em-dashes (—) - NEVER use this character, use commas or " - " instead
- En-dashes (–) - NEVER use this character either
- Wrapping comments in quotation marks

Generate exactly 3 DISTINCT comment variations with different approaches/angles.

SCORING & OUTPUT FORMAT:
You MUST respond with a valid JSON object. For each comment, score it on three dimensions (0-10):
- engagement: How likely to get likes, replies, and start discussions
- expertise: How much domain knowledge and professional credibility is shown
- authenticity: How natural, credible, and true-to-person the comment feels

Also assign ONE recommendation_tag from these options:
- "Best for Engagement" - most likely to get reactions
- "Most Insightful" - demonstrates deep expertise
- "Best for Getting a Reply" - creates authentic reply opportunities
- "Safe & Professional" - reliable, conservative choice
- "Most Creative" - unique, stands out
- "Thought-Provoking" - sparks discussion

Your response MUST be a JSON object with this exact structure:
{
  "comments": [
    {
      "text": "First comment here without any surrounding quotes",
      "scores": { "engagement": 8, "expertise": 7, "authenticity": 5 },
      "recommendation_tag": "Best for Engagement"
    },
    {
      "text": "Second comment here",
      "scores": { "engagement": 6, "expertise": 9, "authenticity": 4 },
      "recommendation_tag": "Most Insightful"
    },
    {
      "text": "Third comment here",
      "scores": { "engagement": 7, "expertise": 6, "authenticity": 8 },
      "recommendation_tag": "Best for Getting a Reply"
    }
  ]
}`}function Y(t,e,i,n){const{authorName:r,authorHeadline:s,postContent:a,threadContext:o}=t,l={professional:"Craft executive-level commentary. Use data-driven language, reference industry frameworks, and position insights as strategic observations. Think C-suite perspective.",funny:"Deploy wit and clever observations while maintaining professional credibility. Use unexpected analogies, gentle irony, or self-aware humor. Never force jokes - if humor doesn't fit naturally, lean intellectual instead.",question:'Ask thought-provoking questions that reveal deep understanding of the topic. Frame questions that the author would genuinely want to explore. Avoid yes/no questions - aim for "What if..." or "How might..." formats.',"agree-add-value":`Build on the post's thesis with a complementary case study, contrasting example, or "yes, and..." extension. Add a dimension the author didn't explore. Position as collaborative thought partnership.`};let c=`Generate 3 LinkedIn comment variations for this post:

POST AUTHOR: ${r}
${s?`AUTHOR HEADLINE: ${s}`:""}

POST CONTENT:
"""
${a}
"""`;o!=null&&o.existingComments&&o.existingComments.length>0&&(c+=`

EXISTING DISCUSSION (${o.existingComments.length} comments):
${o.existingComments.map((h,p)=>`${p+1}. ${h.authorName}${h.authorHeadline?` (${h.authorHeadline})`:""}: "${h.content}"`).join(`
`)}

IMPORTANT: Do NOT repeat points already made above. Add NEW value to the discussion.`),(o==null?void 0:o.mode)==="reply"&&o.parentComment&&(c+=`

REPLY MODE - You are replying to this specific comment:
REPLYING TO: ${o.parentComment.authorName}${o.parentComment.authorHeadline?` (${o.parentComment.authorHeadline})`:""}
THEIR COMMENT: "${o.parentComment.content}"

${o.threadParticipants.length>1?`Other participants in this thread: ${o.threadParticipants.filter(h=>{var p;return h!==((p=o.parentComment)==null?void 0:p.authorName)}).join(", ")}`:""}

Generate replies that directly engage with ${o.parentComment.authorName}'s point.`),c+=`

DESIRED TONE: ${e}
${l[e]||""}`,i&&(c+=`

USER'S KEY POINT TO INCLUDE:
"${i}"
IMPORTANT: Translate this point to match the post's language if needed, then weave it naturally into each comment variation. The entire comment must be in the same language as the original post.`),n&&(c+=`

JOB SEARCH CONTEXT:
"${n}"
IMPORTANT: If relevant, let the user's expertise and direction show naturally. Do not announce that they are looking for a job.`);let u=5;return c+=`

Remember to:
1. Detect the language of the conversation and write ALL comments in that SAME language
2. Make each comment variation distinct and unique
3. Keep the tone consistent with the request
4. Write naturally as if you're a real person engaging with the content`,(o==null?void 0:o.mode)==="reply"&&(c+=`
${u}. Address the specific person you are replying to`,u++),i&&(c+=`
${u}. PRIORITIZE integrating the user's key point above`,u++),n&&(c+=`
${u}. Subtly reflect the user's job search context through expertise, not need`),c}function j(t){try{const e=JSON.parse(t);if(!e.comments||!Array.isArray(e.comments))return[];const i=["Best for Engagement","Most Insightful","Best for Getting a Reply","Safe & Professional","Most Creative","Thought-Provoking"],n=e.comments.filter(r=>{if(!r||typeof r!="object")return!1;const s=r;return typeof s.text=="string"&&s.text.length>10}).map(r=>{const s=r.scores,a=r.recommendation_tag,o={engagement:I(s==null?void 0:s.engagement),expertise:I(s==null?void 0:s.expertise),authenticity:I((s==null?void 0:s.authenticity)??(s==null?void 0:s.conversion))},l=i.includes(a)?a:"Safe & Professional";return{text:x(r.text),scores:o,recommendationTag:l,isRecommended:!1}}).slice(0,3);if(n.length>0){const r=[...n].sort((a,o)=>o.scores.engagement-a.scores.engagement),s=n.findIndex(a=>a.text===r[0].text);s!==-1&&(n[s].isRecommended=!0)}return n}catch{return[]}}function I(t){if(typeof t=="number")return Math.max(0,Math.min(10,Math.round(t)));if(typeof t=="string"){const e=parseFloat(t);if(!isNaN(e))return Math.max(0,Math.min(10,Math.round(e)))}return 5}function F(t){const e=[],i=/COMMENT\s*\d+:\s*([\s\S]*?)(?=COMMENT\s*\d+:|$)/gi;let n;for(;(n=i.exec(t))!==null;){const r=n[1].trim();r&&r.length>10&&e.push(r)}if(e.length===0){const r=/(?:^|\n)\s*(?:\d+[\.\)]\s*)([\s\S]*?)(?=(?:^|\n)\s*\d+[\.\)]|$)/gm;for(;(n=r.exec(t))!==null;){const s=n[1].trim();s&&s.length>10&&e.push(s)}}if(e.length===0){const r=t.split(/\n\s*\n/).filter(s=>s.trim().length>10);e.push(...r.slice(0,3))}return e.slice(0,3).map(r=>x(r))}function x(t){let e=t.trim();return e=e.replace(/^["'"'\u201C\u201D\u2018\u2019]+|["'"'\u201C\u201D\u2018\u2019]+$/g,""),e=e.replace(/\u2014/g," - "),e=e.replace(/\u2013/g," - "),e=e.replace(/\s+/g," "),e=e.trim(),e}
