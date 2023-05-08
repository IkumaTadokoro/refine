"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76571],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,v=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"multi-level-menu",title:"Multi Level Menu",sidebar_label:"Multi Level Menu"},i=void 0,o={unversionedId:"advanced-tutorials/multi-level-menu/multi-level-menu",id:"advanced-tutorials/multi-level-menu/multi-level-menu",title:"Multi Level Menu",description:"This document is related to how to create a multi-level menu for refine applications.",source:"@site/docs/advanced-tutorials/multi-level-menu/multi-level-menu.md",sourceDirName:"advanced-tutorials/multi-level-menu",slug:"/advanced-tutorials/multi-level-menu/",permalink:"/docs/advanced-tutorials/multi-level-menu/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/multi-level-menu/multi-level-menu.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683561911,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"multi-level-menu",title:"Multi Level Menu",sidebar_label:"Multi Level Menu"},sidebar:"someSidebar",previous:{title:"Live / Realtime",permalink:"/docs/advanced-tutorials/real-time"},next:{title:"Appwrite",permalink:"/docs/advanced-tutorials/multi-tenancy/appwrite"}},u={},s=[{value:"What is Multi-level Menu?",id:"what-is-multi-level-menu",level:3},{value:"Usage",id:"usage",level:2},{value:"Headless",id:"headless",level:3},{value:"Ant Design",id:"ant-design",level:3},{value:"Example",id:"example",level:2}],c=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document is related to how to create a multi-level menu for ",(0,a.kt)("strong",{parentName:"p"},"refine")," applications."),(0,a.kt)("h3",{id:"what-is-multi-level-menu"},"What is Multi-level Menu?"),(0,a.kt)("p",null,"The multi-level menu is a great way to organize your sider menu items. You can create groups and sub menus to keep your menu items organized. This makes it easy to find the menu items you are looking for."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To do this, it is necessary to create an object array with the following ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#resourceitemprops"},"resources properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'        <Refine\n           ...\n            resources={[\n                {\n                    // highlight-start\n                    name: "CMS",\n                    // highlight-end\n                },\n                {\n                    // highlight-start\n                    name: "posts",\n                    meta: { parent: "CMS" },\n                    // highlight-end\n                    list: "/posts",\n                },\n                {\n                    // highlight-start\n                    name: "category",\n                    meta: { parent: "CMS", canDelete: true },\n                    // highlight-end\n                    list: "/categories",\n                },\n            ]}\n        />\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.parent")," you give in the resource objects must be strictly equal to the resource name you want to group under.")),(0,a.kt)("h3",{id:"headless"},"Headless"),(0,a.kt)("p",null,"If you want to create your multi-level menu without any UI framework integration, ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu"},(0,a.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook gives your resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout/sider/index.tsx"',title:'"src/components/layout/sider/index.tsx"'},'//highlight-next-line\nimport { useMenu } from "@refinedev/core";\n\nexport const Sider: React.FC = () => {\n    //highlight-next-line\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n\n    // Here create your Sider to your UI choice\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example output"',title:'"example','output"':!0},'\n// console.log(menuItems);\n[\n    {\n        name: "CMS",\n        key: "CMS",\n        ...\n        children: [\n            {\n                name: "posts",\n                key: "CMS/posts",\n                route: "/posts",\n                ...\n                children: [],\n            },\n            {\n                name: "category",\n                key: "CMS/category",\n                route: "/category",\n                ...\n                children: [],\n            },\n        ],\n    },\n];\n')),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"ant-design"},"Ant Design"),(0,a.kt)("p",null,"The Sider component allows you to create the groups you want in the sider menu. By default, the sider will group menu items by their top-level heading. However, you can also add sub menu items to each group via ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.parent"),"."),(0,a.kt)("p",null,"This gives you more control over the side menu and allows you to customize it to better suit your needs."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-level-menu/multi-level-menu.png",alt:"multiLevelMenu"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"You can review the example to examine the multi-level menu concept in more detail."),(0,a.kt)(c,{path:"multi-level-menu",mdxType:"CodeSandboxExample"}))}d.isMDXComponent=!0}}]);