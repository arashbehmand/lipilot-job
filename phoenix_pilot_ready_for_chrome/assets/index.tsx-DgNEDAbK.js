import{r as l,j as t,c as le,R as de}from"./client-D7f9BLy3.js";import{a as K,b as pe,c as ue}from"./storage-D9U355wy.js";const w="__phoenix_defaults__";function T(e){return(e||"").trim().toLowerCase().replace(/\s+/g," ").slice(0,160)}function me(e){const n=typeof window<"u"?window.location.href.split(/[?#]/)[0]:"";return["linkedin-dm",T(e.participantName),T(e.participantHeadline),T(n)].join("|")}function Q(){var e;try{return!!((e=chrome==null?void 0:chrome.runtime)!=null&&e.id)}catch{return!1}}async function D(e){if(!Q())return{success:!1,error:"Extension was updated. Please refresh the page."};try{return await chrome.runtime.sendMessage(e)}catch(n){if(n instanceof Error&&(n.message.includes("Extension context invalidated")||n.message.includes("Receiving end does not exist")))return{success:!1,error:"Extension was updated. Please refresh the page."};throw n}}function ge({conversationContext:e,isScanning:n=!1,onClose:i,onInsertReply:r}){const[c,p]=l.useState(""),[h,x]=l.useState(!1),[u,m]=l.useState(!0),[F,S]=l.useState([]),[d,k]=l.useState(""),[G,M]=l.useState([]),[z,g]=l.useState(null),[H,O]=l.useState(null),[R,N]=l.useState(""),[L,W]=l.useState(!1),[P,Y]=l.useState(""),C=l.useRef(null),X=l.useRef(null),f=l.useRef({isDragging:!1,startX:0,startY:0,initialX:0,initialY:0}),ne=!n&&!u&&!!e&&e.messages.length>0&&!!d;l.useEffect(()=>{$()},[]),l.useEffect(()=>{const s=X.current;if(!s)return;const a=y=>{if(!y.target.closest(".panel-header"))return;f.current.isDragging=!0,f.current.startX=y.clientX,f.current.startY=y.clientY;const I=s.getBoundingClientRect();f.current.initialX=I.left,f.current.initialY=I.top,s.style.transition="none"},o=y=>{if(!f.current.isDragging)return;const U=y.clientX-f.current.startX,I=y.clientY-f.current.startY;s.style.right="auto",s.style.left=`${f.current.initialX+U}px`,s.style.top=`${f.current.initialY+I}px`},_=()=>{f.current.isDragging=!1,s.style.transition=""};return s.addEventListener("mousedown",a),document.addEventListener("mousemove",o),document.addEventListener("mouseup",_),()=>{s.removeEventListener("mousedown",a),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",_)}},[]);const $=async()=>{var o;m(!0),g(null);const s=await D({type:"LIST_SESSIONS"}),a=s.sessions||[];S(a),s.success?(o=s.settings)!=null&&o.phoenixSessionId&&a.some(_=>{var y;return _.id===((y=s.settings)==null?void 0:y.phoenixSessionId)})?k(s.settings.phoenixSessionId):k(w):(k(""),g(s.error||"Log in to Phoenix, then reopen this panel or refresh sessions.")),m(!1)},se=async s=>{if(k(s),N(""),s===w){await K("","");return}const a=F.find(o=>o.id===s);await K(s,(a==null?void 0:a.display_name)||"")},ie=()=>{const s=C.current;s&&(s.style.height="auto",s.style.height=`${Math.min(s.scrollHeight,120)}px`)},oe=async()=>{if(!e){g("No conversation context available.");return}if(!d){g("Select a Phoenix session or use Phoenix defaults.");return}x(!0),g(null),M([]),N("");try{const s=d===w?me(e):void 0,a=s?await pe(s):void 0,o=await D({type:"GENERATE_MESSAGES",payload:{conversationContext:e,sessionId:d===w?void 0:d,useTemporarySession:d===w,temporarySessionKey:s,previousTemporarySessionId:a||void 0,userThoughts:c.trim()||void 0}});o.success&&o.replies?(M(o.replies),N(o.sessionId||(d===w?"":d)),s&&o.sessionId&&await ue(s,o.sessionId)):g(o.error||"Failed to generate replies.")}catch(s){g(s instanceof Error?s.message:"An unexpected error occurred.")}finally{x(!1)}},re=async s=>{const a=s.trim();if(a){if(!R){g("Generate a reply before refining it.");return}W(!0),g(null);try{const o=await D({type:"REFINE_MESSAGE_REPLY",payload:{sessionId:R,instruction:a}});o.success&&o.replies?(M(o.replies),N(o.sessionId||R)):g(o.error||"Failed to refine reply.")}catch(o){g(o instanceof Error?o.message:"An unexpected error occurred.")}finally{W(!1)}}},ae=async(s,a)=>{try{await navigator.clipboard.writeText(s),O(a),setTimeout(()=>O(null),2e3)}catch(o){console.error("Copy failed:",o)}},ce=()=>{Q()?chrome.runtime.sendMessage({type:"OPEN_OPTIONS"}):g("Extension was updated. Please refresh the page.")};return t.jsxs("div",{className:"panel messaging-panel",ref:X,children:[t.jsxs("div",{className:"panel-header",children:[t.jsxs("div",{className:"panel-title",children:[t.jsx("div",{className:"panel-icon messaging",children:t.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),t.jsx("span",{children:"Conversation Co-pilot"})]}),t.jsx("button",{className:"close-btn",onClick:i,children:t.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),t.jsx("div",{className:"messaging-context",children:n?t.jsxs("div",{className:"context-scanning",children:[t.jsx("div",{className:"spinner-small"}),t.jsx("span",{children:"Analyzing conversation..."})]}):e?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"context-participant",children:[t.jsx("span",{className:"context-label",children:"Chatting with:"}),t.jsx("span",{className:"context-value",children:e.participantName})]}),e.participantHeadline&&t.jsx("div",{className:"context-headline",children:e.participantHeadline}),t.jsxs("div",{className:"context-stats",children:[t.jsxs("span",{className:"stat",children:[e.messages.length," messages"]}),t.jsxs("span",{className:"stat",children:[t.jsx("span",{className:`sentiment-dot ${e.sentiment}`}),e.sentiment]})]})]}):t.jsx("div",{className:"context-empty",children:"Open a conversation to get started"})}),t.jsxs("div",{className:"panel-content",children:[t.jsxs("div",{className:"section",children:[t.jsx("div",{className:"section-label",children:"Phoenix Context"}),t.jsxs("div",{className:"session-row",children:[t.jsxs("select",{className:"tone-select",value:d,onChange:s=>se(s.target.value),disabled:u,children:[t.jsx("option",{value:"",children:u?"Loading sessions...":"Select context"}),t.jsx("option",{value:w,children:"No session - use Phoenix defaults"}),F.map(s=>t.jsx("option",{value:s.id,children:s.display_name},s.id))]}),t.jsx("button",{className:"action-btn",onClick:$,disabled:u,title:"Refresh sessions",children:u?t.jsx("div",{className:"spinner-small"}):"Refresh"})]}),z&&F.length===0&&!u&&t.jsx("button",{className:"settings-btn inline",onClick:ce,children:"Open Phoenix Login"})]}),t.jsxs("div",{className:"section",children:[t.jsxs("div",{className:"section-label",children:["Your goal for this reply ",t.jsx("span",{className:"optional-label",children:"(optional)"})]}),t.jsxs("div",{className:"thoughts-input-wrapper",children:[t.jsx("textarea",{ref:C,className:"thoughts-input",value:c,onChange:s=>{p(s.target.value),ie()},placeholder:"Ask for a 20-min call, thank them for the intro, schedule next steps...",rows:2}),c&&t.jsx("button",{className:"clear-thoughts-btn",onClick:()=>{p(""),C.current&&(C.current.style.height="auto")},title:"Clear",children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:t.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),t.jsx("div",{className:"section",children:t.jsx("button",{className:"generate-btn",onClick:oe,disabled:!ne||h,children:h?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"spinner"}),"Crafting Reply..."]}):e?d?"Suggest Reply":"Select Context":"Open a Conversation"})}),h&&t.jsx("div",{className:"shimmer-container",children:t.jsxs("div",{className:"shimmer-card",children:[t.jsx("div",{className:"shimmer-line long"}),t.jsx("div",{className:"shimmer-line short"})]})}),z&&t.jsxs("div",{className:"error-message",children:[t.jsxs("svg",{className:"error-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),t.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),t.jsx("span",{children:z})]}),G.length>0&&!h&&t.jsxs("div",{className:"section",children:[t.jsx("div",{className:"section-label",children:"Suggested Reply"}),t.jsx("div",{className:"results",children:G.map((s,a)=>t.jsxs("div",{className:"comment-card",children:[t.jsx("div",{className:"recommendation-tag",children:s.recommendationTag}),t.jsx("div",{className:"comment-text",children:s.text}),t.jsxs("div",{className:"comment-actions",children:[t.jsx("button",{className:`action-btn ${H===a?"copied":""}`,onClick:()=>ae(s.text,a),title:"Copy to clipboard",children:H===a?"Copied":"Copy"}),t.jsx("button",{className:"insert-btn",onClick:()=>r(s.text),title:"Insert into message box",children:"Insert"})]}),t.jsx("div",{className:"refine-panel",children:t.jsxs("div",{className:"refine-custom-row",children:[t.jsx("input",{className:"refine-input",value:P,onChange:o=>Y(o.target.value),placeholder:"Custom refinement...",disabled:L}),t.jsx("button",{className:"action-btn",disabled:L||!P.trim(),onClick:()=>{re(P),Y("")},children:L?t.jsx("div",{className:"spinner-small"}):"Refine"})]})})]},a))})]})]}),t.jsx("div",{className:"panel-footer",children:t.jsx("span",{children:"Phoenix Pilot - AI job search assistant for LinkedIn"})})]})}const v={messageItem:[".msg-s-message-list__event",".msg-s-event-listitem",'[class*="msg-s-event-listitem"]'],messageContent:[".msg-s-event-listitem__body",".msg-s-message-group__content",'[class*="msg-s-event-listitem__body"]',"p.msg-s-event-listitem__body"],messageTimestamp:[".msg-s-message-list__time-heading",".msg-s-message-group__timestamp","time"],participantName:[".msg-overlay-bubble-header__title",".msg-thread__link-to-profile",".msg-entity-lockup__entity-title",'[class*="msg-overlay-bubble-header__title"]',"h2.msg-entity-lockup__entity-title"],participantHeadline:[".msg-entity-lockup__entity-subtitle",".msg-overlay-bubble-header__subtitle",'[class*="msg-entity-lockup__entity-subtitle"]'],messageInput:[".msg-form__contenteditable",".msg-form__message-texteditor",'[contenteditable="true"][role="textbox"]',"div.msg-form__contenteditable"],messageForm:[".msg-form__msg-content-container",".msg-form",'[class*="msg-form"]'],myMessageIndicator:[".msg-s-message-group--selfsend",'[class*="selfsend"]']};function j(e,n){for(const i of n){const r=e.querySelector(i);if(r)return r}return null}function he(e,n){for(const i of n){const r=e.querySelectorAll(i);if(r.length>0)return Array.from(r)}return[]}function A(){return!!(window.location.pathname.includes("/messaging")||window!==window.top&&!!document.querySelector('.msg-form, .msg-form__contenteditable, [class*="msg-form"], .msg-overlay-bubble-header'))}function fe(){const e=document.querySelector(".global-nav__me-photo, .feed-identity-module__actor-meta"),n=e==null?void 0:e.getAttribute("alt");if(n)return n;const i=document.querySelector(".global-nav__me .t-14");return i!=null&&i.textContent?i.textContent.trim():"Me"}function Z(){var i,r;const e=j(document,v.participantName),n=j(document,v.participantHeadline);return{name:((i=e==null?void 0:e.textContent)==null?void 0:i.trim())||"Unknown",headline:((r=n==null?void 0:n.textContent)==null?void 0:r.trim())||void 0}}function xe(e){const n=e.closest(".msg-s-message-group");if(n){for(const i of v.myMessageIndicator)if(n.matches(i)||n.querySelector(i))return!0}for(const i of v.myMessageIndicator)if(e.matches(i)||e.closest(i))return!0;return!1}function be(e=10){var h,x;const n=[],i=fe(),r=Z(),p=he(document,v.messageItem).slice(-e);for(const u of p){const m=j(u,v.messageContent),F=(h=m==null?void 0:m.textContent)==null?void 0:h.trim();if(!F||F.length<2)continue;const S=xe(u),d=j(u,v.messageTimestamp),k=(x=d==null?void 0:d.textContent)==null?void 0:x.trim();n.push({sender:S?"me":"other",senderName:S?i:r.name,content:F,timestamp:k})}return n}function ye(e){if(e.length===0)return"neutral";const i=e.slice(-5).map(m=>m.content.toLowerCase()).join(" "),c=["great","awesome","thanks","thank you","excellent","love","excited","looking forward","happy","pleased"].some(m=>i.includes(m)),h=["price","cost","budget","deal","offer","proposal","terms","negotiate","discount","rate"].some(m=>i.includes(m)),x=e[e.length-1],u=x.sender==="me";return x.content.length<20,h?"negotiating":c?"positive":u&&e.length>3?"cold":"neutral"}function ve(e){if(e.length===0)return"General conversation";const n=e.map(r=>r.content).join(" ").toLowerCase(),i=[{pattern:/recruiter|talent|hiring|role|position|opportunity/i,topic:"Recruiter outreach"},{pattern:/informational|your experience|career path/i,topic:"Informational interview"},{pattern:/thank you|thanks for|great speaking/i,topic:"Post-interview follow-up"},{pattern:/application|applied|interview|screening/i,topic:"Application follow-up"},{pattern:/follow.?up|checking in|touch base/i,topic:"Follow-up"},{pattern:/connect|mutual|introduction/i,topic:"Networking connection"},{pattern:/meeting|call|schedule|calendar|zoom|coffee/i,topic:"Scheduling a meeting"},{pattern:/question|help|advice|recommend/i,topic:"Seeking advice"}];for(const{pattern:r,topic:c}of i)if(r.test(n))return c;return"Professional discussion"}function Fe(e){const n=e.map(i=>i.content).join(" ").toLowerCase();return/recruiter|talent|hiring|role|position|opportunity/.test(n)?"recruiter-inbound":/informational|your experience|career path/.test(n)?"informational":/thank you|thanks for|great speaking/.test(n)?"thank-you":/follow.?up|checking in|touch base/.test(n)?"follow-up":/connect|mutual|introduction/.test(n)?"connection-request":/cold|reaching out|came across your profile/.test(n)?"cold-outreach":"general"}async function we(){try{if(!A())return console.log("[LinkedIn AI] Not on messaging page"),null;const e=Z(),n=be(10);if(n.length===0)return console.log("[LinkedIn AI] No messages found in conversation"),null;const i=n[n.length-1],r=ve(n),c=ye(n),p=Fe(n),h=/recruiter|talent|hiring/i.test(`${e.name} ${e.headline||""} ${n.map(x=>x.content).join(" ")}`);return console.log("[LinkedIn AI] Scraped conversation:",{participant:e.name,messageCount:n.length,topic:r,sentiment:c,lastMessageFrom:i.sender}),{participantName:e.name,participantHeadline:e.headline,messages:n,topic:r,sentiment:c,lastMessageFrom:i.sender,detectedIntent:p,isRecruiter:h}}catch(e){return console.error("[LinkedIn AI] Error scraping conversation:",e),null}}function ke(){return j(document,v.messageInput)}function Ee(){return j(document,v.messageForm)}function je(e){const n=ke();if(!n)return console.error("[LinkedIn AI] Message input not found"),!1;try{n.focus(),n.innerHTML="";const i=document.createElement("p");return i.textContent=e,n.appendChild(i),n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0})),setTimeout(()=>{n.innerText=e,n.dispatchEvent(new Event("input",{bubbles:!0}))},50),!0}catch(i){return console.error("[LinkedIn AI] Error injecting text:",i),!1}}const Ae=`
  .lai-messaging-ai-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #F26522;
    border: none;
    cursor: pointer;
    transition: background 180ms cubic-bezier(0.22, 1, 0.36, 1), transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
    margin: 0 4px;
    flex-shrink: 0;
    vertical-align: middle;
    align-self: center;
  }

  .lai-messaging-ai-button:hover {
    background: #D8541A;
    transform: scale(1.08);
  }

  .lai-messaging-ai-button svg {
    width: 15px;
    height: 15px;
    color: white;
  }
`;let E=null,b=null;function Se(){if(document.getElementById("lai-content-styles"))return;const e=document.createElement("style");e.id="lai-content-styles",e.textContent=Ae,document.head.appendChild(e)}function ee(){if(b)return b;b=document.createElement("div"),b.id="lai-panel-container";const e=b.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=_e(),e.appendChild(n);const i=document.createElement("div");return i.id="lai-panel-mount",e.appendChild(i),document.body.appendChild(b),b}function V(e,n){const c=ee().shadowRoot.getElementById("lai-panel-mount");E||(E=le.createRoot(c)),E.render(t.jsx(de.StrictMode,{children:t.jsx(ge,{conversationContext:e,isScanning:n,onClose:te,onInsertReply:Ne})}))}function Ne(e){je(e)&&te()}function Ce(){ee(),V(null,!0),(async()=>{await new Promise(n=>setTimeout(n,200));const e=await we();V(e,!1)})()}function te(){E&&(E.unmount(),E=null),b&&(b.remove(),b=null)}function q(){if(!A()||document.querySelector(".lai-messaging-ai-button"))return;const e=[".msg-form__left-actions",".msg-form__right-actions",".msg-form__footer",".msg-form__content-container",".msg-form"];let n=null;for(const p of e)if(n=document.querySelector(p),n)break;if(!n&&!Ee())return;const i=document.createElement("button");i.className="lai-messaging-ai-button",i.type="button",i.title="Phoenix reply assistant",i.innerHTML=`
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  `,i.addEventListener("click",p=>{p.preventDefault(),p.stopPropagation(),Ce()});const r=document.querySelector(".msg-form__left-actions");if(r){r.appendChild(i);return}const c=document.querySelector(".msg-form__right-actions");if(c){c.insertBefore(i,c.firstChild);return}n==null||n.appendChild(i)}function B(){try{return window!==window.top}catch{return!0}}function J(){Se(),!B()&&A()&&q();let e=null;const n=()=>{e&&clearTimeout(e),e=setTimeout(()=>{!B()&&A()&&q()},300)};new MutationObserver(n).observe(document.body,{childList:!0,subtree:!0}),setInterval(()=>{!B()&&A()&&q()},2e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",J):J();function _e(){return`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');

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
      background: #FFFFFF;
      border-radius: 8px;
      border: 1px solid #E6E6E6;
      box-shadow: 0 16px 48px -12px rgba(10,10,10,0.18);
      font-family: 'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 14px;
      color: #0A0A0A;
      z-index: 999999;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      -webkit-font-smoothing: antialiased;
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px;
      border-bottom: 1px solid #E6E6E6;
      background: #FFFFFF;
      cursor: move;
      flex-shrink: 0;
    }

    .panel-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
      font-size: 14px;
      color: #0A0A0A;
    }

    .panel-icon {
      width: 30px;
      height: 30px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .panel-icon.messaging {
      background: #FFE7D6;
      color: #F26522;
    }

    .close-btn {
      width: 28px;
      height: 28px;
      border-radius: 4px;
      border: 1px solid #E6E6E6;
      background: #FFFFFF;
      color: #8A8A8A;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 180ms cubic-bezier(0.22, 1, 0.36, 1), border-color 180ms, color 180ms;
      flex-shrink: 0;
    }

    .close-btn:hover {
      background: #FEE2E2;
      border-color: #C42626;
      color: #C42626;
    }

    .messaging-context {
      padding: 12px 16px;
      background: #FFF4EC;
      border-bottom: 1px solid #E6E6E6;
      flex-shrink: 0;
    }

    .context-scanning,
    .context-participant,
    .context-stats .stat {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .context-scanning {
      color: #F26522;
      font-size: 13px;
    }

    .context-label {
      font-size: 11px;
      color: #8A8A8A;
    }

    .context-value {
      font-size: 14px;
      font-weight: 600;
      color: #0A0A0A;
    }

    .context-headline {
      font-size: 12px;
      color: #8A8A8A;
      margin: 4px 0 8px;
    }

    .context-stats {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }

    .context-stats .stat {
      font-size: 11px;
      color: #8A8A8A;
    }

    .sentiment-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #C7C7C7;
      flex-shrink: 0;
    }

    .sentiment-dot.positive { background: #15803D; }
    .sentiment-dot.neutral { background: #B45309; }
    .sentiment-dot.negotiating { background: #F26522; }
    .sentiment-dot.cold { background: #C7C7C7; }

    .context-empty {
      color: #8A8A8A;
      font-size: 13px;
      text-align: center;
      padding: 4px 0;
    }

    .panel-content {
      padding: 16px;
      overflow-y: auto;
      flex: 1;
    }

    .section {
      margin-bottom: 16px;
    }

    .section-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #8A8A8A;
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
      background: #F8F8F8;
      border: 1px solid #E6E6E6;
      border-radius: 4px;
      color: #0A0A0A;
      font-size: 13px;
      font-family: inherit;
      line-height: 1.5;
      resize: none;
      min-height: 60px;
      max-height: 120px;
      transition: border-color 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .thoughts-input::placeholder {
      color: #8A8A8A;
      font-size: 12px;
    }

    .thoughts-input:focus {
      outline: none;
      border-color: #F26522;
      box-shadow: 0 0 0 3px rgba(242, 101, 34, 0.12);
    }

    .tone-select:focus,
    .refine-input:focus {
      outline: none;
      border-color: #F26522;
      box-shadow: 0 0 0 3px rgba(242, 101, 34, 0.12);
    }

    .clear-thoughts-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: none;
      background: #F4F4F4;
      color: #8A8A8A;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .optional-label {
      font-weight: 400;
      color: #8A8A8A;
      font-size: 10px;
      text-transform: none;
      letter-spacing: 0;
    }

    .tone-select {
      width: 100%;
      padding: 10px 12px;
      background: #F8F8F8;
      border: 1px solid #E6E6E6;
      border-radius: 4px;
      color: #0A0A0A;
      font-size: 13px;
      font-family: inherit;
      cursor: pointer;
      transition: border-color 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .tone-select option {
      background: #FFFFFF;
      color: #0A0A0A;
    }

    .generate-btn {
      width: 100%;
      padding: 11px 20px;
      background: #F26522;
      border: none;
      border-radius: 6px;
      color: #FFFFFF;
      font-size: 14px;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: background 180ms cubic-bezier(0.22, 1, 0.36, 1), transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .generate-btn:hover:not(:disabled) {
      background: #D8541A;
      transform: translateY(-1px);
    }

    .generate-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .spinner {
      width: 16px;
      height: 16px;
      border: 2px solid rgba(255, 255, 255, 0.35);
      border-top-color: #FFFFFF;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      flex-shrink: 0;
    }

    .spinner-small {
      width: 12px;
      height: 12px;
      border: 2px solid rgba(242, 101, 34, 0.2);
      border-top-color: #F26522;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
      flex-shrink: 0;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .shimmer-card {
      background: #F4F4F4;
      border: 1px solid #E6E6E6;
      border-radius: 6px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .shimmer-line {
      height: 11px;
      border-radius: 4px;
      background: linear-gradient(90deg, #E6E6E6 0%, #F4F4F4 50%, #E6E6E6 100%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    .shimmer-line.long { width: 100%; }
    .shimmer-line.short { width: 55%; }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .results {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .comment-card {
      background: #FFFFFF;
      border: 1px solid #E6E6E6;
      border-radius: 6px;
      padding: 14px;
    }

    .recommendation-tag {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      color: #F26522;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      margin-bottom: 8px;
      padding: 3px 8px;
      background: #FFF4EC;
      border: 1px solid #FFE7D6;
      border-radius: 2px;
    }

    .comment-text {
      font-size: 13px;
      line-height: 1.65;
      color: #0A0A0A;
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
      padding-top: 12px;
      border-top: 1px solid #F0F0F0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .refine-custom-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .refine-input {
      flex: 1;
      min-width: 160px;
      padding: 8px 10px;
      background: #F8F8F8;
      border: 1px solid #E6E6E6;
      border-radius: 4px;
      color: #0A0A0A;
      font-size: 12px;
      font-family: inherit;
      transition: border-color 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .refine-input::placeholder {
      color: #8A8A8A;
    }

    .action-btn,
    .settings-btn,
    .insert-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 7px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-family: inherit;
      cursor: pointer;
      transition: background 180ms cubic-bezier(0.22, 1, 0.36, 1), border-color 180ms, color 180ms;
    }

    .action-btn,
    .settings-btn {
      border: 1px solid #E6E6E6;
      background: #FFFFFF;
      color: #525252;
    }

    .action-btn:hover:not(:disabled),
    .settings-btn:hover {
      background: #F4F4F4;
      border-color: #D0D0D0;
      color: #0A0A0A;
    }

    .settings-btn.inline {
      margin-top: 10px;
      width: 100%;
    }

    .action-btn.copied {
      background: #DCFCE7;
      border-color: #15803D;
      color: #15803D;
    }

    .insert-btn {
      border: none;
      background: #F26522;
      color: #FFFFFF;
      font-weight: 500;
    }

    .insert-btn:hover {
      background: #D8541A;
    }

    .error-message {
      background: #FEE2E2;
      border: 1px solid #C42626;
      border-radius: 6px;
      padding: 12px;
      color: #C42626;
      font-size: 13px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 16px;
    }

    .error-icon {
      flex-shrink: 0;
      color: #C42626;
    }

    .panel-footer {
      padding: 10px 16px;
      border-top: 1px solid #E6E6E6;
      background: #FAFAFA;
      font-size: 11px;
      color: #8A8A8A;
      text-align: center;
      line-height: 1.5;
      flex-shrink: 0;
    }
  `}
