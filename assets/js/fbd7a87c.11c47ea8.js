"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(99104),s=n(72389);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),s(r))},f=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:m},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,l.Y)(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement(c,(0,r.Z)({},e,t)),a.createElement(d,(0,r.Z)({},e,t)))}function f(e){const t=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},99104:(e,t,n)=>{n.d(t,{Y:()=>c});var r=n(67294),a=n(76775),o=n(91980);var i=n(50012);function l(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function s(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??l(n);return function(e){const t=(void 0===(r=(e,t)=>e.value===t.value)&&(r=(e,t)=>e===t),(n=e).filter(((e,t)=>n.findIndex((t=>r(t,e)))!==t)));var n,r;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(i.location.search);t.set(l,e),i.replace({...i.location,search:t.toString()})}),[l,i])]}function c(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=s(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[d,m]=p({queryString:n,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,i.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=d??f;return u({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&c(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),h(e)}),[m,h,o]),tabValues:o}}},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"quickstart",title:"Quick Start Guide"},s=void 0,u={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start Guide",description:"refine works on any environment that can run React (incl. Vite, Next.js, Remix, and CRA(Legacy) etc.)",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1686748472,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"quickstart",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"1. Build your first refine app",permalink:"/docs/tutorial/introduction/index"}},p={},c=[{value:"Next Steps",id:"next-steps",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," works on any environment that can run ",(0,a.kt)("strong",{parentName:"p"},"React")," (incl. ",(0,a.kt)("em",{parentName:"p"},"Vite, Next.js, Remix, and CRA(Legacy)")," etc.)"),(0,a.kt)("p",null,"Although you could take the time to manually set up your environment and install the ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages afterwards, the optimal way to get started with ",(0,a.kt)("strong",{parentName:"p"},"refine")," is using the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," platform or ",(0,a.kt)("inlineCode",{parentName:"p"},"create refine-app")," project starter tool."),(0,a.kt)("p",null,"Choose one of the methods below to bootstrap a refine app:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"refine-new",label:"refine.new",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://refine.new/"},"refine.new")," is a powerful tool that lets you create ",(0,a.kt)("strong",{parentName:"p"},"refine")," apps right in your browser. You have the ability to preview, modify, and download your project immediately, thereby streamlining the development process."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://refine.new/?form=true"},"refine.new")," and select libraries and frameworks you want to work with by using interactive UI. "),(0,a.kt)("li",{parentName:"ol"},"Download the generated project by clicking on the ",(0,a.kt)("strong",{parentName:"li"},'"Build & Download"')," button.")),(0,a.kt)("br",null),(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",alt:"quick start gif"}),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://refine.new/preview/1a5eb93b-ab9b-4112-b80e-7563b334c025"},"If you do not want to deal with the installation steps, you can use this pre-configured refine.new template ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Next, navigate to the project folder, install the dependencies, and then start your project.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> npm install\n\n> npm run dev\n"))),(0,a.kt)(i.Z,{value:"CLI",label:"create refine-app",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create refine-app")," provides built-in templates for ",(0,a.kt)("em",{parentName:"p"},"Vite"),", ",(0,a.kt)("em",{parentName:"p"},"Next.js"),", ",(0,a.kt)("em",{parentName:"p"},"Remix"),", and ",(0,a.kt)("em",{parentName:"p"},"CRA(Legacy)")," environments, so you can bootstrap a ",(0,a.kt)("strong",{parentName:"p"},"refine")," project in just a couple of minutes. It also offers a wide range of options that you can easily configure for your ",(0,a.kt)("em",{parentName:"p"},"UI framework"),", ",(0,a.kt)("em",{parentName:"p"},"i18n"),", ",(0,a.kt)("em",{parentName:"p"},"router"),", ",(0,a.kt)("em",{parentName:"p"},"Auth.")," and ",(0,a.kt)("em",{parentName:"p"},"data provider")," preferences."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To get started, run the following command. The ",(0,a.kt)("em",{parentName:"li"},"CLI wizard")," will assist you for the rest of the setup process:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm create refine-app@latest\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Once the setup is complete, navigate to the project folder and start your application with:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case you select ",(0,a.kt)("inlineCode",{parentName:"p"},"Yes")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Do you want to add example pages?")," option while using the CLI wizard, the refine will add sample CRUD pages utilizing ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/antd/components/inferencer/"},(0,a.kt)("inlineCode",{parentName:"a"},"refine Inferencer"))," and fill the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property."),(0,a.kt)("p",{parentName:"admonition"},"It is highly recommended to add example pages as it provides a clearer understanding of how ",(0,a.kt)("strong",{parentName:"p"},"refine")," works and lets you test out the CRUD operation functionalities.")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now, you can access the refine application at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),"."),(0,a.kt)("p",null,"You will see the output as a table populated with ",(0,a.kt)("inlineCode",{parentName:"p"},"blog_posts")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," data with filtering, sorting, and pagination features."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("img",{style:{width:"100%"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start-example.png",alt:"Example result"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"\ud83d\udc49 Jump to ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/tutorial/introduction/index/"},"Tutorials")," and continue your work to turn your example project into a full-blown CRUD application! \ud83d\ude80"),(0,a.kt)("p",null,"\ud83d\udc49 Read more on ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/"},"Advanced Tutorials")," for different usage scenarios."),(0,a.kt)("p",null,"\ud83d\udc49 See ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/examples/"},"real-life examples")," built using ",(0,a.kt)("strong",{parentName:"p"},"refine")))}m.isMDXComponent=!0}}]);