"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={id:"prequisite",title:"2. Prerequisite",tutorial:{order:1,prev:"tutorial/introduction/index",next:"tutorial/introduction/select-framework"}},a=void 0,l={unversionedId:"tutorial/introduction/prequisite",id:"version-3.xx.xx/tutorial/introduction/prequisite",title:"2. Prerequisite",description:"refine is a React-based framework. So, if you have some preliminary knowledge of React and TypeScript, then this tutorial is perfect for you! Just by following the directions provided, you'll be able to finish it from start to finish.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/0-introduction/1-prequisite.md",sourceDirName:"tutorial/0-introduction",slug:"/tutorial/introduction/prequisite",permalink:"/docs/3.xx.xx/tutorial/introduction/prequisite",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/0-introduction/1-prequisite.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1686748472,formattedLastUpdatedAt:"Jun 14, 2023",sidebarPosition:1,frontMatter:{id:"prequisite",title:"2. Prerequisite",tutorial:{order:1,prev:"tutorial/introduction/index",next:"tutorial/introduction/select-framework"}}},s={},u=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=c("Checklist"),d=c("ChecklistItem"),f={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine")," is a React-based framework. So, if you have some preliminary knowledge of React and TypeScript, then this tutorial is perfect for you! Just by following the directions provided, you'll be able to finish it from start to finish."),(0,n.kt)("p",null,"In order to publish and deploy your project, you'll also need a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," account (or a similar platform)."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"How do I use the checklists at the bottom of each page?"),(0,n.kt)("p",null,"A clickable task checklist awaits you at the end of each page to measure your understanding of the content. Check these items off to see your progress in the Tutorial Tracker."),(0,n.kt)("p",null,"(This data is only saved to your browser\u2019s local storage, and is not available elsewhere. No data is sent to, nor stored by ",(0,n.kt)("strong",{parentName:"p"},"refine"),".)")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"What if I need help, or want to learn more about ",(0,n.kt)("strong",null,"refine"),"?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/refine"},"Join the Discord Community")," \u2013 it is the easiest way to get help, all questions are usually answered in about 30 minutes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/discussions"},"GitHub Discussions")," \u2013 ask anything about the project or give feedback, we'd love to hear your thoughts!"))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Where can I leave feedback about this tutorial?"),(0,n.kt)("p",null,'You can leave feedback about this tutorial by clicking the "Give us feedback" button at the bottom of the tutorial tracker.'),(0,n.kt)("p",null,"You can also reach us on ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/refine"},"Discord"),".")),(0,n.kt)(p,{mdxType:"Checklist"},(0,n.kt)(d,{id:"prequisite-looks-great",mdxType:"ChecklistItem"},"I understood how to use the checklists."),(0,n.kt)(d,{id:"prequisite-looks-great-2",mdxType:"ChecklistItem"},"I know how to get help and where to leave feedback.")))}m.isMDXComponent=!0}}]);