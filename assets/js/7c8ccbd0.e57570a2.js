"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,m=u["".concat(p,".").concat(b)]||u[b]||c[b]||l;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={id:"tableFilter",title:"Table Filter","example-title":"Filtering on Ant Design Table","example-tags":["table","antd"]},o=void 0,i={unversionedId:"examples/table/antd/tableFilter",id:"examples/table/antd/tableFilter",title:"Table Filter",description:"The Table Filter option allows you to apply filters to the data in your table. The example below demonstrates how you might filter and display data in your table based on certain field parameters.",source:"@site/docs/examples/table/antd/table-filter.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/tableFilter",permalink:"/docs/examples/table/antd/tableFilter",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/antd/table-filter.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1684671955,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{id:"tableFilter",title:"Table Filter","example-title":"Filtering on Ant Design Table","example-tags":["table","antd"]},sidebar:"someSidebar",previous:{title:"Advanced Table",permalink:"/docs/examples/table/antd/advancedTable"},next:{title:"useDeleteMany",permalink:"/docs/examples/table/antd/useDeleteMany"}},p={},d=[],s=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const u={toc:d};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Table Filter")," option allows you to apply filters to the data in your table. The example below demonstrates how you might filter and display data in your table based on certain field parameters.\nBy filtering your table's data you may only see the fields you want."),(0,n.kt)(s,{path:"table-antd-table-filter",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);