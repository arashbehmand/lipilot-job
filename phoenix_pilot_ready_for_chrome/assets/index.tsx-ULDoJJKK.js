import{r as c,j as n,c as Q,R as Z}from"./client-D7f9BLy3.js";import{g as ee,f as te,b as ne}from"./phoenix-client-DYYwlbnA.js";function H(){var e;try{return!!((e=chrome==null?void 0:chrome.runtime)!=null&&e.id)}catch{return!1}}async function se(e){if(!H())return{success:!1,error:"Extension was updated. Please refresh the page."};try{return await chrome.runtime.sendMessage(e)}catch(t){if(t instanceof Error&&(t.message.includes("Extension context invalidated")||t.message.includes("Receiving end does not exist")))return{success:!1,error:"Extension was updated. Please refresh the page."};throw t}}function ie({conversationContext:e,isScanning:t=!1,onClose:s,onInsertReply:o}){const[r,l]=c.useState(""),[u,m]=c.useState(!1),[d,p]=c.useState(!0),[f,S]=c.useState([]),[x,w]=c.useState(""),[L,P]=c.useState([]),[z,y]=c.useState(null),[R,T]=c.useState(null),C=c.useRef(null),A=c.useRef(null),g=c.useRef({isDragging:!1,startX:0,startY:0,initialX:0,initialY:0}),$=!t&&!d&&!!e&&e.messages.length>0&&!!x;c.useEffect(()=>{F()},[]),c.useEffect(()=>{const i=A.current;if(!i)return;const a=j=>{if(!j.target.closest(".panel-header"))return;g.current.isDragging=!0,g.current.startX=j.clientX,g.current.startY=j.clientY;const M=i.getBoundingClientRect();g.current.initialX=M.left,g.current.initialY=M.top,i.style.transition="none"},v=j=>{if(!g.current.isDragging)return;const B=j.clientX-g.current.startX,M=j.clientY-g.current.startY;i.style.right="auto",i.style.left=`${g.current.initialX+B}px`,i.style.top=`${g.current.initialY+M}px`},q=()=>{g.current.isDragging=!1,i.style.transition=""};return i.addEventListener("mousedown",a),document.addEventListener("mousemove",v),document.addEventListener("mouseup",q),()=>{i.removeEventListener("mousedown",a),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",q)}},[]);const F=async()=>{p(!0),y(null);const i=await ee(),a=await te(i.phoenixBaseUrl);S(a),a.length===0?(w(""),y("Log in to Phoenix, then reopen this panel or refresh sessions.")):i.phoenixSessionId&&a.some(v=>v.id===i.phoenixSessionId)?w(i.phoenixSessionId):w(""),p(!1)},D=async i=>{const a=f.find(v=>v.id===i);w(i),await ne(i,(a==null?void 0:a.display_name)||"")},U=()=>{const i=C.current;i&&(i.style.height="auto",i.style.height=`${Math.min(i.scrollHeight,120)}px`)},V=async()=>{if(!e){y("No conversation context available.");return}if(!x){y("Select a Phoenix session before generating a reply.");return}m(!0),y(null),P([]);try{const i=await se({type:"GENERATE_MESSAGES",payload:{conversationContext:e,sessionId:x,userThoughts:r.trim()||void 0}});i.success&&i.replies?P(i.replies):y(i.error||"Failed to generate replies.")}catch(i){y(i instanceof Error?i.message:"An unexpected error occurred.")}finally{m(!1)}},J=async(i,a)=>{try{await navigator.clipboard.writeText(i),T(a),setTimeout(()=>T(null),2e3)}catch(v){console.error("Copy failed:",v)}},K=()=>{H()?chrome.runtime.sendMessage({type:"OPEN_OPTIONS"}):y("Extension was updated. Please refresh the page.")};return n.jsxs("div",{className:"panel messaging-panel",ref:A,children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("div",{className:"panel-title",children:[n.jsx("div",{className:"panel-icon messaging",children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),n.jsx("span",{children:"Conversation Co-pilot"})]}),n.jsx("button",{className:"close-btn",onClick:s,children:n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),n.jsx("div",{className:"messaging-context",children:t?n.jsxs("div",{className:"context-scanning",children:[n.jsx("div",{className:"spinner-small"}),n.jsx("span",{children:"Analyzing conversation..."})]}):e?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"context-participant",children:[n.jsx("span",{className:"context-label",children:"Chatting with:"}),n.jsx("span",{className:"context-value",children:e.participantName})]}),e.participantHeadline&&n.jsx("div",{className:"context-headline",children:e.participantHeadline}),n.jsxs("div",{className:"context-stats",children:[n.jsxs("span",{className:"stat",children:[e.messages.length," messages"]}),n.jsxs("span",{className:"stat",children:[n.jsx("span",{className:`sentiment-dot ${e.sentiment}`}),e.sentiment]})]})]}):n.jsx("div",{className:"context-empty",children:"Open a conversation to get started"})}),n.jsxs("div",{className:"panel-content",children:[n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"section-label",children:"Phoenix Session"}),n.jsxs("div",{className:"session-row",children:[n.jsxs("select",{className:"tone-select",value:x,onChange:i=>D(i.target.value),disabled:d||f.length===0,children:[n.jsx("option",{value:"",children:d?"Loading sessions...":f.length===0?"No sessions available":"Select a Phoenix session"}),f.map(i=>n.jsx("option",{value:i.id,children:i.display_name},i.id))]}),n.jsx("button",{className:"action-btn",onClick:F,disabled:d,title:"Refresh sessions",children:d?n.jsx("div",{className:"spinner-small"}):"Refresh"})]}),f.length===0&&!d&&n.jsx("button",{className:"settings-btn inline",onClick:K,children:"Open Phoenix Login"})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"section-label",children:["Your goal for this reply ",n.jsx("span",{className:"optional-label",children:"(optional)"})]}),n.jsxs("div",{className:"thoughts-input-wrapper",children:[n.jsx("textarea",{ref:C,className:"thoughts-input",value:r,onChange:i=>{l(i.target.value),U()},placeholder:"Ask for a 20-min call, thank them for the intro, schedule next steps...",rows:2}),r&&n.jsx("button",{className:"clear-thoughts-btn",onClick:()=>{l(""),C.current&&(C.current.style.height="auto")},title:"Clear",children:n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),n.jsx("div",{className:"section",children:n.jsx("button",{className:"generate-btn",onClick:V,disabled:!$||u,children:u?n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"spinner"}),"Crafting Reply..."]}):e?x?"Suggest Reply":"Select a Phoenix Session":"Open a Conversation"})}),u&&n.jsx("div",{className:"shimmer-container",children:n.jsxs("div",{className:"shimmer-card",children:[n.jsx("div",{className:"shimmer-line long"}),n.jsx("div",{className:"shimmer-line short"})]})}),z&&n.jsxs("div",{className:"error-message",children:[n.jsxs("svg",{className:"error-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),n.jsx("span",{children:z})]}),L.length>0&&!u&&n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"section-label",children:"Suggested Reply"}),n.jsx("div",{className:"results",children:L.map((i,a)=>n.jsxs("div",{className:"comment-card",children:[n.jsx("div",{className:"recommendation-tag",children:i.recommendationTag}),n.jsx("div",{className:"comment-text",children:i.text}),n.jsxs("div",{className:"comment-actions",children:[n.jsx("button",{className:`action-btn ${R===a?"copied":""}`,onClick:()=>J(i.text,a),title:"Copy to clipboard",children:R===a?"Copied":"Copy"}),n.jsx("button",{className:"insert-btn",onClick:()=>o(i.text),title:"Insert into message box",children:"Insert"})]})]},a))})]})]}),n.jsx("div",{className:"panel-footer",children:n.jsx("span",{children:"Phoenix Pilot - AI job search assistant for LinkedIn"})})]})}const b={messageItem:[".msg-s-message-list__event",".msg-s-event-listitem",'[class*="msg-s-event-listitem"]'],messageContent:[".msg-s-event-listitem__body",".msg-s-message-group__content",'[class*="msg-s-event-listitem__body"]',"p.msg-s-event-listitem__body"],messageTimestamp:[".msg-s-message-list__time-heading",".msg-s-message-group__timestamp","time"],participantName:[".msg-overlay-bubble-header__title",".msg-thread__link-to-profile",".msg-entity-lockup__entity-title",'[class*="msg-overlay-bubble-header__title"]',"h2.msg-entity-lockup__entity-title"],participantHeadline:[".msg-entity-lockup__entity-subtitle",".msg-overlay-bubble-header__subtitle",'[class*="msg-entity-lockup__entity-subtitle"]'],messageInput:[".msg-form__contenteditable",".msg-form__message-texteditor",'[contenteditable="true"][role="textbox"]',"div.msg-form__contenteditable"],messageForm:[".msg-form__msg-content-container",".msg-form",'[class*="msg-form"]'],myMessageIndicator:[".msg-s-message-group--selfsend",'[class*="selfsend"]']};function N(e,t){for(const s of t){const o=e.querySelector(s);if(o)return o}return null}function oe(e,t){for(const s of t){const o=e.querySelectorAll(s);if(o.length>0)return Array.from(o)}return[]}function _(){return!!(window.location.pathname.includes("/messaging")||window!==window.top&&!!document.querySelector('.msg-form, .msg-form__contenteditable, [class*="msg-form"], .msg-overlay-bubble-header'))}function re(){const e=document.querySelector(".global-nav__me-photo, .feed-identity-module__actor-meta"),t=e==null?void 0:e.getAttribute("alt");if(t)return t;const s=document.querySelector(".global-nav__me .t-14");return s!=null&&s.textContent?s.textContent.trim():"Me"}function O(){var s,o;const e=N(document,b.participantName),t=N(document,b.participantHeadline);return{name:((s=e==null?void 0:e.textContent)==null?void 0:s.trim())||"Unknown",headline:((o=t==null?void 0:t.textContent)==null?void 0:o.trim())||void 0}}function ae(e){const t=e.closest(".msg-s-message-group");if(t){for(const s of b.myMessageIndicator)if(t.matches(s)||t.querySelector(s))return!0}for(const s of b.myMessageIndicator)if(e.matches(s)||e.closest(s))return!0;return!1}function ce(e=10){var u,m;const t=[],s=re(),o=O(),l=oe(document,b.messageItem).slice(-e);for(const d of l){const p=N(d,b.messageContent),f=(u=p==null?void 0:p.textContent)==null?void 0:u.trim();if(!f||f.length<2)continue;const S=ae(d),x=N(d,b.messageTimestamp),w=(m=x==null?void 0:x.textContent)==null?void 0:m.trim();t.push({sender:S?"me":"other",senderName:S?s:o.name,content:f,timestamp:w})}return t}function le(e){if(e.length===0)return"neutral";const s=e.slice(-5).map(p=>p.content.toLowerCase()).join(" "),r=["great","awesome","thanks","thank you","excellent","love","excited","looking forward","happy","pleased"].some(p=>s.includes(p)),u=["price","cost","budget","deal","offer","proposal","terms","negotiate","discount","rate"].some(p=>s.includes(p)),m=e[e.length-1],d=m.sender==="me";return m.content.length<20,u?"negotiating":r?"positive":d&&e.length>3?"cold":"neutral"}function de(e){if(e.length===0)return"General conversation";const t=e.map(o=>o.content).join(" ").toLowerCase(),s=[{pattern:/recruiter|talent|hiring|role|position|opportunity/i,topic:"Recruiter outreach"},{pattern:/informational|your experience|career path/i,topic:"Informational interview"},{pattern:/thank you|thanks for|great speaking/i,topic:"Post-interview follow-up"},{pattern:/application|applied|interview|screening/i,topic:"Application follow-up"},{pattern:/follow.?up|checking in|touch base/i,topic:"Follow-up"},{pattern:/connect|mutual|introduction/i,topic:"Networking connection"},{pattern:/meeting|call|schedule|calendar|zoom|coffee/i,topic:"Scheduling a meeting"},{pattern:/question|help|advice|recommend/i,topic:"Seeking advice"}];for(const{pattern:o,topic:r}of s)if(o.test(t))return r;return"Professional discussion"}function pe(e){const t=e.map(s=>s.content).join(" ").toLowerCase();return/recruiter|talent|hiring|role|position|opportunity/.test(t)?"recruiter-inbound":/informational|your experience|career path/.test(t)?"informational":/thank you|thanks for|great speaking/.test(t)?"thank-you":/follow.?up|checking in|touch base/.test(t)?"follow-up":/connect|mutual|introduction/.test(t)?"connection-request":/cold|reaching out|came across your profile/.test(t)?"cold-outreach":"general"}async function ue(){try{if(!_())return console.log("[LinkedIn AI] Not on messaging page"),null;const e=O(),t=ce(10);if(t.length===0)return console.log("[LinkedIn AI] No messages found in conversation"),null;const s=t[t.length-1],o=de(t),r=le(t),l=pe(t),u=/recruiter|talent|hiring/i.test(`${e.name} ${e.headline||""} ${t.map(m=>m.content).join(" ")}`);return console.log("[LinkedIn AI] Scraped conversation:",{participant:e.name,messageCount:t.length,topic:o,sentiment:r,lastMessageFrom:s.sender}),{participantName:e.name,participantHeadline:e.headline,messages:t,topic:o,sentiment:r,lastMessageFrom:s.sender,detectedIntent:l,isRecruiter:u}}catch(e){return console.error("[LinkedIn AI] Error scraping conversation:",e),null}}function ge(){return N(document,b.messageInput)}function me(){return N(document,b.messageForm)}function he(e){const t=ge();if(!t)return console.error("[LinkedIn AI] Message input not found"),!1;try{t.focus(),t.innerHTML="";const s=document.createElement("p");return s.textContent=e,t.appendChild(s),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),setTimeout(()=>{t.innerText=e,t.dispatchEvent(new Event("input",{bubbles:!0}))},50),!0}catch(s){return console.error("[LinkedIn AI] Error injecting text:",s),!1}}const fe=`
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
`;let k=null,h=null;function xe(){if(document.getElementById("lai-content-styles"))return;const e=document.createElement("style");e.id="lai-content-styles",e.textContent=fe,document.head.appendChild(e)}function Y(){if(h)return h;h=document.createElement("div"),h.id="lai-panel-container";const e=h.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=ve(),e.appendChild(t);const s=document.createElement("div");return s.id="lai-panel-mount",e.appendChild(s),document.body.appendChild(h),h}function W(e,t){const r=Y().shadowRoot.getElementById("lai-panel-mount");k||(k=Q.createRoot(r)),k.render(n.jsx(Z.StrictMode,{children:n.jsx(ie,{conversationContext:e,isScanning:t,onClose:X,onInsertReply:be})}))}function be(e){he(e)&&X()}function ye(){Y(),W(null,!0),(async()=>{await new Promise(t=>setTimeout(t,200));const e=await ue();W(e,!1)})()}function X(){k&&(k.unmount(),k=null),h&&(h.remove(),h=null)}function I(){if(!_()||document.querySelector(".lai-messaging-ai-button"))return;const e=[".msg-form__left-actions",".msg-form__right-actions",".msg-form__footer",".msg-form__content-container",".msg-form"];let t=null;for(const l of e)if(t=document.querySelector(l),t)break;if(!t&&!me())return;const s=document.createElement("button");s.className="lai-messaging-ai-button",s.type="button",s.title="Phoenix reply assistant",s.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  `,s.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),ye()});const o=document.querySelector(".msg-form__left-actions");if(o){o.appendChild(s);return}const r=document.querySelector(".msg-form__right-actions");if(r){r.insertBefore(s,r.firstChild);return}t==null||t.appendChild(s)}function E(){try{return window!==window.top}catch{return!0}}function G(){xe(),!E()&&_()&&I();let e=null;const t=()=>{e&&clearTimeout(e),e=setTimeout(()=>{!E()&&_()&&I()},300)};new MutationObserver(t).observe(document.body,{childList:!0,subtree:!0}),setInterval(()=>{!E()&&_()&&I()},2e3)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();function ve(){return`
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
