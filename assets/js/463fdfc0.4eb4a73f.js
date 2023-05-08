"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30950],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={},a=void 0,c={unversionedId:"api-reference/antd/hooks/list/search-live-preview",id:"api-reference/antd/hooks/list/search-live-preview",title:"search-live-preview",description:"",source:"@site/docs/api-reference/antd/hooks/list/search-live-preview.md",sourceDirName:"api-reference/antd/hooks/list",slug:"/api-reference/antd/hooks/list/search-live-preview",permalink:"/docs/api-reference/antd/hooks/list/search-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/hooks/list/search-live-preview.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683551846,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{}},s={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=420px",live:!0,url:"http://localhost:3000/products",previewHeight:"420px"},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useSimpleList } from "@refinedev/antd";\nimport { Typography, List, Form, Input, Button } from "antd";\nimport { HttpError } from "@refinedev/core";\n\nconst { Text } = Typography;\n\ninterface IProduct {\n    id: number;\n    name: string;\n    description: string;\n    price: string;\n}\n\ninterface ISearch {\n    name: string;\n    description: string;\n}\n\nconst ProductList: React.FC = () => {\n    const { listProps, searchFormProps } = useSimpleList<\n        IProduct,\n        HttpError,\n        ISearch\n    >({\n        onSearch: (values) => {\n            return [\n                {\n                    field: "name",\n                    operator: "contains",\n                    value: values.name,\n                },\n                {\n                    field: "description",\n                    operator: "contains",\n                    value: values.description,\n                },\n            ];\n        },\n    });\n\n    return (\n        <div>\n            <Form {...searchFormProps} layout="inline">\n                <Form.Item name="name">\n                    <Input placeholder="Search by name" />\n                </Form.Item>\n                <Form.Item name="description">\n                    <Input placeholder="Search by description" />\n                </Form.Item>\n                <Button type="primary" onClick={searchFormProps.form?.submit}>\n                    Search\n                </Button>\n            </Form>\n            <List {...listProps} renderItem={renderItem} />\n        </div>\n    );\n};\n\nconst renderItem = (item: IProduct) => {\n    const { id, name, description, price } = item;\n\n    return (\n        <List.Item actions={[<Text key={id}>{price}</Text>]}>\n            <List.Item.Meta title={name} description={description} />\n        </List.Item>\n    );\n};\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineAntdDemo />);\n')))}u.isMDXComponent=!0}}]);