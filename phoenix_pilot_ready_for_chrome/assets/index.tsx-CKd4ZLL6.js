import{j as e,r as y,c as ye,R as we}from"./client-D7f9BLy3.js";import{b as Je,d as Qe,e as Ze,g as Ae}from"./storage-C12OAd8Y.js";function ce({icon:t,label:n,value:o,fullValue:l,status:c,subLabel:r}){const[s,i]=y.useState(!1),a=l&&l.length>0&&l!==o,d=()=>c==="scanning"?e.jsx("div",{className:"context-status scanning",children:e.jsx("div",{className:"scan-spinner"})}):c==="success"?e.jsx("div",{className:"context-status success",children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}):e.jsx("div",{className:"context-status warning",children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("path",{d:"M12 9v4M12 17h.01"})})});return e.jsxs("div",{className:`context-item ${c} ${a?"has-tooltip":""}`,onMouseEnter:()=>a&&i(!0),onMouseLeave:()=>i(!1),children:[e.jsx("div",{className:"context-item-line"}),e.jsx("div",{className:"context-item-icon",children:t}),e.jsxs("div",{className:"context-item-content",children:[e.jsxs("div",{className:"context-item-header",children:[e.jsx("span",{className:"context-item-label",children:n}),d(),a&&e.jsx("span",{className:"hover-hint",children:e.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4M12 8h.01"})]})})]}),c==="scanning"?e.jsx("div",{className:"context-item-value scanning",children:"Scanning..."}):o?e.jsx("div",{className:"context-item-value",children:o}):e.jsx("div",{className:"context-item-value warning",children:r||"Not found"})]}),s&&l&&e.jsxs("div",{className:"context-tooltip",children:[e.jsx("div",{className:"context-tooltip-header",children:n}),e.jsx("div",{className:"context-tooltip-content",children:l})]})]})}function De({postData:t,isScanning:n,analyzeImage:o,onAnalyzeImageChange:l}){const c=(f,j)=>f?f.length>j?f.slice(0,j)+"...":f:"",r=()=>n?"scanning":t!=null&&t.postContent?"success":"warning",s=()=>n?"scanning":t!=null&&t.authorName?"success":"warning",i=()=>n?"scanning":"success",a=()=>{var j,I;return n?"scanning":(((I=(j=t==null?void 0:t.threadContext)==null?void 0:j.existingComments)==null?void 0:I.length)||0)>0?"success":"warning"},d=()=>{var f,j;return t?((f=t.threadContext)==null?void 0:f.mode)==="reply"&&((j=t.threadContext)!=null&&j.parentComment)?`Replying to ${t.threadContext.parentComment.authorName}`:"Direct Comment Mode":null},p=()=>{var f,j;return t?((f=t.threadContext)==null?void 0:f.mode)==="reply"&&((j=t.threadContext)!=null&&j.parentComment)?c(t.threadContext.parentComment.content,50):"Commenting directly on the main post":null},u=()=>{var f,j;return t&&((f=t.threadContext)==null?void 0:f.mode)==="reply"&&(j=t.threadContext)!=null&&j.parentComment?t.threadContext.parentComment.content:null},h=()=>{var j,I;if(!t)return null;const f=((I=(j=t.threadContext)==null?void 0:j.existingComments)==null?void 0:I.length)||0;return f===0?"No previous comments found":`${f} previous comment${f>1?"s":""} analyzed`},g=()=>{var j;if(!t)return null;const f=(j=t.threadContext)==null?void 0:j.existingComments;return!f||f.length===0?null:f.map((I,w)=>`${w+1}. ${I.authorName}: "${c(I.content,100)}"`).join(`

`)},k=()=>{if(!t)return null;const f=[];return t.authorName&&f.push(`Name: ${t.authorName}`),t.authorHeadline&&f.push(`Headline: ${t.authorHeadline}`),f.length>0?f.join(`
`):null},N=()=>n?"scanning":t!=null&&t.imageUrl?"success":"warning";return e.jsxs("div",{className:"context-awareness",children:[e.jsxs("div",{className:"context-header",children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4M12 8h.01"})]}),e.jsx("span",{children:"Context Analysis"}),n&&e.jsx("span",{className:"scanning-badge",children:"Scanning"})]}),e.jsxs("div",{className:"context-timeline",children:[e.jsx(ce,{icon:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"})]}),label:"Post Content",value:t?c(t.postContent,50):null,fullValue:(t==null?void 0:t.postContent)||null,status:r(),subLabel:"Unable to scrape post content"}),e.jsx(ce,{icon:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),label:"Author",value:t!=null&&t.authorName?`${t.authorName}${t.authorHeadline?` • ${c(t.authorHeadline,30)}`:""}`:null,fullValue:k(),status:s(),subLabel:"Author info not found"}),e.jsx(ce,{icon:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polyline",{points:"9 17 4 12 9 7"}),e.jsx("path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"})]}),label:d()||"Thread Mode",value:p(),fullValue:u(),status:i()}),e.jsx(ce,{icon:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),label:"Discussion Context",value:h(),fullValue:g(),status:a()}),e.jsxs("div",{className:`context-item ${N()}`,children:[e.jsx("div",{className:"context-item-line"}),e.jsx("div",{className:"context-item-icon",children:e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.jsx("polyline",{points:"21 15 16 10 5 21"})]})}),e.jsxs("div",{className:"context-item-content",children:[e.jsxs("div",{className:"context-item-header",children:[e.jsx("span",{className:"context-item-label",children:"Image Analysis"}),N()==="scanning"?e.jsx("div",{className:"context-status scanning",children:e.jsx("div",{className:"scan-spinner"})}):N()==="success"?e.jsx("div",{className:"context-status success",children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}):e.jsx("div",{className:"context-status warning",children:e.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",children:e.jsx("path",{d:"M12 9v4M12 17h.01"})})}),(t==null?void 0:t.imageUrl)&&l&&e.jsxs("label",{className:"image-analysis-toggle",onClick:f=>f.stopPropagation(),children:[e.jsx("input",{type:"checkbox",checked:o??!1,onChange:f=>l(f.target.checked)}),e.jsx("span",{className:`mini-toggle ${o?"active":""}`})]})]}),N()==="scanning"?e.jsx("div",{className:"context-item-value scanning",children:"Scanning..."}):t!=null&&t.imageUrl?e.jsx("div",{className:"context-item-value",children:o?"Will analyze image":"Image skipped (click toggle)"}):e.jsx("div",{className:"context-item-value warning",children:"No image in post"})]})]})]})]})}function Ee(){var t;try{return!!((t=chrome==null?void 0:chrome.runtime)!=null&&t.id)}catch{return!1}}async function de(t){if(console.log("[FloatingPanel] safeSendMessage called with type:",t.type),!Ee())return console.error("[FloatingPanel] Extension context invalidated!"),{success:!1,error:"Extension was updated. Please refresh the page."};try{console.log("[FloatingPanel] Sending message to background script...");const n=await chrome.runtime.sendMessage(t);return console.log("[FloatingPanel] Received response from background:",n),n}catch(n){if(console.error("[FloatingPanel] Error sending message:",n),n instanceof Error&&(n.message.includes("Extension context invalidated")||n.message.includes("Receiving end does not exist")))return{success:!1,error:"Extension was updated. Please refresh the page."};throw n}}const et=[{value:"professional",label:"Professional"},{value:"funny",label:"Funny"},{value:"question",label:"Question"},{value:"agree-add-value",label:"Agree & Add Value"}];function tt({postData:t,isScanning:n=!1,onClose:o,onInsertComment:l}){const[c,r]=y.useState("generate"),[s,i]=y.useState("professional"),[a,d]=y.useState(""),[p,u]=y.useState(!1),[h,g]=y.useState([]),[k,N]=y.useState([]),[f,j]=y.useState(null),[I,w]=y.useState(null),[S,v]=y.useState(!1),[C,A]=y.useState(!0),[T,M]=y.useState(null),[P,E]=y.useState([]),[z,V]=y.useState(null),[b,B]=y.useState(null),[q,ee]=y.useState(!1),[O,ie]=y.useState(!1),[G,Fe]=y.useState(null),He=!n&&t&&t.postContent&&S,ae=y.useRef(null),$e=()=>{const m=ae.current;m&&(m.style.height="auto",m.style.height=`${Math.min(m.scrollHeight,120)}px`)},le=y.useRef(null),H=y.useRef({isDragging:!1,startX:0,startY:0,initialX:0,initialY:0});y.useEffect(()=>{Ve(),pe()},[]),y.useEffect(()=>{t!=null&&t.imageUrl&&O&&ee(!0)},[t==null?void 0:t.imageUrl,O]);const Ve=async()=>{A(!0),M(null);try{const m=await de({type:"CHECK_CONFIG"});if(!m.success){v(!1),M(m.error||"Failed to check configuration"),A(!1);return}const x=m.settings;if(!x){v(!1),M("Settings not found. Please configure the extension in Settings."),A(!1);return}Fe({enableEmojis:x.enableEmojis??!1,languageLevel:x.languageLevel||"fluent",jobSearchContext:x.jobSearchContext||""});const L=x.persona&&x.persona.trim().length>0,R=x.apiKey&&x.apiKey.trim().length>0,_=L&&R;if(v(_),ie(x.enableImageAnalysis??!1),ee(x.enableImageAnalysis??!1),_)console.log("[FloatingPanel] Configuration check successful - extension ready");else{const W=[];L||W.push("persona"),R||W.push("API key"),M(`Please complete your setup in Settings: ${W.join(", ")}`)}}catch(m){console.error("[FloatingPanel] Configuration check failed:",m),v(!1),m!=null&&m.message?M(`Error: ${m.message}`):M("Failed to check configuration. Please try again.")}finally{A(!1)}},pe=async()=>{const m=await Je();E(m)};y.useEffect(()=>{const m=le.current;if(!m)return;const x=_=>{if(!_.target.closest(".panel-header"))return;H.current.isDragging=!0,H.current.startX=_.clientX,H.current.startY=_.clientY;const $=m.getBoundingClientRect();H.current.initialX=$.left,H.current.initialY=$.top,m.style.transition="none"},L=_=>{if(!H.current.isDragging)return;const W=_.clientX-H.current.startX,$=_.clientY-H.current.startY;m.style.right="auto",m.style.left=`${H.current.initialX+W}px`,m.style.top=`${H.current.initialY+$}px`},R=()=>{H.current.isDragging=!1,m.style.transition=""};return m.addEventListener("mousedown",x),document.addEventListener("mousemove",L),document.addEventListener("mouseup",R),()=>{m.removeEventListener("mousedown",x),document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",R)}},[]);const Oe=async()=>{if(!t){w("No post data available. Please try again.");return}if(!G||!S){w("Configuration not ready. Please wait...");return}u(!0),w(null),g([]),N([]);try{const m={type:"GENERATE_COMMENTS",payload:{postData:t,tone:s,enableEmojis:G.enableEmojis,languageLevel:G.languageLevel,userThoughts:a.trim()||void 0,enableImageAnalysis:q&&!!(t!=null&&t.imageUrl),jobSearchContext:G.jobSearchContext||void 0}},x=await de(m);x.success?x.scoredComments&&x.scoredComments.length>0?(N(x.scoredComments),g(x.scoredComments.map(L=>L.text))):x.comments&&g(x.comments):w(x.error||"Failed to generate comments")}catch(m){w(m instanceof Error?m.message:"An unexpected error occurred")}finally{u(!1)}},Ne=async(m,x)=>{j(m);try{const R={type:"REFINE_COMMENT",payload:{comment:k.length>0?k[m].text:h[m],refinementType:x}},_=await de(R);if(_.success&&_.comment){if(k.length>0){const $=[...k];$[m]={...$[m],text:_.comment},N($)}const W=[...h];W[m]=_.comment,g(W)}else _.error&&w(_.error)}catch(L){console.error("Refine error:",L)}finally{j(null)}},Se=async(m,x,L)=>{try{await navigator.clipboard.writeText(m),x!==void 0&&(V(x),setTimeout(()=>V(null),2e3)),L&&(B(L),setTimeout(()=>B(null),2e3))}catch(R){console.error("Copy failed:",R)}},Ge=async(m,x)=>{var R;t&&await Qe(m,t.postContent);const L=x!==void 0&&(((R=k[x])==null?void 0:R.text)||h[x])||m;l(m),de({type:"STREAM_UPDATE_PERSONA",payload:{originalAiSuggestion:L,finalUserVersion:m}}).catch(_=>{console.error("[FloatingPanel] Persona update error:",_)}),pe()},Ue=async()=>{await Ze(),E([])},Ye=()=>{if(Ee())try{chrome.runtime.sendMessage({type:"OPEN_OPTIONS"})}catch{w("Extension was updated. Please refresh the page.")}else w("Extension was updated. Please refresh the page.")},Xe=(m,x)=>m.length<=x?m:m.slice(0,x)+"...",Ke=m=>{const x=new Date(m),R=new Date().getTime()-x.getTime(),_=Math.floor(R/6e4),W=Math.floor(R/36e5),$=Math.floor(R/864e5);return _<1?"Just now":_<60?`${_}m ago`:W<24?`${W}h ago`:$<7?`${$}d ago`:x.toLocaleDateString()};return C?e.jsxs("div",{className:"panel",ref:le,children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{className:"panel-title",children:[e.jsx("div",{className:"panel-icon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"})})}),e.jsx("span",{children:"AI Comment Assistant"})]}),e.jsx("button",{className:"close-btn",onClick:o,children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsx("div",{className:"panel-content",children:e.jsxs("div",{className:"no-api-key",children:[e.jsx("div",{className:"no-api-key-icon",children:e.jsx("div",{className:"w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto"})}),e.jsx("h3",{children:"Checking Configuration..."}),e.jsx("p",{children:"Verifying your setup"})]})})]}):S?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"panel",ref:le,children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{className:"panel-title",children:[e.jsx("div",{className:"panel-icon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"})})}),e.jsx("span",{children:"AI Comment Assistant"})]}),e.jsx("button",{className:"close-btn",onClick:o,children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsxs("div",{className:"tabs",children:[e.jsxs("button",{className:`tab ${c==="generate"?"active":""}`,onClick:()=>r("generate"),children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"Generate"]}),e.jsxs("button",{className:`tab ${c==="history"?"active":""}`,onClick:()=>{r("history"),pe()},children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),"History"]})]}),e.jsx(De,{postData:t,isScanning:n,analyzeImage:q,onAnalyzeImageChange:ee}),e.jsx("div",{className:"panel-content",children:c==="generate"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"section-label",children:["Your key point ",e.jsx("span",{className:"optional-label",children:"(optional)"})]}),e.jsxs("div",{className:"thoughts-input-wrapper",children:[e.jsx("textarea",{ref:ae,className:"thoughts-input",value:a,onChange:m=>{d(m.target.value),$e()},placeholder:"e.g., Mention that we just launched a similar feature, or ask about their pricing model...",rows:2}),a&&e.jsx("button",{className:"clear-thoughts-btn",onClick:()=>{d(""),ae.current&&(ae.current.style.height="auto")},title:"Clear",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",children:"Tone"}),e.jsx("select",{className:"tone-select",value:s,onChange:m=>i(m.target.value),children:et.map(m=>e.jsx("option",{value:m.value,children:m.label},m.value))})]}),e.jsx("div",{className:"section",children:e.jsx("button",{className:"generate-btn",onClick:Oe,disabled:!He||p,children:n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"spinner"}),"Scanning Context..."]}):p?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"spinner"}),"Generating..."]}):t?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"Generate Comments"]}):e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 8v4M12 16h.01"})]}),"Waiting for Context..."]})})}),p&&e.jsxs("div",{className:"shimmer-container",children:[e.jsxs("div",{className:"shimmer-card",children:[e.jsx("div",{className:"shimmer-line long"}),e.jsx("div",{className:"shimmer-line medium"}),e.jsx("div",{className:"shimmer-line short"})]}),e.jsxs("div",{className:"shimmer-card",children:[e.jsx("div",{className:"shimmer-line long"}),e.jsx("div",{className:"shimmer-line medium"})]}),e.jsxs("div",{className:"shimmer-card",children:[e.jsx("div",{className:"shimmer-line medium"}),e.jsx("div",{className:"shimmer-line long"})]})]}),I&&e.jsxs("div",{className:"error-message",children:[e.jsxs("svg",{className:"error-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),e.jsx("span",{children:I})]}),h.length>0&&!p&&e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",children:"Generated Comments"}),e.jsx("div",{className:"results",children:h.map((m,x)=>{const L=k[x];return e.jsxs("div",{className:`comment-card ${f===x?"refining":""}`,children:[(L==null?void 0:L.recommendationTag)&&e.jsx("div",{className:"recommendation-tag",children:L.recommendationTag}),e.jsx("div",{className:"comment-text",children:m}),e.jsxs("div",{className:"comment-actions",children:[e.jsxs("div",{className:"action-group",children:[e.jsx("button",{className:"action-btn refine-btn",onClick:()=>Ne(x,"concise"),disabled:f!==null,title:"Make more concise",children:f===x?e.jsx("div",{className:"spinner-small"}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4"})}),e.jsx("span",{children:"Shorter"})]})}),e.jsx("button",{className:"action-btn refine-btn",onClick:()=>Ne(x,"rephrase"),disabled:f!==null,title:"Rephrase",children:f===x?e.jsx("div",{className:"spinner-small"}):e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("path",{d:"M1 4v6h6"}),e.jsx("path",{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"})]}),e.jsx("span",{children:"Rephrase"})]})})]}),e.jsxs("div",{className:"action-group",children:[e.jsx("button",{className:`action-btn ${z===x?"copied":""}`,onClick:()=>Se(m,x),title:"Copy to clipboard",children:z===x?e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}):e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),e.jsxs("button",{className:"insert-btn",onClick:()=>Ge(m,x),title:"Insert into comment box",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),"Insert"]})]})]})]},x)})})]})]}):e.jsx("div",{className:"history-section",children:P.length===0?e.jsxs("div",{className:"empty-history",children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]}),e.jsx("p",{children:"No comments in history yet."}),e.jsx("span",{children:"Generated comments will appear here."})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"history-header",children:[e.jsxs("span",{className:"history-count",children:[P.length," recent comments"]}),e.jsxs("button",{className:"clear-history-btn",onClick:Ue,children:[e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"Clear"]})]}),e.jsx("div",{className:"history-list",children:P.map(m=>e.jsxs("div",{className:"history-item",children:[e.jsxs("div",{className:"history-meta",children:[e.jsx("span",{className:"history-time",children:Ke(m.timestamp)}),e.jsx("span",{className:"history-post",children:Xe(m.postPreview,30)})]}),e.jsx("div",{className:"history-comment",children:m.comment}),e.jsxs("div",{className:"history-actions",children:[e.jsx("button",{className:`action-btn ${b===m.id?"copied":""}`,onClick:()=>Se(m.comment,void 0,m.id),children:b===m.id?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Copied"]}):e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),"Copy"]})}),e.jsxs("button",{className:"insert-btn",onClick:()=>l(m.comment),children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),"Insert"]})]})]},m.id))})]})})}),e.jsx("div",{className:"panel-footer",children:e.jsx("span",{children:"Phoenix Pilot - AI job search assistant for LinkedIn"})})]})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"panel",ref:le,children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{className:"panel-title",children:[e.jsx("div",{className:"panel-icon",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"})})}),e.jsx("span",{children:"AI Comment Assistant"})]}),e.jsx("button",{className:"close-btn",onClick:o,children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsx("div",{className:"panel-content",children:e.jsxs("div",{className:"no-api-key",children:[e.jsx("div",{className:"no-api-key-icon",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})})}),e.jsx("h3",{children:"Setup Required"}),e.jsx("p",{children:T||"Please complete your setup in Settings"}),e.jsxs("button",{className:"settings-btn",onClick:Ye,children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),"Open Settings"]})]})}),e.jsx("div",{className:"panel-footer",children:e.jsx("span",{children:"Phoenix Pilot - AI job search assistant for LinkedIn"})})]})})}const nt=[{value:"friendly",label:"Friendly"},{value:"professional",label:"Professional"},{value:"follow-up",label:"Follow-up"},{value:"informational",label:"Informational Interview"},{value:"networking",label:"Networking"}];function Pe(){var t;try{return!!((t=chrome==null?void 0:chrome.runtime)!=null&&t.id)}catch{return!1}}async function ot(t){if(!Pe())return{success:!1,error:"Extension was updated. Please refresh the page."};try{return await chrome.runtime.sendMessage(t)}catch(n){if(n instanceof Error&&(n.message.includes("Extension context invalidated")||n.message.includes("Receiving end does not exist")))return{success:!1,error:"Extension was updated. Please refresh the page."};throw n}}function st({conversationContext:t,isScanning:n=!1,onClose:o,onInsertReply:l}){const[c,r]=y.useState("friendly"),[s,i]=y.useState(""),[a,d]=y.useState(!1),[p,u]=y.useState([]),[h,g]=y.useState(null),[k,N]=y.useState(null),[f,j]=y.useState(!0),[I,w]=y.useState(""),[S,v]=y.useState(null),C=!n&&t&&t.messages.length>0&&f,A=y.useRef(null),T=y.useRef(null),M=y.useRef({isDragging:!1,startX:0,startY:0,initialX:0,initialY:0});y.useEffect(()=>{Ae().then(b=>{j(!!b.phoenixBaseUrl&&!!b.phoenixToken&&!!b.phoenixSessionId),w(b.phoenixSessionName||"")})},[]);const P=()=>{const b=A.current;b&&(b.style.height="auto",b.style.height=`${Math.min(b.scrollHeight,120)}px`)};y.useEffect(()=>{const b=T.current;if(!b)return;const B=O=>{if(!O.target.closest(".panel-header"))return;M.current.isDragging=!0,M.current.startX=O.clientX,M.current.startY=O.clientY;const G=b.getBoundingClientRect();M.current.initialX=G.left,M.current.initialY=G.top,b.style.transition="none"},q=O=>{if(!M.current.isDragging)return;const ie=O.clientX-M.current.startX,G=O.clientY-M.current.startY;b.style.right="auto",b.style.left=`${M.current.initialX+ie}px`,b.style.top=`${M.current.initialY+G}px`},ee=()=>{M.current.isDragging=!1,b.style.transition=""};return b.addEventListener("mousedown",B),document.addEventListener("mousemove",q),document.addEventListener("mouseup",ee),()=>{b.removeEventListener("mousedown",B),document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",ee)}},[]);const E=async()=>{if(!t){N("No conversation context available.");return}d(!0),N(null),u([]),g(null);try{const b=await Ae();if(!b.phoenixBaseUrl||!b.phoenixToken||!b.phoenixSessionId){j(!1);return}const B={type:"GENERATE_MESSAGES",payload:{conversationContext:t,tone:c,persona:b.persona,enableEmojis:b.enableEmojis??!1,languageLevel:b.languageLevel||"fluent",userThoughts:s.trim()||void 0,jobSearchContext:b.jobSearchContext||void 0}},q=await ot(B);q.success&&q.replies?(u(q.replies),q.summary&&g(q.summary)):N(q.error||"Failed to generate replies")}catch(b){N(b instanceof Error?b.message:"An unexpected error occurred")}finally{d(!1)}},z=async(b,B)=>{try{await navigator.clipboard.writeText(b),v(B),setTimeout(()=>v(null),2e3)}catch(q){console.error("Copy failed:",q)}},V=()=>{if(Pe())try{chrome.runtime.sendMessage({type:"OPEN_OPTIONS"})}catch{N("Extension was updated. Please refresh the page.")}else N("Extension was updated. Please refresh the page.")};return f?e.jsxs("div",{className:"panel messaging-panel",ref:T,children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{className:"panel-title",children:[e.jsx("div",{className:"panel-icon messaging",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),e.jsx("span",{children:"Conversation Co-pilot"})]}),e.jsx("button",{className:"close-btn",onClick:o,children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsx("div",{className:"messaging-context",children:n?e.jsxs("div",{className:"context-scanning",children:[e.jsx("div",{className:"spinner-small"}),e.jsx("span",{children:"Analyzing conversation..."})]}):t?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"context-participant",children:[e.jsx("span",{className:"context-label",children:"Chatting with:"}),e.jsx("span",{className:"context-value",children:t.participantName})]}),t.participantHeadline&&e.jsx("div",{className:"context-headline",children:t.participantHeadline}),e.jsxs("div",{className:"context-stats",children:[e.jsxs("span",{className:"stat",children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),t.messages.length," messages"]}),e.jsxs("span",{className:"stat",children:[e.jsx("span",{className:`sentiment-dot ${t.sentiment}`}),t.sentiment]})]}),h&&e.jsxs("div",{className:"ai-summary",children:[e.jsx("div",{className:"summary-topic",children:h.topic}),e.jsxs("div",{className:"summary-action",children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),h.suggestedAction]})]})]}):e.jsxs("div",{className:"context-empty",children:[e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 8v4M12 16h.01"})]}),e.jsx("span",{children:"Open a conversation to get started"})]})}),e.jsxs("div",{className:"panel-content",children:[e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"section-label",children:["Your goal for this reply ",e.jsx("span",{className:"optional-label",children:"(optional)"})]}),e.jsxs("div",{className:"thoughts-input-wrapper",children:[e.jsx("textarea",{ref:A,className:"thoughts-input",value:s,onChange:b=>{i(b.target.value),P()},placeholder:"e.g., Ask for a 20-min call, thank them for the intro, schedule next steps...",rows:2}),s&&e.jsx("button",{className:"clear-thoughts-btn",onClick:()=>{i(""),A.current&&(A.current.style.height="auto")},title:"Clear",children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"phoenix-session-badge",children:I?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),e.jsx("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),e.jsx("span",{children:I})]}):e.jsx("span",{className:"warning",children:"No Phoenix session"})})}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",children:"Conversation Tone"}),e.jsx("select",{className:"tone-select",value:c,onChange:b=>r(b.target.value),children:nt.map(b=>e.jsx("option",{value:b.value,children:b.label},b.value))})]}),e.jsx("div",{className:"section",children:e.jsx("button",{className:"generate-btn",onClick:E,disabled:!C||a,children:n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"spinner"}),"Analyzing Chat..."]}):a?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"spinner"}),"Crafting Replies..."]}):t?e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),"Suggest Replies"]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Open a Conversation"]})})}),a&&e.jsxs("div",{className:"shimmer-container",children:[e.jsxs("div",{className:"shimmer-card",children:[e.jsx("div",{className:"shimmer-line long"}),e.jsx("div",{className:"shimmer-line short"})]}),e.jsxs("div",{className:"shimmer-card",children:[e.jsx("div",{className:"shimmer-line medium"}),e.jsx("div",{className:"shimmer-line long"})]})]}),k&&e.jsxs("div",{className:"error-message",children:[e.jsxs("svg",{className:"error-icon",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),e.jsx("span",{children:k})]}),p.length>0&&!a&&e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",children:"Suggested Replies"}),e.jsx("div",{className:"results",children:p.map((b,B)=>e.jsxs("div",{className:"comment-card",children:[e.jsx("div",{className:"recommendation-tag",children:b.recommendationTag}),e.jsx("div",{className:"comment-text",children:b.text}),e.jsx("div",{className:"comment-actions",children:e.jsxs("div",{className:"action-group",children:[e.jsx("button",{className:`action-btn ${S===B?"copied":""}`,onClick:()=>z(b.text,B),title:"Copy to clipboard",children:S===B?e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})}):e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})}),e.jsxs("button",{className:"insert-btn",onClick:()=>l(b.text),title:"Insert into message box",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),"Send"]})]})})]},B))})]})]}),e.jsx("div",{className:"panel-footer",children:e.jsx("span",{children:"Phoenix Pilot - AI job search assistant for LinkedIn"})})]}):e.jsxs("div",{className:"panel messaging-panel",ref:T,children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{className:"panel-title",children:[e.jsx("div",{className:"panel-icon messaging",children:e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}),e.jsx("span",{children:"Conversation Co-pilot"})]}),e.jsx("button",{className:"close-btn",onClick:o,children:e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsx("div",{className:"panel-content",children:e.jsxs("div",{className:"no-api-key",children:[e.jsx("div",{className:"no-api-key-icon",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"})})}),e.jsx("h3",{children:"Phoenix Session Required"}),e.jsx("p",{children:"A Phoenix session is required to generate messages."}),e.jsx("button",{className:"settings-btn",onClick:V,children:"Open Settings"})]})}),e.jsx("div",{className:"panel-footer",children:e.jsx("span",{children:"Phoenix Pilot - AI job search assistant for LinkedIn"})})]})}const Ie={"business-mistake":{name:"Business Mistake & Lesson",prompt:"Write a post about a business mistake and lessons learned — in the style of a founder who honestly documents their journey. Format: hook → crisis → solution → key takeaway."}},rt=[{value:"professional",label:"Professional"},{value:"raw",label:"Raw/Authentic"},{value:"bold",label:"Bold"}];function it(){var t;try{return!!((t=chrome==null?void 0:chrome.runtime)!=null&&t.id)}catch{return!1}}async function at(t){if(!it())return{success:!1,error:"Extension was updated. Please refresh the page."};try{return await chrome.runtime.sendMessage(t)}catch(n){if(console.error("[PostAssistant] Error sending message:",n),n instanceof Error&&(n.message.includes("Extension context invalidated")||n.message.includes("Receiving end does not exist")))return{success:!1,error:"Extension was updated. Please refresh the page."};throw n}}function lt({onClose:t,onInsertPost:n}){const[o,l]=y.useState("business-mistake"),[c,r]=y.useState(""),[s,i]=y.useState(""),[a,d]=y.useState("raw"),[p,u]=y.useState(!1),[h,g]=y.useState(null),[k,N]=y.useState(null),[f,j]=y.useState(null),I=async()=>{var v;u(!0),j(null),g(null);try{let C="";o==="business-mistake"?C=Ie["business-mistake"].prompt:c.trim()?C=c.trim():C="Write a post about a business mistake and lessons learned — in the style of a founder who honestly documents their journey. Format: hook → crisis → solution → key takeaway.",console.log("[PostAssistant] Sending request:",{topic:C,tone:a,keyPoints:s.trim()||void 0});const A=await at({type:"generate-post",data:{topic:C,tone:a,keyPoints:s.trim()||void 0}});if(console.log("[PostAssistant] Received response:",A),A.success&&((v=A.data)!=null&&v.post))g(A.data.post),N(A.data.originalPost||A.data.post);else{const T=A.error||"Failed to generate post";console.error("[PostAssistant] Error:",T),j(T)}}catch(C){j(C.message||"An error occurred")}finally{u(!1)}},w=()=>{h&&(n(h),t())},S=v=>{if(!v)return"";const T=(P=>{const E=document.createElement("div");return E.textContent=P,E.innerHTML})(v).split(`
`),M=[];for(let P=0;P<T.length;P++){let E=T[P];const z=E.trim();if(z===""){M.push("<br/>");continue}if(z.startsWith("### ")){M.push(`<h3>${z.substring(4)}</h3>`);continue}if(z.startsWith("## ")){M.push(`<h2>${z.substring(3)}</h2>`);continue}if(z.startsWith("# ")){M.push(`<h1>${z.substring(2)}</h1>`);continue}E=E.replace(/\*\*([^*]+?)\*\*/g,"<strong>$1</strong>"),E=E.replace(/__([^_]+?)__/g,"<strong>$1</strong>"),E=E.replace(new RegExp("(?<!\\*)\\*([^*]+?)\\*(?!\\*)","g"),"<em>$1</em>"),E=E.replace(new RegExp("(?<!_)_([^_]+?)_(?!_)","g"),"<em>$1</em>"),E=E.replace(/#(\w+)/g,'<span style="color: #70b5f9; font-weight: 600;">#$1</span>'),M.push(`<p>${E}</p>`)}return M.join("")};return e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("div",{className:"panel-title",children:[e.jsx("div",{className:"panel-icon",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"}),e.jsx("circle",{cx:"7.5",cy:"14.5",r:"1.5"}),e.jsx("circle",{cx:"16.5",cy:"14.5",r:"1.5"})]})}),e.jsx("span",{children:"Post Assistant"})]}),e.jsx("button",{className:"close-btn",onClick:t,title:"Close",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),e.jsxs("div",{className:"panel-content",children:[e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",children:"Template"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("button",{onClick:()=>l("business-mistake"),style:{padding:"12px",background:o==="business-mistake"?"rgba(10, 102, 194, 0.2)":"rgba(255, 255, 255, 0.05)",border:`1px solid ${o==="business-mistake"?"rgba(10, 102, 194, 0.4)":"rgba(255, 255, 255, 0.1)"}`,borderRadius:"10px",color:"#fff",cursor:"pointer",textAlign:"left",fontSize:"13px",fontWeight:o==="business-mistake"?600:400},children:Ie["business-mistake"].name}),e.jsx("button",{onClick:()=>l("custom"),style:{padding:"12px",background:o==="custom"?"rgba(10, 102, 194, 0.2)":"rgba(255, 255, 255, 0.05)",border:`1px solid ${o==="custom"?"rgba(10, 102, 194, 0.4)":"rgba(255, 255, 255, 0.1)"}`,borderRadius:"10px",color:"#fff",cursor:"pointer",textAlign:"left",fontSize:"13px",fontWeight:o==="custom"?600:400},children:"Custom Topic"})]})]}),o==="custom"&&e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",children:"Topic"}),e.jsx("textarea",{className:"thoughts-input",placeholder:"Write about our new update, My thoughts on AI, etc.",value:c,onChange:v=>r(v.target.value),rows:3})]}),e.jsxs("div",{className:"section",children:[e.jsxs("div",{className:"section-label",children:["Key Points ",e.jsx("span",{className:"optional-label",children:"(optional)"})]}),e.jsx("textarea",{className:"thoughts-input",placeholder:"Add context, specific points, or details you want to include in the post...",value:s,onChange:v=>i(v.target.value),rows:3})]}),e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",children:"Tone"}),e.jsx("select",{className:"tone-select",value:a,onChange:v=>d(v.target.value),children:rt.map(v=>e.jsx("option",{value:v.value,children:v.label},v.value))})]}),e.jsx("button",{className:"generate-btn",onClick:I,disabled:p||o==="custom"&&!c.trim(),children:p?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"spinner"}),"Generating..."]}):e.jsxs(e.Fragment,{children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})}),"Generate Post"]})}),f&&e.jsxs("div",{className:"error-message",children:[e.jsxs("svg",{className:"error-icon",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 8v4M12 16h.01"})]}),e.jsx("span",{children:f})]}),h&&e.jsxs("div",{className:"section",children:[e.jsx("div",{className:"section-label",style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Generated Post"}),e.jsx("div",{className:"post-preview",style:{maxHeight:"300px",overflowY:"auto",padding:"16px",background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",fontSize:"14px",lineHeight:"1.6",color:"#fff",wordWrap:"break-word",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},dangerouslySetInnerHTML:{__html:S(k||h)}}),e.jsxs("button",{className:"insert-btn",onClick:w,style:{marginTop:"16px",width:"100%",padding:"12px 16px",background:"linear-gradient(135deg, #0a66c2 0%, #004182 100%)",border:"none",borderRadius:"8px",color:"#fff",fontSize:"14px",fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",transition:"all 0.2s ease"},onMouseEnter:v=>{v.currentTarget.style.background="linear-gradient(135deg, #004182 0%, #0a66c2 100%)",v.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:v=>{v.currentTarget.style.background="linear-gradient(135deg, #0a66c2 0%, #004182 100%)",v.currentTarget.style.transform="translateY(0)"},children:[e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M12 5v14M5 12l7-7 7 7"})}),"Insert into Post"]})]})]})]})}function _e(t){const n=document.createElement("button");return n.className="lai-ai-button",n.setAttribute("aria-label","Generate AI Comment"),n.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
      <circle cx="7.5" cy="14.5" r="1.5"/>
      <circle cx="16.5" cy="14.5" r="1.5"/>
    </svg>
  `,n.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),t()}),n}function oe(t,n){for(const o of n)try{const l=t.querySelector(o);if(l)return l}catch{console.warn(`[LinkedIn AI] Invalid selector: ${o}`)}return null}function X(t,n){const o=[],l=new Set;for(const c of n)try{t.querySelectorAll(c).forEach(s=>{l.has(s)||(l.add(s),o.push(s))})}catch{}return o}function ge(t){let n=t.parentElement;for(;n;){if(n.querySelectorAll('[data-view-name="reaction-button"], [data-view-name="feed-comment-button"], [data-view-name="feed-share-button"], [data-view-name="feed-send-as-message-button"]').length>=3)return n;const l=n.querySelectorAll("button");let c=0;if(l.forEach(r=>{var i;const s=(i=r.textContent)==null?void 0:i.trim();["Like","Comment","Repost","Send"].includes(s||"")&&c++}),c>=3)return n;n=n.parentElement}return null}function ct(){const t=document.querySelectorAll('[data-view-name="feed-full-update"]');return t.length>0?Array.from(t):X(document,[".feed-shared-update-v2",".occludable-update",'[data-urn*="activity"]','[data-urn*="ugcPost"]'])}function Te(t){var c;const n=t.querySelector('[data-view-name="feed-comment-button"]');if(n)return ge(n);const o=t.querySelectorAll("button");for(const r of o)if(((c=r.textContent)==null?void 0:c.trim())==="Comment")return ge(r);const l=t.querySelector('[data-view-name="reaction-button"]');return l?ge(l):oe(t,[".social-actions-button",".feed-shared-social-action-bar",".social-details-social-activity",'[class*="social-actions"]'])}function ne(t){let n=t.trim();return n=n.replace(/…?see (more|less)/gi,""),n=n.replace(/…?\s*more\s*$/gi,""),n=n.replace(/…?voir (plus|moins)/gi,""),n=n.replace(/…?mehr (anzeigen|ausblenden)/gi,""),n=n.replace(/…?ещё/gi,""),n=n.replace(/…?больше/gi,""),n=n.replace(/…?mostrar (más|menos)/gi,""),n=n.replace(/[\d,.]+ (reactions?|likes?|comments?|reposts?|shares?)/gi,""),n=n.replace(/\b(Like|Comment|Repost|Send|Share|Reply)\b\s*/g,(o,l)=>/^\s*$/.test(n.substring(n.indexOf(o)-5,n.indexOf(o)))?"":o),n=n.replace(/\s+/g," ").trim(),n}function dt(t){const n=t.querySelectorAll('[data-view-name="feed-commentary"]');if(n.length>0){const i=[];for(const a of n){let d=!1,p=a.parentElement;for(let u=0;u<8&&!(!p||p===t);u++){if(Array.from(p.querySelectorAll("button")).find(g=>{var k;return((k=g.textContent)==null?void 0:k.trim())==="Reply"})){d=!0;break}p=p.parentElement}d||i.push(a)}if(i.length>0){let d=i[0].parentElement;for(;d&&d!==t;){const h=d.querySelectorAll('[data-view-name="feed-commentary"]'),g=Array.from(d.querySelectorAll("button")).some(k=>{var N;return((N=k.textContent)==null?void 0:N.trim())==="Reply"});if(h.length>=i.length&&!g)break;d=d.parentElement}if(d&&d!==t){const h=ne(d.textContent||"");if(h.length>10)return h}const p=[];i.forEach(h=>{var k;const g=(k=h.textContent)==null?void 0:k.trim();g&&p.push(g)});const u=ne(p.join(`
`));if(u.length>10)return u}}const o=Te(t);if(o){let i=o.previousElementSibling;for(;i;){const a=ne(i.textContent||""),d=i.querySelectorAll("img").length>0,p=a.length;if(p>30&&(!d||p>100))return a;i=i.previousElementSibling}}const l=oe(t,['[class*="update-components-text"]',".feed-shared-update-v2__description",".feed-shared-text",".feed-shared-inline-show-more-text",".break-words",'[data-test-id="main-feed-activity-card__commentary"]']);if(l){const i=ne(l.textContent||"");if(i.length>10)return i}let c="",r=0;const s=t.children;for(let i=0;i<s.length;i++){const a=s[i];if(a===o||a.contains(o)||Array.from(a.querySelectorAll("button")).some(u=>{var h;return((h=u.textContent)==null?void 0:h.trim())==="Reply"}))continue;const p=ne(a.textContent||"");p.length>r&&p.length>30&&(c=p,r=p.length)}return c||""}function xe(t){var l,c;let n=!1;if(t.querySelectorAll('button, span[role="button"], a[role="button"], span.see-more, a.see-more').forEach(r=>{var a,d,p;const s=((a=r.textContent)==null?void 0:a.trim().toLowerCase())||"",i=((d=r.getAttribute("aria-label"))==null?void 0:d.toLowerCase())||"";(s==="more"||s==="...more"||s==="…more"||s==="…ещё"||s==="ещё"||s.includes("see more")||s.includes("show more")||s.includes("voir plus")||s.includes("mehr anzeigen")||s.includes("mostrar más")||s.includes("больше")||i.includes("see more")||i.includes("show more")||i.includes("expand"))&&(Array.from(((p=r.parentElement)==null?void 0:p.querySelectorAll("button"))||[]).some(h=>{var g;return((g=h.textContent)==null?void 0:g.trim())==="Reply"&&h!==r})||(r.click(),n=!0,console.log('[LinkedIn AI] Expanded "see more" text')))}),!n){const r=t.querySelectorAll('[data-view-name="feed-commentary"]');for(const s of r){const i=s.parentElement;if(i){const a=i.querySelector('button, span[role="button"]');a&&((l=a.textContent)!=null&&l.trim().toLowerCase().includes("more")||(c=a.textContent)!=null&&c.trim().toLowerCase().includes("ещё"))&&(a.click(),n=!0,console.log("[LinkedIn AI] Expanded truncated commentary"))}}}return n||X(t,[".feed-shared-inline-show-more-text__see-more-less-toggle",".see-more",'[data-control-name="see_more"]','button[aria-label*="see more"]','button[aria-label*="Show more"]']).forEach(s=>{s.click(),n=!0}),n}async function ut(t){xe(t)&&(await new Promise(l=>setTimeout(l,500)),xe(t)&&await new Promise(l=>setTimeout(l,300)))}function mt(t){var r,s,i,a,d,p,u,h,g,k,N,f,j,I;const n=t.querySelector('[data-view-name="feed-actor-image"]');if(n){const w=n.parentElement;if(w){const v=w.querySelectorAll('a[href*="/in/"], a[href*="/company/"]');for(const C of v){if(C===n)continue;const A=(r=C.textContent)==null?void 0:r.trim();if(A&&A.length>=2&&A.length<100)return A.split(`
`)[0].trim()}}const S=(s=n.parentElement)==null?void 0:s.parentElement;if(S){const v=S.querySelectorAll('a[href*="/in/"], a[href*="/company/"]');for(const C of v){if(C===n)continue;const A=C.querySelectorAll("span");for(const M of A){const P=(i=M.textContent)==null?void 0:i.trim();if(P&&P.length>=2&&P.length<80&&!P.includes("•")&&!P.includes("followers"))return P}const T=(p=(d=(a=C.textContent)==null?void 0:a.trim())==null?void 0:d.split(`
`)[0])==null?void 0:p.trim();if(T&&T.length>=2&&T.length<80)return T}}}const o=t.querySelector('[data-view-name="feed-header-text"]');if(o){const w=(g=(h=(u=o.textContent)==null?void 0:u.trim())==null?void 0:h.split(`
`)[0])==null?void 0:g.trim();if(w&&w.length>=2)return w}const l=oe(t,['[class*="update-components-actor__name"]',".feed-shared-actor__name",".feed-shared-actor__title",'a[class*="actor-name"]']);if(l){let w=((k=l.textContent)==null?void 0:k.trim())||"";if(w=w.split(`
`)[0].replace(/View.*profile/gi,"").replace(/•.*$/g,"").trim(),w)return w}const c=(N=t.children[0])==null?void 0:N.children;if(c)for(let w=0;w<Math.min(3,c.length);w++){const S=c[w],v=S==null?void 0:S.querySelector('a[href*="/in/"], a[href*="/company/"]');if(v){const C=(I=(j=(f=v.textContent)==null?void 0:f.trim())==null?void 0:j.split(`
`)[0])==null?void 0:I.trim();if(C&&C.length>=2&&C.length<80)return C}}return"Unknown Author"}function ht(t){var l,c,r,s,i;const n=t.querySelector('[data-view-name="feed-actor-image"]');if(n){const a=(l=n.parentElement)==null?void 0:l.parentElement;if(a){const d=a.querySelectorAll("span");for(const p of d){const u=(c=p.textContent)==null?void 0:c.trim();if(u&&u.length>=5&&u.length<200&&!u.includes("•")&&!u.match(/^\d+[hdwmy]$/)&&!u.match(/^\d+\s*(followers?|connections?)/i)&&!u.includes("Follow")&&!u.includes("Promoted")){const h=(r=n.parentElement)==null?void 0:r.querySelector('a[href*="/in/"], a[href*="/company/"]'),g=(s=h==null?void 0:h.textContent)==null?void 0:s.trim();if(g&&u!==g&&!u.startsWith(g))return u}}}}const o=oe(t,['[class*="update-components-actor__description"]',".feed-shared-actor__description",".feed-shared-actor__sub-description",".update-components-actor__sublabel"]);if(o){let a=((i=o.textContent)==null?void 0:i.trim())||"";if(a=a.split("•")[0].trim(),a=a.replace(/\d+\s*(followers?|connections?)/gi,"").trim(),a)return a}return""}function pt(t){const n=t.querySelectorAll('[data-view-name="feed-update-image"] img, [data-view-name="image"] img');for(const c of n){const r=c;if(r.closest('[data-view-name="feed-actor-image"]')||r.closest('[data-view-name="feed-header-actor-image"]'))continue;const s=r.src||r.getAttribute("data-delayed-url")||r.getAttribute("data-src");if(!s||s.startsWith("data:")||s.includes("/icons/")||s.includes("ghost-organization")||s.includes("ghost-person"))continue;const i=r.naturalWidth||r.width,a=r.naturalHeight||r.height;if(!(i&&a&&(i<100||a<100)))return s}const o=t.querySelectorAll("img");for(const c of o){const r=c;if(r.closest('[data-view-name="feed-actor-image"]')||r.closest('[data-view-name="feed-header-actor-image"]')||r.closest('[data-view-name="identity-module"]'))continue;const s=r.src||r.getAttribute("data-delayed-url");if(!s||s.startsWith("data:")||s.includes("/icons/")||s.includes("ghost-")||s.includes("logo"))continue;const i=r.naturalWidth||r.width,a=r.naturalHeight||r.height;if(i&&a&&(i<100||a<100))continue;const d=r.getBoundingClientRect();if(d.width>150&&d.height>100)return s}const l=[".update-components-image__image",".feed-shared-image__image",".ivm-view-attr__img--centered",'[class*="update-components-image"] img',"img[data-delayed-url]"];for(const c of l){const r=t.querySelectorAll(c);for(const s of r){const i=s;if(i.closest('.feed-shared-actor, [class*="actor"]'))continue;const a=i.src||i.getAttribute("data-delayed-url");if(a&&!a.startsWith("data:")&&!a.includes("/icons/"))return a}}}function Le(){return X(document,['[role="textbox"][contenteditable="true"]','.ql-editor[contenteditable="true"]','[data-placeholder="Add a comment…"]','[data-placeholder="Add a comment..."]','[aria-placeholder="Add a comment…"]','[aria-placeholder="Add a comment..."]','[contenteditable="true"][aria-label*="comment" i]','[contenteditable="true"][aria-label*="reply" i]','.editor-content [contenteditable="true"]']).find(l=>{const c=l.getBoundingClientRect();return c.width>0&&c.height>0})||null}function gt(t,n){try{const o=t.querySelectorAll('a[data-attribute-index], span[data-mention], [class*="mention"], a[href*="/in/"]'),l=[];o.forEach(p=>{l.push(p.cloneNode(!0))});const r=(t.textContent||"").match(/^(@[\w\s]+)\s*/),s=r?r[1]:null;t.innerHTML="",l.length>0?l.forEach(p=>{t.appendChild(p),t.appendChild(document.createTextNode(" "))}):s&&t.appendChild(document.createTextNode(s+" "));const i=document.createElement("p");i.textContent=n,t.appendChild(i),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!0,inputType:"insertText",data:n})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0})),t.focus();const a=window.getSelection(),d=document.createRange();return d.selectNodeContents(t),d.collapse(!1),a==null||a.removeAllRanges(),a==null||a.addRange(d),!0}catch(o){return console.error("[LinkedIn AI] Failed to inject text:",o),!1}}function ft(t){var c,r,s,i,a,d,p,u,h;const n=t.querySelectorAll('a[href*="/in/"]');for(const g of n){if(g.closest('[data-view-name="feed-commentary"]'))continue;const N=g.querySelector('span[aria-hidden="true"]');if(N){const w=(c=N.textContent)==null?void 0:c.trim();if(w&&w.length>=2&&w.length<100)return w}const f=g.querySelectorAll("p");for(const w of f){const S=(r=w.textContent)==null?void 0:r.trim();if(S&&S.length>=2&&S.length<80&&!S.includes("•")&&!S.includes("1st")&&!S.includes("2nd")&&!S.includes("3rd"))return S}const j=g.querySelectorAll("span");for(const w of j){const S=(s=w.textContent)==null?void 0:s.trim();if(S&&S.length>=2&&S.length<80&&!S.includes("•")&&!S.includes("1st")&&!S.includes("2nd")&&!S.includes("3rd"))return S}let I=((d=(a=(i=g.textContent)==null?void 0:i.trim())==null?void 0:a.split(`
`)[0])==null?void 0:d.trim())||"";if(I.includes("•")&&(I=I.split("•")[0].trim()),I&&I.length>=2&&I.length<80)return I}const l=oe(t,[".comments-post-meta__name-text",".comments-post-meta__name",'[class*="comments-post-meta__name"]']);if(l){const g=(h=(u=(p=l.textContent)==null?void 0:p.trim())==null?void 0:u.split(`
`)[0])==null?void 0:h.trim();if(g&&g.length>=2)return g}return"Unknown"}function Q(t){var n,o,l,c;try{if((((n=t.textContent)==null?void 0:n.trim())||"").length<10)return null;const s=ft(t);let i="";const a=t.querySelectorAll('[data-view-name="feed-commentary"]');if(a.length>0){const u=[];a.forEach(h=>{var k;const g=(k=h.textContent)==null?void 0:k.trim();g&&u.push(g)}),i=u.join(" ").trim()}if(!i||i.length<5){const u=[],h=document.createTreeWalker(t,NodeFilter.SHOW_TEXT,{acceptNode:k=>{var j;const N=k.parentElement;if(!N||N.tagName==="BUTTON"||N.closest('a[href*="/in/"]')&&!N.closest('[data-view-name="feed-commentary"]')||N.closest("time"))return NodeFilter.FILTER_REJECT;const f=((j=k.textContent)==null?void 0:j.trim())||"";return f.length<3||["Like","Reply","Report","1st","2nd","3rd","•"].includes(f)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});let g;for(;g=h.nextNode();){const k=((o=g.textContent)==null?void 0:o.trim())||"";k.length>=3&&k!==s&&u.push(k)}u.length>0&&(i=u.sort((k,N)=>N.length-k.length)[0])}if(!i||i.length<5){const u=oe(t,[".comments-comment-item__main-content",'[class*="comment-item__main-content"]',".comments-comment-item-content-body",".update-components-text"]);i=((l=u==null?void 0:u.textContent)==null?void 0:l.trim())||""}if(i=ne(i),!i||i.length<5)return null;const p=!!!t.querySelector('[data-view-name="comment-actor-picture"]')||!!t.closest('[class*="replies-list"]')||!!((c=t.parentElement)!=null&&c.closest('[class*="replies"]'));return{authorName:s,authorHeadline:"",content:i,isReply:p}}catch(r){return console.error("[LinkedIn AI] Error extracting comment:",r),null}}function Re(t){const n=t.querySelectorAll('[data-view-name="comment-container"]');if(n.length>0)return Array.from(n);const o=X(t,[".comments-comment-item",".comments-comment-entity",'article[class*="comments-comment-item"]']);if(o.length>0)return o;const l=Array.from(t.querySelectorAll('button, [data-view-name="comment-reply"]')).filter(s=>{var a;return((a=s.textContent)==null?void 0:a.trim())==="Reply"||s.getAttribute("data-view-name")==="comment-reply"}),c=[],r=new Set;for(const s of l){let i=s.parentElement;for(let a=0;a<8&&i;a++){if(i.querySelector('a[href*="/in/"]')&&i.textContent.length>20){r.has(i)||(r.add(i),c.push(i));break}i=i.parentElement}}return c}function xt(t,n=5){const o=[],l=new Set,c=Re(t);for(const r of c){if(o.length>=n)break;if(!t.contains(r))continue;const s=Q(r);if(s&&s.content.length>5){const i=s.content.slice(0,50).toLowerCase();l.has(i)||(l.add(i),o.push(s))}}return o}function bt(t,n){var k,N,f,j,I,w,S;const o=Le(),l=!!n;if(!o&&!l)return{isReply:!1,parentComment:null,threadParticipants:[]};let c=(o==null?void 0:o.closest('[class*="replies-list"], [class*="replies"]'))||null;const r=(o==null?void 0:o.querySelector('a[href*="/in/"], [data-mention], span[data-type="mention"]'))||null,s=((k=o==null?void 0:o.textContent)==null?void 0:k.trim())||"",i=s.length>0&&s!=="Add a comment..."&&s!=="Add a comment…",a=((N=o==null?void 0:o.getAttribute("aria-label"))==null?void 0:N.toLowerCase())||"",d=((f=o==null?void 0:o.getAttribute("aria-placeholder"))==null?void 0:f.toLowerCase())||"",p=a.includes("reply")||d.includes("reply");if(!l&&!c&&!r&&!i&&!p)return{isReply:!1,parentComment:null,threadParticipants:[]};let u=null;const h=[],g=Re(t);if(!u&&n&&(u=Q(n),u&&(h.push(u.authorName),console.log("[LinkedIn AI] Found parent comment from clicked element:",u.authorName)),!n.querySelector('[data-view-name="comment-actor-picture"]'))){const C=(I=(j=n.parentElement)==null?void 0:j.parentElement)==null?void 0:I.parentElement;if(C!=null&&C.parentElement){const A=Array.from(C.parentElement.children),T=A.indexOf(C);for(let M=T-1;M>=0;M--){const E=A[M].querySelector('[data-view-name="comment-container"]');if(E&&!!E.querySelector('[data-view-name="comment-actor-picture"]')){const V=Q(E);V&&V.authorName!==(u==null?void 0:u.authorName)&&(h.push(V.authorName),console.log("[LinkedIn AI] Found thread parent:",V.authorName));break}}}}if(!u&&c){for(const v of g)if(v.contains(c)){u=Q(v),u&&h.push(u.authorName);break}}if(!u&&(r||i)){const v=((S=(w=r==null?void 0:r.textContent)==null?void 0:w.trim())==null?void 0:S.replace("@",""))||s;if(v)for(const C of g){const A=Q(C);if(A&&A.authorName.toLowerCase().includes(v.toLowerCase())){u=A,h.push(A.authorName);break}}}if(!u&&o){const v=o.getBoundingClientRect();let C=null,A=1/0;for(const T of g){const M=T.getBoundingClientRect(),P=Math.abs(M.bottom-v.top);P<A&&P<200&&(A=P,C=Q(T))}C&&(u=C,h.push(C.authorName))}for(const v of g){const C=Q(v);C&&C.authorName!=="Unknown"&&!h.includes(C.authorName)&&h.push(C.authorName)}return{isReply:!0,parentComment:u,threadParticipants:h}}function vt(t){const n=t.closest('[data-view-name="feed-full-update"]');if(n)return n;let o=t.parentElement;for(let c=0;c<15&&o;c++){const r=o.querySelector(':scope > [data-view-name="feed-full-update"]');if(r)return r;const s=o.querySelector('[data-view-name="feed-full-update"]');if(s&&o.contains(t)&&o.contains(s))return s;o=o.parentElement}const l=[".feed-shared-update-v2",".occludable-update",'[data-urn*="activity"]','[data-urn*="ugcPost"]'];for(const c of l){const r=t.closest(c);if(r)return r}return t}function yt(t){if(t.closest('[data-view-name="comment-container"]')||t.closest('.comments-comment-item, .comments-comment-entity, [class*="comments-comment-item"]'))return!0;let l=t.parentElement;for(let c=0;c<4&&l;c++){const r=l.querySelectorAll("button");let s=!1,i=!1;if(r.forEach(a=>{var p,u;const d=(p=a.textContent)==null?void 0:p.trim();d==="Reply"&&(s=!0),d==="Like"&&!((u=a.getAttribute("data-view-name"))!=null&&u.includes("reaction"))&&(i=!0)}),s&&i)return!0;l=l.parentElement}return!1}function wt(t,n){if(t.contains(n))return t;let o=t.parentElement;for(let l=0;l<5&&o;l++){if(o.querySelector('[data-view-name="comment-container"]')&&o.contains(t))return o;o=o.parentElement}return t}async function jt(t){try{const n=vt(t);if(!n)return console.warn("[LinkedIn AI] Could not find main post container"),null;const o=yt(t),l=mt(n),c=ht(n);await ut(n);const r=dt(n);if(!r)return console.warn("[LinkedIn AI] Could not extract post content"),null;const s=pt(n),i=wt(n,t),a=xt(i,5);let d;const p=[];if(o){const h=t.closest('[data-view-name="comment-container"]')||void 0,g=bt(i,h);d=g.parentComment||void 0,p.push(...g.threadParticipants)}for(const h of a)p.includes(h.authorName)||p.push(h.authorName);const u={mode:o?"reply":"post",parentComment:d,existingComments:a,threadParticipants:p};return console.log("[LinkedIn AI] Scraped data:",{authorName:l,authorHeadline:c,postContentLength:r.length,hasImage:!!s,isReplyMode:o,parentComment:d==null?void 0:d.authorName,existingCommentsCount:a.length}),{authorName:l,authorHeadline:c,postContent:r,imageUrl:s,threadContext:u}}catch(n){return console.error("[LinkedIn AI] Error scraping post data:",n),null}}function he(){return X(document,['[role="dialog"][aria-label*="Start a post" i]','[role="dialog"][aria-label*="Create a post" i]','[role="dialog"][aria-label*="post" i]','[data-view-name*="share"]',".share-box-feed-entry__modal",".share-box__modal",".artdeco-modal",'[class*="share-box"]','[class*="share-modal"]']).find(l=>{const c=l.getBoundingClientRect();return c.width>0&&c.height>0})||null}function je(){const t=['[role="textbox"][contenteditable="true"]','.ql-editor[contenteditable="true"]','[data-placeholder*="What do you want to talk about"]','[aria-placeholder*="What do you want to talk about"]','[contenteditable="true"][aria-label*="post" i]','[contenteditable="true"][aria-label*="Text editor" i]',".ql-container .ql-editor"],n=he();if(n){const c=X(n,t);if(c.length>0){const r=c.find(s=>{const i=s.getBoundingClientRect();return i.width>0&&i.height>0});if(r)return r}}return X(document,t).find(c=>{const r=c.getBoundingClientRect();return r.width>0&&r.height>0})||null}function kt(){var l;const t=he();if(!t)return null;const o=X(t,[".share-box__toolbar",".share-box-feed-entry__toolbar",".share-box__footer",".share-creation-state__toolbar",'[class*="share-box"][class*="toolbar"]','[class*="share-box"][class*="footer"]',".artdeco-modal__actionbar"]);if(o.length===0){const c=t.querySelectorAll("button");for(const r of c){const s=((l=r.getAttribute("aria-label"))==null?void 0:l.toLowerCase())||"";if(s.includes("photo")||s.includes("video")||s.includes("media"))return r.parentElement}}return o[0]||null}function Ct(t,n){try{t.innerHTML="";const o=document.createElement("p");o.textContent=n,t.appendChild(o),t.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!0,inputType:"insertText",data:n})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.dispatchEvent(new KeyboardEvent("keyup",{bubbles:!0})),t.focus();const l=window.getSelection(),c=document.createRange();return c.selectNodeContents(t),c.collapse(!1),l==null||l.removeAllRanges(),l==null||l.addRange(c),!0}catch(o){return console.error("[LinkedIn AI] Failed to inject text into post editor:",o),!1}}function Nt(){const t=window.getSelection();return(t==null?void 0:t.toString().trim())||""}function St(){const t=Nt();return!t||t.length<10?null:{authorName:"Selected Text",authorHeadline:"",postContent:t,threadContext:{mode:"post",existingComments:[],threadParticipants:[]}}}const Y={messageItem:[".msg-s-message-list__event",".msg-s-event-listitem",'[class*="msg-s-event-listitem"]'],messageContent:[".msg-s-event-listitem__body",".msg-s-message-group__content",'[class*="msg-s-event-listitem__body"]',"p.msg-s-event-listitem__body"],messageTimestamp:[".msg-s-message-list__time-heading",".msg-s-message-group__timestamp","time"],participantName:[".msg-overlay-bubble-header__title",".msg-thread__link-to-profile",".msg-entity-lockup__entity-title",'[class*="msg-overlay-bubble-header__title"]',"h2.msg-entity-lockup__entity-title"],participantHeadline:[".msg-entity-lockup__entity-subtitle",".msg-overlay-bubble-header__subtitle",'[class*="msg-entity-lockup__entity-subtitle"]'],messageInput:[".msg-form__contenteditable",".msg-form__message-texteditor",'[contenteditable="true"][role="textbox"]',"div.msg-form__contenteditable"],myMessageIndicator:[".msg-s-message-group--selfsend",'[class*="selfsend"]']};function re(t,n){for(const o of n){const l=t.querySelector(o);if(l)return l}return null}function At(t,n){for(const o of n){const l=t.querySelectorAll(o);if(l.length>0)return Array.from(l)}return[]}function Z(){return!!(window.location.pathname.includes("/messaging")||window!==window.top&&!!document.querySelector('.msg-form, .msg-form__contenteditable, [class*="msg-form"], .msg-overlay-bubble-header'))}function It(){const t=document.querySelector(".global-nav__me-photo, .feed-identity-module__actor-meta"),n=t==null?void 0:t.getAttribute("alt");if(n)return n;const o=document.querySelector(".global-nav__me .t-14");return o!=null&&o.textContent?o.textContent.trim():"Me"}function Be(){var o,l;const t=re(document,Y.participantName),n=re(document,Y.participantHeadline);return{name:((o=t==null?void 0:t.textContent)==null?void 0:o.trim())||"Unknown",headline:((l=n==null?void 0:n.textContent)==null?void 0:l.trim())||void 0}}function Mt(t){const n=t.closest(".msg-s-message-group");if(n){for(const o of Y.myMessageIndicator)if(n.matches(o)||n.querySelector(o))return!0}for(const o of Y.myMessageIndicator)if(t.matches(o)||t.closest(o))return!0;return!1}function Et(t=10){var s,i;const n=[],o=It(),l=Be(),r=At(document,Y.messageItem).slice(-t);for(const a of r){const d=re(a,Y.messageContent),p=(s=d==null?void 0:d.textContent)==null?void 0:s.trim();if(!p||p.length<2)continue;const u=Mt(a),h=re(a,Y.messageTimestamp),g=(i=h==null?void 0:h.textContent)==null?void 0:i.trim();n.push({sender:u?"me":"other",senderName:u?o:l.name,content:p,timestamp:g})}return n}function Pt(t){if(t.length===0)return"neutral";const o=t.slice(-5).map(d=>d.content.toLowerCase()).join(" "),c=["great","awesome","thanks","thank you","excellent","love","excited","looking forward","happy","pleased"].some(d=>o.includes(d)),s=["price","cost","budget","deal","offer","proposal","terms","negotiate","discount","rate"].some(d=>o.includes(d)),i=t[t.length-1],a=i.sender==="me";return i.content.length<20,s?"negotiating":c?"positive":a&&t.length>3?"cold":"neutral"}function _t(t){if(t.length===0)return"General conversation";const n=t.map(l=>l.content).join(" ").toLowerCase(),o=[{pattern:/recruiter|talent|hiring|role|position|opportunity/i,topic:"Recruiter outreach"},{pattern:/informational|your experience|career path/i,topic:"Informational interview"},{pattern:/thank you|thanks for|great speaking/i,topic:"Post-interview follow-up"},{pattern:/application|applied|interview|screening/i,topic:"Application follow-up"},{pattern:/follow.?up|checking in|touch base/i,topic:"Follow-up"},{pattern:/connect|mutual|introduction/i,topic:"Networking connection"},{pattern:/meeting|call|schedule|calendar|zoom|coffee/i,topic:"Scheduling a meeting"},{pattern:/question|help|advice|recommend/i,topic:"Seeking advice"}];for(const{pattern:l,topic:c}of o)if(l.test(n))return c;return"Professional discussion"}function Tt(t){const n=t.map(o=>o.content).join(" ").toLowerCase();return/recruiter|talent|hiring|role|position|opportunity/.test(n)?"recruiter-inbound":/informational|your experience|career path/.test(n)?"informational":/thank you|thanks for|great speaking/.test(n)?"thank-you":/follow.?up|checking in|touch base/.test(n)?"follow-up":/connect|mutual|introduction/.test(n)?"connection-request":/cold|reaching out|came across your profile/.test(n)?"cold-outreach":"general"}async function Lt(){try{if(!Z())return console.log("[LinkedIn AI] Not on messaging page"),null;const t=Be(),n=Et(10);if(n.length===0)return console.log("[LinkedIn AI] No messages found in conversation"),null;const o=n[n.length-1],l=_t(n),c=Pt(n),r=Tt(n),s=/recruiter|talent|hiring/i.test(`${t.name} ${t.headline||""} ${n.map(i=>i.content).join(" ")}`);return console.log("[LinkedIn AI] Scraped conversation:",{participant:t.name,messageCount:n.length,topic:l,sentiment:c,lastMessageFrom:o.sender}),{participantName:t.name,participantHeadline:t.headline,messages:n,topic:l,sentiment:c,lastMessageFrom:o.sender,detectedIntent:r,isRecruiter:s}}catch(t){return console.error("[LinkedIn AI] Error scraping conversation:",t),null}}function Rt(){return re(document,Y.messageInput)}function Bt(t){const n=Rt();if(!n)return console.error("[LinkedIn AI] Message input not found"),!1;try{n.focus(),n.innerHTML="";const o=document.createElement("p");return o.textContent=t,n.appendChild(o),n.dispatchEvent(new Event("input",{bubbles:!0})),n.dispatchEvent(new Event("change",{bubbles:!0})),setTimeout(()=>{n.innerText=t,n.dispatchEvent(new Event("input",{bubbles:!0}))},50),!0}catch(o){return console.error("[LinkedIn AI] Error injecting text:",o),!1}}const qt=`
  .lai-ai-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, #0a66c2 0%, #0077b5 100%);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(10, 102, 194, 0.3);
    margin-left: 8px;
    align-self: center;
    flex-shrink: 0;
  }
  
  .lai-ai-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(10, 102, 194, 0.4);
  }
  
  .lai-ai-button:active {
    transform: scale(0.95);
  }
  
  .lai-ai-button svg {
    width: 18px;
    height: 18px;
    color: white;
  }

  .lai-ai-button::after {
    content: 'AI Comment';
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) scale(0.9);
    padding: 6px 10px;
    background: #1a1a2e;
    color: white;
    font-size: 12px;
    font-weight: 500;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .lai-ai-button::before {
    content: '';
    position: absolute;
    bottom: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #1a1a2e;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  .lai-ai-button:hover::after,
  .lai-ai-button:hover::before {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }

  .lai-ai-button:hover::before {
    transform: translateX(-50%);
  }

  .lai-selection-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    background: linear-gradient(135deg, #0a66c2 0%, #0077b5 100%);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(10, 102, 194, 0.4);
    z-index: 999998;
    transition: all 0.2s ease;
  }

  .lai-selection-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(10, 102, 194, 0.5);
  }

  .lai-selection-btn svg {
    width: 18px;
    height: 18px;
  }

  /* Messaging AI Button */
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

  .lai-messaging-ai-button:active {
    transform: scale(0.95);
  }

  .lai-messaging-ai-button svg {
    width: 16px;
    height: 16px;
    color: white;
  }

  /* Post Assistant Sparkle Button */
  .lai-post-sparkle-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
    margin: 0 4px;
    flex-shrink: 0;
    align-self: center;
  }
  
  .lai-post-sparkle-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
    background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);
  }
  
  .lai-post-sparkle-button:active {
    transform: scale(0.95);
  }
  
  .lai-post-sparkle-button svg {
    width: 18px;
    height: 18px;
    color: white;
  }
`;let F=null,J=null,U=null,ke=null;function zt(){if(document.getElementById("lai-content-styles"))return;const t=document.createElement("style");t.id="lai-content-styles",t.textContent=qt,document.head.appendChild(t)}function D(){if(J)return J;J=document.createElement("div"),J.id="lai-panel-container";const t=J.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=Qt(),t.appendChild(n);const o=document.createElement("div");return o.id="lai-panel-mount",t.appendChild(o),document.body.appendChild(J),J}function ue(t,n){const c=D().shadowRoot.getElementById("lai-panel-mount");F||(F=ye.createRoot(c)),F.render(e.jsx(we.StrictMode,{children:e.jsx(tt,{postData:t,isScanning:n,onClose:K,onInsertComment:Yt})}))}function fe(t,n){const c=D().shadowRoot.getElementById("lai-panel-mount");F||(F=ye.createRoot(c)),F.render(e.jsx(we.StrictMode,{children:e.jsx(st,{conversationContext:t,isScanning:n,onClose:K,onInsertReply:Ft})}))}function Wt(){const o=D().shadowRoot.getElementById("lai-panel-mount");F||(F=ye.createRoot(o)),F.render(e.jsx(we.StrictMode,{children:e.jsx(lt,{onClose:K,onInsertPost:Ht})}))}function Ft(t){Bt(t)&&K()}function Ht(t){const n=je();n?Ct(n,t)&&K():navigator.clipboard.writeText(t).then(()=>{alert("Post copied to clipboard! Paste it into the post editor."),K()}).catch(()=>{console.error("[LinkedIn AI] Failed to copy to clipboard")})}function $t(){D(),Wt()}function Vt(){D(),fe(null,!0),(async()=>{await new Promise(n=>setTimeout(n,200));const t=await Lt();fe(t||null,!1)})()}function Ot(t){var c;const n=['[role="textbox"][contenteditable="true"]','[contenteditable="true"][aria-label*="comment" i]','[contenteditable="true"][aria-label*="reply" i]','[aria-placeholder="Add a comment…"]','[aria-placeholder="Add a comment..."]','[data-placeholder="Add a comment…"]','[data-placeholder="Add a comment..."]','.ql-editor[contenteditable="true"]',".comments-comment-box__form-container .ql-editor",".comments-comment-texteditor .ql-editor",'.editor-content [contenteditable="true"]'];for(const r of n){const s=t.querySelectorAll(r);for(const i of s){const a=i.getBoundingClientRect();if(a.width>0&&a.height>0)return i}}const o=[],l=t.getBoundingClientRect();for(const r of n){const s=document.querySelectorAll(r);for(const i of s){const a=i.getBoundingClientRect();if(a.width>0&&a.height>0){const d=Math.abs(a.top-l.top);o.push({box:i,distance:d})}}}return o.sort((r,s)=>r.distance-s.distance),((c=o[0])==null?void 0:c.box)||null}function Gt(t,n=!1){D(),ue(null,!0),Ce(),(async()=>{let o=t.closest('[data-view-name="feed-full-update"]')||t.closest(".feed-shared-update-v2")||t.closest(".occludable-update")||t.closest('[data-urn*="activity"]');if(!o){let r=t.parentElement;for(let s=0;s<15&&r;s++){const i=r.querySelector('[data-view-name="feed-full-update"]');if(i){o=i;break}r=r.parentElement}}o&&xe(o);const l=n?400:200;await new Promise(r=>setTimeout(r,l)),ke=Ot(t);const c=await jt(t);c?ue(c,!1):(ue(null,!1),Xt())})()}function Ut(t){D();const n={...t,threadContext:t.threadContext||{mode:"post",existingComments:[],threadParticipants:[]}};ue(n,!1),Ce()}function K(){F&&(F.unmount(),F=null),ke=null}function Yt(t){let n=ke;if(n){const o=n.getBoundingClientRect();(!document.body.contains(n)||o.width===0&&o.height===0)&&(n=null)}if(n||(n=Le()),n&&gt(n,t)){K();return}navigator.clipboard.writeText(t).then(()=>{alert("Comment copied to clipboard! Paste it into the comment box."),K()}).catch(()=>{console.error("[LinkedIn AI] Failed to copy to clipboard")})}function qe(t,n=!1){Gt(t,n)}function Xt(){U||(U=document.createElement("button"),U.className="lai-selection-btn",U.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 7V4h16v3"/>
      <path d="M9 20h6"/>
      <path d="M12 4v16"/>
    </svg>
    Analyze Selected Text
  `,U.addEventListener("click",()=>{const t=St();t?(Ut(t),Ce()):alert("Please highlight some text from a LinkedIn post first.")}),document.body.appendChild(U))}function Ce(){U&&(U.remove(),U=null)}function be(){ct().forEach(n=>{const o=n;if(o.dataset.laiProcessed)return;o.dataset.laiProcessed="true";const l=Te(n);if(l){const c=l.closest('[data-view-name="comment-container"]'),r=Array.from(l.querySelectorAll("button")).some(i=>{var a;return((a=i.textContent)==null?void 0:a.trim())==="Reply"}),s=l.closest('.comments-comment-item, .comments-comment-entity, [class*="comments-comment-item"], .comments-comments-list');if(c||s||r)return;if(!l.querySelector(".lai-ai-button")){const i=_e(()=>{qe(i,!1)});l.appendChild(i)}}ze(n)})}function Kt(t){var c,r;const n=t.querySelector('[data-view-name="comment-reply"]');if(n){n.click(),console.log("[LinkedIn AI] Clicked Reply button (by data-view-name)");return}const o=t.querySelectorAll('button, span[role="button"]');for(const s of o)if(((c=s.textContent)==null?void 0:c.trim())==="Reply"){s.click(),console.log("[LinkedIn AI] Clicked Reply button (by text)");return}const l=(r=t.querySelector('button[aria-label*="Reply"], button[aria-label*="reply"], [class*="reply-action"], .comments-comment-social-bar__reply-action'))==null?void 0:r.closest("button");l&&(l.click(),console.log("[LinkedIn AI] Clicked Reply button (by selector)"))}function ze(t){const n=t.querySelectorAll('[data-view-name="comment-container"]');if(n.length>0){n.forEach(c=>{const r=c.querySelector('[data-view-name="comment-reply"]')||Array.from(c.querySelectorAll("button")).find(s=>{var i;return((i=s.textContent)==null?void 0:i.trim())==="Reply"});me(c,r||void 0)});return}const o=t.querySelectorAll('.comments-comment-item, .comments-comment-entity, article[class*="comments-comment"]');if(o.length>0){o.forEach(c=>{me(c)});return}const l=Array.from(t.querySelectorAll("button")).filter(c=>{var r;return((r=c.textContent)==null?void 0:r.trim())==="Reply"});for(const c of l){let r=c.parentElement;for(let s=0;s<8&&r;s++){if(r.querySelector('a[href*="/in/"]')&&r.textContent.length>20){me(r,c);break}r=r.parentElement}}}function me(t,n){var r;const o=t;if(o.dataset.laiCommentProcessed)return;o.dataset.laiCommentProcessed="true";let l=null;const c=n||t.querySelector('[data-view-name="comment-reply"]');if(c){let s=c.parentElement;for(let i=0;i<4&&s;i++){if(s.children.length>=2&&s.querySelector("button")!==null){l=s;break}s=s.parentElement}}if(!l&&n){let s=n.parentElement;for(let i=0;i<3&&s;i++){const a=s.querySelectorAll("button");let d=!1,p=!1;if(a.forEach(u=>{var g;const h=(g=u.textContent)==null?void 0:g.trim();h==="Like"&&(d=!0),h==="Reply"&&(p=!0)}),d&&p){l=s;break}s=s.parentElement}}if(!l){const s=[".comments-comment-social-bar",'[class*="comment-social-bar"]',".comments-comment-item__action-bar"];for(const i of s)if(l=t.querySelector(i),l)break}if(!l){const s=t.querySelectorAll("button");for(const i of s){const a=(r=i.textContent)==null?void 0:r.trim();if(a==="Reply"||a==="Like"){l=i.parentElement;break}}}if(l&&!l.querySelector(".lai-ai-button")){const s=_e(()=>{Kt(t),setTimeout(()=>{qe(s,!0)},300)});s.style.width="28px",s.style.height="28px",s.style.marginLeft="4px",s.style.alignSelf="center",l.appendChild(s)}}function Jt(){document.querySelectorAll('[data-view-name="feed-full-update"], .feed-shared-update-v2, .occludable-update, [data-urn*="activity"]').forEach(o=>{ze(o)}),document.querySelectorAll('[data-view-name="comment-container"]').forEach(o=>{if(o.dataset.laiCommentProcessed)return;const c=o.querySelector('[data-view-name="comment-reply"]')||Array.from(o.querySelectorAll("button")).find(r=>{var s;return((s=r.textContent)==null?void 0:s.trim())==="Reply"});me(o,c||void 0)})}function se(){const t=document.createElement("button");return t.className="lai-post-sparkle-button",t.setAttribute("aria-label","AI Post Assistant"),t.title="AI Post Assistant",t.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
      <circle cx="7.5" cy="14.5" r="1.5"/>
      <circle cx="16.5" cy="14.5" r="1.5"/>
    </svg>
  `,t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),$t()}),t}function te(){var c;if(document.querySelector(".lai-post-sparkle-button"))return;const t=document.querySelectorAll("div");for(const r of t)if(r.children.length===2){const s=r.children[0],i=r.children[1];if(s.tagName==="A"&&((c=i.textContent)==null?void 0:c.trim())==="Start a post"){const a=r.getBoundingClientRect();if(a.width>200&&a.height>30){const d=se();d.style.alignSelf="center",d.style.marginLeft="8px",d.style.marginRight="4px",r.appendChild(d),console.log("[LinkedIn AI] Post Assistant button injected into Start a post row");return}}}const n=he();let o=kt();if(!o){const r=[".share-box__toolbar",".share-box-feed-entry__toolbar",".share-box__footer",".share-creation-state__toolbar",".share-box__actions",".share-box-feed-entry__actions",".artdeco-modal__actionbar",'[class*="share-box"][class*="toolbar"]','[class*="share-box"][class*="footer"]','[class*="share-box"][class*="actions"]'];for(const s of r){const i=document.querySelector(s);if(i){const a=i.getBoundingClientRect();if(a.width>0&&a.height>0){o=i;break}}}}if(o){const r=se();o.insertBefore(r,o.firstChild),console.log("[LinkedIn AI] Post Assistant button injected into toolbar");return}const l=je();if(l&&l.parentElement){let r=l.parentElement;for(let s=0;s<3;s++)if(r){const i=r.querySelector('[class*="toolbar"], [class*="footer"], [class*="actions"], [class*="button"]');if(i){const a=se();i.insertBefore(a,i.firstChild),console.log("[LinkedIn AI] Post Assistant button injected near editor");return}r=r.parentElement}if(l.parentElement){const s=se();l.parentElement.insertBefore(s,l.nextSibling),console.log("[LinkedIn AI] Post Assistant button injected after editor");return}}if(n){const r=se();r.style.position="absolute",r.style.top="10px",r.style.right="10px",r.style.zIndex="10000",n.appendChild(r),console.log("[LinkedIn AI] Post Assistant button injected as absolute positioned")}}function ve(){const t=[".msg-form__footer",".msg-form__left-actions",".msg-form__right-actions",".msg-form__content-container",".msg-form"];let n=null;for(const i of t)if(n=document.querySelector(i),n)break;if(!n){console.log("[LinkedIn AI] Message form footer not found");return}if(document.querySelector(".lai-messaging-ai-button"))return;const o=document.createElement("button");o.className="lai-messaging-ai-button",o.type="button",o.title="AI Reply Assistant",o.innerHTML=`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
    </svg>
  `,o.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),Vt()});const l=document.querySelector(".msg-form__left-actions");if(l){l.appendChild(o),console.log("[LinkedIn AI] Messaging AI button injected into left actions");return}const c=document.querySelector(".msg-form__right-actions");if(c){c.insertBefore(o,c.firstChild),console.log("[LinkedIn AI] Messaging AI button injected into right actions");return}const r=document.querySelector(".msg-form__footer");if(r){r.insertBefore(o,r.firstChild),console.log("[LinkedIn AI] Messaging AI button injected into footer");return}const s=document.querySelector('.msg-form__send-button, .msg-form__send-btn, button[type="submit"][class*="send"]');if(s&&s.parentElement){s.parentElement.insertBefore(o,s),console.log("[LinkedIn AI] Messaging AI button injected before send button");return}if(n){n.appendChild(o),console.log("[LinkedIn AI] Messaging AI button appended to form container");return}console.log("[LinkedIn AI] Could not find suitable location for messaging button")}function We(){try{return window!==window.top}catch{return!0}}function Me(){zt();const t=We();Z()?ve():t||be(),!t&&!Z()&&te(),!t&&!Z()&&setInterval(()=>{(he()||je())&&te()},500);let n=null;const o=()=>{n&&clearTimeout(n),n=setTimeout(()=>{Z()?ve():t||(be(),Jt()),!t&&!Z()&&te()},300)};new MutationObserver(c=>{let r=!1,s=!1;c.forEach(i=>{i.addedNodes.length>0&&(i.addedNodes.forEach(a=>{var d,p,u,h,g,k,N,f,j,I,w,S;a instanceof Element&&(((p=(d=a.getAttribute)==null?void 0:d.call(a,"data-view-name"))!=null&&p.includes("feed")||((u=a.getAttribute)==null?void 0:u.call(a,"data-view-name"))==="comment-container"||(h=a.querySelector)!=null&&h.call(a,'[data-view-name="feed-full-update"]')||(g=a.querySelector)!=null&&g.call(a,'[data-view-name="feed-comment-button"]')||(k=a.querySelector)!=null&&k.call(a,'[data-view-name="comment-container"]')||(N=a.querySelector)!=null&&N.call(a,'[data-view-name="comment-reply"]')||(f=a.querySelector)!=null&&f.call(a,"button"))&&(r=!0),((j=a.matches)!=null&&j.call(a,'.comments-comment-item, .comments-comment-entity, [class*="comment"], .feed-shared-update-v2')||(I=a.querySelector)!=null&&I.call(a,".comments-comment-item, .comments-comment-entity"))&&(r=!0),((w=a.matches)!=null&&w.call(a,'[role="dialog"], .artdeco-modal, [class*="share-box"], [class*="share-modal"]')||(S=a.querySelector)!=null&&S.call(a,'[role="dialog"][aria-label*="post" i], .artdeco-modal, [class*="share-box"]'))&&(s=!0))}),r=!0)}),r&&o(),s&&!t&&(setTimeout(()=>te(),100),setTimeout(()=>te(),500),setTimeout(()=>te(),1e3))}).observe(document.body,{childList:!0,subtree:!0})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Me):Me();if(!We()){let t=location.href;new MutationObserver(()=>{location.href!==t&&(t=location.href,setTimeout(()=>{Z()?ve():be()},1e3))}).observe(document,{subtree:!0,childList:!0})}function Qt(){return`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
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
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      color: #fff;
      z-index: 999999;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(30px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
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
      background: linear-gradient(135deg, #0a66c2 0%, #00a0dc 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .panel-icon svg {
      width: 18px;
      height: 18px;
      color: white;
    }

    .panel-icon.messaging {
      background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    }

    /* Messaging Context Styles */
    .messaging-context {
      padding: 12px 16px;
      background: rgba(124, 58, 237, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .context-scanning {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #a78bfa;
      font-size: 13px;
    }

    .context-participant {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
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
      margin-bottom: 8px;
    }

    .context-stats {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }

    .context-stats .stat {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      color: #9ca3af;
    }

    .sentiment-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #6b7280;
    }

    .sentiment-dot.positive {
      background: #22c55e;
    }

    .sentiment-dot.neutral {
      background: #eab308;
    }

    .sentiment-dot.negotiating {
      background: #f97316;
    }

    .sentiment-dot.cold {
      background: #6b7280;
    }

    .ai-summary {
      margin-top: 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      border-left: 3px solid #a855f7;
    }

    .summary-topic {
      font-size: 12px;
      font-weight: 500;
      color: #e5e7eb;
      margin-bottom: 6px;
    }

    .summary-action {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      color: #a78bfa;
    }

    .context-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 16px;
      color: #6b7280;
      font-size: 13px;
      text-align: center;
    }

    .context-empty svg {
      opacity: 0.5;
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
      transition: all 0.2s;
    }
    
    .close-btn:hover {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    /* Tabs */
    .tabs {
      display: flex;
      padding: 0 12px;
      background: rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      flex-shrink: 0;
    }

    .tab {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 12px 16px;
      border: none;
      background: transparent;
      color: #6b7280;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
    }

    .tab:hover {
      color: #9ca3af;
    }

    .tab.active {
      color: #0a66c2;
      border-bottom-color: #0a66c2;
    }

    .tab svg {
      opacity: 0.7;
    }

    .tab.active svg {
      opacity: 1;
    }

    /* Reply Mode Indicator */
    .reply-mode-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      background: linear-gradient(90deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 100%);
      border-bottom: 1px solid rgba(139, 92, 246, 0.2);
      font-size: 12px;
      color: #a78bfa;
      font-weight: 500;
    }

    .reply-mode-indicator svg {
      flex-shrink: 0;
    }

    .reply-to-name {
      color: #c4b5fd;
      font-weight: 600;
      margin-left: 4px;
    }

    /* Context Awareness Section */
    .context-awareness {
      background: rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 12px 16px;
    }

    .context-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #9ca3af;
      margin-bottom: 12px;
    }

    .context-header svg {
      color: #6b7280;
    }

    .scanning-badge {
      margin-left: auto;
      padding: 2px 8px;
      background: rgba(59, 130, 246, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.3);
      border-radius: 10px;
      font-size: 9px;
      color: #60a5fa;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .context-timeline {
      display: flex;
      flex-direction: column;
      gap: 0;
      position: relative;
    }

    .context-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      position: relative;
    }

    .context-item-line {
      position: absolute;
      left: 5px;
      top: 22px;
      bottom: -8px;
      width: 2px;
      background: rgba(255, 255, 255, 0.1);
    }

    .context-item:last-child .context-item-line {
      display: none;
    }

    .context-item-icon {
      width: 12px;
      height: 12px;
      margin-top: 2px;
      flex-shrink: 0;
      color: #6b7280;
      position: relative;
      z-index: 1;
    }

    .context-item.success .context-item-icon {
      color: #4ade80;
    }

    .context-item.warning .context-item-icon {
      color: #fbbf24;
    }

    .context-item.scanning .context-item-icon {
      color: #60a5fa;
    }

    .context-item-content {
      flex: 1;
      min-width: 0;
    }

    .context-item-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 2px;
    }

    .context-item-label {
      font-size: 11px;
      font-weight: 600;
      color: #e5e7eb;
    }

    .context-status {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .context-status.success {
      background: rgba(34, 197, 94, 0.2);
      color: #22c55e;
    }

    .context-status.warning {
      background: rgba(251, 191, 36, 0.2);
      color: #fbbf24;
    }

    .context-status.scanning {
      background: rgba(59, 130, 246, 0.2);
    }

    .scan-spinner {
      width: 8px;
      height: 8px;
      border: 1.5px solid rgba(96, 165, 250, 0.3);
      border-top-color: #60a5fa;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    /* Mini toggle for image analysis in context item */
    .image-analysis-toggle {
      display: flex;
      align-items: center;
      margin-left: auto;
      cursor: pointer;
    }

    .image-analysis-toggle input {
      display: none;
    }

    .mini-toggle {
      width: 28px;
      height: 16px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      position: relative;
      transition: all 0.2s;
    }

    .mini-toggle::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 12px;
      height: 12px;
      background: #fff;
      border-radius: 50%;
      transition: all 0.2s;
    }

    .mini-toggle.active {
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
    }

    .mini-toggle.active::after {
      transform: translateX(12px);
    }

    .context-item-value {
      font-size: 11px;
      color: #9ca3af;
      line-height: 1.4;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .context-item-value.scanning {
      color: #60a5fa;
      font-style: italic;
    }

    .context-item-value.warning {
      color: #fbbf24;
      font-size: 10px;
    }

    /* Hover tooltip for context items */
    .context-item.has-tooltip {
      cursor: pointer;
    }

    .context-item.has-tooltip:hover {
      background: rgba(255, 255, 255, 0.03);
      border-radius: 6px;
      margin: -4px;
      padding: 4px;
    }

    .hover-hint {
      margin-left: 4px;
      opacity: 0.4;
      transition: opacity 0.2s;
    }

    .context-item:hover .hover-hint {
      opacity: 0.8;
    }

    .context-tooltip {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      margin-top: 4px;
      background: #1e1e2f;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      padding: 12px;
      z-index: 100;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      animation: tooltipFadeIn 0.15s ease-out;
    }

    @keyframes tooltipFadeIn {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .context-tooltip-header {
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #9ca3af;
      margin-bottom: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .context-tooltip-content {
      font-size: 12px;
      line-height: 1.6;
      color: #e5e7eb;
      max-height: 200px;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .context-tooltip-content::-webkit-scrollbar {
      width: 4px;
    }

    .context-tooltip-content::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }

    .context-tooltip-content::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
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
    
    .post-preview {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 12px;
      font-size: 13px;
      line-height: 1.5;
      color: #d1d5db;
      max-height: 100px;
      overflow-y: auto;
    }
    
    .post-preview h1 {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin: 12px 0 8px 0;
    }
    
    .post-preview h2 {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      margin: 10px 0 6px 0;
    }
    
    .post-preview h3 {
      font-size: 14px;
      font-weight: 600;
      color: #e5e7eb;
      margin: 8px 0 4px 0;
    }
    
    .post-preview p {
      margin: 8px 0;
      line-height: 1.6;
    }
    
    .post-preview strong {
      font-weight: 600;
      color: #fff;
    }
    
    .post-preview em {
      font-style: italic;
      color: #d1d5db;
    }
    
    .post-preview br {
      line-height: 1.6;
    }
    
    .author-info {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: #9ca3af;
      margin-bottom: 8px;
    }
    
    .author-name {
      color: #fff;
      font-weight: 500;
    }
    
    /* Your Thoughts Input */
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
      transition: all 0.2s;
      min-height: 60px;
      max-height: 120px;
    }

    .thoughts-input::placeholder {
      color: #6b7280;
      font-size: 12px;
    }

    .thoughts-input:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    .thoughts-input:focus {
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
      transition: all 0.2s;
    }

    .clear-thoughts-btn:hover {
      background: rgba(239, 68, 68, 0.2);
      color: #ef4444;
    }

    .optional-label {
      font-weight: 400;
      color: #6b7280;
      font-size: 10px;
    }

    .phoenix-session-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      background: rgba(14, 165, 233, 0.08);
      border: 1px solid rgba(14, 165, 233, 0.22);
      border-radius: 10px;
      color: #bfdbfe;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
    }

    .phoenix-session-badge svg {
      flex-shrink: 0;
      color: #38bdf8;
    }

    .phoenix-session-badge .warning {
      color: #fbbf24;
    }

    /* Legacy Toggle Styles */
    .service-offer-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(234, 88, 12, 0.05));
      border: 1px solid rgba(245, 158, 11, 0.2);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
    }

    .service-offer-toggle:not(.disabled):hover {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(234, 88, 12, 0.1));
      border-color: rgba(245, 158, 11, 0.3);
    }

    .service-offer-toggle.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .toggle-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .toggle-icon {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background: rgba(245, 158, 11, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f59e0b;
    }

    .toggle-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .toggle-label {
      font-size: 12px;
      font-weight: 500;
      color: #fff;
    }

    .toggle-hint {
      font-size: 10px;
      color: #9ca3af;
    }

    .toggle-hint.warning {
      color: #f59e0b;
    }

    .toggle-checkbox {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    .toggle-switch {
      width: 36px;
      height: 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      position: relative;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .toggle-switch::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      background: #fff;
      border-radius: 50%;
      transition: all 0.2s;
    }

    .toggle-switch.active {
      background: linear-gradient(135deg, #f59e0b, #ea580c);
    }

    .toggle-switch.active::after {
      transform: translateX(16px);
    }

    /* Image Toggle */
    .image-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(168, 85, 247, 0.05));
      border: 1px solid rgba(139, 92, 246, 0.2);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;
      position: relative;
    }

    .image-toggle:hover {
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
      border-color: rgba(139, 92, 246, 0.3);
    }

    .toggle-icon.image {
      background: rgba(139, 92, 246, 0.15);
      color: #a855f7;
    }

    .toggle-switch.image.active {
      background: linear-gradient(135deg, #8b5cf6, #a855f7);
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
      transition: all 0.2s;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
    }
    
    .tone-select:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    .tone-select:focus {
      outline: none;
      border-color: #0a66c2;
      box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.2);
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
      transition: all 0.2s;
    }
    
    .generate-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(10, 102, 194, 0.4);
    }
    
    .generate-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    .spinner-small {
      width: 12px;
      height: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Shimmer Loading */
    .shimmer-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
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
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.05) 100%
      );
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    .shimmer-line.long { width: 100%; }
    .shimmer-line.medium { width: 75%; }
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
      transition: all 0.2s;
    }

    .comment-card.refining {
      opacity: 0.6;
    }
    
    .comment-card:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.15);
    }
    
    .comment-text {
      font-size: 13px;
      line-height: 1.6;
      color: #e5e7eb;
      margin-bottom: 12px;
    }
    
    .comment-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .action-group {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .action-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 6px 10px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      color: #9ca3af;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .action-btn:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }

    .action-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .action-btn.copied {
      background: rgba(34, 197, 94, 0.2);
      border-color: rgba(34, 197, 94, 0.3);
      color: #22c55e;
    }

    .action-btn.refine-btn {
      padding: 5px 8px;
      font-size: 10px;
      gap: 4px;
    }

    .action-btn.refine-btn span {
      font-weight: 500;
    }

    .insert-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px 12px;
      background: linear-gradient(135deg, #0a66c2 0%, #0077b5 100%);
      border: none;
      border-radius: 6px;
      color: #fff;
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }

    .insert-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(10, 102, 194, 0.4);
    }
    
    /* Recommendation Tag */
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
    }
    
    .error-icon {
      flex-shrink: 0;
      color: #ef4444;
    }
    
    .no-api-key {
      text-align: center;
      padding: 20px;
    }
    
    .no-api-key-icon {
      width: 48px;
      height: 48px;
      margin: 0 auto 16px;
      border-radius: 12px;
      background: rgba(251, 191, 36, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fbbf24;
    }
    
    .no-api-key h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .no-api-key p {
      font-size: 13px;
      color: #9ca3af;
      margin-bottom: 16px;
    }
    
    .settings-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 10px 16px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .settings-btn:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    /* History Tab */
    .history-section {
      min-height: 200px;
    }

    .empty-history {
      text-align: center;
      padding: 40px 20px;
      color: #6b7280;
    }

    .empty-history svg {
      margin-bottom: 16px;
      opacity: 0.5;
    }

    .empty-history p {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 4px;
      color: #9ca3af;
    }

    .empty-history span {
      font-size: 12px;
    }

    .history-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }

    .history-count {
      font-size: 11px;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .clear-history-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: transparent;
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 4px;
      color: #ef4444;
      font-size: 11px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .clear-history-btn:hover {
      background: rgba(239, 68, 68, 0.1);
    }

    .history-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .history-item {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 12px;
    }

    .history-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      font-size: 11px;
      color: #6b7280;
    }

    .history-time {
      color: #9ca3af;
      font-weight: 500;
    }

    .history-post {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .history-comment {
      font-size: 13px;
      line-height: 1.5;
      color: #d1d5db;
      margin-bottom: 10px;
    }

    .history-actions {
      display: flex;
      align-items: center;
      gap: 8px;
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
    
    .panel-footer .sponsor-link {
      color: #9ca3af;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .panel-footer .sponsor-link:hover {
      color: #0a66c2;
      text-decoration: underline;
    }
    
    .panel-footer .footer-divider {
      margin: 0 8px;
      color: #4b5563;
    }
    
    .panel-footer .support-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: #ef4444;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.2s;
      margin-left: 4px;
    }
    
    .panel-footer .support-link svg {
      width: 14px;
      height: 14px;
      fill: #ef4444;
      stroke: #ef4444;
    }
    
    .panel-footer .support-link:hover {
      color: #f87171;
      text-decoration: underline;
    }
    
    .panel-footer .support-link:hover svg {
      fill: #f87171;
      stroke: #f87171;
      transform: scale(1.1);
    }
  `}
