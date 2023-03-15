"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,d(d({ref:t},s),{},{components:n})):r.createElement(f,d({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var p=2;p<o;p++)d[p]=n[p];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},d=void 0,i={unversionedId:"tutorial/adding-crud-pages/antd/add-delete-feature",id:"tutorial/adding-crud-pages/antd/add-delete-feature",title:"5. Adding Delete Feature",description:"There are many ways to delete a record. In this tutorial, we will first use the `` to delete a record and then we will learn how to enable the delete feature on the show page and edit page.",source:"@site/docs/tutorial/4-adding-crud-pages/antd/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/antd",slug:"/tutorial/adding-crud-pages/antd/add-delete-feature",permalink:"/docs/tutorial/adding-crud-pages/antd/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/antd/add-delete-feature.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678907067,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},l={},p=[{value:"Adding Delete Feature to List Page",id:"adding-delete-feature-to-list-page",level:2},{value:"Enabling Delete Feature on Show Page and Edit Page",id:"enabling-delete-feature-on-show-page-and-edit-page",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=s("Checklist"),c=s("ChecklistItem"),m={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are many ways to delete a record. In this tutorial, we will first use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," to delete a record and then we will learn how to enable the delete feature on the show page and edit page."),(0,a.kt)("h2",{id:"adding-delete-feature-to-list-page"},"Adding Delete Feature to List Page"),(0,a.kt)("p",null,"Let's start by adding the delete feature to the list page. To do this, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," component that is used to delete a record. When you click on the delete button, it will show a confirmation modal. If you confirm the deletion, it will delete the record."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/delete-button/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<DeleteButton/>")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"To add a delete feature to the products table, you can follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/products/list.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/antd"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@refinedev/antd";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DeleteButton/>")," component to the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column\n    title="Actions"\n    dataIndex="actions"\n    render={(_, record: BaseRecord) => (\n        <Space>\n            <EditButton hideText size="small" recordItemId={record.id} />\n            <ShowButton hideText size="small" recordItemId={record.id} />\n            //highlight-start\n            <DeleteButton hideText size="small" recordItemId={record.id} />\n            //highlight-end\n        </Space>\n    )}\n/>\n')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"recordItemId")," is the id of the record you want to delete."))),(0,a.kt)("p",null,"Now, you can try to delete a record from the list page. Just click on the delete button of the record you want to delete and confirm the deletion."),(0,a.kt)("h2",{id:"enabling-delete-feature-on-show-page-and-edit-page"},"Enabling Delete Feature on Show Page and Edit Page"),(0,a.kt)("p",null,"When we define a resource, we can enable the delete feature on the show page and edit page by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'src="src/App.tsx"',src:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter } from "react-router-dom";\n\nimport { ProductList } from "pages/products/list";\nimport { ProductEdit } from "pages/products/edit";\nimport { productshow } from "pages/products/show";\nimport { ProductCreate } from "pages/products/create";\n\nimport "@refinedev/antd/dist/reset.css";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                notificationProvider={notificationProvider}\n                resources={[\n                    {\n                        name: "products",\n                        // highlight-start\n                        meta: {\n                            canDelete: true,\n                        },\n                        // highlight-end\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                {/* ... */}\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"After setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"canDelete")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", you will see a delete button on the show page and edit page. Because we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Show/>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<Edit/>")," components in the show page and edit page, the delete button will be added automatically in these components."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#candelete"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation for more information about the ",(0,a.kt)("inlineCode",{parentName:"a"},"canDelete")," property ","\u2192")),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine")," to delete a record."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information information ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)(u,{mdxType:"Checklist"},(0,a.kt)(c,{id:"add-delete-feature-antd",mdxType:"ChecklistItem"},"I added the delete feature to the list page."),(0,a.kt)(c,{id:"add-delete-feature-antd-2",mdxType:"ChecklistItem"},"I enabled the delete feature on the show page and edit page.")))}f.isMDXComponent=!0}}]);