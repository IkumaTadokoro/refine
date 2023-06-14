"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39932:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"useResource",title:"useResource",sidebar_label:"useResource"},i=void 0,s={unversionedId:"api-reference/core/hooks/resource/useResource",id:"api-reference/core/hooks/resource/useResource",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns the resource` object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route.",source:"@site/docs/api-reference/core/hooks/resource/useResource.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResource",permalink:"/docs/api-reference/core/hooks/resource/useResource",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/resource/useResource.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1686748472,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"useResource",title:"useResource",sidebar_label:"useResource"},sidebar:"someSidebar",previous:{title:"useNotification",permalink:"/docs/api-reference/core/hooks/useNotification/"},next:{title:"useShow",permalink:"/docs/api-reference/core/hooks/show/useShow"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Without parameters",id:"without-parameters",level:3},{value:"With a resource name or identifier",id:"with-a-resource-name-or-identifier",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],l=(p="PropsTable",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const d={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you pass a resource name or identifier to ",(0,a.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," object that matches the name or identifier. If there is no match, a temporary ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("h3",{id:"without-parameters"},"Without parameters"),(0,a.kt)("p",null,"If you don't pass any parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the current route by default. If there is no match, the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resources, resource, action, id } = useResource();\n')),(0,a.kt)("h3",{id:"with-a-resource-name-or-identifier"},"With a resource name or identifier"),(0,a.kt)("p",null,"If you pass a resource name or identifier to ",(0,a.kt)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the name or identifier. If there is no match, a temporary ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resource } = useResource("posts");\n')),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("h3",{id:"resources"},(0,a.kt)("inlineCode",{parentName:"h3"},"resources")),(0,a.kt)("p",null,"An array of resources that you defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," object."),(0,a.kt)("h3",{id:"resourcename"},(0,a.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,a.kt)("p",null,"Resource name of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," object."),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"id")," parameter of the current route."),(0,a.kt)("h3",{id:"action"},(0,a.kt)("inlineCode",{parentName:"h3"},"action")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"action")," from the current route if there is a match."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(l,{module:"@refinedev/core/useResource",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resources"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#interfaces"},(0,a.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#interfaces"},(0,a.kt)("inlineCode",{parentName:"a"},"IResourceItem")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"a"},"undefined")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"action"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},'"clone"'))))),(0,a.kt)("h4",{id:"interfaces"},"Interfaces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceComponents {\n    list?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n    create?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n    edit?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n    show?:\n        | string\n        | React.ComponentType<any>\n        | { component: React.ComponentType<any>; path: string };\n}\n\ninterface IResourceItem extends IResourceComponents {\n    name: string;\n    identifier?: string;\n    meta?: MetaProps;\n}\n")))}m.isMDXComponent=!0}}]);