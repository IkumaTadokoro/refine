"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12096],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),p=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?t.createElement(m,c(c({ref:n},l),{},{components:r})):t.createElement(m,c({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87740:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=r(87462),a=(r(67294),r(3905));const o={id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},c=void 0,s={unversionedId:"api-reference/core/components/accessControl/can-access",id:"version-3.xx.xx/api-reference/core/components/accessControl/can-access",title:"<CanAccess>",description:"` is the component form of useCan`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/accessControl/canAccess.md",sourceDirName:"api-reference/core/components/accessControl",slug:"/api-reference/core/components/accessControl/can-access",permalink:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/accessControl/canAccess.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683551846,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"can-access",title:"<CanAccess>",siderbar_label:"<CanAccess>",source:"packages/core/src/components/canAccess/index.tsx"},sidebar:"someSidebar",previous:{title:"<Authenticated>",permalink:"/docs/3.xx.xx/api-reference/core/components/auth/authenticated"},next:{title:"Interface References",permalink:"/docs/3.xx.xx/api-reference/core/interfaceReferences"}},i={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>fallback</code>",id:"fallback",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:p};function f(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<CanAccess>")," is the component form of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,a.kt)("p",null,"It internally uses ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"'s return values to provide its functionality."),(0,a.kt)("p",null,"Passes the given properties to the ",(0,a.kt)("inlineCode",{parentName:"p"},"can")," method from your ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"access control provider"),". After, if it returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),", it renders the children."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"),", it renders ",(0,a.kt)("a",{parentName:"li",href:"#fallback"},(0,a.kt)("inlineCode",{parentName:"a"},"fallback"))," prop if provided. Otherwise, it renders ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Refer to Access Control Provider for more information. ","\u2192")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CanAccess } from "@pankod/refine-core";\n\nconst MyComponent = () => (\n    <CanAccess\n        resource="posts"\n        action="edit"\n        params={{ id: 1 }}\n        fallback={<CustomFallback />}\n    >\n        <YourComponent />\n    </CanAccess>\n);\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"It's also accepts all the properties of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan")),"."),(0,a.kt)("h3",{id:"fallback"},(0,a.kt)("inlineCode",{parentName:"h3"},"fallback")),(0,a.kt)("p",null,"Component to render if ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/accessControl/useCan/"},(0,a.kt)("inlineCode",{parentName:"a"},"useCan"))," returns false. If ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),", it renders ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<CanAccess fallback={<div>You cannot access this section</div>}>\n    <YourComponent />\n</CanAccess>\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(l,{module:"@pankod/refine-core/CanAccess",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);