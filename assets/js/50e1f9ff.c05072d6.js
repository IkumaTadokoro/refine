"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57490],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=o,v=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},67425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={},i=void 0,s={unversionedId:"api-reference/core/hooks/data/useMany/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useMany",slug:"/api-reference/core/hooks/data/useMany/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useMany/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685542659,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{}},c={},p=[],u={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px",live:!0,url:"http://localhost:3000/products",previewHeight:"300px"},'setInitialRoutes(["/products"]);\n// visible-block-start\nimport { useState } from "react";\nimport { useMany, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    const [ids, setIds] = useState([1, 2, 3]);\n\n    const { data, isLoading, isError } = useMany<IProduct, HttpError>({\n        resource: "products",\n        ids,\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            {products.map((product) => (\n                <ul key={product.id}>\n                    <li key={product.id}>\n                        {product.id} - {product.name}{" "}\n                        <button\n                            onClick={() =>\n                                setIds((prev) =>\n                                    prev.filter((id) => id !== product.id),\n                                )\n                            }\n                        >\n                            remove\n                        </button>\n                    </li>\n                </ul>\n            ))}\n\n            <button\n                onClick={() => {\n                    setIds((prev) => [\n                        ...prev,\n                        Math.floor(Math.random() * 1000) + 1,\n                    ]);\n                }}\n            >\n                Add new product\n            </button>\n        </div>\n    );\n};\n\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}d.isMDXComponent=!0}}]);