"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/mantine/add-create-page",id:"tutorial/adding-crud-pages/mantine/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the blog_posts resource.",source:"@site/docs/tutorial/4-adding-crud-pages/mantine/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mantine",slug:"/tutorial/adding-crud-pages/mantine/add-create-page",permalink:"/docs/tutorial/adding-crud-pages/mantine/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mantine/add-create-page.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1681453681,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},s={},l=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("Checklist"),m=d("ChecklistItem"),u={toc:l};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,r.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,r.kt)("p",null,"First, let's create our file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,r.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,r.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,r.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,r.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Global, MantineProvider } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { Refine } from "@refinedev/core";\nimport {\n    ErrorComponent,\n    ThemedLayout,\n    RefineThemes,\n    notificationProvider,\n} from "@refinedev/mantine";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { MantineInferencer } from "@refinedev/inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider\n            theme={RefineThemes.Blue}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                // highlight-next-line\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayout>\n                                        <Outlet />\n                                    </ThemedLayout>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route\n                                        index\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MantineInferencer />}\n                                    />\n                                    {/* highlight-start */}\n                                    <Route\n                                        path="create"\n                                        element={<MantineInferencer />}\n                                    />\n                                    {/* highlight-end */}\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,r.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,r.kt)("p",null,"We will go through the create page components and hooks one by one."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/components/basic-views/create"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package, has been developed by using the ",(0,r.kt)("strong",{parentName:"p"},"Mantine")," ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook and ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," hook. It is used to handle the form state and form submission."),(0,r.kt)("p",{parentName:"li"},"It also provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,r.kt)("p",{parentName:"li"},"When you use ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," in the edit page,it sends the form data to ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mantine/hooks/form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Mantine")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All other components provided by ",(0,r.kt)("strong",{parentName:"p"},"Mantine")," are used to display the form fields."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Refer to the Mantine documentation for more information ","\u2192")))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/hooks/useSelect/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mantine.dev/core/select/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Mantine")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n});\n')),(0,r.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,r.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"MantineInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Global, MantineProvider } from "@mantine/core";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { Refine } from "@refinedev/core";\nimport {\n    ErrorComponent,\n    ThemedLayout,\n    RefineThemes,\n    notificationProvider,\n} from "@refinedev/mantine";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostShow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App = () => {\n    return (\n        <MantineProvider\n            theme={RefineThemes.Blue}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayout>\n                                        <Outlet />\n                                    </ThemedLayout>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<BlogPostList />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<BlogPostShow />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<BlogPostEdit />}\n                                    />\n                                    {/* highlight-start */}\n                                    <Route\n                                        path="create"\n                                        element={<BlogPostCreate />}\n                                    />\n                                    {/* highlight-end */}\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the create page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(m,{id:"add-create-page-mantine",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,r.kt)(m,{id:"add-create-page-mantine-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,r.kt)(m,{id:"add-create-page-mantine-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);