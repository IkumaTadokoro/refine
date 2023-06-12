"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65580],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,h=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},i=void 0,s={unversionedId:"tutorial/getting-started/mantine/generate-crud-pages",id:"version-3.xx.xx/tutorial/getting-started/mantine/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mantine/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/mantine",slug:"/tutorial/getting-started/mantine/generate-crud-pages",permalink:"/docs/3.xx.xx/tutorial/getting-started/mantine/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mantine/3-generate-crud-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Y\u0131ld\u0131ray \xdcnl\xfc",lastUpdatedAt:1686582042,formattedLastUpdatedAt:"Jun 12, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},l={},p=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},c=d("Checklist"),u=d("ChecklistItem"),f={toc:p};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inferencer"},"Inferencer"),(0,o.kt)("p",null,"Inferencer is a powerful tool in the ",(0,o.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations."),(0,o.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,o.kt)("p",null,"There are several benefits:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,o.kt)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks."),(0,o.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/docs/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/mantine/components/inferencer/"},"how to use Inferencer with Mantine"),".")),(0,o.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"<MantineInferencer/>")," component, which can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mantine"),". It used to generate CRUD pages based on your API response with Mantine components."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<MantineInferencer/>")," component is used by passing to appropriate values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\n//highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: MantineInferencer,\n                            show: MantineInferencer,\n                            create: MantineInferencer,\n                            edit: MantineInferencer,\n                        },\n                    ]}\n                    //highlight-end\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"At this point, ",(0,o.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,o.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,o.kt)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,o.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,o.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,o.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,o.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,o.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,o.kt)("h3",{id:"list-page"},"List Page"),(0,o.kt)("p",null,"To preview the list page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,o.kt)("p",null,"You should see the list page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,o.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: MantineInferencer,\n                            show: MantineInferencer,\n                            create: MantineInferencer,\n                            edit: MantineInferencer,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create-page"},"Create Page"),(0,o.kt)("p",null,"To preview the create page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' address or click the "Create" button on the list page.'),(0,o.kt)("p",null,"You should see the create page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: MantineInferencer,\n                            show: MantineInferencer,\n                            create: MantineInferencer,\n                            edit: MantineInferencer,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit-page"},"Edit Page"),(0,o.kt)("p",null,"To preview the edit page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the edit page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: MantineInferencer,\n                            show: MantineInferencer,\n                            create: MantineInferencer,\n                            edit: MantineInferencer,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show-page"},"Show Page"),(0,o.kt)("p",null,"To preview the show page, go back to your browser and open the ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' address or click the "Show" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the show page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: MantineInferencer,\n                            show: MantineInferencer,\n                            create: MantineInferencer,\n                            edit: MantineInferencer,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/mantine/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,o.kt)(c,{mdxType:"Checklist"},(0,o.kt)(u,{id:"generated-crud-mantine-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,o.kt)(u,{id:"generated-crud-mantine-pages-2",mdxType:"ChecklistItem"},(0,o.kt)("p",null,"I inspected the auto-generated ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}h.isMDXComponent=!0}}]);