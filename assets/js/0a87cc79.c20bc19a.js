"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55905],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(72335),a(65488),a(85162);const o={title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",slug:"mui-icons-in-react",authors:"doro_onome",tags:["material-ui","react","icons","svg","mui"],image:"/img/blog/2022-08-24-mui-icons/mui-icons-social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/mui-icons-in-react",source:"@site/blog/2022-08-24-mui-icons.md",title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",date:"2022-08-24T00:00:00.000Z",formattedDate:"August 24, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"icons",permalink:"/blog/tags/icons"},{label:"svg",permalink:"/blog/tags/svg"},{label:"mui",permalink:"/blog/tags/mui"}],readingTime:10.785,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"MUI Icons in React",description:"A complete guide on using Material UI(MUI Icons) in a React app",slug:"mui-icons-in-react",authors:"doro_onome",tags:["material-ui","react","icons","svg","mui"],image:"/img/blog/2022-08-24-mui-icons/mui-icons-social.png",hide_table_of_contents:!1},prevItem:{title:"Creating a React search bar and content filtering components",permalink:"/blog/react-search-bar-and-filtering"},nextItem:{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine"},relatedPosts:[{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.775,date:"2021-11-12T00:00:00.000Z"},{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.13,date:"2021-11-29T00:00:00.000Z"},{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.185,date:"2022-09-20T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.135,date:"2022-09-18T00:00:00.000Z"},{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.96,date:"2022-09-05T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"React is the most commonly used frontend framework for creating a responsive web interface. It is accompanied by libraries that provide elements with a means of working together to maximise the aesthetic value of any web design layout effectively. Some of these libraries include Material UI, Ant Design, React-Bootstrap, Semantic UI, Fluent UI, Blueprint UI, e.t.c."))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),u=a(12466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,a;const{lazy:i,block:p,defaultValue:d,values:b,groupId:g,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,l.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:I}=(0,s.U)(),[T,O]=(0,r.useState)(k),D=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&v.some((t=>t.value===e))&&O(e)}const U=e=>{const t=e.currentTarget,a=D.indexOf(t),n=v[a].value;n!==T&&(E(t),O(n),null!=g&&I(g,String(n)))},N=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=D.indexOf(e.currentTarget)+1;a=null!=(n=D[t])?n:D[0];break}case"ArrowLeft":{var r;const t=D.indexOf(e.currentTarget)-1;a=null!=(r=D[t])?r:D[D.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},v.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>D.push(e),onKeyDown:N,onFocus:U,onClick:U},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},72335:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-ae7a4c8d3c36c86d6ee91126afcd4883.png"}}]);