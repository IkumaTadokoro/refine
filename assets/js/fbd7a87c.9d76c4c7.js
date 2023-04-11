"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"quickstart",title:"Quick Start Guide"},p=void 0,i={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quick Start Guide",description:"refine works on any environment that can run React (incl. CRA, Next.js, Remix, Vite etc.)",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681210769,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{id:"quickstart",title:"Quick Start Guide"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"1. Build your first refine app",permalink:"/docs/tutorial/introduction/index"}},l={},s=[{value:"Quick Start Example",id:"quick-start-example",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," works on any environment that can run ",(0,a.kt)("strong",{parentName:"p"},"React")," (incl. ",(0,a.kt)("em",{parentName:"p"},"CRA, Next.js, Remix, Vite")," etc.)"),(0,a.kt)("p",null,"Although you could take the time to manually set up your environment and install the ",(0,a.kt)("strong",{parentName:"p"},"refine")," packages afterwards, the optimal way to get started with ",(0,a.kt)("strong",{parentName:"p"},"refine")," is using the project starter tool."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create refine-app")," provides built-in templates for ",(0,a.kt)("em",{parentName:"p"},"CRA"),", ",(0,a.kt)("em",{parentName:"p"},"Next.js")," and ",(0,a.kt)("em",{parentName:"p"},"Remix")," environments, so you can bootstrap a ",(0,a.kt)("strong",{parentName:"p"},"refine")," project in just a couple of minutes. It also offers a wide range of options that you can easily configure for your ",(0,a.kt)("em",{parentName:"p"},"UI framework"),", ",(0,a.kt)("em",{parentName:"p"},"i18n"),", ",(0,a.kt)("em",{parentName:"p"},"router"),", ",(0,a.kt)("em",{parentName:"p"},"Auth.")," and ",(0,a.kt)("em",{parentName:"p"},"data provider")," preferences."),(0,a.kt)("p",null,"To get started, please run the following command. The ",(0,a.kt)("strong",{parentName:"p"},"CLI wizard")," will assist you for the rest of the setup process:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm create refine-app@latest my-project\n")),(0,a.kt)("p",null,"It will create your ",(0,a.kt)("strong",{parentName:"p"},"refine")," project and install the required packages according to your selections. After completing the setup, navigate to the project folder and start your application with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"You can now view ",(0,a.kt)("strong",{parentName:"p"},"refine")," application at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),":"),(0,a.kt)("h2",{id:"quick-start-example"},"Quick Start Example"),(0,a.kt)("p",null,"We will now show how you can use the CLI to bootstrap a ",(0,a.kt)("strong",{parentName:"p"},"refine")," app with ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design")," and ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". You can also use ",(0,a.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"Material UI"),", ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI")," and ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine")," as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm create refine-app@latest  my-antd-project\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Select the following options to complete ",(0,a.kt)("strong",{parentName:"p"},"CLI wizard"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? Select your project type:\n\u276f refine-react\n\n? Do you want to use a UI Framework?:\n\u276f Ant Design\n\n? Do you want a customized theme?:\n\u276f Default theme\n\n? Router Provider:\n\u276f React Router v6\n\n? Data Provider:\n\u276f REST API\n\n? Auth Provider:\n\u276f None\n\n? Do you want to add example pages?\n\u276f Yes\n\n? Do you want a customized layout?\n\u276f No\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We are showing only the important options with this example. You can prefer to select other options like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},"Kbar")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18n")," but different options selections may be result in a different project structure.")),(0,a.kt)("br",null),(0,a.kt)("p",null,"Once the setup is complete, navigate to the project folder and start your project with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"You can now view your ",(0,a.kt)("strong",{parentName:"p"},"refine")," application at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),". You should see the output as a table populated with ",(0,a.kt)("inlineCode",{parentName:"p"},"post")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," data with filter, sort, and pagination features"),(0,a.kt)("div",null,(0,a.kt)("img",{style:{width:"100%"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/first-example-result.png",alt:"Example result"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you say ",(0,a.kt)("inlineCode",{parentName:"p"},"Yes")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Do you want to add example pages?")," option during the ",(0,a.kt)("strong",{parentName:"p"},"CLI wizard"),", refine will add example CRUD pages and the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop to your app. You can navigate to the example pages to try out the CRUD operation features"),(0,a.kt)("p",{parentName:"admonition"},"We always recommend adding examples pages to your project to get a better understanding of how ",(0,a.kt)("strong",{parentName:"p"},"refine")," works.")),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"\ud83d\udc49 Jump to ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorials")," and continue your work to turn your example project into a full-blown CRUD application! \ud83d\ude80"),(0,a.kt)("p",null,"\ud83d\udc49 Read more on ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/"},"Advanced Tutorials")," for different usage scenarios."),(0,a.kt)("p",null,"\ud83d\udc49 See ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/examples/"},"real-life examples")," built using ",(0,a.kt)("strong",{parentName:"p"},"refine")))}c.isMDXComponent=!0}}]);