"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"useMenu",title:"useMenu",description:"useMenu example of @refinedev/core","example-title":"Refine's useMenu hook","example-tags":["headless"]},s=void 0,i={unversionedId:"examples/core/useMenu",id:"examples/core/useMenu",title:"useMenu",description:"useMenu example of @refinedev/core",source:"@site/docs/examples/core/useMenu.md",sourceDirName:"examples/core",slug:"/examples/core/useMenu",permalink:"/docs/examples/core/useMenu",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/core/useMenu.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685363921,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{id:"useMenu",title:"useMenu",description:"useMenu example of @refinedev/core","example-title":"Refine's useMenu hook","example-tags":["headless"]},sidebar:"someSidebar",previous:{title:"useImport",permalink:"/docs/examples/core/useImport"},next:{title:"useModal",permalink:"/docs/examples/core/useModal"}},u={},c=[],p=(l="CodeSandboxExample",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const d={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," is used to get menu items derived from the resources. These items include a link to the dashboard page (if it exists) and links to the user-defined resources (passed as children to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine />"),"). This example shows how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," hook."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"refine")," useMenu hook documentation for more information. \u2192")),(0,o.kt)(p,{path:"core-use-menu",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);