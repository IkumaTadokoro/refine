"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"useBreadcrumb",title:"useBreadcrumb",sidebar_label:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},i=void 0,s={unversionedId:"api-reference/core/hooks/useBreadcrumb",id:"api-reference/core/hooks/useBreadcrumb",title:"useBreadcrumb",description:"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!",source:"@site/docs/api-reference/core/hooks/useBreadcrumb.md",sourceDirName:"api-reference/core/hooks",slug:"/api-reference/core/hooks/useBreadcrumb",permalink:"/docs/api-reference/core/hooks/useBreadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/useBreadcrumb.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681210769,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"useBreadcrumb",title:"useBreadcrumb",sidebar_label:"useBreadcrumb",source:"packages/core/src/hooks/breadcrumb"},sidebar:"someSidebar",previous:{title:"useLogList",permalink:"/docs/api-reference/core/hooks/audit-log/useLogList"},next:{title:"useApiUrl",permalink:"/docs/api-reference/core/hooks/data/useApiUrl"}},l={},p=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Resource",id:"resource",level:3},{value:"Nested resource",id:"nested-resource",level:3},{value:"Adding a Home/Root Page",id:"adding-a-homeroot-page",level:3},{value:"i18n support",id:"i18n-support",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Return values",id:"return-values",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Congratulations \ud83e\udd47",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The feature won first place with the joint votes of our team members in a May 2022 internal hackathon!"),(0,a.kt)("p",{parentName:"admonition"},"Congratulations ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/salihozdemir"},"@salihozdemir"),"! It was great seeing your project take first place! We're all very proud of you. Keep up the good work and don't forget to have fun while working here \ud83c\udf89")),(0,a.kt)("p",null,"It is a hook that returns ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbs")," to create breadcrumbs for the current page. The ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbs")," is an array of objects with the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"label"),": the label of the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"href"),": the route of the resource's list action."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"icon"),": the icon of the resource.")),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useBreadcrumb } from "@refinedev/core";\n\nexport const Breadcrumb: React.FC = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul>\n            {breadcrumbs.map(({ label, href, icon }) => (\n                <li key={label}>\n                    {icon}\n                    {href ? <a href={href}>{label}</a> : label}\n                </li>\n            ))}\n        </ul>\n    );\n};\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"resource"},"Resource"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbs")," are created with your resource definitions. For example, if you have a resource with the following definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        name: "posts",\n        icon: <PostsIcon />,\n        list: "/posts",\n        create: "/posts/create",\n    },\n];\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        label: "Posts",\n        href: "/posts",\n        icon: <PostsIcon />,\n    },\n];\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        label: "Posts",\n        href: "/posts",\n        icon: <PostsIcon />,\n    },\n    { label: "Create" },\n];\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the resource has no ",(0,a.kt)("inlineCode",{parentName:"p"},"icon")," property, the ",(0,a.kt)("inlineCode",{parentName:"p"},"icon")," property of the breadcrumbs is ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". Likewise, if the resource's list page is not found, the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property of the breadcrumbs is ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,a.kt)("h3",{id:"nested-resource"},"Nested resource"),(0,a.kt)("p",null,"If you have a nested resource definition as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        name: "cms",\n    },\n    {\n        name: "users",\n        list: "/users",\n        create: "/users/create",\n        meta: { parent: "cms" },\n    },\n];\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    { label: "Cms" },\n    {\n        label: "Users",\n        href: "/users",\n    },\n];\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," page of the ",(0,a.kt)("inlineCode",{parentName:"p"},"users")," resource, the breadcrumbs look like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    { label: "Cms" },\n    {\n        label: "Users",\n        href: "/users",\n    },\n    { label: "Create" },\n];\n')))),(0,a.kt)("h3",{id:"adding-a-homeroot-page"},"Adding a Home/Root Page"),(0,a.kt)("p",null,"In earlier versions of ",(0,a.kt)("strong",{parentName:"p"},"refine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component had accepted ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage")," which could be used to add an index page to your app. With the changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," API of ",(0,a.kt)("strong",{parentName:"p"},"refine"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage")," is deprecated. You can now define an index route yourself manually by your router package."),(0,a.kt)("p",null,"In earlier versions, the home icon in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," was created by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", now it is rendered if you define a an action route as ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    {\n        name: "dashboard", // name of the resource is not important for the `useBreadcrumb` hook\n        list: "/", // If any one of your resources has a list action with `/` route, the home icon will be rendered\n    }\n]\n')),(0,a.kt)("h2",{id:"i18n-support"},"i18n support"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," definition has a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," property, ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," property. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is used. Likewise, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," definition has ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," property, ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumbs")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," property. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is used."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If a ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," is not provided in your ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource, ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/translate/useTranslate"},(0,a.kt)("inlineCode",{parentName:"a"},"useTranslate"))," hook to translate the names."),(0,a.kt)("p",{parentName:"admonition"},"For CRUD operations (",(0,a.kt)("inlineCode",{parentName:"p"},"list"),",",(0,a.kt)("inlineCode",{parentName:"p"},"create"),",",(0,a.kt)("inlineCode",{parentName:"p"},"edit"),",",(0,a.kt)("inlineCode",{parentName:"p"},"show"),") the ",(0,a.kt)("inlineCode",{parentName:"p"},"useBreadcrumb")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," key to translate key ",(0,a.kt)("inlineCode",{parentName:"p"},"translate(`actions.${action}`)"),"."),(0,a.kt)("p",{parentName:"admonition"},"For example; ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," action should look like : ",(0,a.kt)("inlineCode",{parentName:"p"},"translate(`actions.create`)"))),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"breadcrumbs"),(0,a.kt)("td",{parentName:"tr",align:null},"The breadcrumbs array"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BreadcrumbsType"),"*")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"BreadcrumbsType")),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type BreadcrumbsType = {\n    label: string;\n    href?: string;\n    icon?: React.ReactNode;\n};\n"))))}c.isMDXComponent=!0}}]);