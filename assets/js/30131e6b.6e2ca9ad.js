"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/mantine/add-create-page",id:"version-3.xx.xx/tutorial/adding-crud-pages/mantine/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the products resource.",source:"@site/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mantine",slug:"/tutorial/adding-crud-pages/mantine/add-create-page",permalink:"/docs/3.xx.xx/tutorial/adding-crud-pages/mantine/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/4-adding-crud-pages/mantine/add-create-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678986631,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},d={},l=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=c("Checklist"),m=c("ChecklistItem"),u={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource."),(0,a.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,a.kt)("p",null,"First, let's create our file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,a.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,a.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,a.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,a.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/create"},'setInitialRoutes(["/products/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "products",\n                            list: MantineInferencer,\n                            show: MantineInferencer,\n                            create: MantineInferencer,\n                            edit: MantineInferencer,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,a.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,a.kt)("p",null,"We will go through the create page components and hooks one by one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," component that is used to presentation purposes like showing the title of the page, save button etc."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/components/basic-views/create"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mantine")," package, has been developed by using the ",(0,a.kt)("strong",{parentName:"p"},"Mantine")," ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook and ",(0,a.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook. It is used to handle the form state and form submission."),(0,a.kt)("p",{parentName:"li"},"It also provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,a.kt)("p",{parentName:"li"},"When you use ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," in the edit page,it sends the form data to ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mantine/hooks/form/useForm/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"Mantine")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"All other components provided by ",(0,a.kt)("strong",{parentName:"p"},"Mantine")," are used to display the form fields."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Refer to the Mantine documentation for more information ","\u2192")))),(0,a.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,a.kt)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the product to the category. In this case, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Select/>")," component."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/mantine/hooks/useSelect/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/core/select/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"Mantine")," ",(0,a.kt)("inlineCode",{parentName:"a"},"<Select/>")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect({\n    resource: "categories",\n});\n')),(0,a.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,a.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the created ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"MantineInferencer")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    MantineProvider,\n    Global,\n    NotificationsProvider,\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ReadyPage,\n    ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nimport { ProductList } from "pages/products/list";\nimport { ProductEdit } from "pages/products/edit";\nimport { ProductShow } from "pages/products/show";\n//highlight-next-line\nimport { ProductCreate } from "pages/products/create";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    routerProvider={routerProvider}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={notificationProvider}\n                    ReadyPage={ReadyPage}\n                    catchAll={<ErrorComponent />}\n                    Layout={Layout}\n                    resources={[\n                        {\n                            name: "products",\n                            list: ProductList,\n                            edit: ProductEdit,\n                            show: ProductShow,\n                            /highlight-next-line\n                            create: ProductCreate,\n                        },\n                    ]}\n                />\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"Now, we can see the create page in the browser at ",(0,a.kt)("a",{href:"http://localhost:3000/products/create",rel:"noopener noreferrer nofollow"},"localhost:3000/products/create")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(s,{mdxType:"Checklist"},(0,a.kt)(m,{id:"add-create-page-mantine",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,a.kt)(m,{id:"add-create-page-mantine-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,a.kt)(m,{id:"add-create-page-mantine-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);