"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"headless",title:"Headless","example-title":"Authentication Example","example-tags":["headless","authentication","vite","react-hook-form","react-table"]},i=void 0,s={unversionedId:"examples/authentication/headless",id:"version-3.xx.xx/examples/authentication/headless",title:"Headless",description:"You can create your own Authentication approach using refine. You can customize the AuthProvider methods according to your needs and control the privileges of your users. This example is a simple example of custom authentication with refine.",source:"@site/versioned_docs/version-3.xx.xx/examples/authentication/headless.md",sourceDirName:"examples/authentication",slug:"/examples/authentication/headless",permalink:"/docs/3.xx.xx/examples/authentication/headless",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/authentication/headless.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1681453681,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"headless",title:"Headless","example-title":"Authentication Example","example-tags":["headless","authentication","vite","react-hook-form","react-table"]},sidebar:"someSidebar",previous:{title:"Cerbos",permalink:"/docs/3.xx.xx/examples/access-control/cerbos"},next:{title:"Ant Design",permalink:"/docs/3.xx.xx/examples/authentication/antd"}},c={},l=[],p=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can create your own Authentication approach using ",(0,a.kt)("strong",{parentName:"p"},"refine"),". You can customize the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider/"},"AuthProvider")," methods according to your needs and control the privileges of your users. This example is a simple example of custom authentication with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)(p,{path:"auth-headless",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);