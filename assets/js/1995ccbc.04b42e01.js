"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={title:"Material UI Grid System in React",description:"We'll discover the Material UI (MUI) Grid system with React examples",slug:"material-ui-grid",authors:"doro_onome",tags:["material-ui","react","mui","mui-grid","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/social.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/material-ui-grid",source:"@site/blog/2022-09-18-mui-grid.md",title:"Material UI Grid System in React",description:"We'll discover the Material UI (MUI) Grid system with React examples",date:"2022-09-18T00:00:00.000Z",formattedDate:"September 18, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"mui",permalink:"/blog/tags/mui"},{label:"mui-grid",permalink:"/blog/tags/mui-grid"},{label:"css",permalink:"/blog/tags/css"}],readingTime:13.13,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"Material UI Grid System in React",description:"We'll discover the Material UI (MUI) Grid system with React examples",slug:"material-ui-grid",authors:"doro_onome",tags:["material-ui","react","mui","mui-grid","css"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/social.png",hide_table_of_contents:!1},prevItem:{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect"},nextItem:{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo"},relatedPosts:[{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:16.85,date:"2022-08-23T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.685,date:"2022-09-04T00:00:00.000Z"},{title:"How to use Conditional Rendering in React",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.595,date:"2022-12-14T00:00:00.000Z"}],authorPosts:[{title:"How to use Material UI Select in React",permalink:"/blog/material-ui-select-component",formattedDate:"October 30, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.375,date:"2022-10-30T00:00:00.000Z"},{title:"How to use Material UI Card Component",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.05,date:"2023-01-04T00:00:00.000Z"},{title:"How to use Material UI Tooltip",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.38,date:"2022-11-29T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting Started with MUI Grid",id:"getting-started-with-mui-grid",level:2},{value:"How to use Material UI Grid in your React project?",id:"how-to-use-material-ui-grid-in-your-react-project",level:2},{value:"Containers and Items",id:"containers-and-items",level:3},{value:"Spacing",id:"spacing",level:3},{value:"Fluid Grids",id:"fluid-grids",level:3},{value:"Basic Fluid Grids",id:"basic-fluid-grids",level:3},{value:"Fluid Grids with multiple breakpoints",id:"fluid-grids-with-multiple-breakpoints",level:3},{value:"Auto Layout",id:"auto-layout",level:3},{value:"Nested Grids",id:"nested-grids",level:3},{value:"Building a simple Blog Page UI with Material UI Grid",id:"building-a-simple-blog-page-ui-with-material-ui-grid",level:2},{value:"The <code>&lt;MainFeaturedPost/&gt;</code> Component",id:"the-mainfeaturedpost-component",level:3},{value:"<code>&lt;FeaturedPost/&gt;</code> component",id:"featuredpost-component",level:3},{value:"The <code>&lt;Blog/&gt;</code> Component",id:"the-blog-component",level:3},{value:"MUI Grid Drawbacks",id:"mui-grid-drawbacks",level:2},{value:"Negative Margin",id:"negative-margin",level:3},{value:"white-space no-wrap",id:"white-space-no-wrap",level:3},{value:"direction: column | column-reverse",id:"direction-column--column-reverse",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"A grid layout is a set of measurements used to position elements or components on a page based on successive columns and rows. With the daily demand for responsive web design, using grids in web applications has become a necessity. It is almost impossible to assemble a web layout without incorporating a grid system. Grid layouts significantly increase any web application's aesthetic value and user experience. "),(0,a.kt)("p",null,"Material UI comes with its grid system that helps developers create a responsive grid layout that adjusts to any screen size or orientation, ensuring consistency across layouts. This article will deeply explore ",(0,a.kt)("strong",{parentName:"p"},"Material UI Grid"),", its features, implementations, and limitations in any React application."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#getting-started-with-mui-grid"},"Getting Started with MUI Grid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-material-ui-grid-in-your-react-project"},"How to use Material UI Grid in your React project?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#building-a-simple-blog-page-ui-with-material-ui-grid"},"Building a simple Blog Page UI with Material UI Grid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mui-grid-drawbacks"},"MUI Grid Drawbacks"))),(0,a.kt)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,a.kt)("p",null,"Material-UI (MUI) is a free and open-source library based on ",(0,a.kt)("a",{parentName:"p",href:"https://material.io/design"},"Material Design"),". It provides predefined and customizable React UI components to help with web development. More developers have incorporated Material UI into their projects over the years because it simplifies and speeds up the web design process."),(0,a.kt)("p",null,"Material UI provides different categories of components, including Navigation components, Input components, Data Display components, Feedback components, Layout components, e.t.c. The MUI Grid is a perfect example of the Layout components."),(0,a.kt)("p",null,"Install the MUI library as a dependency in your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," with the following command: "),(0,a.kt)("p",null,"Use npm\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm install @mui/material @emotion/react @emotion/styled")),(0,a.kt)("p",null,"Use yarn\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm install @mui/material @emotion/react @emotion/styled")),(0,a.kt)("h2",{id:"getting-started-with-mui-grid"},"Getting Started with MUI Grid"),(0,a.kt)("p",null,"The Material Design's grid system is visually balanced based on a 12-column grid layout. It provides a container that allows visual consistency across different screen sizes and viewports. You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Grid />")," component to implement Material Design\u2019s grid system in your React application. "),(0,a.kt)("p",null,"When using MUI Grid:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Item widths are set in percentages to ensure the layouts are adaptive to all screen sizes."),(0,a.kt)("li",{parentName:"ul"},"You can create space between individual grid items with ",(0,a.kt)("inlineCode",{parentName:"li"},"padding")),(0,a.kt)("li",{parentName:"ul"},"The grid has five breakpoints: ",(0,a.kt)("inlineCode",{parentName:"li"},"xs"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"sm"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"md"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"lg"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"xl"),"."),(0,a.kt)("li",{parentName:"ul"},"The breakpoint can be assigned an  value that indicates how many of the 12 columns are occupied by the component when it reaches that width.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note that"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"Grid />")," component employs ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/css-flexbox-1/"},"Flexbox properties")," for greater flexibility."),(0,a.kt)("h2",{id:"how-to-use-material-ui-grid-in-your-react-project"},"How to use Material UI Grid in your React project?"),(0,a.kt)("p",null,"To get started, import the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Grid />")," component into your project like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import Grid from '@mui/material/Grid';\nor\nimport { Grid } from '@mui/material';\n")),(0,a.kt)("h3",{id:"containers-and-items"},"Containers and Items"),(0,a.kt)("p",null,"Typically, MUI Grid provides two types of layouts; ",(0,a.kt)("inlineCode",{parentName:"p"},"containers")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"items"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," prop provides the CSS properties of a flex container to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Grid />")," component, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"item")," prop provides the CSS properties of a flex child."),(0,a.kt)("p",null,"The items need to be wrapped in a container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import Grid from "@mui/material/Grid";\n\nreturn (\n    <>\n  {/* A flexbox container represented in an MUI Grid container */}\n      <Grid container>\n        Container\n        {/* A Child grid container */}\n        <Grid item>\n          <div>A flex item</div> {/* A simple flex item */}\n        </Grid>\n      </Grid>\n    </>\n);\n')),(0,a.kt)("h3",{id:"spacing"},"Spacing"),(0,a.kt)("p",null,"To create space between grid child items, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"spacing")," prop that accompanies the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Grid />")," component. Any positive number and including decimals can be used as the ",(0,a.kt)("inlineCode",{parentName:"p"},"spacing")," value."),(0,a.kt)("p",null,"Consider the code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React,{ useState } from "react";\nimport Grid from "@mui/material/Grid";\nimport FormControlLabel from "@mui/material/FormControlLabel";\nimport RadioGroup from "@mui/material/RadioGroup";\nimport Radio from "@mui/material/Radio";\nimport Paper from "@mui/material/Paper";\nimport { Camera } from \'@mui/icons-material\'\n\n//create our style\nconst styles = {\n  paper: {\n    height: 100,\n    width: 100,\n    color: \'#808080\'\n  },\n\n  radio: {\n    backgroundColor: "#808080",\n    color: "#fff"\n  }\n};\n\n\nconst MUIspacing = () => {\n  //Make our variable for spacing. The default value is 0.\n  const [spacing, setSpacing] = useState(0);\n\n  //When executed, change the value of the spacing Hook to the value specified.\n  const changeSpacing = (e) => {\n    setSpacing(Number(e.target.value));\n  };\n  return (\n    <div>\n      <div>\n        {/* User will determine spacing according to their preference*/}\n        <Grid container spacing={spacing}>\n\n          {/*Rethreeder 3 empty black boxes as items of this container*/}\n          {[0, 1, 2].map((value) => (\n            <Grid key={value} item>\n              <Camera style={styles.paper} />\n            </Grid>\n          ))}\n        </Grid>\n      </div>\n      <div>\n        <Paper>\n          <div>\n            {/* Show user\'s chosen spacing value*/}\n            {spacing}\n            <RadioGroup\n              name="spacing"\n              aria-label="spacing"\n              value={spacing.toString()}\n              onChange={changeSpacing}\n              row\n              style={styles.radio}\n            >\n              {/*Create a form with multiple spacing values. */}\n              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (\n                <FormControlLabel\n                  key={value}\n                  value={value.toString()}\n                  control={<Radio />}\n                  label={value.toString()}\n                />\n              ))}\n            </RadioGroup>\n          </div>\n        </Paper>\n      </div>\n    </div>\n  );\n}\n\nexport default MUIspacing;\n')),(0,a.kt)("p",null,"The code above showcases a dynamic change of the ",(0,a.kt)("inlineCode",{parentName:"p"},"spacing")," prop value. There are three grid elements(camera icons), each interactively spaced with every click of a radio button that corresponds with the ",(0,a.kt)("inlineCode",{parentName:"p"},"spacing")," value. "),(0,a.kt)("p",null,"Here\u2019s the result:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/spacing.gif",alt:"spacing1"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"fluid-grids"},"Fluid Grids"),(0,a.kt)("p",null,"Fluid Grids in Material UI use column widths and breakpoints to scale grid items and resize content within them. We can create layouts for different screen sizes using the breakpoint props (",(0,a.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lg"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"xl"),") on the grid items. "),(0,a.kt)("h3",{id:"basic-fluid-grids"},"Basic Fluid Grids"),(0,a.kt)("p",null,"Basic Fluid Grids provide column widths that are represented with integer values from 1 to 12. They are applicable at any breakpoint and indicate how many columns the component occupies. A value assigned to a breakpoint applies to all preset width modifications. "),(0,a.kt)("p",null,"Here\u2019s a simple illustration of how to use Basic Fluid Grids in MUI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport Box from '@mui/material/Box';\nimport Grid from '@mui/material/Grid';\nimport '../App.css'\n\n\nconst BasicGrid = () => {\n  return (\n    <Box sx={{ flexGrow: 1 }} >\n      {/* Setting up the Fluid Grid system */}\n      <Grid container spacing={2} >\n        <Grid item xs={6}>\n          <div className='grid-elements'>xs=6</div>\n        </Grid>\n        <Grid item xs={6}>\n        <div className='grid-elements'>xs=6</div>\n        </Grid>\n        <Grid item xs={8}>\n        <div className='grid-elements'>xs=4</div>\n        </Grid>\n        <Grid item xs={4}>\n        <div className='grid-elements'>xs=8</div>\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n\nexport default BasicGrid \n")),(0,a.kt)("p",null,"Here\u2019s the result;"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/fluid.gif",alt:"fluid"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"fluid-grids-with-multiple-breakpoints"},"Fluid Grids with multiple breakpoints"),(0,a.kt)("p",null,"Components may be defined with multiple widths, causing the layout to change at the defined breakpoint. Width values assigned to larger breakpoints precede those assigned to smaller ones.\nFor example",(0,a.kt)("inlineCode",{parentName:"p"},"xs={12} sm={6}")," sizes a component to takes half of the  6 columns when viewport width is minumum 600px or above. The component fills all 12 available columns in smaller viewports."),(0,a.kt)("p",null,"Consider the code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Grid from '@mui/material/Grid';\n\nconst ComplexFluidGrid = () => {\n  return (\n    <Box sx={{ flexGrow: 1 }}>\n      <Grid container spacing={2}>\n        <Grid item xs={6} md={8}>\n          <div className='grid-elements'>xs=6 md=8</div>\n        </Grid>\n        <Grid item xs={6} md={4}>\n          <div className='grid-elements'>xs=6 md=4</div>\n        </Grid>\n        <Grid item xs={6} md={4}>\n          <div className='grid-elements'>xs=6 md=4</div>\n        </Grid>\n        <Grid item xs={6} md={8}>\n          <div className='grid-elements'>xs=6 md=8</div>\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n\nexport default ComplexFluidGrid\n")),(0,a.kt)("br",null),(0,a.kt)("p",null," The code above is a simple MUI Grid system with four grid children elements. The elements are set to take space according to a 3:1 ratio when the screen size is 600 px or greater and a 2:2 percentage when the screen size is 600px or less."),(0,a.kt)("p",null,"Here\u2019s the result:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/fluidGrid.gif",alt:"fluidGrid"})),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h3",{id:"auto-layout"},"Auto Layout"),(0,a.kt)("p",null,"The auto-layout feature allows grid items to auto-resize and occupy available space without specifying the item\u2019s width.  You can set the width for an item and have all others resize to fit."),(0,a.kt)("p",null,"Consider the code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Grid from '@mui/material/Grid';\n\nconst AutoGrid = () => {\n  return (\n    <Box sx={{ flexGrow: 1 }}>\n      <Grid container spacing={3}>\n        <Grid item xs>\n          <div className='grid-elements'>xs</div>\n        </Grid>\n        <Grid item xs={6}>\n          <div className='grid-elements'>xs=6</div>\n        </Grid>\n        <Grid item xs>\n          <div className='grid-elements'>xs</div>\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n\nexport default AutoGrid\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"The code above depicts three grid elements. The middle element is set to take half the screen's width while the other two dynamically take the space remaining on either side. "),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/autoLayout.gif",alt:"autoLayout"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"nested-grids"},"Nested Grids"),(0,a.kt)("p",null,"You can combine the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"item")," props so that the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Grid />")," component can act as both a flex container and a child item. This allows us to have another grid set within the grid item."),(0,a.kt)("p",null,"Consider the code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Grid from '@mui/material/Grid';\n\nfunction NestedGrid() {\n  return (\n    <React.Fragment>\n      <Grid item xs={4}>\n        <div className='grid-elements'>Grid Element</div>\n      </Grid>\n      <Grid item xs={4}>\n      <div className='grid-elements'>Grid Element</div>\n      </Grid>\n      <Grid item xs={4}>\n      <div className='grid-elements'>Grid Element</div>\n      </Grid>\n    </React.Fragment>\n  );\n}\n\nexport default function NestedGridGroup() {\n  return (\n    <Box sx={{ flexGrow: 1 }}>\n      <Grid container spacing={1}>\n        <Grid container item spacing={3}>\n          <NestedGrid />\n        </Grid>\n        <Grid container item spacing={3}>\n          <NestedGrid />\n        </Grid>\n        <Grid container item spacing={3}>\n          <NestedGrid />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"The code above showcases a nested MUI Grid system. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<FrontRow />")," component is a grid setup called inside another ",(0,a.kt)("inlineCode",{parentName:"p"},"<Grid />")," component multiple times to produce a result like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/nestedGrid.gif",alt:"nestedGrid"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"building-a-simple-blog-page-ui-with-material-ui-grid"},"Building a simple Blog Page UI with Material UI Grid"),(0,a.kt)("p",null,"Material UI Grid assists developers with the measurements needed to create a more easily responsive UI. This can be depicted in a simple Blog Page layout created with React and Material UI. MUI Grid is used in three app components; ",(0,a.kt)("inlineCode",{parentName:"p"},"Blog"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"FeaturedPost"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"MainFeaturedPost"),"."),(0,a.kt)("h3",{id:"the-mainfeaturedpost-component"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"<MainFeaturedPost/>")," Component"),(0,a.kt)("p",null,"This component contains all the elements in the blog layout's main featured post section."),(0,a.kt)("p",null,"Study the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Paper from '@mui/material/Paper';\nimport Typography from '@mui/material/Typography';\nimport Grid from '@mui/material/Grid';\nimport Box from '@mui/material/Box';\n\nfunction MainFeaturedPost(props) {\n  const { post } = props;\n\n  return (\n    <Paper\n      sx={{\n        position: 'relative',\n        backgroundColor: 'grey.800',\n        color: '#fff',\n        mb: 4,\n        backgroundSize: 'cover',\n        backgroundRepeat: 'no-repeat',\n        backgroundPosition: 'center',\n        backgroundImage: `url(${post.image})`,\n      }}\n    >\n      \n      {<img style={{ display: 'none' }} src=\"https://refine.ams3.cdn.digitaloceanspaces.comundefined\" alt={post.imageText} />}\n      <Box\n        sx={{\n          position: 'absolute',\n          top: 0,\n          bottom: 0,\n          right: 0,\n          left: 0,\n          backgroundColor: 'rgba(0,0,0,.3)',\n        }}\n      />\n      <Grid container>\n        <Grid item md={6}>\n          <Box\n            sx={{\n              position: 'relative',\n              p: { xs: 3, md: 6 },\n              pr: { md: 0 },\n            }}\n          >\n            <Typography component=\"h3\" variant=\"h2\" >\n              {post.title}\n            </Typography>\n            <Typography variant=\"h5\" color=\"inherit\" paragraph>\n              {post.description}\n            </Typography>\n              {post.linkText}\n          </Box>\n        </Grid>\n      </Grid>\n    </Paper>\n  );\n}\n\nexport default MainFeaturedPost; \n")),(0,a.kt)("h3",{id:"featuredpost-component"},(0,a.kt)("inlineCode",{parentName:"h3"},"<FeaturedPost/>")," component"),(0,a.kt)("p",null,"This component holds the elements in the Blog page layout featured posts section. There are two of them, and they are set the share the available screen space in a 3:6 ratio when the viewport is 600px or more. They are also set to stack on top of each other when the viewport is 600px or less."),(0,a.kt)("p",null,"Study the code below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Typography from '@mui/material/Typography';\nimport Grid from '@mui/material/Grid';\nimport Card from '@mui/material/Card';\nimport CardActionArea from '@mui/material/CardActionArea';\nimport CardContent from '@mui/material/CardContent';\nimport CardMedia from '@mui/material/CardMedia';\n\nfunction FeaturedPost(props) {\n  const { post } = props;\n\n  return (\n    <Grid item xs={12} md={6}>\n      <CardActionArea component=\"a\" href=\"#\">\n        <Card sx={{ display: 'flex' }}>\n          <CardContent sx={{ flex: 1 }}>\n            <Typography component=\"h2\" variant=\"h5\">\n              {post.title}\n            </Typography>\n            <Typography variant=\"subtitle1\" color=\"text.secondary\">\n              {post.date}\n            </Typography>\n            <Typography variant=\"subtitle1\" paragraph>\n              {post.description}\n            </Typography>\n            <Typography variant=\"subtitle1\" color=\"primary\">\n              Continue reading...\n            </Typography>\n          </CardContent>\n          <CardMedia\n            component=\"img\"\n            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}\n            image={post.image}\n            alt={post.imageLabel}\n          />\n        </Card>\n      </CardActionArea>\n    </Grid>\n  );\n}\n\nexport default FeaturedPost;\n")),(0,a.kt)("h3",{id:"the-blog-component"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"<Blog/>")," Component"),(0,a.kt)("p",null,"This component handles housing and displays the other components with the ",(0,a.kt)("strong",{parentName:"p"},"Material UI grid"),". "),(0,a.kt)("p",null,"Here\u2019s the code for the Blog component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport CssBaseline from '@mui/material/CssBaseline';\nimport Grid from '@mui/material/Grid';\nimport Container from '@mui/material/Container';\nimport { createTheme, ThemeProvider } from '@mui/material/styles';\nimport Header from './Header';\nimport MainFeaturedPost from './MainFeaturedPost';\nimport FeaturedPost from './FeaturedPost';\n\nconst sections = [\n  { title: 'Technology', url: '#' },\n  { title: 'Design', url: '#' },\n  { title: 'Culture', url: '#' },\n  { title: 'Business', url: '#' },\n  { title: 'Politics', url: '#' },\n  { title: 'Opinion', url: '#' },\n  { title: 'Science', url: '#' },\n  { title: 'Health', url: '#' },\n  { title: 'Style', url: '#' },\n  { title: 'Travel', url: '#' },\n];\n\nconst mainFeaturedPost = {\n  title: 'Title of a longer featured blog post',\n  description:\n    \"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.\",\n  image: 'https://source.unsplash.com/random',\n  imageText: 'main image description',\n  linkText: 'Continue reading\u2026',\n};\n\nconst featuredPosts = [\n  {\n    title: 'Featured post',\n    date: 'Nov 12',\n    description:\n      'This is a wider card with supporting text below as a natural lead-in to additional content.',\n    image: 'https://source.unsplash.com/random',\n    imageLabel: 'Image Text',\n  },\n  {\n    title: 'Post title',\n    date: 'Nov 11',\n    description:\n      'This is a wider card with supporting text below as a natural lead-in to additional content.',\n    image: 'https://source.unsplash.com/random',\n    imageLabel: 'Image Text',\n  },\n];\n\nconst theme = createTheme();\n\nexport default function Blog() {\n  return (\n    <ThemeProvider theme={theme}>\n      <CssBaseline />\n      <Container maxWidth=\"lg\">\n        <Header title=\"Blog\" sections={sections} />\n        <main>\n          <MainFeaturedPost post={mainFeaturedPost} />\n          <Grid container spacing={4}>\n            {featuredPosts.map((post) => (\n              <FeaturedPost key={post.title} post={post} />\n            ))}\n          </Grid>\n        </main>\n      </Container>\n    </ThemeProvider>\n  );\n}\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"We have a simple Blog Layout created with React and Material UI."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-18-mui-grid/featuredPost.gif",alt:"featuredPost"})),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"mui-grid-drawbacks"},"MUI Grid Drawbacks"),(0,a.kt)("p",null,"Some of the drawbacks of using ",(0,a.kt)("strong",{parentName:"p"},"Material UI Grid")," include:"),(0,a.kt)("h3",{id:"negative-margin"},"Negative Margin"),(0,a.kt)("p",null,"MUI employs a negative margin to create space between grid items. This could result in unexpected behaviors. To apply a background colour, for example, you must use ",(0,a.kt)("inlineCode",{parentName:"p"},"display: flex;")," on the parent grid element."),(0,a.kt)("h3",{id:"white-space-no-wrap"},"white-space no-wrap"),(0,a.kt)("p",null,"On flex items, the default setting is ",(0,a.kt)("inlineCode",{parentName:"p"},"min-width: auto"),". This causes a positioning conflict when the child uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"white-space: nowrap"),". You can set ",(0,a.kt)("inlineCode",{parentName:"p"},"min-width: 0")," to ensure that the item stays within the container.\nIn practice, you can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"zeroMinWidth")," property as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<Grid item xs zeroMinWidth>\n  <Typography noWrap>\n </Grid> \n")),(0,a.kt)("h3",{id:"direction-column--column-reverse"},"direction: column | column-reverse"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'direction="column"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'direction="column-reverse"')," containers do not support the ",(0,a.kt)("inlineCode",{parentName:"p"},"xs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lg"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"xl")," props. These breakpoints are primarily concerned with controlling width and have no effect on height within column containers."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This article covered ",(0,a.kt)("strong",{parentName:"p"},"Material UI Grid"),", its features, application and installment inside any React application. We also further explored the MUI Grid functionalities in a simple Blog post Layout. Despite the limitations enlisted above, MUI Grid aids developers in creating a responsive and interactive web user interface. I hope this article becomes valuable to you. "),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("hr",null),(0,a.kt)("div",{style:{backgroundColor:"#F8F8F8",padding:"18px",borderRadius:"10px"}},(0,a.kt)("div",{style:{fontSize:"32px",fontWeight:"700",lineHeight:"1.4",marginBottom:"25px"}},"Stop wasting your time copy/pasting your form code all over your application!"),(0,a.kt)("p",null,"Meet the headless, React-based solution to build sleek ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," applications. With refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,a.kt)("p",null,"Try ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," to rapidly build your next ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/mui_banner.png",alt:"refine blog logo"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is an open-source, React-based framework for building CRUD applications without constraints. It\u2019s headless by design and seamlessly works with ",(0,a.kt)("strong",{parentName:"p"},"any custom design")," or ",(0,a.kt)("strong",{parentName:"p"},"UI framework")," you favor. For convenience, it ships with ready-made integrations for ",(0,a.kt)("strong",{parentName:"p"},"Ant Design System, Material UI and Mantine UI"),"."),(0,a.kt)("p",null,"It can ",(0,a.kt)("strong",{parentName:"p"},"speed up your development time up to 3X")," without compromising freedom on styling, customization and project workflow."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects.")))}m.isMDXComponent=!0}}]);