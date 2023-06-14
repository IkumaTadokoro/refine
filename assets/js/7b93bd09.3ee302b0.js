"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(n),c=i,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={id:"v4-to-v5",title:"Migration Guide from v4 to v5"},o=void 0,d={unversionedId:"api-reference/mui/migration-guide/v4-to-v5",id:"api-reference/mui/migration-guide/v4-to-v5",title:"Migration Guide from v4 to v5",description:"Material UI released a new major version for @mui/x-data-grid package as v6. This document will guide you through the migration process for the refine related parts. While this document won't cover all the changes, it will help you get started with the migration process.",source:"@site/docs/api-reference/mui/migration-guide/v4-to-v5.md",sourceDirName:"api-reference/mui/migration-guide",slug:"/api-reference/mui/migration-guide/v4-to-v5",permalink:"/docs/api-reference/mui/migration-guide/v4-to-v5",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/migration-guide/v4-to-v5.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1686748472,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"v4-to-v5",title:"Migration Guide from v4 to v5"},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/api-reference/mui/theming"},next:{title:"Packages",permalink:"/docs/packages"}},p={},l=[{value:"Required Changes",id:"required-changes",level:2},{value:"Updating the packages",id:"updating-the-packages",level:3},{value:"<code>useDataGrid</code>",id:"usedatagrid",level:3},{value:"<code>GridColumns</code> to <code>GridColDef[]</code>",id:"gridcolumns-to-gridcoldef",level:3}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Material UI released a new major version for ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," package as v6. This document will guide you through the migration process for the refine related parts. While this document won't cover all the changes, it will help you get started with the migration process."),(0,i.kt)("admonition",{title:"Official Migration Guide",type:"info-tip"},(0,i.kt)("p",{parentName:"admonition"},"Check out the official ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/x/migration/migration-data-grid-v5/"},"MUI X Migration Guide for ",(0,i.kt)("inlineCode",{parentName:"a"},"DataGrid"))," for detailed information and all the changes."),(0,i.kt)("p",{parentName:"admonition"},"You can also check out the ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/blog/mui-x-v6"},"Introducing MUI X v6.0.0")," blog post for more information about the new version.")),(0,i.kt)("p",null,"The changes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGrid")," API are included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@refinedev/mui"),"'s latest version (",(0,i.kt)("inlineCode",{parentName:"p"},"v5"),"). With this release, we've updated the peer dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"^6.6.0"),". "),(0,i.kt)("h2",{id:"required-changes"},"Required Changes"),(0,i.kt)("p",null,"The changes listed below are required to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," with refine. It doesn't cover all the changes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGrid")," API. To see all the changes, please follow the ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/x/migration/migration-data-grid-v5/"},"official migration guide for MUI X"),"."),(0,i.kt)("h3",{id:"updating-the-packages"},"Updating the packages"),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," with version 6, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/mui"},(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/mui"))," must be updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"5.x.x")," as well."),(0,i.kt)("p",null,"Since there are some changes in the return values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDataGrid")," and the common usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGrid")," component with TypeScript, we've also released a major release to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/inferencer"},(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/inferencer"))," package. If you're using the Inferencer package, you'll need to update it to ",(0,i.kt)("inlineCode",{parentName:"p"},"4.x.x")," as well."),(0,i.kt)("h3",{id:"usedatagrid"},(0,i.kt)("inlineCode",{parentName:"h3"},"useDataGrid")),(0,i.kt)("p",null,"We've updated the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to return ",(0,i.kt)("inlineCode",{parentName:"p"},"paginationModel")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onPaginationModelChange")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pageSize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onPageChange")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onPageSizeChange"),". If you've modified these props, you'll need to update them to use the new API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="posts/list.tsx"',title:'"posts/list.tsx"'},"const PostList = () => {\nconst { dataGridProps } = useDataGrid();\n-   const { page, pageSize, onPageChange, onPageSizeChange, ...restDataGridProps } = dataGridProps;\n+   const { paginationModel, onPaginationModelChange, ...restDataGridProps } = dataGridProps;\n\n    /* ... */\n    /* Your changes to use the new values */\n    /* ... */\n\n    return (\n        <DataGrid\n            {...restDataGridProps}\n-          page={page}\n-          pageSize={pageSize}\n-          onPageChange={onPageChange}\n-          onPageSizeChange={onPageSizeChange}\n+          paginationModel={paginationModel}\n+          onPaginationModelChange={onPaginationModelChange}\n        />\n    );\n}\n")),(0,i.kt)("h3",{id:"gridcolumns-to-gridcoldef"},(0,i.kt)("inlineCode",{parentName:"h3"},"GridColumns")," to ",(0,i.kt)("inlineCode",{parentName:"h3"},"GridColDef[]")),(0,i.kt)("p",null,"While updating our Material UI examples, we've encountered this issue and thought it deserves a mention here. When defining the ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<DataGrid>"),", we've used ",(0,i.kt)("inlineCode",{parentName:"p"},"GridColums")," type, with the changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid"),"'s last version, this type is removed and should be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"GridColDef")," array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="posts/list.tsx"',title:'"posts/list.tsx"'},'import React from "react";\nimport { List, useDataGrid } from "@refinedev/mui";\n\n- import { DataGrid, GridColumns } from "@mui/x-data-grid";\n+ import { DataGrid, GridColDef } from "@mui/x-data-grid";\n\nimport { ICategory, IPost } from "interfaces";\n\nexport const PostList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n-   const columns = React.useMemo<GridColumns<IPost>>(\n+   const columns = React.useMemo<GridColDef<IPost>[]>(\n        () => [/* ... */],\n        [],\n    );\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n')))}u.isMDXComponent=!0}}]);