"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},l),{},{components:n})):i.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={id:"edit-button",title:"Edit",swizzle:!0},a=void 0,d={unversionedId:"api-reference/antd/components/buttons/edit-button",id:"api-reference/antd/components/buttons/edit-button",title:"Edit",description:"` uses Ant Design's  component. It uses the edit method from useNavigation` under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource.",source:"@site/docs/api-reference/antd/components/buttons/edit.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/edit-button",permalink:"/docs/api-reference/antd/components/buttons/edit-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/buttons/edit.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683561911,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{id:"edit-button",title:"Edit",swizzle:!0},sidebar:"someSidebar",previous:{title:"Delete",permalink:"/docs/api-reference/antd/components/buttons/delete-button"},next:{title:"Export",permalink:"/docs/api-reference/antd/components/buttons/export-button"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=l("PropTag"),u=l("PropsTable"),m={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n    List,\n    useTable,\n    // highlight-next-line\n    EditButton,\n} from "@refinedev/antd";\nimport { Table } from "antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" width="100%" />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    key="actions"\n                    render={(_, record) => (\n                        // highlight-next-line\n                        <EditButton size="small" recordItemId={record.id} />\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},(0,r.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { EditButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            resource="posts"\n            // highlight-next-line\n            recordItemId="123"\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n                edit: () => {\n                    return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n                },\n            },\n        ]}\n        DashboardPage={MyEditComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton>")," component reads the id information from the route by default.")),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"Redirection endpoint is defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property and its ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," action path. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses the inferred resource from the route."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            // highlight-next-line\n            resource="categories"\n            recordItemId="123"\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n                edit: () => {\n                    return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n                },\n            },\n            {\n                name: "categories",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n                edit: () => {\n                    return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n                },\n            },\n        ]}\n        DashboardPage={MyEditComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," action path of the resource, filling the necessary parameters in the route."),(0,r.kt)("h3",{id:"meta"},(0,r.kt)("inlineCode",{parentName:"h3"},"meta")),(0,r.kt)("p",null,"It is used to pass additional parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method. You can pass additional parameters or override the existing ones using the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," action route is defined by the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/edit/:id"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n    return (\n        <EditButton meta={{ authorId: "10" }} />\n    );\n};\n')),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            recordItemId="123"\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyEditComponent,\n                edit: () => {\n                    return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n                },\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h3",{id:"accesscontrol"},(0,r.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@refinedev/antd";\n\nexport const MyListComponent = () => {\n    return (\n        <EditButton\n            // highlight-start\n            accessControl={{\n                enabled: true,\n                hideIfUnauthorized: true,\n            }}\n            // highlight-end\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"resourcenameorroutename-"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,r.kt)(c,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.kt)("p",null,"Redirection endpoint(",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/edit"),") is defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"<EditButton>")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as an endpoint to redirect after clicking."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@refinedev/antd";\n\nconst MyEditComponent = () => {\n    return (\n        <EditButton\n            // highlight-next-line\n            resourceNameOrRouteName="categories"\n            recordItemId="123"\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n                edit: () => {\n                    return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n                },\n            },\n            {\n                name: "categories",\n                list: () => {\n                    return <RefineAntd.List>List page here...</RefineAntd.List>;\n                },\n                edit: () => {\n                    return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n                },\n            },\n        ]}\n        DashboardPage={MyEditComponent}\n    />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/categories/edit/2"),"."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(u,{module:"@refinedev/antd/EditButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),".")))}h.isMDXComponent=!0}}]);