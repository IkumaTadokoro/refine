"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75865],{83375:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(67294),r=t(86010);const i="browserWindow_NI4q",a="browserWindowHeader_nZEk",s="buttons_iIn6",d="browserWindowAddressBar_K9wW",l="dot_VUxd",p="browserWindowMenuIcon_TbEo",u="bar_Ghqi",c="browserWindowBody_x6m3";function m(e){let{children:n,minHeight:t,url:m="http://localhost:3000",right:f}=e;return o.createElement("div",{className:i,style:{minHeight:t}},o.createElement("div",{className:a},o.createElement("div",{className:s},o.createElement("span",{className:l,style:{background:"#f25f58"}}),o.createElement("span",{className:l,style:{background:"#fbbe3c"}}),o.createElement("span",{className:l,style:{background:"#58cb42"}})),o.createElement("div",{className:(0,r.Z)(d,"text--truncate")},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/logo/refine-mini.svg"}),m),f||o.createElement("div",{className:p},o.createElement("div",null,o.createElement("span",{className:u}),o.createElement("span",{className:u}),o.createElement("span",{className:u})))),o.createElement("div",{className:c,style:{overflow:"hidden"}},n))}},9612:(e,n,t)=>{t.d(n,{Z:()=>L});var o=t(67294),r=t(90814),i=t(86010),a=t(52263),s=t(45772),d=t.n(s),l=t(74477);const p="playgroundContainer_ppBt",u="playgroundHeader_DsVj",c="headerButton_QPem",m="playgroundPreview_jwe9",f="playgroundEditorWrapper_AfoV";var g=t(83375);const h=e=>{let{if:n,maxWait:t,children:r}=e;const[i,a]=o.useState(n),[s]=o.useState(t);o.useEffect((()=>{!i&&n&&a(!0)}),[n]),o.useEffect((()=>{if(s){const e=setTimeout((()=>{a(!0)}),s);return()=>clearTimeout(e)}}),[s]);const d=o.useMemo((()=>i&&"function"==typeof r?r():null),[i]);if(void 0!==r&&"function"!=typeof r)throw new Error("Conditional component requires a function as a child");return d};var k=t(57482),P=t(30816);t.g.Buffer=t.g.Buffer||P.lW;const v=e=>{let{query:n,code:t,css:r}=e;const{siteConfig:{customFields:i}}=(0,a.Z)(),[s,l]=o.useState(void 0),p=o.useCallback((async e=>{if("undefined"!=typeof window&&window.Worker){const t=new Worker(`${location.protocol}//${location.host}/workers/lz-worker.js`);t.onmessage=function(e){let{data:o}=e;o.compressed&&l(`${i.LIVE_PREVIEW_URL}?code=${o.compressed}${r?`&css=${d().encode(r)}`:""}${n?`${n}`:""}`),t.terminate()},t.postMessage({code:e})}}),[n]);return o.useEffect((()=>{p(t)}),[t,p]),s?o.createElement("iframe",{loading:"lazy",src:s,width:"100%",height:"100%",style:{borderRadius:"3px",position:"absolute",left:0,top:0,width:"100%",height:"100%"}}):null},C=o.memo(v,((e,n)=>e.code===n.code&&e.query===n.query&&e.css===n.css));function y(e){let{hidden:n,code:t}=e;const[r,a]=o.useState(!n);return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,i.Z)(u)},o.createElement("button",{className:(0,i.Z)(c),onClick:()=>a((e=>!e))},r?"Hide":"Show"," Code")),o.createElement("div",{className:(0,i.Z)(f,"playground-code",r&&"playground-code-visible"),style:{maxHeight:r?"4500px":"0px",padding:r?void 0:"0px",transition:"0.3s all ease-in-out",overflow:"hidden"}},o.createElement(L,{language:"tsx",style:{borderRadius:0}},t)))}const x=e=>{let{children:n,disableScroll:t,previewHeight:r,hideCode:s=!1,url:d="http://localhost:3000",previewOnly:u=!1,tailwind:c=!1}=e;const f=String(n),{shared:P,sharedCss:v}=(0,k.dD)(),{visible:x}=(e=>{const n="// visible-block-start";let t=e.indexOf(n);t=t>0?t+n.length:0;let o=e.indexOf("// visible-block-end");o=o>0?o:e.length;const r=e.slice(0,t),i=e.slice(t,o).trimEnd().trimStart(),a=e.slice(o);return{visible:i,join:e=>`${r}\n${e}\n${a}`}})(`\n    ${P??""}\n    ${f}\n    `.replace(/\n$/,"")),b=o.useRef(null),N=function(e,n){void 0===n&&(n="0px");const[t,r]=o.useState(!1);return o.useEffect((()=>{const t=null==e?void 0:e.current,o=new IntersectionObserver((e=>{let[n]=e;r(n.isIntersecting)}),{rootMargin:n});return t&&o.observe(t),()=>{t&&o.unobserve(t)}}),[]),t}(b),{siteConfig:{customFields:w}}=(0,a.Z)(),{isLast:I}=(0,l.E)();return o.createElement("div",{className:p},o.createElement(o.Fragment,null,o.createElement(g.Z,{url:d},o.createElement("div",{className:(0,i.Z)(m,"live-editor-wrapper"),style:{maxHeight:r,minHeight:r,overflow:t?"hidden":void 0,position:"relative"},ref:b},I?o.createElement(h,{if:N,maxWait:3e3},(()=>o.createElement(C,{code:`\n${P??""}\n${f}\n                                        `,css:v,query:`${t?"&disableScroll=true":""}${c?"&tailwind=true":""}`}))):o.createElement("div",{style:{height:"100%",minHeight:"inherit",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.25rem"}},o.createElement("span",null,"Live previews only work with the latest documentation.")))),!u&&o.createElement(y,{hidden:s,code:x})))},b=o.memo(x,((e,n)=>String(e.children)===String(n.children))),N=e=>{let{children:n}=e;const{setShared:t}=(0,k.dD)();return o.useEffect((()=>(t(String(n)),()=>{t(void 0)})),[n]),null},w=o.memo(N,((e,n)=>String(e.children)===String(n.children))),I=e=>{let{children:n}=e;const{setSharedCss:t}=(0,k.dD)();return o.useEffect((()=>(t(String(n)),()=>{t(void 0)})),[n]),null},R=o.memo(I,((e,n)=>String(e.children)===String(n.children)));function L(e){var n;return e.live&&e.live&&null!=(n=e.className)&&n.includes("language-css")?o.createElement(R,e):e.shared&&e.live?o.createElement(w,e):e.live?o.createElement(b,e):o.createElement(r.Z,e)}},46533:(e,n,t)=>{t.r(n),t.d(n,{Packages:()=>m,assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var o=t(87462),r=(t(67294),t(3905)),i=t(65488),a=t(85162),s=t(9612);const d={id:"migration-guide",title:"Migration Guide"},l=void 0,p={unversionedId:"migration-guide",id:"version-3.xx.xx/migration-guide",title:"Migration Guide",description:"2.0.XX to 3.0.XX",source:"@site/versioned_docs/version-3.xx.xx/migration-guide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/docs/3.xx.xx/migration-guide",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/migration-guide.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680535066,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"migration-guide",title:"Migration Guide"},sidebar:"someSidebar",previous:{title:"Testing",permalink:"/docs/3.xx.xx/testing"},next:{title:"Licence",permalink:"/docs/3.xx.xx/licence"}},u={},c=[{value:"2.0.XX to 3.0.XX",id:"20xx-to-30xx",level:2},{value:"Motivation behind breaking changes",id:"motivation-behind-breaking-changes",level:3},{value:"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)",id:"-migrating-your-project-automatically-with-refine-codemod--recommended",level:2},{value:"Migrating your project manually",id:"migrating-your-project-manually",level:2},{value:"Updating the packages",id:"updating-the-packages",level:3},{value:"Change Import",id:"change-import",level:3},{value:"<code>notificationProvider</code>",id:"notificationprovider",level:3},{value:"<code>Layout</code> and <code>ErrorComponent</code>",id:"layout-and-errorcomponent",level:3},{value:"Default <code>LoginPage</code>",id:"default-loginpage",level:3},{value:"<code>configProviderProps</code> to <code>ConfigProvider</code>",id:"configproviderprops-to-configprovider",level:3},{value:"<code>setEditId</code> to <code>setId</code> &amp; <code>editId</code> to <code>id</code>",id:"seteditid-to-setid--editid-to-id",level:3}],m=()=>{const e=["@pankod/refine-airtable","@pankod/refine-altogic","@pankod/refine-graphql","@pankod/refine-hasura","@pankod/refine-nestjsx-crud","@pankod/refine-nextjs-router","@pankod/refine-react-router","@pankod/refine-simple-rest","@pankod/refine-strapi","@pankod/refine-strapi-v4","@pankod/refine-strapi-graphql","@pankod/refine-supabase","@pankod/refine-appwrite","@pankod/refine-ably"];return(0,r.kt)(i.Z,{defaultValue:"@pankod/refine-airtable",values:e.map((e=>({label:e,value:e}))),mdxType:"Tabs"},e.map((e=>(0,r.kt)(a.Z,{value:e,mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},`npm i ${e}@latest`)))))},f={toc:c,Packages:m};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"20xx-to-30xx"},"2.0.XX to 3.0.XX"),(0,r.kt)("h3",{id:"motivation-behind-breaking-changes"},"Motivation behind breaking changes"),(0,r.kt)("p",null,"One of the big requests we received from the Community after we released the first version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," was that ",(0,r.kt)("strong",{parentName:"p"},"refine")," could be used with different UI frameworks other than Ant Design.\nWe are happy to announce that you can use it as ",(0,r.kt)("strong",{parentName:"p"},"refine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Headless")," on top of these requests. Now ",(0,r.kt)("strong",{parentName:"p"},"refine")," is a framework and works in harmony with the any UI framework you choose. At the same time, all projects made with Refine@2 are also Refine@3 compatible."),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x ",(0,r.kt)("strong",{parentName:"p"},"headless")," version, we have released two new packages named ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-core")," package includes UI independent hooks and components. The ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-antd")," package includes Ant Design components and there are table, form, select, etc hooks and components compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,r.kt)("h2",{id:"-migrating-your-project-automatically-with-refine-codemod--recommended"},"\ud83e\ude84 Migrating your project automatically with refine-codemod \u2728 (recommended)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/codemod"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-codemod"))," package handles the breaking changes for your project automatically, without any manual steps. It migrates your project from ",(0,r.kt)("inlineCode",{parentName:"p"},"2.x.x")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"3.x.x"),"."),(0,r.kt)("p",null,"Just ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into root folder of your project (where ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is contained) and run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx @pankod/refine-codemod refine2-to-refine3\n")),(0,r.kt)("p",null,"And it's done. Now your project uses ",(0,r.kt)("inlineCode",{parentName:"p"},"refine@3.x.x"),"."),(0,r.kt)("h2",{id:"migrating-your-project-manually"},"Migrating your project manually"),(0,r.kt)("h3",{id:"updating-the-packages"},"Updating the packages"),(0,r.kt)("p",null,"Packages used by your app must be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"^3.xx.xx")),(0,r.kt)("p",null,"@pankod/refine has been deprecated with ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x version. You must now use ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall @pankod/refine\n\nnpm i @pankod/refine-core @pankod/refine-antd\n")),(0,r.kt)(m,{mdxType:"Packages"}),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Make sure your using packages are version of 3.x.x otherwise you may get errors.")),(0,r.kt)("h3",{id:"change-import"},"Change Import"),(0,r.kt)("p",null,"UI independent import packages have been migrated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-core")," package with version ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show All Core Imports"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'[\n    "Authenticated",\n    "AuthenticatedProps",\n    "CanAccess",\n    "CanAccessProps",\n    "Refine",\n    "RefineProps",\n    "LayoutWrapperProps",\n    "LayoutWrapper",\n    "LayoutProps",\n    "DefaultLayout",\n    "RouteChangeHandler",\n    "UndoableQueue",\n    "defaultAccessControlContext",\n    "AccessControlContext",\n    "AccessControlContextProvider",\n    "CanParams",\n    "CanReturnType",\n    "IAccessControlContext",\n    "TLogoutVariables",\n    "TLogoutData",\n    "IAuthContext",\n    "Pagination",\n    "Search",\n    "CrudOperators",\n    "CrudFilter",\n    "CrudSort",\n    "CrudFilters",\n    "CrudSorting",\n    "CustomResponse",\n    "GetListResponse",\n    "CreateResponse",\n    "CreateManyResponse",\n    "UpdateResponse",\n    "UpdateManyResponse",\n    "GetOneResponse",\n    "GetManyResponse",\n    "DeleteOneResponse",\n    "DeleteManyResponse",\n    "IDataContext",\n    "IDataContextProvider",\n    "defaultDataProvider",\n    "DataContext",\n    "DataContextProvider",\n    "ILiveContext",\n    "ILiveContextProvider",\n    "LiveContext",\n    "LiveContextProvider",\n    "defaultNotificationProvider",\n    "NotificationContext",\n    "NotificationContextProvider",\n    "RefineContext",\n    "RefineContextProvider",\n    "ResourceContext",\n    "ResourceContextProvider",\n    "IResourceContext",\n    "OptionsProps",\n    "ResourceProps",\n    "IResourceComponentsProps",\n    "IResourceComponents",\n    "IResourceItem",\n    "RouterContext",\n    "RouterContextProvider",\n    "IRouterProvider",\n    "IRouterContext",\n    "PromptProps",\n    "TranslationContext",\n    "TranslationContextProvider",\n    "Translate",\n    "I18nProvider",\n    "ITranslationContext",\n    "UnsavedWarnContext",\n    "UnsavedWarnContextProvider",\n    "IUnsavedWarnContext",\n    "importCSVMapper",\n    "userFriendlyResourceName",\n    "userFriendlySecond",\n    "parseTableParams",\n    "parseTableParamsFromQuery",\n    "stringifyTableParams",\n    "compareFilters",\n    "unionFilters",\n    "setInitialFilters",\n    "file2Base64",\n    "UseCanProps",\n    "useCan",\n    "useCanWithoutCache",\n    "useAuthenticated",\n    "useCheckError",\n    "useGetIdentity",\n    "useIsAuthenticated",\n    "UseLoginReturnType",\n    "useLogin",\n    "useLogout",\n    "usePermissions",\n    "useIsExistAuthentication",\n    "unionFilters",\n    "useApiUrl",\n    "UseCreateReturnType",\n    "useCreate",\n    "UseCreateManyReturnType",\n    "useCreateMany",\n    "UseCustomProps",\n    "useCustom",\n    "useDelete",\n    "useDeleteMany",\n    "UseListProps",\n    "useList",\n    "UseManyProps",\n    "useMany",\n    "UseOneProps",\n    "useOne",\n    "UseUpdateReturnType",\n    "useUpdate",\n    "useUpdateMany",\n    "CSVDownloadProps",\n    "LabelKeyObject",\n    "useExport",\n    "Authenticated",\n    "CanAccess",\n    "LayoutWrapper",\n    "Refine",\n    "RouteChangeHandler",\n    "UndoableQueue",\n    "file2Base64",\n    "importCSVMapper",\n    "parseTableParams",\n    "parseTableParamsFromQuery",\n    "setInitialFilters",\n    "stringifyTableParams",\n    "unionFilters",\n    "useApiUrl",\n    "useAuthenticated",\n    "useCacheQueries",\n    "useCan",\n    "useCanWithoutCache",\n    "useCancelNotification",\n    "useCheckError",\n    "useCreate",\n    "useCreateMany",\n    "useCustom",\n    "useDelete",\n    "useDeleteMany",\n    "useExport",\n    "useGetIdentity",\n    "useGetLocale",\n    "useGetManyQueries",\n    "useGetOneQueries",\n    "useHandleNotification",\n    "useIsAuthenticated",\n    "useIsExistAuthentication",\n    "useList",\n    "useListResourceQueries",\n    "useLiveMode",\n    "useLogin",\n    "useLogout",\n    "useMany",\n    "useMutationMode",\n    "useNavigation",\n    "useNotification",\n    "useOne",\n    "usePermissions",\n    "usePublish",\n    "useRedirectionAfterSubmission",\n    "useRefineContext",\n    "useResource",\n    "useResourceSubscription",\n    "useResourceWithRoute",\n    "useRouterContext",\n    "useSetLocale",\n    "useShow",\n    "useSubscription",\n    "useSyncWithLocation",\n    "useTitle",\n    "useTranslate",\n    "useUpdate",\n    "useUpdateMany",\n    "useWarnAboutChange",\n    "userFriendlyResourceName",\n    "AuthenticatedProps",\n    "CanAccessProps",\n    "RefineProps",\n    "LayoutWrapperProps",\n    "LiveModeProps",\n    "UseResourceSubscriptionProps",\n    "PublishType",\n    "UseSubscriptionProps",\n    "LiveEvent",\n    "HistoryType",\n    "UseRedirectionAfterSubmissionType",\n    "UseWarnAboutChangeType",\n    "UseMutationModeType",\n    "useRefineContext",\n    "UseSyncWithLocationType",\n    "TitleProps",\n    "UseResourceType",\n    "useResourceWithRoute",\n    "useShowReturnType",\n    "useShowProps",\n    "UseGetLocaleType",\n    "Fields",\n    "NestedField",\n    "QueryBuilderOptions",\n    "MetaDataQuery",\n    "VariableOptions",\n    "HttpError",\n    "BaseRecord",\n    "Option",\n    "MapDataFn",\n    "MutationMode",\n    "IUndoableQueue",\n    "RedirectionTypes",\n    "ResourceErrorRouterParams",\n    "ResourceRouterParams",\n    "SuccessErrorNotification",\n    "OpenNotificationParams",\n    "AuthProvider",\n];\n')))),(0,r.kt)("p",null,"All of the imports defined above must now be imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),". UI related imports and other imports are now in ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="App.tsx"',title:'"App.tsx"'},'- import { Refine } from "@pankod/refine";\n+ import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-json-server";\n\n- import "@pankod/refine/dist/styles.min.css";\n+ import "@pankod/refine-antd/dist/reset.css"\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n        />\n    );\n};\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"List Page Example"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="PostList.tsx"',title:'"PostList.tsx"'},'- import {\n-    IResourceComponentsProps,\n-    useMany,\n-    List,\n-    TextField,\n-    TagField,\n-    DateField,\n-    Table,\n-    useTable,\n-    Space,\n-    EditButton,\n-    ShowButton,\n-    FilterDropdown,\n-    Select,\n-    useSelect,\n-    DeleteButton,\n- } from "@pankod/refine"\n\n+ import { IResourceComponentsProps, useMany } from "@pankod/refine-core";\n\n+ import {\n+    List,\n+    TextField,\n+    TagField,\n+    DateField,\n+    Table,\n+    useTable,\n+    Space,\n+    EditButton,\n+    ShowButton,\n+    FilterDropdown,\n+    Select,\n+    useSelect,\n+    DeleteButton,\n+} from "@pankod/refine-antd";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data: categoriesData, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="title" title="title" />\n                <Table.Column\n                    dataIndex="status"\n                    title="status"\n                    render={(value) => <TagField value={value} />}\n                />\n                <Table.Column\n                    dataIndex="createdAt"\n                    title="createdAt"\n                    render={(value) => <DateField format="LLL" value={value} />}\n                />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    title="category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    categoriesData?.data.find(\n                                        (item) => item.id === value,\n                                    )?.title\n                                }\n                            />\n                        );\n                    }}\n                    filterDropdown={(props) => (\n                        <FilterDropdown {...props}>\n                            <Select\n                                style={{ minWidth: 200 }}\n                                mode="multiple"\n                                placeholder="Select Category"\n                                {...categorySelectProps}\n                            />\n                        </FilterDropdown>\n                    )}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => {\n                        return (\n                            <Space>\n                                <EditButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                                <ShowButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                                <DeleteButton\n                                    hideText\n                                    size="small"\n                                    recordItemId={record.id}\n                                />\n                            </Space>\n                        );\n                    }}\n                />\n            </Table>\n        </List>\n    );\n};\n\n')))),(0,r.kt)("h3",{id:"notificationprovider"},(0,r.kt)("inlineCode",{parentName:"h3"},"notificationProvider")),(0,r.kt)("p",null,"With ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3.x.x, you can include and use different notification libraries in your project. The use of ",(0,r.kt)("inlineCode",{parentName:"p"},"notificationProvider")," with Ant Design should be as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\n//highlight-start\nimport { notificationProvider } from "@pankod/refine-antd";\n//highlight-end\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostEdit, PostCreate, PostShow } from "./pages";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                    canDelete: true,\n                },\n            ]}\n            //highlight-start\n            notificationProvider={notificationProvider}\n            //highlight-end\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"layout-and-errorcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"Layout")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"ErrorComponent")),(0,r.kt)("p",null,"If you are using the default ",(0,r.kt)("inlineCode",{parentName:"p"},"layout")," of ",(0,r.kt)("strong",{parentName:"p"},"refine"),", you need to import and define it from the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-antd")," package as in the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, AuthProvider } from "@pankod/refine-core";\nimport {\n    notificationProvider,\n    //highlight-start\n    Layout,\n    ErrorComponent,\n} from "@pankod/refine-antd";\n//highlight-end\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    create: PostCreate,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n            notificationProvider={notificationProvider}\n            //highlight-start\n            Layout={Layout}\n            catchAll={<ErrorComponent />}\n            //highlight-end\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"default-loginpage"},"Default ",(0,r.kt)("inlineCode",{parentName:"h3"},"LoginPage")),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s default login page while using AuthProvider, you must now import and define ",(0,r.kt)("inlineCode",{parentName:"p"},"LoginPage")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, AuthProvider } from "@pankod/refine-core";\nimport {\n    notificationProvider,\n    //highlight-next-line\n    LoginPage,\n    Layout,\n    ErrorComponent,\n    //highlight-next-line\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostEdit, PostShow } from "pages/posts";\nimport { DashboardPage } from "pages/dashboard";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            DashboardPage={DashboardPage}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                    edit: PostEdit,\n                    show: PostShow,\n                },\n            ]}\n            notificationProvider={notificationProvider}\n            //highlight-next-line\n            LoginPage={LoginPage}\n            Layout={Layout}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("h3",{id:"configproviderprops-to-configprovider"},(0,r.kt)("inlineCode",{parentName:"h3"},"configProviderProps")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"ConfigProvider")),(0,r.kt)("p",null,"configProviderProps has been deprecated. Instead we use ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigProvider")," which is included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-antd")," package. If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigProvider")," you need to wrap ",(0,r.kt)("inlineCode",{parentName:"p"},"Refine")," component as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import { Refine } from "@pankod/refine-core";\nimport {\n    notificationProvider,\n+   ConfigProvider,\n    Layout,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n+       <ConfigProvider direction={"rtl"}>\n            <Refine\n                dataProvider={dataProvider(API_URL)}\n                routerProvider={routerProvider}\n-               configProviderProps={{\n-                   direction: "rtl",\n-               }}\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                        create: PostCreate,\n                        edit: PostEdit,\n                        show: PostShow,\n                    },\n                ]}\n                notificationProvider={notificationProvider}\n                Layout={Layout}\n                catchAll={<ErrorComponent />}\n            />\n+       </ConfigProvider>\n    );\n};\n')),(0,r.kt)("h3",{id:"seteditid-to-setid--editid-to-id"},(0,r.kt)("inlineCode",{parentName:"h3"},"setEditId")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"setId")," & ",(0,r.kt)("inlineCode",{parentName:"h3"},"editId")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,"Change the use ",(0,r.kt)("inlineCode",{parentName:"p"},"setEditId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"editId")," used in ",(0,r.kt)("inlineCode",{parentName:"p"},"useEditableTable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"useDrawerForm"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"setEditId")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"setId"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"editId")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"id")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="PostList"',title:'"PostList"'},'import { IResourceComponentsProps } from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    Form,\n    Space,\n    Button,\n    SaveButton,\n    EditButton,\n    Input,\n    TextField,\n    useEditableTable,\n} from "@pankod/refine-antd";\n\nimport { IPost } from "interfaces";\n\nexport const PostList: React.FC<IResourceComponentsProps> = () => {\n    const {\n        tableProps,\n        formProps,\n        isEditing,\n-       setEditId,\n+       setId,\n-       editId,\n+       id,\n        saveButtonProps,\n        cancelButtonProps,\n        editButtonProps,\n    } = useEditableTable<IPost>();\n};\n')))}g.isMDXComponent=!0}}]);