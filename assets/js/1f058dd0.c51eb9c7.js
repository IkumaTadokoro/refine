"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}},i=void 0,d={unversionedId:"tutorial/adding-crud-pages/antd/add-edit-page",id:"tutorial/adding-crud-pages/antd/add-edit-page",title:"2. Adding Edit Page",description:"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the blog_posts resource.",source:"@site/docs/tutorial/4-adding-crud-pages/antd/add-edit-page.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/add-edit-page",permalink:"/docs/tutorial/adding-crud-pages/antd/add-edit-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/antd/add-edit-page.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1681453681,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"add-edit-page",title:"2. Adding Edit Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/index",next:"tutorial/adding-crud-pages/{preferredUI}/add-show-page"}}},p={},s=[{value:"Creating Edit Page",id:"creating-edit-page",level:2},{value:"Understanding the Edit Component",id:"understanding-the-edit-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Edit Page to the App",id:"adding-the-edit-page-to-the-app",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=l("Checklist"),m=l("ChecklistItem"),u={toc:s};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Edit page is the page where you can edit the record. In this tutorial, we will create the edit page for the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource."),(0,r.kt)("h2",{id:"creating-edit-page"},"Creating Edit Page"),(0,r.kt)("p",null,"First, let's create our file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will name it ",(0,r.kt)("inlineCode",{parentName:"p"},"edit.tsx"),". Then, we will copy the edit page code generated by Inferencer and paste it into the file."),(0,r.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'To open the edit page, click any "Edit" button in the "Actions" column of the table.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'On the edit page, click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the edit page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,r.kt)("inlineCode",{parentName:"p"},"edit.tsx")," file."))),(0,r.kt)("p",null,"You can see the edit page code generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport {\n    ErrorComponent,\n    ThemedLayout,\n    RefineThemes,\n    notificationProvider,\n} from "@refinedev/antd";\nimport { ConfigProvider } from "antd";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayout>\n                                    <Outlet />\n                                </ThemedLayout>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<AntdInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<AntdInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("p",null,"Instead of coding the edit page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,r.kt)("h2",{id:"understanding-the-edit-component"},"Understanding the Edit Component"),(0,r.kt)("p",null,"We will go through the edit page components and hooks one by one."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Edit/>")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button, refresh button etc."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/basic-views/edit"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Edit/>")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Form/>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<Form.Item/>")," are ",(0,r.kt)("strong",{parentName:"p"},"Ant Design")," components that are used to build the form."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Form/>")," documentation for more information ","\u2192"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," hook that provides the necessary props for the form. It also provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,r.kt)("p",{parentName:"li"},"When you use ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," in the edit page, it automatically fetches the data of the record by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the URL, then fills the form with the data. It sends the form data to ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," method when the form is submitted."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"In the edit page, we may need to select a record from another resource."),(0,r.kt)("p",null,"For example, we may need to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category. In this case, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the necessary props for the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useSelect/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/select"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"Ant Design")," ",(0,r.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"In the auto-generated edit page code, Inferencer used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," returns 10 record by default, but the category of the blog post may not be in the first 10 records. To solve this problem, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultValue")," prop to set the default value of the select component like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n    defaultValue: blogPostsData?.category?.id,\n});\n')),(0,r.kt)("h2",{id:"adding-the-edit-page-to-the-app"},"Adding the Edit Page to the App"),(0,r.kt)("p",null,"Now that we have created the edit page, we need to add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"AntdInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostEdit")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import {\n    ErrorComponent,\n    ThemedLayout,\n    RefineThemes,\n    notificationProvider,\n} from "@refinedev/antd";\nimport { ConfigProvider } from "antd";\nimport { Refine } from "@refinedev/core";\nimport { AntdInferencer } from "@refinedev/inferencer/antd";\nimport routerBindings, {\n    NavigateToResource,\n    //highlight-next-line\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostList } from "pages/blog-posts/list";\n// highlight-next-line\nimport { BlogPostEdit } from "pages/blog-posts/edit";\n\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <ConfigProvider theme={RefineThemes.Blue}>\n                <Refine\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            //highlight-next-line\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    // highlight-start\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                    // highlight-end\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <ThemedLayout>\n                                    <Outlet />\n                                </ThemedLayout>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n\n                            <Route path="blog-posts">\n                                <Route index element={<BlogPostList />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<AntdInferencer />}\n                                />\n                                {/* highlight-next-line */}\n                                <Route\n                                    path="edit/:id"\n                                    element={<BlogPostEdit />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<AntdInferencer />}\n                                />\n                            </Route>\n\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    {/* highlight-next-line */}\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </ConfigProvider>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the edit page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Checklist"},(0,r.kt)(m,{id:"add-edit-page-antd",mdxType:"ChecklistItem"},"I added the edit page to the app."),(0,r.kt)(m,{id:"add-edit-page-antd-2",mdxType:"ChecklistItem"},"I understood the edit page components and hooks."),(0,r.kt)(m,{id:"add-edit-page-antd-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);