"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26339],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=o,b=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return a?r.createElement(b,n(n({ref:t},c),{},{components:a})):r.createElement(b,n({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const i={title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",slug:"simple-web-application-with-refine",authors:"aydin",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},n=void 0,l={permalink:"/blog/simple-web-application-with-refine",source:"@site/blog/2021-10-4-simple-web-application.md",title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:10.045,hasTruncateMarker:!0,authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],frontMatter:{title:"Simple Web Application Example with Refine",description:"Do you want to develop a web application quickly? You are at the right place!",slug:"simple-web-application-with-refine",authors:"aydin",tags:["refine","supabase","react","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine"},relatedPosts:[{title:"How to use React Strict Mode in React 18",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.99,date:"2022-11-24T00:00:00.000Z"},{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.075,date:"2022-10-19T00:00:00.000Z"},{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.64,date:"2022-09-01T00:00:00.000Z"}],authorPosts:[{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks",formattedDate:"February 21, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4.13,date:"2022-02-21T00:00:00.000Z"},{title:"10 High-Quality Free Resources That Will Make Every Web Developer's Life Easier",permalink:"/blog/10-high-quality-free-resources",formattedDate:"May 2, 2022",authors:[{name:"Ayd\u0131n Akyol",title:"Software Developer",url:"https://github.com/biskuvit",imageURL:"https://github.com/biskuvit.png",key:"aydin"}],readingTime:4,date:"2022-05-02T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},s=[],c={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,o.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,o.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,o.kt)("p",{parentName:"admonition"},"You should know that ",(0,o.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,o.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,o.kt)("p",null,"Do you want to develop a web application quickly? You are at the right place! I will develop a simple movie web application with ",(0,o.kt)("strong",{parentName:"p"},"refine")," on the frontend and ",(0,o.kt)("strong",{parentName:"p"},"Supabase")," on the backend, you should continue reading. I will try to explain it step by step in a very simple way."))}m.isMDXComponent=!0}}]);