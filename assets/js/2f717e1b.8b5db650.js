"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,h=l["".concat(c,".").concat(u)]||l[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},15932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},i=void 0,p={unversionedId:"api-reference/mantine/components/breadcrumb",id:"api-reference/mantine/components/breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Mantine Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/api-reference/mantine/components/breadcrumb.md",sourceDirName:"api-reference/mantine/components",slug:"/api-reference/mantine/components/breadcrumb",permalink:"/docs/api-reference/mantine/components/breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mantine/components/breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683561911,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"breadcrumb",title:"Breadcrumb",sidebar_label:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/mantine/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/api-reference/mantine/components/buttons/clone-button"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],s=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const l={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Mantine ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/core/breadcrumbs/"},"Breadcrumb")," components using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,a.kt)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In earlier versions of ",(0,a.kt)("strong",{parentName:"p"},"refine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component had accepted ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage")," which could be used to add an index page to your app. With the changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," API of ",(0,a.kt)("strong",{parentName:"p"},"refine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route yourself manually by your router package."),(0,a.kt)("p",{parentName:"admonition"},"In earlier versions, the home icon in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", now it is rendered if you define a an action route as ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"breadcrumbprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Mantine ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/core/breadcrumbs/"},"Breadcrumb")," component so it can be configured with the ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, Breadcrumb } from "@refinedev/mantine";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-next-line\n            breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n')),(0,a.kt)("h3",{id:"showhome"},(0,a.kt)("inlineCode",{parentName:"h3"},"showHome")),(0,a.kt)("p",null,"If you have a page with route ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", it will be used as the root of the hierarchy and shown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," with a home icon. To hide the root item, set ",(0,a.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/mantine";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb showHome={true} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"meta"},(0,a.kt)("inlineCode",{parentName:"h3"},"meta")),(0,a.kt)("p",null,"If your routes has additional parameters in their paths, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to use them while creating the paths and filling the parameters in the paths. By default, existing URL parameters are used. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," to override them or add new ones."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@refinedev/mantine";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb meta={{ authorId: "123" }} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"hideicons"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideIcons")),(0,a.kt)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Show, Breadcrumb } from "@refinedev/mantine";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-next-line\n            breadcrumb={<Breadcrumb hideIcons />}\n        >\n            <p>Rest of your page here</p>\n        </Show>\n    );\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(s,{module:"@refinedev/mantine/Breadcrumb",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);