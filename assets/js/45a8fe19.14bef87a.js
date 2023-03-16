"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,y=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(y,i(i({ref:t},l),{},{components:n})):a.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"nhost",title:"Nhost","example-tags":["antd","data-provider","nhost","auth-provider","graphql"]},i=void 0,p={unversionedId:"examples/data-provider/nhost",id:"examples/data-provider/nhost",title:"Nhost",description:"refine Nhost GraphQL Data Provider comes out-of-the-box. Thanks to refine, you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with refine project.",source:"@site/docs/examples/data-provider/nhost.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/nhost",permalink:"/docs/examples/data-provider/nhost",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/nhost.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678986631,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"nhost",title:"Nhost","example-tags":["antd","data-provider","nhost","auth-provider","graphql"]},sidebar:"someSidebar",previous:{title:"Nestjsx Crud",permalink:"/docs/examples/data-provider/nestjsxCrud"},next:{title:"Strapi",permalink:"/docs/examples/data-provider/strapi"}},d={},s=[{value:"ID Data Type",id:"id-data-type",level:2},{value:"Passing &#39;Int&#39; or &#39;uuid&#39; to <code>idType</code>",id:"passing-int-or-uuid-to-idtype",level:4},{value:"Passing function to <code>idType</code>",id:"passing-function-to-idtype",level:4}],l=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," ",(0,r.kt)("a",{parentName:"p",href:"https://nhost.io/"},"Nhost")," GraphQL Data Provider comes out-of-the-box. Thanks to ",(0,r.kt)("strong",{parentName:"p"},"refine"),", you can connect to your Nhost database and create special queries and use your data easily. This example shows in detail how you can use the data in your Nhost database with ",(0,r.kt)("strong",{parentName:"p"},"refine")," project."),(0,r.kt)("h2",{id:"id-data-type"},"ID Data Type"),(0,r.kt)("p",null,"By default, the data provider assume that your ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," type is ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid"),", you can change this behavior by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," option. You can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"uuid")," as the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," option or use function to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,r.kt)("h4",{id:"passing-int-or-uuid-to-idtype"},"Passing 'Int' or 'uuid' to ",(0,r.kt)("inlineCode",{parentName:"h4"},"idType")),(0,r.kt)("p",null,"This will allow you to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," for all resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const myDataProvider = dataProvider(client, {\n    idType: "Int",\n});\n')),(0,r.kt)("h4",{id:"passing-function-to-idtype"},"Passing function to ",(0,r.kt)("inlineCode",{parentName:"h4"},"idType")),(0,r.kt)("p",null,"This will allow you to determine the ",(0,r.kt)("inlineCode",{parentName:"p"},"idType")," based on the resource name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const idTypeMap: Record<string, "Int" | "uuid"> = {\n    users: "Int",\n    posts: "uuid",\n};\n\nconst myDataProvider = dataProvider(client, {\n    idType: (resource) => idTypeMap[resource] ?? "uuid",\n});\n')),(0,r.kt)("admonition",{title:"Demo Credentials",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Username"),": ",(0,r.kt)("a",{parentName:"p",href:"mailto:info@refine.dev"},"info@refine.dev"),"\n",(0,r.kt)("strong",{parentName:"p"},"Password"),": demodemo")),(0,r.kt)(l,{path:"data-provider-nhost",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);