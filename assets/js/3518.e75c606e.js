"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3518,4972],{4972:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(95999),o=r(10833),i=r(10634);function l(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(i.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},35281:(e,t,r)=>{r.d(t,{k:()=>n});const n={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button",codeBlock:"theme-code-block",admonition:"theme-admonition",admonitionType:e=>`theme-admonition-${e}`},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}}},61363:(e,t,r)=>{r.d(t,{R:()=>a});var n,a=((n=a||{}).Space=" ",n.Enter="Enter",n.Escape="Escape",n.Backspace="Backspace",n.Delete="Delete",n.ArrowLeft="ArrowLeft",n.ArrowUp="ArrowUp",n.ArrowRight="ArrowRight",n.ArrowDown="ArrowDown",n.Home="Home",n.End="End",n.PageUp="PageUp",n.PageDown="PageDown",n.Tab="Tab",n)},24604:(e,t,r)=>{r.d(t,{v:()=>_});var n=r(67294),a=r(32984),o=r(12351),i=r(9362),l=r(94192),u=r(16723),s=r(23784),c=r(19946),d=r(61363);var f,m=((f=m||{})[f.First=0]="First",f[f.Previous=1]="Previous",f[f.Next=2]="Next",f[f.Last=3]="Last",f[f.Specific=4]="Specific",f[f.Nothing=5]="Nothing",f);function p(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),a=null!=n?n:-1,o=(()=>{switch(e.focus){case 0:return r.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=r.slice().reverse().findIndex(((e,r,n)=>!(-1!==a&&n.length-r-1>=a)&&!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 2:return r.findIndex(((e,r)=>!(r<=a)&&!t.resolveDisabled(e)));case 3:{let e=r.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 4:return r.findIndex((r=>t.resolveId(r)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===o?n:o}var v=r(64103),g=r(84575),h=r(39650),b=r(15466);var y=r(16567),E=r(14157),w=r(51074),T=r(73781);function R(e){return[e.screenX,e.screenY]}function I(){let e=(0,n.useRef)([-1,-1]);return{wasMoved(t){let r=R(t);return(e.current[0]!==r[0]||e.current[1]!==r[1])&&(e.current=r,!0)},update(t){e.current=R(t)}}}let S=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function F(e){var t,r;let n=null!=(t=e.innerText)?t:"",a=e.cloneNode(!0);if(!(a instanceof HTMLElement))return n;let o=!1;for(let l of a.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),o=!0;let i=o?null!=(r=a.innerText)?r:"":n;return S.test(i)&&(i=i.replace(S,"")),i}function P(e){let t=(0,n.useRef)(""),r=(0,n.useRef)("");return(0,T.z)((()=>{let n=e.current;if(!n)return"";let a=n.innerText;if(t.current===a)return r.current;let o=function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let e=r.split(" ").map((e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():F(t).trim()}return null})).filter(Boolean);if(e.length>0)return e.join(", ")}return F(e).trim()}(n).trim().toLowerCase();return t.current=a,r.current=o,o}))}var x,k=((x=k||{})[x.Open=0]="Open",x[x.Closed=1]="Closed",x),M=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(M||{}),C=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(C||{});function O(e,t=(e=>e)){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,g.z2)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),a=r?n.indexOf(r):null;return-1===a&&(a=null),{items:n,activeItemIndex:a}}let N={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var r;let n=O(e),a=p(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled})),o=a?e.items.indexOf(a):-1;return-1===o||o===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:o,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=O(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...r}},6:(e,t)=>{let r=O(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},D=(0,n.createContext)(null);function L(e){let t=(0,n.useContext)(D);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return t}function A(e,t){return(0,a.E)(t.type,N,e,t)}D.displayName="MenuContext";let j=n.Fragment;let H=o.AN.RenderStrategy|o.AN.Static;let z=n.Fragment;let U=(0,o.yV)((function(e,t){let{__demoMode:r=!1,...i}=e,l=(0,n.useReducer)(A,{__demoMode:r,menuState:r?0:1,buttonRef:(0,n.createRef)(),itemsRef:(0,n.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:u,itemsRef:c,buttonRef:d},f]=l,m=(0,s.T)(t);(0,h.O)([d,c],((e,t)=>{var r;f({type:1}),(0,g.sP)(t,g.tJ.Loose)||(e.preventDefault(),null==(r=d.current)||r.focus())}),0===u);let p=(0,T.z)((()=>{f({type:1})})),v=(0,n.useMemo)((()=>({open:0===u,close:p})),[u,p]),b={ref:m};return n.createElement(D.Provider,{value:l},n.createElement(y.up,{value:(0,a.E)(u,{0:y.ZM.Open,1:y.ZM.Closed})},(0,o.sY)({ourProps:b,theirProps:i,slot:v,defaultTag:j,name:"Menu"})))})),B=(0,o.yV)((function(e,t){var r;let a=(0,c.M)(),{id:i=`headlessui-menu-button-${a}`,...u}=e,[f,p]=L("Menu.Button"),g=(0,s.T)(f.buttonRef,t),h=(0,l.G)(),b=(0,T.z)((e=>{switch(e.key){case d.R.Space:case d.R.Enter:case d.R.ArrowDown:e.preventDefault(),e.stopPropagation(),p({type:0}),h.nextFrame((()=>p({type:2,focus:m.First})));break;case d.R.ArrowUp:e.preventDefault(),e.stopPropagation(),p({type:0}),h.nextFrame((()=>p({type:2,focus:m.Last})))}})),y=(0,T.z)((e=>{if(e.key===d.R.Space)e.preventDefault()})),w=(0,T.z)((t=>{if((0,v.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===f.menuState?(p({type:1}),h.nextFrame((()=>{var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),p({type:0})))})),R=(0,n.useMemo)((()=>({open:0===f.menuState})),[f]),I={ref:g,id:i,type:(0,E.f)(e,f.buttonRef),"aria-haspopup":"menu","aria-controls":null==(r=f.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===f.menuState,onKeyDown:b,onKeyUp:y,onClick:w};return(0,o.sY)({ourProps:I,theirProps:u,slot:R,defaultTag:"button",name:"Menu.Button"})})),Z=(0,o.yV)((function(e,t){var r,a;let f=(0,c.M)(),{id:p=`headlessui-menu-items-${f}`,...v}=e,[h,E]=L("Menu.Items"),R=(0,s.T)(h.itemsRef,t),I=(0,w.i)(h.itemsRef),S=(0,l.G)(),F=(0,y.oJ)(),P=null!==F?(F&y.ZM.Open)===y.ZM.Open:0===h.menuState;(0,n.useEffect)((()=>{let e=h.itemsRef.current;e&&0===h.menuState&&e!==(null==I?void 0:I.activeElement)&&e.focus({preventScroll:!0})}),[h.menuState,h.itemsRef,I]),function({container:e,accept:t,walk:r,enabled:a=!0}){let o=(0,n.useRef)(t),i=(0,n.useRef)(r);(0,n.useEffect)((()=>{o.current=t,i.current=r}),[t,r]),(0,u.e)((()=>{if(!e||!a)return;let t=(0,b.r)(e);if(!t)return;let r=o.current,n=i.current,l=Object.assign((e=>r(e)),{acceptNode:r}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;u.nextNode();)n(u.currentNode)}),[e,a,o,i])}({container:h.itemsRef.current,enabled:0===h.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let x=(0,T.z)((e=>{var t,r;switch(S.dispose(),e.key){case d.R.Space:if(""!==h.searchQuery)return e.preventDefault(),e.stopPropagation(),E({type:3,value:e.key});case d.R.Enter:if(e.preventDefault(),e.stopPropagation(),E({type:1}),null!==h.activeItemIndex){let{dataRef:e}=h.items[h.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,g.wI)(h.buttonRef.current);break;case d.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),E({type:2,focus:m.Next});case d.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),E({type:2,focus:m.Previous});case d.R.Home:case d.R.PageUp:return e.preventDefault(),e.stopPropagation(),E({type:2,focus:m.First});case d.R.End:case d.R.PageDown:return e.preventDefault(),e.stopPropagation(),E({type:2,focus:m.Last});case d.R.Escape:e.preventDefault(),e.stopPropagation(),E({type:1}),(0,i.k)().nextFrame((()=>{var e;return null==(e=h.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.Tab:e.preventDefault(),e.stopPropagation(),E({type:1}),(0,i.k)().nextFrame((()=>{(0,g.EO)(h.buttonRef.current,e.shiftKey?g.TO.Previous:g.TO.Next)}));break;default:1===e.key.length&&(E({type:3,value:e.key}),S.setTimeout((()=>E({type:4})),350))}})),k=(0,T.z)((e=>{if(e.key===d.R.Space)e.preventDefault()})),M=(0,n.useMemo)((()=>({open:0===h.menuState})),[h]),C={"aria-activedescendant":null===h.activeItemIndex||null==(r=h.items[h.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(a=h.buttonRef.current)?void 0:a.id,id:p,onKeyDown:x,onKeyUp:k,role:"menu",tabIndex:0,ref:R};return(0,o.sY)({ourProps:C,theirProps:v,slot:M,defaultTag:"div",features:H,visible:P,name:"Menu.Items"})})),V=(0,o.yV)((function(e,t){let r=(0,c.M)(),{id:a=`headlessui-menu-item-${r}`,disabled:l=!1,...d}=e,[f,p]=L("Menu.Item"),v=null!==f.activeItemIndex&&f.items[f.activeItemIndex].id===a,h=(0,n.useRef)(null),b=(0,s.T)(t,h);(0,u.e)((()=>{if(f.__demoMode||0!==f.menuState||!v||0===f.activationTrigger)return;let e=(0,i.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=h.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[f.__demoMode,h,v,f.menuState,f.activationTrigger,f.activeItemIndex]);let y=P(h),E=(0,n.useRef)({disabled:l,domRef:h,get textValue(){return y()}});(0,u.e)((()=>{E.current.disabled=l}),[E,l]),(0,u.e)((()=>(p({type:5,id:a,dataRef:E}),()=>p({type:6,id:a}))),[E,a]);let w=(0,T.z)((()=>{p({type:1})})),R=(0,T.z)((e=>{if(l)return e.preventDefault();p({type:1}),(0,g.wI)(f.buttonRef.current)})),S=(0,T.z)((()=>{if(l)return p({type:2,focus:m.Nothing});p({type:2,focus:m.Specific,id:a})})),F=I(),x=(0,T.z)((e=>F.update(e))),k=(0,T.z)((e=>{F.wasMoved(e)&&(l||v||p({type:2,focus:m.Specific,id:a,trigger:0}))})),M=(0,T.z)((e=>{F.wasMoved(e)&&(l||v&&p({type:2,focus:m.Nothing}))})),C=(0,n.useMemo)((()=>({active:v,disabled:l,close:w})),[v,l,w]);return(0,o.sY)({ourProps:{id:a,ref:b,role:"menuitem",tabIndex:!0===l?void 0:-1,"aria-disabled":!0===l||void 0,disabled:void 0,onClick:R,onFocus:S,onPointerEnter:x,onMouseEnter:x,onPointerMove:k,onMouseMove:k,onPointerLeave:M,onMouseLeave:M},theirProps:d,slot:C,defaultTag:z,name:"Menu.Item"})})),_=Object.assign(U,{Button:B,Items:Z,Item:V})},44080:(e,t,r)=>{r.d(t,{u:()=>N});var n=r(67294),a=r(12351),o=r(16567),i=r(32984),l=r(14879),u=r(16723),s=r(3855),c=r(82180),d=r(23784);var f=r(9362);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function p(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(e,t,r,n){let a=r?"enter":"leave",o=(0,f.k)(),l=void 0!==n?function(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}(n):()=>{};"enter"===a&&(e.removeAttribute("hidden"),e.style.display="");let u=(0,i.E)(a,{enter:()=>t.enter,leave:()=>t.leave}),s=(0,i.E)(a,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,i.E)(a,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return p(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),m(e,...u,...c),o.nextFrame((()=>{p(e,...c),m(e,...s),function(e,t){let r=(0,f.k)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[o,i]=[n,a].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),l=o+i;if(0!==l){r.group((r=>{r.setTimeout((()=>{t(),r.dispose()}),l),r.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&r.dispose()}))}));let n=r.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),n())}))}else t();r.add((()=>t())),r.dispose}(e,(()=>(p(e,...u),m(e,...t.entered),l())))})),o.dispose}var g=r(94192);var h=r(73781),b=r(44067);function y(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let E=(0,n.createContext)(null);E.displayName="TransitionContext";var w,T=((w=T||{}).Visible="visible",w.Hidden="hidden",w);let R=(0,n.createContext)(null);function I(e){return"children"in e?I(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function S(e,t){let r=(0,s.E)(e),o=(0,n.useRef)([]),u=(0,l.t)(),c=(0,g.G)(),d=(0,h.z)(((e,t=a.l4.Hidden)=>{let n=o.current.findIndex((({el:t})=>t===e));-1!==n&&((0,i.E)(t,{[a.l4.Unmount](){o.current.splice(n,1)},[a.l4.Hidden](){o.current[n].state="hidden"}}),c.microTask((()=>{var e;!I(o)&&u.current&&(null==(e=r.current)||e.call(r))})))})),f=(0,h.z)((e=>{let t=o.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):o.current.push({el:e,state:"visible"}),()=>d(e,a.l4.Unmount)})),m=(0,n.useRef)([]),p=(0,n.useRef)(Promise.resolve()),v=(0,n.useRef)({enter:[],leave:[],idle:[]}),b=(0,h.z)(((e,r,n)=>{m.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter((([t])=>t!==e))),null==t||t.chains.current[r].push([e,new Promise((e=>{m.current.push(e)}))]),null==t||t.chains.current[r].push([e,new Promise((e=>{Promise.all(v.current[r].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===r?p.current=p.current.then((()=>null==t?void 0:t.wait.current)).then((()=>n(r))):n(r)})),y=(0,h.z)(((e,t,r)=>{Promise.all(v.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=m.current.shift())||e()})).then((()=>r(t)))}));return(0,n.useMemo)((()=>({children:o,register:f,unregister:d,onStart:b,onStop:y,wait:p,chains:v})),[f,d,o,b,y,v,p])}function F(){}R.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function x(e){var t;let r={};for(let n of P)r[n]=null!=(t=e[n])?t:F;return r}let k=a.AN.RenderStrategy;let M=(0,a.yV)((function(e,t){let{show:r,appear:i=!1,unmount:l,...s}=e,f=(0,n.useRef)(null),m=(0,d.T)(f,t);(0,c.H)();let p=(0,o.oJ)();if(void 0===r&&null!==p&&(r=(p&o.ZM.Open)===o.ZM.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,g]=(0,n.useState)(r?"visible":"hidden"),b=S((()=>{g("hidden")})),[y,w]=(0,n.useState)(!0),T=(0,n.useRef)([r]);(0,u.e)((()=>{!1!==y&&T.current[T.current.length-1]!==r&&(T.current.push(r),w(!1))}),[T,r]);let F=(0,n.useMemo)((()=>({show:r,appear:i,initial:y})),[r,i,y]);(0,n.useEffect)((()=>{if(r)g("visible");else if(I(b)){let e=f.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&g("hidden")}else g("hidden")}),[r,b]);let P={unmount:l},x=(0,h.z)((()=>{var t;y&&w(!1),null==(t=e.beforeEnter)||t.call(e)})),M=(0,h.z)((()=>{var t;y&&w(!1),null==(t=e.beforeLeave)||t.call(e)}));return n.createElement(R.Provider,{value:b},n.createElement(E.Provider,{value:F},(0,a.sY)({ourProps:{...P,as:n.Fragment,children:n.createElement(C,{ref:m,...P,...s,beforeEnter:x,beforeLeave:M})},theirProps:{},defaultTag:n.Fragment,features:k,visible:"visible"===v,name:"Transition"})))})),C=(0,a.yV)((function(e,t){let{beforeEnter:r,afterEnter:m,beforeLeave:p,afterLeave:w,enter:T,enterFrom:F,enterTo:P,entered:M,leave:C,leaveFrom:O,leaveTo:N,...D}=e,L=(0,n.useRef)(null),A=(0,d.T)(L,t),j=D.unmount?a.l4.Unmount:a.l4.Hidden,{show:H,appear:z,initial:U}=function(){let e=(0,n.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[B,Z]=(0,n.useState)(H?"visible":"hidden"),V=function(){let e=(0,n.useContext)(R);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:_,unregister:$}=V,Y=(0,n.useRef)(null);(0,n.useEffect)((()=>_(L)),[_,L]),(0,n.useEffect)((()=>{if(j===a.l4.Hidden&&L.current)return H&&"visible"!==B?void Z("visible"):(0,i.E)(B,{hidden:()=>$(L),visible:()=>_(L)})}),[B,L,_,$,H,j]);let Q=(0,s.E)({enter:y(T),enterFrom:y(F),enterTo:y(P),entered:y(M),leave:y(C),leaveFrom:y(O),leaveTo:y(N)}),q=function(e){let t=(0,n.useRef)(x(e));return(0,n.useEffect)((()=>{t.current=x(e)}),[e]),t}({beforeEnter:r,afterEnter:m,beforeLeave:p,afterLeave:w}),G=(0,c.H)();(0,n.useEffect)((()=>{if(G&&"visible"===B&&null===L.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[L,B,G]);let J=U&&!z,K=!G||J||Y.current===H?"idle":H?"enter":"leave",W=function(e=0){let[t,r]=(0,n.useState)(e),a=(0,l.t)(),o=(0,n.useCallback)((e=>{a.current&&r((t=>t|e))}),[t,a]),i=(0,n.useCallback)((e=>Boolean(t&e)),[t]),u=(0,n.useCallback)((e=>{a.current&&r((t=>t&~e))}),[r,a]),s=(0,n.useCallback)((e=>{a.current&&r((t=>t^e))}),[r]);return{flags:t,addFlag:o,hasFlag:i,removeFlag:u,toggleFlag:s}}(0),X=(0,h.z)((e=>(0,i.E)(e,{enter:()=>{W.addFlag(o.ZM.Opening),q.current.beforeEnter()},leave:()=>{W.addFlag(o.ZM.Closing),q.current.beforeLeave()},idle:()=>{}}))),ee=(0,h.z)((e=>(0,i.E)(e,{enter:()=>{W.removeFlag(o.ZM.Opening),q.current.afterEnter()},leave:()=>{W.removeFlag(o.ZM.Closing),q.current.afterLeave()},idle:()=>{}}))),te=S((()=>{Z("hidden"),$(L)}),V);(function({container:e,direction:t,classes:r,onStart:n,onStop:a}){let o=(0,l.t)(),i=(0,g.G)(),c=(0,s.E)(t);(0,u.e)((()=>{let t=(0,f.k)();i.add(t.dispose);let l=e.current;if(l&&"idle"!==c.current&&o.current)return t.dispose(),n.current(c.current),t.add(v(l,r.current,"enter"===c.current,(()=>{t.dispose(),a.current(c.current)}))),t.dispose}),[t])})({container:L,classes:Q,direction:K,onStart:(0,s.E)((e=>{te.onStart(L,e,X)})),onStop:(0,s.E)((e=>{te.onStop(L,e,ee),"leave"===e&&!I(te)&&(Z("hidden"),$(L))}))}),(0,n.useEffect)((()=>{J&&(j===a.l4.Hidden?Y.current=null:Y.current=H)}),[H,J,B]);let re=D,ne={ref:A};return z&&H&&U&&(re={...re,className:(0,b.A)(D.className,...Q.current.enter,...Q.current.enterFrom)}),n.createElement(R.Provider,{value:te},n.createElement(o.up,{value:(0,i.E)(B,{visible:o.ZM.Open,hidden:o.ZM.Closed})|W.flags},(0,a.sY)({ourProps:ne,theirProps:re,defaultTag:"div",features:k,visible:"visible"===B,name:"Transition.Child"})))})),O=(0,a.yV)((function(e,t){let r=null!==(0,n.useContext)(E),a=null!==(0,o.oJ)();return n.createElement(n.Fragment,null,!r&&a?n.createElement(M,{ref:t,...e}):n.createElement(C,{ref:t,...e}))})),N=Object.assign(M,{Child:O,Root:M})},94192:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(67294),a=r(9362);function o(){let[e]=(0,n.useState)(a.k);return(0,n.useEffect)((()=>()=>e.dispose()),[e]),e}},73781:(e,t,r)=>{r.d(t,{z:()=>o});var n=r(67294),a=r(3855);let o=function(e){let t=(0,a.E)(e);return n.useCallback(((...e)=>t.current(...e)),[t])}},19946:(e,t,r)=>{r.d(t,{M:()=>u});var n,a=r(67294),o=r(16723),i=r(82180),l=r(77896);let u=null!=(n=a.useId)?n:function(){let e=(0,i.H)(),[t,r]=a.useState(e?()=>l.O.nextId():null);return(0,o.e)((()=>{null===t&&r(l.O.nextId())}),[t]),null!=t?""+t:void 0}},14879:(e,t,r)=>{r.d(t,{t:()=>o});var n=r(67294),a=r(16723);function o(){let e=(0,n.useRef)(!1);return(0,a.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},16723:(e,t,r)=>{r.d(t,{e:()=>o});var n=r(67294),a=r(77896);let o=(e,t)=>{a.O.isServer?(0,n.useEffect)(e,t):(0,n.useLayoutEffect)(e,t)}},3855:(e,t,r)=>{r.d(t,{E:()=>o});var n=r(67294),a=r(16723);function o(e){let t=(0,n.useRef)(e);return(0,a.e)((()=>{t.current=e}),[e]),t}},14157:(e,t,r)=>{r.d(t,{f:()=>i});var n=r(67294),a=r(16723);function o(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function i(e,t){let[r,i]=(0,n.useState)((()=>o(e)));return(0,a.e)((()=>{i(o(e))}),[e.type,e.as]),(0,a.e)((()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&i("button")}),[r,t]),r}},82180:(e,t,r)=>{r.d(t,{H:()=>o});var n=r(67294),a=r(77896);function o(){let[e,t]=(0,n.useState)(a.O.isHandoffComplete);return e&&!1===a.O.isHandoffComplete&&t(!1),(0,n.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,n.useEffect)((()=>a.O.handoff()),[]),e}},23784:(e,t,r)=>{r.d(t,{T:()=>l,h:()=>i});var n=r(67294),a=r(73781);let o=Symbol();function i(e,t=!0){return Object.assign(e,{[o]:t})}function l(...e){let t=(0,n.useRef)(e);(0,n.useEffect)((()=>{t.current=e}),[e]);let r=(0,a.z)((e=>{for(let r of t.current)null!=r&&("function"==typeof r?r(e):r.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[o])))?void 0:r}},16567:(e,t,r)=>{r.d(t,{ZM:()=>i,oJ:()=>l,up:()=>u});var n=r(67294);let a=(0,n.createContext)(null);a.displayName="OpenClosedContext";var o,i=((o=i||{})[o.Open=1]="Open",o[o.Closed=2]="Closed",o[o.Closing=4]="Closing",o[o.Opening=8]="Opening",o);function l(){return(0,n.useContext)(a)}function u({value:e,children:t}){return n.createElement(a.Provider,{value:e},t)}},64103:(e,t,r)=>{function n(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=""===(null==t?void 0:t.getAttribute("disabled"));return(!n||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(r))&&n}r.d(t,{P:()=>n})},44067:(e,t,r)=>{function n(...e){return e.filter(Boolean).join(" ")}r.d(t,{A:()=>n})},9362:(e,t,r)=>{r.d(t,{k:()=>a});var n=r(81021);function a(){let e=[],t={addEventListener:(e,r,n,a)=>(e.addEventListener(r,n,a),t.add((()=>e.removeEventListener(r,n,a)))),requestAnimationFrame(...e){let r=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(r)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let r=setTimeout(...e);return t.add((()=>clearTimeout(r)))},microTask(...e){let r={current:!0};return(0,n.Y)((()=>{r.current&&e[0]()})),t.add((()=>{r.current=!1}))},style(e,t,r){let n=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:r}),this.add((()=>{Object.assign(e.style,{[t]:n})}))},group(e){let t=a();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let t of e.splice(r,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}},77896:(e,t,r)=>{r.d(t,{O:()=>o});var n=Object.defineProperty,a=(e,t,r)=>(((e,t,r)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);let o=new class{constructor(){a(this,"current",this.detect()),a(this,"handoffState","pending"),a(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},32984:(e,t,r)=>{function n(e,t,...r){if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,n),a}r.d(t,{E:()=>n})},81021:(e,t,r)=>{function n(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}r.d(t,{Y:()=>n})},15466:(e,t,r)=>{r.d(t,{r:()=>a});var n=r(77896);function a(e){return n.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},12351:(e,t,r)=>{r.d(t,{AN:()=>u,l4:()=>s,sY:()=>c,yV:()=>m});var n,a,o=r(67294),i=r(44067),l=r(32984),u=((a=u||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),s=((n=s||{})[n.Unmount=0]="Unmount",n[n.Hidden=1]="Hidden",n);function c({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:a,visible:o=!0,name:i}){let u=f(t,e);if(o)return d(u,r,n,i);let s=null!=a?a:0;if(2&s){let{static:e=!1,...t}=u;if(e)return d(t,r,n,i)}if(1&s){let{unmount:e=!0,...t}=u;return(0,l.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},r,n,i)})}return d(u,r,n,i)}function d(e,t={},r,n){let{as:a=r,children:l,refName:u="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let m={};if(t){let e=!1,r=[];for(let[n,a]of Object.entries(t))"boolean"==typeof a&&(e=!0),!0===a&&r.push(n);e&&(m["data-headlessui-state"]=r.join(" "))}if(a===o.Fragment&&Object.keys(p(s)).length>0){if(!(0,o.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.A)(null==e?void 0:e.className(...t),s.className):(0,i.A)(null==e?void 0:e.className,s.className),r=t?{className:t}:{};return(0,o.cloneElement)(d,Object.assign({},f(d.props,p(v(s,["ref"]))),m,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let r of e)null!=r&&("function"==typeof r?r(t):r.current=t)}}}(d.ref,c.ref),r))}return(0,o.createElement)(a,Object.assign({},v(s,["ref"]),a!==o.Fragment&&c,a!==o.Fragment&&m),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},r={};for(let n of e)for(let e in n)e.startsWith("on")&&"function"==typeof n[e]?(null!=r[e]||(r[e]=[]),r[e].push(n[e])):t[e]=n[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map((e=>[e,void 0]))));for(let n in r)Object.assign(t,{[n](e,...t){let a=r[n];for(let r of a){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;r(e,...t)}}});return t}function m(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}function v(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}}}]);