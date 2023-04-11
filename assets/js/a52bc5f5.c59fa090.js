"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,c={unversionedId:"api-reference/mui/hooks/useAutocomplete/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/mui/hooks/useAutocomplete/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/hooks/useAutocomplete/basic-usage-live-preview.md",sourceDirName:"api-reference/mui/hooks/useAutocomplete",slug:"/api-reference/mui/hooks/useAutocomplete/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/mui/hooks/useAutocomplete/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/hooks/useAutocomplete/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681210769,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{}},s={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=300px",live:!0,url:"http://localhost:3000",previewHeight:"300px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport {\n    Autocomplete,\n    useAutocomplete,\n    TextField,\n} from "@pankod/refine-mui";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst PostCreate: React.FC = () => {\n    const { autocompleteProps } = useAutocomplete<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <Autocomplete\n            {...autocompleteProps}\n            getOptionLabel={(item) => item.title}\n            isOptionEqualToValue={(option, value) =>\n                value === undefined || option?.id?.toString() === (value?.id ?? value)?.toString()\n            }\n            placeholder="Select a category"\n            renderInput={(params) => (\n                <TextField\n                    {...params}\n                    label="Category"\n                    margin="normal"\n                    variant="outlined"\n                    required\n                />\n            )}\n        />\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: PostCreate,\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}p.isMDXComponent=!0}}]);