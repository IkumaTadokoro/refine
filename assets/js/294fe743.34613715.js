"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={id:"useLink",title:"useLink",sidebar_label:"useLink \ud83c\udd95"},a=void 0,s={unversionedId:"api-reference/core/hooks/navigation/useLink",id:"api-reference/core/hooks/navigation/useLink",title:"useLink",description:"useLink is a hook that leverages the Link property of the routerProvider to create links compatible with the user's router library.",source:"@site/docs/api-reference/core/hooks/navigation/useLink.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useLink",permalink:"/docs/api-reference/core/hooks/navigation/useLink",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useLink.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1681453681,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"useLink",title:"useLink",sidebar_label:"useLink \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useBack \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useBack"},next:{title:"useGetToPath \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useGetToPath"}},c={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>to</code>",id:"to",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLink")," is a hook that leverages the ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," property of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to create links compatible with the user's router library."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It's recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Link")," component from your router library instead of this hook. This hook is used mostly for internal purposes but also exposed for customization needs."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Link")," components or the equivalents from the router libraries has better type support and lets you use the full power of the router library.")),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLink } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const Link = useLink();\n\n    return <Link to="/posts">Posts</Link>;\n};\n')),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"to"},(0,o.kt)("inlineCode",{parentName:"h3"},"to")),(0,o.kt)("p",null,"This is the path that the link will navigate to. It should be a string."))}u.isMDXComponent=!0}}]);