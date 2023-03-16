"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29838],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(t),h=o,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},82162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const i={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},a=void 0,s={unversionedId:"tutorial/getting-started/mantine/generate-crud-pages",id:"tutorial/getting-started/mantine/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/docs/tutorial/1-getting-started/mantine/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/mantine",slug:"/tutorial/getting-started/mantine/generate-crud-pages",permalink:"/docs/tutorial/getting-started/mantine/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/mantine/3-generate-crud-pages.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678986631,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},p={},d=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},u=l("Checklist"),c=l("ChecklistItem"),h={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inferencer"},"Inferencer"),(0,o.kt)("p",null,"Inferencer is a powerful tool in the ",(0,o.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations."),(0,o.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,o.kt)("p",null,"There are several benefits:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,o.kt)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks."),(0,o.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/docs/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/mantine/components/inferencer/"},"how to use Inferencer with Mantine"),".")),(0,o.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"<MantineInferencer/>")," component, which can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/mantine"),". It used to generate CRUD pages based on your API response with Mantine components."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<MantineInferencer/>")," component is used by passing to appropriate values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ErrorComponent,\n} from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "products",\n                                list: "/products",\n                                show: "/products/show/:id",\n                                create: "/products/create",\n                                edit: "/products/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                {/* highlight-start */}\n                                <Route path="products">\n                                    <Route\n                                        index\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MantineInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"At this point, ",(0,o.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource based on the API response."),(0,o.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,o.kt)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,o.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,o.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,o.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,o.kt)("inlineCode",{parentName:"p"},"products"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,o.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,o.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,o.kt)("h3",{id:"list-page"},"List Page"),(0,o.kt)("p",null,"To preview the list page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,o.kt)("p",null,"You should see the list page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource that was generated by Inferencer like below:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,o.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000/products"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products"},'setInitialRoutes(["/products"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings, { UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ErrorComponent,\n} from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "products",\n                                list: "/products",\n                                show: "/products/show/:id",\n                                create: "/products/create",\n                                edit: "/products/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                {/* highlight-start */}\n                                <Route path="products">\n                                    <Route\n                                        index\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MantineInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create-page"},"Create Page"),(0,o.kt)("p",null,"To preview the create page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000/products/create",rel:"noopener noreferrer nofollow"},"localhost:3000/products/create"),' address or click the "Create" button on the list page.'),(0,o.kt)("p",null,"You should see the create page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/create"},'setInitialRoutes(["/products/create"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ErrorComponent,\n} from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "products",\n                                list: "/products",\n                                show: "/products/show/:id",\n                                create: "/products/create",\n                                edit: "/products/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                {/* highlight-start */}\n                                <Route path="products">\n                                    <Route\n                                        index\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MantineInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit-page"},"Edit Page"),(0,o.kt)("p",null,"To preview the edit page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000/products/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/products/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the edit page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/edit/123"},'setInitialRoutes(["/products/edit/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ErrorComponent,\n} from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        //highlight-start\n                        resources={[\n                            {\n                                name: "products",\n                                list: "/products",\n                                show: "/products/show/:id",\n                                create: "/products/create",\n                                edit: "/products/edit/:id",\n                            },\n                        ]}\n                        //highlight-end\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                {/* highlight-start */}\n                                <Route path="products">\n                                    <Route\n                                        index\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MantineInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show-page"},"Show Page"),(0,o.kt)("p",null,"To preview the show page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000/products/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/products/show/123"),' address or click the "Show" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the show page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/show/123"},'setInitialRoutes(["/products/show/123"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ErrorComponent,\n} from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n//highlight-next-line\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "products",\n                                list: "/products",\n                                show: "/products/show/:id",\n                                create: "/products/create",\n                                edit: "/products/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <Layout>\n                                        <Outlet />\n                                    </Layout>\n                                }\n                            >\n                                {/* highlight-start */}\n                                <Route path="products">\n                                    <Route\n                                        index\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MantineInferencer />}\n                                    />\n                                </Route>\n                                {/* highlight-end */}\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/mantine/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,o.kt)(u,{mdxType:"Checklist"},(0,o.kt)(c,{id:"generated-crud-mantine-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,o.kt)(c,{id:"generated-crud-mantine-pages-2",mdxType:"ChecklistItem"},(0,o.kt)("p",null,"I inspected the auto-generated ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}m.isMDXComponent=!0}}]);