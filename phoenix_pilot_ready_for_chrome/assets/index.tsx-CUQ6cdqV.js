import{r as l,j as t,c as le,R as de}from"./client-D7f9BLy3.js";import{a as K,b as pe,c as ue}from"./storage-D9U355wy.js";const j="__phoenix_defaults__";function F(e){return(e||"").trim().toLowerCase().replace(/\s+/g," ").slice(0,160)}function ge(e){const n=typeof window<"u"?window.location.href.split(/[?#]/)[0]:"";return["linkedin-dm",F(e.participantName),F(e.participantHeadline),F(n)].join("|")}function Q(){var e;try{return!!((e=chrome==null?void 0:chrome.runtime)!=null&&e.id)}catch{return!1}}async function q(e){if(!Q())return{success:!1,error:"Extension was updated. Please refresh the page."};try{return await chrome.runtime.sendMessage(e)}catch(n){if(n instanceof Error&&(n.message.includes("Extension context invalidated")||n.message.includes("Receiving end does not exist")))return{success:!1,error:"Extension was updated. Please refresh the page."};throw n}}function me({conversationContext:e,isScanning:n=!1,onClose:i,onInsertReply:r}){const[c,p]=l.useState(""),[f,x]=l.useState(!1),[u,g]=l.useState(!0),[w,I]=l.useState([]),[d,k]=l.useState(""),[H,L]=l.useState([]),[T,m]=l.useState(null),[O,W]=l.useState(null),[P,C]=l.useState(""),[z,Y]=l.useState(!1),[A,D]=l.useState(""),E=l.useRef(null),X=l.useRef(null),h=l.useRef({isDragging:!1,startX:0,startY:0,initialX:0,initialY:0}),ne=!n&&!u&&!!e&&e.messages.length>0&&!!d;l.useEffect(()=>{$()},[]),l.useEffect(()=>{const s=X.current;if(!s)return;const a=y=>{if(!y.target.closest(".panel-header"))return;h.current.isDragging=!0,h.current.startX=y.clientX,h.current.startY=y.clientY;const R=s.getBoundingClientRect();h.current.initialX=R.left,h.current.initialY=R.top,s.style.transition="none"},o=y=>{if(!h.current.isDragging)return;const U=y.clientX-h.current.startX,R=y.clientY-h.current.startY;s.style.right="auto",s.style.left=`${h.current.initialX+U}px`,s.style.top=`${h.current.initialY+R}px`},M=()=>{h.current.isDragging=!1,s.style.transition=""};return s.addEventListener("mousedown",a),document.addEventListener("mousemove",o),document.addEventListener("mouseup",M),()=>{s.removeEventListener("mousedown",a),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",M)}},[]);const $=async()=>{var o;g(!0),m(null);const s=await q({type:"LIST_SESSIONS"}),a=s.sessions||[];I(a),s.success?(o=s.settings)!=null&&o.phoenixSessionId&&a.some(M=>{var y;return M.id===((y=s.settings)==null?void 0:y.phoenixSessionId)})?k(s.settings.phoenixSessionId):k(j):(k(""),m(s.error||"Log in to Phoenix, then reopen this panel or refresh sessions.")),g(!1)},se=async s=>{if(k(s),C(""),s===j){await K("","");return}const a=w.find(o=>o.id===s);await K(s,(a==null?void 0:a.display_name)||"")},ie=()=>{const s=E.current;s&&(s.style.height="auto",s.style.height=`${Math.min(s.scrollHeight,120)}px`)},oe=async()=>{if(!e){m("No conversation context available.");return}if(!d){m("Select a Phoenix session or use Phoenix defaults.");return}x(!0),m(null),L([]),C("");try{const s=d===j?ge(e):void 0,a=s?await pe(s):void 0,o=await q({type:"GENERATE_MESSAGES",payload:{conversationContext:e,sessionId:d===j?void 0:d,useTemporarySession:d===j,temporarySessionKey:s,previousTemporarySessionId:a||void 0,userThoughts:c.trim()||void 0}});o.success&&o.replies?(L(o.replies),C(o.sessionId||(d===j?"":d)),s&&o.sessionId&&await ue(s,o.sessionId)):m(o.error||"Failed to generate replies.")}catch(s){m(s instanceof Error?s.message:"An unexpected error occurred.")}finally{x(!1)}},re=async s=>{const a=s.trim();if(a){if(!P){m("Generate a reply before refining it.");return}Y(!0),m(null);try{const o=await q({type:"REFINE_MESSAGE_REPLY",payload:{sessionId:P,instruction:a}});o.success&&o.replies?(L(o.replies),C(o.sessionId||P)):m(o.error||"Failed to refine reply.")}catch(o){m(o instanceof Error?o.message:"An unexpected error occurred.")}finally{Y(!1)}}},ae=async(s,a)=>{try{await navigator.clipboard.writeText(s),W(a),setTimeout(()=>W(null),2e3)}catch(o){console.error("Copy failed:",o)}},ce=()=>{Q()?chrome.runtime.sendMessage({type:"OPEN_OPTIONS"}):m("Extension was updated. Please refresh the page.")};return t.jsxs("div",{className:"panel messaging-panel",ref:X,children:[t.jsxs("div",{className:"panel-header",children:[t.jsxs("div",{className:"panel-title",children:[t.jsx("div",{className:"panel-icon messaging",children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),t.jsx("span",{children:"Conversation Co-pilot"})]}),t.jsx("button",{className:"close-btn",onClick:i,children:t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),t.jsx("div",{className:"messaging-context",children:n?t.jsxs("div",{className:"context-scanning",children:[t.jsx("div",{className:"spinner-small"}),t.jsx("span",{children:"Analyzing conversation..."})]}):e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"context-participant",children:[t.jsx("span",{className:"context-label",children:"Chatting with:"}),t.jsx("span",{className:"context-value",children:e.participantName})]}),e.participantHeadline&&t.jsx("div",{className:"context-headline",children:e.participantHeadline}),t.jsxs("div",{className:"context-stats",children:[t.jsxs("span",{className:"stat",children:[e.messages.length," messages"]}),t.jsxs("span",{className:"stat",children:[t.jsx("span",{className:`sentiment-dot ${e.sentiment}`}),e.sentiment]})]})]}):t.jsx("div",{className:"context-empty",children:"Open a conversation to get started"})}),t.jsxs("div",{className:"panel-content",children:[t.jsxs("div",{className:"section",children:[t.jsx("div",{className:"section-label",children:"Phoenix Context"}),t.jsxs("div",{className:"session-row",children:[t.jsxs("select",{className:"tone-select",value:d,onChange:s=>se(s.target.value),disabled:u,children:[t.jsx("option",{value:"",children:u?"Loading sessions...":"Select context"}),t.jsx("option",{value:j,children:"No session - use Phoenix defaults"}),w.map(s=>t.jsx("option",{value:s.id,children:s.display_name},s.id))]}),t.jsx("button",{className:"action-btn",onClick:$,disabled:u,title:"Refresh sessions",children:u?t.jsx("div",{className:"spinner-small"}):"Refresh"})]}),T&&w.length===0&&!u&&t.jsx("button",{className:"settings-btn inline",onClick:ce,children:"Open Phoenix Login"})]}),t.jsxs("div",{className:"section",children:[t.jsxs("div",{className:"section-label",children:["Your goal for this reply ",t.jsx("span",{className:"optional-label",children:"(optional)"})]}),t.jsxs("div",{className:"thoughts-input-wrapper",children:[t.jsx("textarea",{ref:E,className:"thoughts-input",value:c,onChange:s=>{p(s.target.value),ie()},placeholder:"Ask for a 20-min call, thank them for the intro, schedule next steps...",rows:2}),c&&t.jsx("button",{className:"clear-thoughts-btn",onClick:()=>{p(""),E.current&&(E.current.style.height="auto")},title:"Clear",children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),t.jsx("div",{className:"section",children:t.jsx("button",{className:"generate-btn",onClick:oe,disabled:!ne||f,children:f?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"spinner"}),"Crafting Reply..."]}):e?d?"Suggest Reply":"Select Context":"Open a Conversation"})}),f&&t.jsx("div",{className:"shimmer-container",children:t.jsxs("div",{className:"shimmer-card",children:[t.jsx("div",{className:"shimmer-line long"}),t.jsx("div",{className:"shimmer-line short"})]})}),T&&t.jsxs("div",{className:"error-message",children:[t.jsxs("svg",{className:"error-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),t.jsx("span",{children:T})]}),H.length>0&&!f&&t.jsxs("div",{className:"section",children:[t.jsx("div",{className:"section-label",children:"Suggested Reply"}),t.jsx("div",{className:"results",children:H.map((s,a)=>t.jsxs("div",{className:"comment-card",children:[t.jsx("div",{className:"recommendation-tag",children:s.recommendationTag}),t.jsx("div",{className:"comment-text",children:s.text}),t.jsxs("div",{className:"comment-actions",children:[t.jsx("button",{className:`action-btn ${O===a?"copied":""}`,onClick:()=>ae(s.text,a),title:"Copy to clipboard",children:O===a?"Copied":"Copy"}),t.jsx("button",{className:"insert-btn",onClick:()=>r(s.text),title:"Insert into message box",children:"Insert"})]}),t.jsx("div",{className:"refine-panel",children:t.jsxs("div",{className:"refine-custom-row",children:[t.jsx("input",{className:"refine-input",value:A,onChange:o=>D(o.target.value),placeholder:"Custom refinement...",disabled:z}),t.jsx("button",{className:"action-btn",disabled:z||!A.trim(),onClick:()=>{re(A),D("")},children:z?t.jsx("div",{className:"spinner-small"}):"Refine"})]})})]},a))})]})]}),t.jsx("div",{className:"panel-footer",children:t.jsx("span",{children:"Phoenix Pilot - AI job search assistant for LinkedIn"})})]})}const v={messageItem:[".msg-s-message-list__event",".msg-s-event-listitem",'[class*="msg-s-event-listitem"]'],messageContent:[".msg-s-event-listitem__body",".msg-s-message-group__content",'[class*="msg-s-event-listitem__body"]',"p.msg-s-event-listitem__body"],messageTimestamp:[".msg-s-message-list__time-heading",".msg-s-message-group__timestamp","time"],participantName:[".msg-overlay-bubble-header__title",".msg-thread__link-to-profile",".msg-entity-lockup__entity-title",'[class*="msg-overlay-bubble-header__title"]',"h2.msg-entity-lockup__entity-title"],participantHeadline:[".msg-entity-lockup__entity-subtitle",".msg-overlay-bubble-header__subtitle",'[class*="msg-entity-lockup__entity-subtitle"]'],messageInput:[".msg-form__contenteditable",".msg-form__message-texteditor",'[contenteditable="true"][role="textbox"]',"div.msg-form__contenteditable"],messageForm:[".msg-form__msg-content-container",".msg-form",'[class*="msg-form"]'],myMessageIndicator:[".msg-s-message-group--selfsend",'[class*="selfsend"]']};function N(e,n){for(const i of n){const r=e.querySelector(i);if(r)return r}return null}function fe(e,n){for(const i of n){const r=e.querySelectorAll(i);if(r.length>0)return Array.from(r)}return[]}function _(){return!!(window.location.pathname.includes("/messaging")||window!==window.top&&!!document.querySelector('.msg-form, .msg-form__contenteditable, [class*="msg-form"], .msg-overlay-bubble-header'))}function he(){const e=document.querySelector(".global-nav__me-photo, .feed-identity-module__actor-meta"),n=e==null?void 0:e.getAttribute("alt");if(n)return n;const i=document.querySelector(".global-nav__me .t-14");return i!=null&&i.textContent?i.textContent.trim():"Me"}function Z(){var i,r;const e=N(document,v.participantName),n=N(document,v.participantHeadline);return{name:((i=e==null?void 0:e.textContent)==null?void 0:i.trim())||"Unknown",headline:((r=n==null?void 0:n.textContent)==null?void 0:r.trim())||void 0}}function xe(e){const n=e.closest(".msg-s-message-group");if(n){for(const i of v.myMessageIndicator)if(n.matches(i)||n.querySelector(i))return!0}for(const i of v.myMessageIndicator)if(e.matches(i)||e.closest(i))return!0;return!1}function be(e=10){var f,x;const n=[],i=he(),r=Z(),p=fe(document,v.messageItem).slice(-e);for(const u of p){const g=N(u,v.messageContent),w=(f=g==null?void 0:g.textContent)==null?void 0:f.trim();if(!w||w.length<2)continue;const I=xe(u),d=N(u,v.messageTimestamp),k=(x=d==null?void 0:d.textContent)==null?void 0:x.trim();n.push({sender:I?"me":"other",senderName:I?i:r.name,content:w,timestamp:k})}return n}function ye(e){if(e.length===0)return"neutral";const i=e.slice(-5).map(g=>g.content.toLowerCase()).join(" "),c=["great","awesome","thanks","thank you","excellent","love","excited","looking forward","happy","pleased"].some(g=>i.includes(g)),f=["price","cost","budget","deal","offer","proposal","terms","negotiate","discount","rate"].some(g=>i.includes(g)),x=e[e.length-1],u=x.sender==="me";return x.content.length<20,f?"negotiating":c?"positive":u&&e.length>3?"cold":"neutral"}function ve(e){if(e.length===0)return"General conversation";const n=e.map(r=>r.content).join(" ").toLowerCase(),i=[{pattern:/recruiter|talent|hiring|role|position|opportunity/i,topic:"Recruiter outreach"},{pattern:/informational|your experience|career path/i,topic:"Informational interview"},{pattern:/thank you|thanks for|great speaking/i,topic:"Post-interview follow-up"},{pattern:/application|applied|interview|screening/i,topic:"Application follow-up"},{pattern:/follow.?up|checking in|touch base/i,topic:"Follow-up"},{pattern:/connect|mutual|introduction/i,topic:"Networking connection"},{pattern:/meeting|call|schedule|calendar|zoom|coffee/i,topic:"Scheduling a meeting"},{pattern:/question|help|advice|recommend/i,topic:"Seeking advice"}];for(const{pattern:r,topic:c}of i)if(r.test(n))return c;return"Professional discussion"}function we(e){const n=e.map(i=>i.content).join(" ").toLowerCase();return/recruiter|talent|hiring|role|position|opportunity/.test(n)?"recruiter-inbound":/informational|your experience|career path/.test(n)?"informational":/thank you|thanks for|great speaking/.test(n)?"thank-you":/follow.?up|checking in|touch base/.test(n)?"follow-up":/connect|mutual|introduction/.test(n)?"connection-request":/cold|reaching out|came across your profile/.test(n)?"cold-outreach":"general"}async function je(){try{if(!_())return console.log("[LinkedIn AI] Not on messaging page"),null;const e=Z(),n=be(10);if(n.length===0)return console.log("[LinkedIn AI] No messages found in conversation"),null;const i=n[n.length-1],r=ve(n),c=ye(n),p=we(n),f=/recruiter|talent|hiring/i.test(`${e.name} ${e.headline||""} ${n.map(x=>x.content).join(" ")}`);return console.log("[LinkedIn AI] Scraped conversation:",{participant:e.name,messageCount:n.length,topic:r,sentiment:c,lastMessageFrom:i.sender}),{participantName:e.name,participantHeadline:e.headline,messages:n,topic:r,sentiment:c,lastMessageFrom:i.sender,detectedIntent:p,isRecruiter:f}}catch(e){return console.error("[LinkedIn AI] Error scraping conversation:",e),null}}function ke(){return N(document,v.messageInput)}function Se(){return N(document,v.messageForm)}function Ne(e){const n=ke();if(!n)return console.error("[LinkedIn AI] Message input not found"),!1;try{n.focus(),n.innerHTML="";const i=document.createElement("p");return i.textContent=e,n.appendChild(i),n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0})),setTimeout(()=>{n.innerText=e,n.dispatchEvent(new Event("input",{bubbles:!0}))},50),!0}catch(i){return console.error("[LinkedIn AI] Error injecting text:",i),!1}}const _e=`
  .lai-messaging-ai-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(124, 58, 237, 0.3);
    margin: 0 4px;
    flex-shrink: 0;
    vertical-align: middle;
    align-self: center;
  }

  .lai-messaging-ai-button:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 10px rgba(124, 58, 237, 0.4);
    background: linear-gradient(135deg, #6d28d9 0%, #9333ea 100%);
  }

  .lai-messaging-ai-button svg {
    width: 16px;
    height: 16px;
    color: white;
  }
`;let S=null,b=null;function Ie(){if(document.getElementById("lai-content-styles"))return;const e=document.createElement("style");e.id="lai-content-styles",e.textContent=_e,document.head.appendChild(e)}function ee(){if(b)return b;b=document.createElement("div"),b.id="lai-panel-container";const e=b.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=Me(),e.appendChild(n);const i=document.createElement("div");return i.id="lai-panel-mount",e.appendChild(i),document.body.appendChild(b),b}function V(e,n){const c=ee().shadowRoot.getElementById("lai-panel-mount");S||(S=le.createRoot(c)),S.render(t.jsx(de.StrictMode,{children:t.jsx(me,{conversationContext:e,isScanning:n,onClose:te,onInsertReply:Ce})}))}function Ce(e){Ne(e)&&te()}function Ee(){ee(),V(null,!0),(async()=>{await new Promise(n=>setTimeout(n,200));const e=await je();V(e,!1)})()}function te(){S&&(S.unmount(),S=null),b&&(b.remove(),b=null)}function G(){if(!_()||document.querySelector(".lai-messaging-ai-button"))return;const e=[".msg-form__left-actions",".msg-form__right-actions",".msg-form__footer",".msg-form__content-container",".msg-form"];let n=null;for(const p of e)if(n=document.querySelector(p),n)break;if(!n&&!Se())return;const i=document.createElement("button");i.className="lai-messaging-ai-button",i.type="button",i.title="Phoenix reply assistant",i.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  `,i.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),Ee()});const r=document.querySelector(".msg-form__left-actions");if(r){r.appendChild(i);return}const c=document.querySelector(".msg-form__right-actions");if(c){c.insertBefore(i,c.firstChild);return}n==null||n.appendChild(i)}function B(){try{return window!==window.top}catch{return!0}}function J(){Ie(),!B()&&_()&&G();let e=null;const n=()=>{e&&clearTimeout(e),e=setTimeout(()=>{!B()&&_()&&G()},300)};new MutationObserver(n).observe(document.body,{childList:!0,subtree:!0}),setInterval(()=>{!B()&&_()&&G()},2e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",J):J();function Me(){return`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .panel {
      position: fixed;
      top: 80px;
      right: 20px;
      width: 400px;
      max-height: calc(100vh - 100px);
      background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
      border-radius: 16px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1);
      font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
      color: #fff;
      z-index: 999999;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.02);
      cursor: move;
      flex-shrink: 0;
    }

    .panel-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 14px;
    }

    .panel-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .panel-icon.messaging {
      background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      color: #9ca3af;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .close-btn:hover {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .messaging-context {
      padding: 12px 16px;
      background: rgba(124, 58, 237, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .context-scanning,
    .context-participant,
    .context-stats .stat {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .context-scanning {
      color: #a78bfa;
      font-size: 13px;
    }

    .context-label {
      font-size: 11px;
      color: #9ca3af;
    }

    .context-value {
      font-size: 14px;
      font-weight: 600;
      color: #f3f4f6;
    }

    .context-headline {
      font-size: 12px;
      color: #9ca3af;
      margin: 4px 0 8px;
    }

    .context-stats {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }

    .context-stats .stat {
      font-size: 11px;
      color: #9ca3af;
    }

    .sentiment-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #6b7280;
    }

    .sentiment-dot.positive { background: #22c55e; }
    .sentiment-dot.neutral { background: #eab308; }
    .sentiment-dot.negotiating { background: #f97316; }
    .sentiment-dot.cold { background: #6b7280; }

    .context-empty {
      padding: 12px;
      color: #9ca3af;
      font-size: 13px;
      text-align: center;
    }

    .panel-content {
      padding: 20px;
      overflow-y: auto;
      flex: 1;
    }

    .section {
      margin-bottom: 20px;
    }

    .section-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #9ca3af;
      margin-bottom: 8px;
    }

    .session-row {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
      align-items: center;
    }

    .thoughts-input-wrapper {
      position: relative;
    }

    .thoughts-input {
      width: 100%;
      padding: 10px 32px 10px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      color: #fff;
      font-size: 13px;
      font-family: inherit;
      line-height: 1.5;
      resize: none;
      min-height: 60px;
      max-height: 120px;
    }

    .thoughts-input::placeholder {
      color: #6b7280;
      font-size: 12px;
    }

    .thoughts-input:focus,
    .tone-select:focus {
      outline: none;
      border-color: #0a66c2;
      box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.2);
    }

    .clear-thoughts-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: none;
      background: rgba(255, 255, 255, 0.1);
      color: #9ca3af;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .optional-label {
      font-weight: 400;
      color: #6b7280;
      font-size: 10px;
    }

    .tone-select {
      width: 100%;
      padding: 10px 14px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
    }

    .tone-select option {
      background: #1a1a2e;
      color: #fff;
    }

    .generate-btn {
      width: 100%;
      padding: 12px 20px;
      background: linear-gradient(135deg, #0a66c2 0%, #0077b5 100%);
      border: none;
      border-radius: 10px;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .generate-btn:disabled,
    .action-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .spinner,
    .spinner-small {
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    .spinner {
      width: 18px;
      height: 18px;
    }

    .spinner-small {
      width: 12px;
      height: 12px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .shimmer-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .shimmer-line {
      height: 12px;
      border-radius: 6px;
      background: linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05));
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    .shimmer-line.long { width: 100%; }
    .shimmer-line.short { width: 50%; }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .results {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .comment-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 14px;
    }

    .recommendation-tag {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      color: #93c5fd;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      padding: 3px 8px;
      background: rgba(59, 130, 246, 0.15);
      border-radius: 4px;
    }

    .comment-text {
      font-size: 13px;
      line-height: 1.6;
      color: #e5e7eb;
      margin-bottom: 12px;
      white-space: pre-wrap;
    }

    .comment-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .refine-panel {
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .refine-custom-row {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }

    .refine-input {
      flex: 1;
      min-width: 160px;
      padding: 8px 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: #fff;
      font-size: 12px;
      font-family: inherit;
    }

    .refine-input::placeholder {
      color: #6b7280;
    }

    .refine-input:focus {
      outline: none;
      border-color: #0a66c2;
      box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.2);
    }

    .action-btn,
    .settings-btn,
    .insert-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 10px;
      border-radius: 6px;
      color: #fff;
      font-size: 11px;
      cursor: pointer;
    }

    .action-btn,
    .settings-btn {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: #d1d5db;
    }

    .settings-btn.inline {
      margin-top: 10px;
      width: 100%;
    }

    .action-btn.copied {
      background: rgba(34, 197, 94, 0.2);
      border-color: rgba(34, 197, 94, 0.3);
      color: #22c55e;
    }

    .insert-btn {
      border: none;
      background: linear-gradient(135deg, #0a66c2 0%, #0077b5 100%);
      font-weight: 500;
    }

    .error-message {
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 10px;
      padding: 12px;
      color: #fca5a5;
      font-size: 13px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 16px;
    }

    .error-icon {
      flex-shrink: 0;
      color: #ef4444;
    }

    .panel-footer {
      padding: 12px 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.2);
      font-size: 11px;
      color: #6b7280;
      text-align: center;
      line-height: 1.5;
      flex-shrink: 0;
    }
  `}
