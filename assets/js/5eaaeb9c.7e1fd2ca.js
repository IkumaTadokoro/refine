"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,c={unversionedId:"api-reference/mui/hooks/useAutocomplete/on-search-live-preview",id:"api-reference/mui/hooks/useAutocomplete/on-search-live-preview",title:"on-search-live-preview",description:"",source:"@site/docs/api-reference/mui/hooks/useAutocomplete/on-search-live-preview.md",sourceDirName:"api-reference/mui/hooks/useAutocomplete",slug:"/api-reference/mui/hooks/useAutocomplete/on-search-live-preview",permalink:"/docs/api-reference/mui/hooks/useAutocomplete/on-search-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/hooks/useAutocomplete/on-search-live-preview.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678986631,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{}},l={},p=[],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=300px",live:!0,url:"http://localhost:3000",previewHeight:"300px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { useAutocomplete } from "@refinedev/mui";\nimport { Autocomplete, TextField } from "@mui/material";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst PostCreate: React.FC = () => {\n    const { autocompleteProps } = useAutocomplete<ICategory>({\n        resource: "categories",\n        // highlight-start\n        onSearch: (value) => [\n            {\n                field: "title",\n                operator: "contains",\n                value,\n            },\n        ],\n        // highlight-end\n    });\n\n    return (\n        <Autocomplete\n            {...autocompleteProps}\n            getOptionLabel={(item) => item.title}\n            isOptionEqualToValue={(option, value) =>\n                value === undefined || option.id.toString() === value.toString()\n            }\n            placeholder="Select a category"\n            renderInput={(params) => (\n                <TextField\n                    {...params}\n                    label="Category"\n                    margin="normal"\n                    variant="outlined"\n                    required\n                />\n            )}\n        />\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: PostCreate,\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}s.isMDXComponent=!0}}]);