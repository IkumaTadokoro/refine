"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=o,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var r=a(87462),o=(a(67294),a(3905));const n={title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react","usestate","best-practices"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/common-usestate-mistakes-and-how-to-avoid",source:"@site/blog/2022-08-29-usestate-mistakes.md",title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",date:"2022-08-29T00:00:00.000Z",formattedDate:"August 29, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"usestate",permalink:"/blog/tags/usestate"},{label:"best-practices",permalink:"/blog/tags/best-practices"}],readingTime:16.03,hasTruncateMarker:!0,authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],frontMatter:{title:"5 Most Common useState Mistakes React Developers Often Make",description:"Find out what the five most common mistakes React developers make with useState and how to avoid them.",slug:"common-usestate-mistakes-and-how-to-avoid",authors:"david_herbert",tags:["react","usestate","best-practices"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-29-usestate-mistakes/usestate-mistakes-social.png",hide_table_of_contents:!1},prevItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},nextItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},relatedPosts:[{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.04,date:"2022-09-05T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:26.005,date:"2023-01-17T00:00:00.000Z"},{title:"How to use Material UI Card Component",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.05,date:"2023-01-04T00:00:00.000Z"}],authorPosts:[{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.795,date:"2022-09-06T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The most challenging aspect of developing any application is often managing its state. However, we are often required to manage several pieces of state in our application, such as when data is retrieved from an external server or updated in the app. "),(0,o.kt)("p",null,"The difficulty of state management is the reason why so many state management libraries exist today - and more are still being developed. Thankfully, React has several built-in solutions in the form of hooks for state management, which makes managing states in React easier."))}u.isMDXComponent=!0}}]);