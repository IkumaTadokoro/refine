"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31968],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const o={},a=void 0,s={unversionedId:"api-reference/antd/hooks/list/basic-usage-live-preview",id:"api-reference/antd/hooks/list/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/api-reference/antd/hooks/list/basic-usage-live-preview.md",sourceDirName:"api-reference/antd/hooks/list",slug:"/api-reference/antd/hooks/list/basic-usage-live-preview",permalink:"/docs/api-reference/antd/hooks/list/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/hooks/list/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681210769,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{}},c={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=420px",live:!0,url:"http://localhost:3000/products",previewHeight:"420px"},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useSimpleList } from "@refinedev/antd";\nimport { Typography, List } from "antd";\n\nconst { Text } = Typography;\n\ninterface IProduct {\n    id: number;\n    name: string;\n    description: string;\n    price: string;\n}\n\nconst ProductList: React.FC = () => {\n    const { listProps } = useSimpleList<IProduct>();\n\n    return <List {...listProps} renderItem={renderItem} />;\n};\n\nconst renderItem = (item: IProduct) => {\n    const { id, name, description, price } = item;\n\n    return (\n        <List.Item actions={[<Text key={id}>{price}</Text>]}>\n            <List.Item.Meta title={name} description={description} />\n        </List.Item>\n    );\n};\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineAntdDemo />);\n')))}u.isMDXComponent=!0}}]);