"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39279],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=l(a),c=n,f=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},i=void 0,d={unversionedId:"examples/table/mui/useDataGrid",id:"examples/table/mui/useDataGrid",title:"useDataGrid",description:"You may use the useDataGrid hook to process your data with features compatible with the MUI X DataGrid and DataGridPro component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination.",source:"@site/docs/examples/table/mui/useDataGrid.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/useDataGrid",permalink:"/docs/examples/table/mui/useDataGrid",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/mui/useDataGrid.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1681453681,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},sidebar:"someSidebar",previous:{title:"Table Filter",permalink:"/docs/examples/table/mui/filter"},next:{title:"useDeleteMany",permalink:"/docs/examples/table/mui/useDeleteMany"}},p={},l=[{value:"With <code>DataGrid</code> Component",id:"with-datagrid-component",level:2},{value:"With <code>DataGridPro</code> Component",id:"with-datagridpro-component",level:2}],u=(s="CodeSandboxExample",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var s;const m={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You may use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to process your data with features compatible with the MUI X ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGrid")," and ",(0,n.kt)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGridPro")," component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useDataGrid"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useDataGrid")," hook documentation for more information. \u2192")),(0,n.kt)("h2",{id:"with-datagrid-component"},"With ",(0,n.kt)("inlineCode",{parentName:"h2"},"DataGrid")," Component"),(0,n.kt)(u,{path:"table-mui-use-data-grid",mdxType:"CodeSandboxExample"}),(0,n.kt)("h2",{id:"with-datagridpro-component"},"With ",(0,n.kt)("inlineCode",{parentName:"h2"},"DataGridPro")," Component"),(0,n.kt)(u,{path:"table-mui-data-grid-pro",mdxType:"CodeSandboxExample"}))}c.isMDXComponent=!0}}]);