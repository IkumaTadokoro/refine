"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21666],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={id:"clone-button",title:"Clone",swizzle:!0},i=void 0,s={unversionedId:"api-reference/antd/components/buttons/clone-button",id:"version-3.xx.xx/api-reference/antd/components/buttons/clone-button",title:"Clone",description:"` uses Ant Design's  component. It uses the clone` method from useNavigation under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/clone.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/clone-button",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/clone-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/clone.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1686748472,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"clone-button",title:"Clone",swizzle:!0},sidebar:"someSidebar",previous:{title:"Breadcrumb",permalink:"/docs/3.xx.xx/api-reference/antd/components/breadcrumb"},next:{title:"Create",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/create-button"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CloneButton>")," uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},"useNavigation")," under the hood.\nIt can be useful when redirecting the app to the create page with the record id route of resource."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n    Table,\n    List,\n    useTable,\n    // highlight-next-line\n    CloneButton,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" width="100%" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    key="actions"\n                    render={(_, record) => (\n                        // highlight-next-line\n                        <CloneButton size="small" recordItemId={record.id} />\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { CloneButton } from "@pankod/refine-antd";\n\nconst MyCloneComponent = () => {\n    return <CloneButton resourceNameOrRouteName="posts" recordItemId="1" />;\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                create: ClonedPage,\n            },\n        ]}\n        DashboardPage={MyCloneComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/clone/1"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<CloneButton>"))," component reads the id information from the route by default.")),(0,r.kt)("h3",{id:"resourcenameorroutename"},(0,r.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,r.kt)("p",null,"It is used to redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/clone")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,r.kt)("inlineCode",{parentName:"p"},"/clone")," defined by the name property of the resource object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CloneButton } from "@pankod/refine-antd";\n\nconst MyCloneComponent = () => {\n    return (\n        <CloneButton resourceNameOrRouteName="categories" recordItemId="1" />\n    );\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n            {\n                name: "categories",\n                create: ClonedPage,\n            },\n        ]}\n        DashboardPage={MyCloneComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories/clone/2"),"."),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CloneButton } from "@pankod/refine-antd";\n\nconst MyCloneComponent = () => {\n    return (\n        <CloneButton\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n\n// visible-block-end\n\nconst ClonedPage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyCloneComponent,\n                create: ClonedPage,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"accesscontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CloneButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return (\n        <CloneButton\n            accessControl={{\n                enabled: true,\n                hideIfUnauthorized: true\n            }}\n        />\n    );\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(c,{module:"@pankod/refine-antd/CloneButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),".")))}m.isMDXComponent=!0}}]);