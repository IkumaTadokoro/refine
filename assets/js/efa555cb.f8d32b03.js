"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"useSelect",title:"useSelect","example-title":"Ant Design's useSelect hook","example-tags":["antd"]},l=void 0,s={unversionedId:"examples/field/useSelect",id:"examples/field/useSelect",title:"useSelect",description:"When records in a resource need to be used as select options, the refine useSelect hook allows you to handle an Ant Design Select component. Also this hook includes out-of-the-box features such as fetchSize, sorting, and filtering. You may examine the code below to learn how to create and manage Select component with useSelect.",source:"@site/docs/examples/field/useSelect.md",sourceDirName:"examples/field",slug:"/examples/field/useSelect",permalink:"/docs/examples/field/useSelect",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/field/useSelect.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681210769,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"useSelect",title:"useSelect","example-title":"Ant Design's useSelect hook","example-tags":["antd"]},sidebar:"someSidebar",previous:{title:"useRadioGroup",permalink:"/docs/examples/field/useRadioGroup"},next:{title:"Custom Form Validation",permalink:"/docs/examples/form/antd/custom-form-validation"}},i={},c=[],p=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When records in a resource need to be used as select options, the ",(0,o.kt)("strong",{parentName:"p"},"refine")," ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," hook allows you to handle an Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/select/"},"Select")," component. Also this hook includes out-of-the-box features such as fetchSize, sorting, and filtering. You may examine the code below to learn how to create and manage Select component with ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/field/useSelect/"},"Refer to the ",(0,o.kt)("strong",{parentName:"a"},"refine")," useSelect hook documentation for more information. \u2192")),(0,o.kt)(p,{path:"field-antd-use-select-basic",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);