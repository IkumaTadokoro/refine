"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50251],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,h=c["".concat(p,".").concat(m)]||c[m]||l[m]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},66848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={id:"index",title:"Resources",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/index"}},i=void 0,s={unversionedId:"tutorial/understanding-resources/index",id:"tutorial/understanding-resources/index",title:"Resources",description:"In Unit 2.4, we defined a resource to create our CRUD pages with the Inferencer component but did not explain how it works. We will take care of that in this unit and thoroughly explain the resources prop of the `` component using mock components.",source:"@site/docs/tutorial/3-understanding-resources/0-intro.md",sourceDirName:"tutorial/3-understanding-resources",slug:"/tutorial/understanding-resources/index",permalink:"/docs/tutorial/understanding-resources/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/3-understanding-resources/0-intro.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1686748472,formattedLastUpdatedAt:"Jun 14, 2023",sidebarPosition:0,frontMatter:{id:"index",title:"Resources",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/index"}}},p={},d=[{value:"What is resource?",id:"what-is-resource",level:2},{value:"Resources and routes",id:"resources-and-routes",level:3},{value:"Defining actions for a resource",id:"defining-actions-for-a-resource",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},l=u("UIConditional"),c=u("Checklist"),m=u("ChecklistItem"),h={toc:d};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Remember",type:"info"},(0,o.kt)(l,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we defined a resource to create our CRUD pages with the Inferencer component but did not explain how it works. We will take care of that in this unit and thoroughly explain the resources prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using mock components.")),(0,o.kt)(l,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages/"},"Unit 2.4"),", we defined a resource to create our CRUD pages with the Inferencer component but did not explain how it works. We will take care of that in this unit and thoroughly explain the resources prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using mock components.")),(0,o.kt)(l,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Unit 2.4"),", we defined a resource to create our CRUD pages with the Inferencer component but did not explain how it works. We will take care of that in this unit and thoroughly explain the resources prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using mock components.")),(0,o.kt)(l,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mantine/generate-crud-pages/"},"Unit 2.4"),", we defined a resource to create our CRUD pages with the Inferencer component but did not explain how it works. We will take care of that in this unit and thoroughly explain the resources prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using mock components.")),(0,o.kt)(l,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages/"},"Unit 2.4"),", we defined a resource to create our CRUD pages with the Inferencer component but did not explain how it works. We will take care of that in this unit and thoroughly explain the resources prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component using mock components."))),(0,o.kt)("p",null,"Before we start, we need to understand what the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component is."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component serves as the starting point for ",(0,o.kt)("strong",{parentName:"p"},"refine"),". It is a wrapper component that offers context to the ",(0,o.kt)("strong",{parentName:"p"},"refine")," components and hooks and is used to configure the top-level settings of the application."),(0,o.kt)("p",null,"Though ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," is the only necessary prop for initializing the app, there are other props such as ",(0,o.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"i18nProvider"),", etc. Each of these props enables the configuration of various aspects of the application, such as data management, routing, authentication, localization, layout and more."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>")," Documentation","\u2192"))),(0,o.kt)("h2",{id:"what-is-resource"},"What is resource?"),(0,o.kt)("p",null,"In the context of a CRUD application, a resource typically refers to a data entity that can be created, read, updated, or deleted. For example, a resource could be a user account, a blog post, a blog post in an online store, or any other piece of data that can be managed by the CRUD app."),(0,o.kt)("p",null,"To add a ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," to our app, we need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. This prop accepts an array of objects, each representing a resource. These objects may contain properties to define the resource\u2019s name, actions' routes, and additional metadata such as label, icon, audit log settings, and sider menu nesting etc."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The action paths we define in resources help ",(0,o.kt)("strong",{parentName:"p"},"refine")," render menu items, breadcrumbs, and handle form redirections, among other things. Which means that ",(0,o.kt)("strong",{parentName:"p"},"refine")," coexists with your routes and complements them without imposing any limitations.")),(0,o.kt)("h3",{id:"resources-and-routes"},"Resources and routes"),(0,o.kt)("p",null,"Path definitions in the resource configuration help ",(0,o.kt)("strong",{parentName:"p"},"refine")," recognize the available actions for the resource at that particular path. This allows ",(0,o.kt)("strong",{parentName:"p"},"refine")," to automatically identify the resource based on the current path without requiring users to manually specify the resource prop in their hooks and components."),(0,o.kt)("p",null,"Thanks to its flexibility, ",(0,o.kt)("strong",{parentName:"p"},"refine")," can be seamlessly integrated into any existing React application without imposing any limitations on users. It can also be attached to routes where it\u2019s needed without interfering with your routing logic. This makes it possible to use ",(0,o.kt)("strong",{parentName:"p"},"refine")," with enterprise-grade applications that have complex requirements such as nested routes and multi-tenancy."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It\u2019s important to note that route management will be handled by your preferred framework (React Router, Next.js, Remix) which is what makes it possible to use ",(0,o.kt)("strong",{parentName:"p"},"refine")," with any React (Web, Electron, React Native etc.) application freely.")),(0,o.kt)(l,{is:"headless",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                routerProvider={routerBindings}\n                //highlight-start\n                resources={[\n                    {\n                        name: "blog_posts",\n                        list: "/blog-posts",\n                        show: "/blog-posts/show/:id",\n                        create: "/blog-posts/create",\n                        edit: "/blog-posts/edit/:id",\n                    },\n                ]}\n                //highlight-end\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        index\n                        element={<NavigateToResource resource="blog_posts" />}\n                    />\n\n                    <Route path="blog-posts">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n\n                    <Route path="*" element={<div>Error!</div>} />\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(l,{is:"antd",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { ErrorComponent, ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport "@refinedev/antd/dist/reset.css";\nimport { ConfigProvider } from "antd";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    routerProvider={routerBindings}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    //highlight-end\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n                            <Route path="blog-posts">\n                                <Route index element={<AntdInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<AntdInferencer />}\n                                />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(l,{is:"chakra-ui",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n} from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport { Refine } from "@refinedev/core";\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ChakraProvider theme={RefineThemes.Blue}>\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    routerProvider={routerBindings}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    //highlight-end\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n                            <Route path="blog-posts">\n                                <Route index element={<ChakraUIInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<ChakraUIInferencer />}\n                                />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </ChakraProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(l,{is:"mantine",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\nimport { ErrorComponent, ThemedLayoutV2, RefineThemes } from "@refinedev/mantine";\nimport { MantineProvider, Global } from "@mantine/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <MantineProvider\n                theme={RefineThemes.Blue}\n                withNormalizeCSS\n                withGlobalStyles\n            >\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    routerProvider={routerBindings}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    //highlight-end\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n                            <Route path="blog-posts">\n                                <Route index element={<MantineInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<MantineInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<MantineInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<MantineInferencer />}\n                                />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </MantineProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)(l,{is:"mui",mdxType:"UIConditional"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport { ErrorComponent, ThemedLayoutV2, RefineThemes } from "@refinedev/mui";\nimport { CssBaseline, GlobalStyles } from "@mui/material";\nimport { ThemeProvider } from "@mui/material/styles";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ThemeProvider theme={RefineThemes.Blue}>\n                <CssBaseline />\n                <GlobalStyles\n                    styles={{ html: { WebkitFontSmoothing: "auto" } }}\n                />\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    routerProvider={routerBindings}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    //highlight-end\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayoutV2>\n                                    <Outlet />\n                                </ThemedLayoutV2>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n                            <Route path="blog-posts">\n                                <Route index element={<MuiInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<MuiInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<MuiInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<MuiInferencer />}\n                                />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </ThemeProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n'))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information about router usage, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/components/routes"},"React Router Documentation"),".")),(0,o.kt)("h2",{id:"defining-actions-for-a-resource"},"Defining actions for a resource"),(0,o.kt)("p",null,"A resource can perform actions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clone"),". All of these actions, except ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),", are defined in the properties of the resource object."),(0,o.kt)("p",null,"The simplest way to define the actions is to provide the path of the page. For example, if we want to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," action of the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource, we can do it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    name: "blog_posts",\n    list: "/blog-posts",\n}\n')),(0,o.kt)("p",null,"Paths can include parameters with a convention similar ",(0,o.kt)("inlineCode",{parentName:"p"},":paramName"),". For example, if we want to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," action of the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    name: "blog_posts",\n    show: "/blog-posts/show/:id",\n}\n')),(0,o.kt)("p",null,"Additional parameters can also be defined in the path. For example, if we want to define the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," action of the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    name: "blog_posts",\n    edit: "/blog-posts/edit/:id/:version",\n}\n')),(0,o.kt)("p",null,"These additional parameters, except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," parameter, can be passed to the components or hooks using ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," properties. The existing parameters in the URL will be used by default when handling the navigation."),(0,o.kt)("p",null,"For example, let\u2019s say that we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," action for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource as ",(0,o.kt)("inlineCode",{parentName:"p"},"/:userId/blog-posts/create")," and the user is currently on the ",(0,o.kt)("inlineCode",{parentName:"p"},"/:userID/blog-posts")," page."),(0,o.kt)("p",null,"When the user clicks on the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," button, they will be redirected to ",(0,o.kt)("inlineCode",{parentName:"p"},"/:userId/blog-posts/create")," because the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," parameter has been inferred from the current path."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Features related to routing, such as the inference of the resource by the route, the generation of the routes (optional), etc., require the use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,o.kt)("p",{parentName:"admonition"},"When using the ",(0,o.kt)("strong",{parentName:"p"},"refine")," hooks and components, if you provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," will be inferred from the current route and the inferred resource will be passed as ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," functions, hooks and components by default."),(0,o.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#routerprovider"},(0,o.kt)("inlineCode",{parentName:"a"},"<routerProvider")," part of the ",(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>")," Documentation","\u2192"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),", refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#resources"},"its section in the API reference documentation"))),(0,o.kt)(c,{mdxType:"Checklist"},(0,o.kt)(m,{id:"understanding-resource",mdxType:"ChecklistItem"},"I understood what a resource is and how to add it to my app.")))}f.isMDXComponent=!0}}]);