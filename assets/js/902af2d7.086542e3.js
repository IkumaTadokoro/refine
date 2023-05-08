"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,g=h["".concat(l,".").concat(m)]||h[m]||c[m]||r;return n?i.createElement(g,s(s({ref:t},d),{},{components:n})):i.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","react","css","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,o={permalink:"/blog/how-to-add-darkmode-in-ant-design",source:"@site/blog/2022-02-12-implement-darkmode.md",title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",date:"2022-02-12T00:00:00.000Z",formattedDate:"February 12, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"css",permalink:"/blog/tags/css"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:5.21,hasTruncateMarker:!0,authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],frontMatter:{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","react","css","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui"},nextItem:{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv"},relatedPosts:[{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works",formattedDate:"October 2, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.455,date:"2022-10-02T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.07,date:"2022-09-09T00:00:00.000Z"},{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.13,date:"2022-09-18T00:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},p=[{value:"Initial setup",id:"initial-setup",level:2},{value:"Create the Less and then CSS files",id:"create-the-less-and-then-css-files",level:2},{value:"Copy the <code>antd.less</code> file",id:"copy-the-antdless-file",level:3},{value:"Create a Less file for the dark mode",id:"create-a-less-file-for-the-dark-mode",level:3},{value:"Compile the CSS files with <code>gulp</code>",id:"compile-the-css-files-with-gulp",level:3},{value:"Adapt the Refine application to be able to switch between the 2 styles",id:"adapt-the-refine-application-to-be-able-to-switch-between-the-2-styles",level:2},{value:"App.tsx file",id:"apptsx-file",level:3},{value:"Header",id:"header",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,a.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.kt)("p",{parentName:"admonition"},"You should know that ",(0,a.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,a.kt)("p",null,"In this article, we will provide an example on how to implement darkmode with ",(0,a.kt)("strong",{parentName:"p"},"refine"),". In order to switch between light and dark mode, we need 2 different styles and the possibility to switch between one and the other without restarting the application. Since the Less stylesheets with React doesn't allow variables to be modified without compilation and therefore a restart of the application. To solve this, we are going to use ",(0,a.kt)("strong",{parentName:"p"},"gulp")," that will compile the Less files into swappable CSS, directly accessible to the running application."),(0,a.kt)("p",null,"The solution was presented in this ",(0,a.kt)("a",{parentName:"p",href:"https://jfelix.info/blog/dynamic-themes-in-ant-design-how-to-change-between-light-and-dark-theme"},"blog")," and lightly adapted to ",(0,a.kt)("strong",{parentName:"p"},"Refine"),"."),(0,a.kt)("h2",{id:"initial-setup"},"Initial setup"),(0,a.kt)("p",null,"For this article, we started from a basic Refine app with Ant Design:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"npm create refine-app@latest tutorial -- -p refine-react -b v3\n")),(0,a.kt)("p",null,"Select the following options to complete the CLI wizard:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Cloned remote source successfully.\n\u2714 What will be the name of your app \xb7 tutorial\n\u2714 Package manager: \xb7 Npm\n\u2714 Do you want to use a UI Framework?: \xb7 Ant Design\n\u2714 Do you want a customized theme?: \xb7 Yes (Custom Variables)\n\u2714 Router Provider: \xb7 React Router v6\n\u2714 Data Provider: \xb7 REST API\n\u2714 Auth Provider: \xb7 None\n\u2714 Do you want to add example pages? \xb7 Yes (Recommended)\n\u2714 Do you want a customized layout? \xb7 Yes\n\u2714 i18n - Internationalization: \xb7 No\n")),(0,a.kt)("p",null,"From there, install the following packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"npm install -s gulp gulp-less gulp-postcss gulp-debug gulp-csso autoprefixer less-plugin-npm-import\nnpm install -s react-redux react-css-theme-switcher\n")),(0,a.kt)("h2",{id:"create-the-less-and-then-css-files"},"Create the Less and then CSS files"),(0,a.kt)("h3",{id:"copy-the-antdless-file"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"h3"},"antd.less")," file"),(0,a.kt)("p",null,"Make a copy of the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/styles/antd.less")," file into ",(0,a.kt)("inlineCode",{parentName:"p"},"antd.light-theme.less")," and add the following lines inside (because this setting will be removed from the Header/index.tsx file later on):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// Header\n@layout-header-background:#fff;\n")),(0,a.kt)("h3",{id:"create-a-less-file-for-the-dark-mode"},"Create a Less file for the dark mode"),(0,a.kt)("p",null,"Create the following file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/styles/antd.dark-theme.less")," with this content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/styles/antd.dark-theme.less"',title:'"src/styles/antd.dark-theme.less"'},"// Run 'npx gulp less' after modifying this file\n\n@import '~antd/lib/style/color/colorPalette.less';\n@import '~antd/dist/antd.less';\n@import '~antd/lib/style/themes/dark.less';\n\n@primary-color: rgba(255, 255, 255, 0.75);\n@border-radius-base: 4px;\n@icon-color: rgba(255, 255, 255, 0.75);\n\n@component-background: #303030;\n@body-background: #303030;\n@popover-background: #303030;\n@border-color-base: #6f6c6c;\n@border-color-split: #424242;\n@table-header-sort-active-bg: #424242;\n@card-skeleton-bg: #424242;\n@skeleton-color: #424242;\n@table-header-sort-active-bg: #424242;\n@layout-header-background:#424242;\n")),(0,a.kt)("h3",{id:"compile-the-css-files-with-gulp"},"Compile the CSS files with ",(0,a.kt)("inlineCode",{parentName:"h3"},"gulp")),(0,a.kt)("p",null,"Create the following ",(0,a.kt)("inlineCode",{parentName:"p"},"gulpfile.js")," in the root of the repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="gulpfile.js"',title:'"gulpfile.js"'},"const gulp = require('gulp')\nconst gulpless = require('gulp-less')\nconst postcss = require('gulp-postcss')\nconst debug = require('gulp-debug')\nvar csso = require('gulp-csso')\nconst autoprefixer = require('autoprefixer')\nconst NpmImportPlugin = require('less-plugin-npm-import')\n\ngulp.task('less', function () {\n  const plugins = [autoprefixer()]\n\n  return gulp\n    .src('src/styles/*-theme.less')\n    .pipe(debug({title: 'Less files:'}))\n    .pipe(\n      gulpless({\n        javascriptEnabled: true,\n        plugins: [new NpmImportPlugin({prefix: '~'})],\n      }),\n    )\n    .pipe(postcss(plugins))\n    .pipe(\n      csso({\n        debug: true,\n      }),\n    )\n    .pipe(gulp.dest('./public'))\n})\n\nexports.sync = gulp.series('less');\n")),(0,a.kt)("p",null,"And run ",(0,a.kt)("inlineCode",{parentName:"p"},"npx gulp less")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\u25b6npx gulp less                       \n[22:36:28] Using gulpfile ./gulpfile.js\n[22:36:28] Starting 'less'...\n[22:36:28] Less files: src/styles/antd.dark-theme.less\n[22:36:28] Less files: src/styles/antd.light-theme.less\n[22:36:28] Less files: 2 items\n## parsing done in 165 ms\n\nCompress block #1\n[0.028s] init\n[0.038s] clean\n[0.068s] replace\n[0.076s] prepare\n[0.011s] mergeAtrule\n[0.052s] initialMergeRuleset\n[0.011s] disjoinRuleset\n[0.068s] restructShorthand\n[0.076s] restructBlock\n[0.015s] mergeRuleset\n[0.075s] restructRuleset\n## compress done in 522 ms\n\n## generate done in 44 ms\n\n## parsing done in 114 ms\n\nCompress block #1\n[0.007s] init\n[0.020s] clean\n[0.057s] replace\n[0.067s] prepare\n[0.006s] mergeAtrule\n[0.068s] initialMergeRuleset\n[0.012s] disjoinRuleset\n[0.045s] restructShorthand\n[0.033s] restructBlock\n[0.010s] mergeRuleset\n[0.061s] restructRuleset\n## compress done in 389 ms\n\n## generate done in 15 ms\n\n[22:36:33] Finished 'less' after 5 s\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"this command must be repeated each time the Less files are modified and the application restarted to see the changes)")),(0,a.kt)("p",null,"You should now have 2 CSS files inside the public folder: ",(0,a.kt)("inlineCode",{parentName:"p"},"antd.dark-theme.css"),"and ",(0,a.kt)("inlineCode",{parentName:"p"},"antd.light-theme.css")),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-12-implement-darkmode/css.png",alt:"signin"})),(0,a.kt)("h2",{id:"adapt-the-refine-application-to-be-able-to-switch-between-the-2-styles"},"Adapt the Refine application to be able to switch between the 2 styles"),(0,a.kt)("h3",{id:"apptsx-file"},"App.tsx file"),(0,a.kt)("p",null,"// highlight-start\n// highlight-end\nIn App.tsx, adapt the file so it looks like this\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, } from \'@refinedev/core\';\nimport { notificationProvider } from \'@refinedev/antd\';\nimport routerProvider from "@refinedev/react-router-v6";\nimport "styles/antd.less";\nimport dataProvider from "@refinedev/simple-rest";\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\nimport { Title, Header, Sider, Footer, Layout, OffLayoutArea } from "components/layout"\n// highlight-start\nimport { ThemeSwitcherProvider } from "react-css-theme-switcher";\n// highlight-end\n\nfunction App() {\n// highlight-start\n    const currThemes = {\n        dark: `${process.env.PUBLIC_URL}/antd.dark-theme.css`,\n        light: `${process.env.PUBLIC_URL}/antd.light-theme.css`,\n    };\n// highlight-end\n\n    return (\n// highlight-start\n        <ThemeSwitcherProvider themeMap={currThemes} defaultTheme="light">\n// highlight-end\n            <Refine routerProvider={routerProvider} notificationProvider={notificationProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                        create: PostCreate,\n                        edit: PostEdit,\n                        show: PostShow,\n                    },\n                ]}\n                Title={Title}\n                Header={Header}\n                Sider={Sider}\n                Footer={Footer}\n                Layout={Layout}\n                OffLayoutArea={OffLayoutArea} />\n// highlight-start\n        </ThemeSwitcherProvider>\n// highlight-end\n    );\n};\n\nexport default App;\n')),(0,a.kt)("h3",{id:"header"},"Header"),(0,a.kt)("p",null,"Add a theme switcher in the Header (",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/layout/header/index.tsx"),") with the added lines so it looks like this (the Header has been simplified for the sake of clarity and the switch can be installed somewhere else in the application obviously):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\n// highlight-start\nimport { useThemeSwitcher } from "react-css-theme-switcher";\n// highlight-end\nimport {\n    AntdLayout,\n// highlight-start\n    Switch,\n// highlight-end\n} from "@refinedev/antd";\n\nexport const Header: React.FC = () => {\n// highlight-start\n    const [isDarkMode, setIsDarkMode] = useState<boolean>();\n    const { switcher, themes } = useThemeSwitcher();\n\n    function toggleTheme(isChecked: boolean) { // added\n        setIsDarkMode(isChecked);\n        switcher({ theme: isChecked ? themes.dark : themes.light });\n    };\n// highlight-end\n\n    return (\n        <AntdLayout.Header\n            style={{\n                display: "flex",\n                justifyContent: "flex-end",\n                alignItems: "center",\n                padding: "0px 24px",\n                height: "64px",\n// highlight-start\n                //backgroundColor: "#FFF", // commented out, otherwise the header remains white in dark mode\n// highlight-end\n            }}\n\n        >\n// highlight-start\n            <div className="main fade-in"> // added\n                <Switch\n                    checkedChildren="\ud83c\udf1c"\n                    unCheckedChildren="\ud83c\udf1e"\n                    checked={isDarkMode}\n                    onChange={toggleTheme}\n                />\n            </div>\n// highlight-end\n        </AntdLayout.Header>\n    );\n};\n')),(0,a.kt)("p",null,"You should now have a light/dark mode switcher in the header:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-12-implement-darkmode/light.png",alt:"signin"})),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-12-implement-darkmode/dark.png",alt:"signin"})),(0,a.kt)("br",null))}c.isMDXComponent=!0}}]);