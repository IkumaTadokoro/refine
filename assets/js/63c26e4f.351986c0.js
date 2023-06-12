"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",slug:"data-fetching-next-js-useswr",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-03-use-swr/social.png",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/data-fetching-next-js-useswr",source:"@site/blog/2023-01-03-use-swr.md",title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",date:"2023-01-03T00:00:00.000Z",formattedDate:"January 3, 2023",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:13.26,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"How to Fetch Data in React with useSWR",description:"Introduction to SWR and useSwr for Client-Side Data Fetching",slug:"data-fetching-next-js-useswr",authors:"michael",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-03-use-swr/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use Material UI Card Component",permalink:"/blog/material-ui-card"},nextItem:{title:"How to Use Docker Copy Command",permalink:"/blog/docker-copy"},relatedPosts:[{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:12.725,date:"2022-08-18T00:00:00.000Z"},{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.095,date:"2022-04-29T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.145,date:"2022-11-13T00:00:00.000Z"}],authorPosts:[{title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.19,date:"2022-11-12T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",description:"How to use Material UI DataGrid component with refine apps?",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.435,date:"2022-08-23T00:00:00.000Z"},{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",permalink:"/blog/next-js-redirect",formattedDate:"May 16, 2023",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:8.86,date:"2023-05-16T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is SWR and <code>useSWR</code>?",id:"what-is-swr-and-useswr",level:2},{value:"Setting up an Example App With SWR",id:"setting-up-an-example-app-with-swr",level:2},{value:"Creating a Server",id:"creating-a-server",level:3},{value:"Data Fetching with <code>Fetch() API</code>",id:"data-fetching-with-fetch-api",level:3},{value:"Data Fetching With SWR",id:"data-fetching-with-swr",level:3},{value:"Additional Features of SWR",id:"additional-features-of-swr",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Preloading Data With SWR",id:"preloading-data-with-swr",level:3},{value:"SWRDevTools",id:"swrdevtools",level:3},{value:"TypeScript Support",id:"typescript-support",level:3},{value:"Conclusion",id:"conclusion",level:2}],c=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const h={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Data is unquestionably an important component of any modern web application today. And, as the web evolves and innovates, new methods of interacting with this data must emerge in order to provide users with a better experience when interacting with our applications. "),(0,r.kt)("p",null,"There have been a variety of technologies used for client-side data fetching. JavaScript, for example, has the native ",(0,r.kt)("inlineCode",{parentName:"p"},"Fetch() API")," for data fetching. Axios is a promised-based HTTP client library for making asynchronous HTTP requests and fetching any data on the client-side. "),(0,r.kt)("p",null,"SWR is one of the most powerful client-side data fetching libraries for frontend frameworks today. In this article, we will explore the features and benefits of using SWR in an example Next.js application, and provide a step-by-step guide for getting started with the library."),(0,r.kt)("p",null,"Whether you are new to React.js or an experienced developer looking to optimize your data fetching strategy, SWR is a powerful tool worth considering! Now, let's get started!"),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-swr-and-useswr"},"What is SWR and useSWR?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-an-example-app-with-swr"},"Setting up an Example App With SWR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#additional-features-of-swr"},"Additional Features of SWR"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow along well with this tutorial, it's essential that you have basic knowledge of JavaScript and React. SWR is a library for use with React and its frameworks, so it's required that you're familiar with the basics of both of these technologies."),(0,r.kt)("p",null,"In addition, make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node")," installed on your computer before continuing. "),(0,r.kt)("h2",{id:"what-is-swr-and-useswr"},"What is SWR and ",(0,r.kt)("inlineCode",{parentName:"h2"},"useSWR"),"?"),(0,r.kt)("p",null,"SWR is an acronym for stale-while-revalidate. It's a lightweight React.js library with hooks for data fetching on the client-side. SWR is bootstrapped with various hooks that are used for various performance improvement techniques such as data caching, re-validation, pagination, and many others."),(0,r.kt)("p",null,"The latest version of SWR, SWR 2.0, was released on December 9 and it features some new and exciting updates such as data preloading, new mutation APIs, improved optimistic UI capabilities, and a brand new DevTools for better developer experience. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useSWR"),", on the other hand is the most basic hook from the SWR library for data fetching. A basic example using the hook is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { data, error} = useSWR(key, fetcher)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useSWR")," hook accepts two arguments. One, a ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," value (usually the API endpoint to fetch data from), and a fetcher, which is an async function that contains the logic for fetching the data."),(0,r.kt)("p",null,"From the above example, ",(0,r.kt)("inlineCode",{parentName:"p"},"useSWR")," returns two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", which is the value returned from the resource you're fetching, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),", which contains error, if any is caught. It also returns two additional values, ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoading")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isValidating"),", depending on the state of the fetcher function."),(0,r.kt)("p",null,"In the next section, we'll see how we can use this powerful hook as well as the other capabilities of SWR in an example application."),(0,r.kt)("h2",{id:"setting-up-an-example-app-with-swr"},"Setting up an Example App With SWR"),(0,r.kt)("p",null,"We'll create an example application in React to get started with understanding how SWR works and how to start using it. Basically, we'll compare and contrast fetching data with the native 'Fetch() API' (or other client-side data fetching libraries such as Axios) you're used to and fetching data with SWR."),(0,r.kt)("p",null,"You can check out the complete code for the application on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mich45/swr-tutorial"},"GitHub"),"."),(0,r.kt)("p",null,"Run the following command in your terminal to create a new React project with ",(0,r.kt)("inlineCode",{parentName:"p"},"create-react-app"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-swr\n")),(0,r.kt)("p",null,"or with Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create react-app my-swr\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": I named the app ",(0,r.kt)("inlineCode",{parentName:"p"},"my-swr")," for brevity but you can also choose any name you're okay with. "),(0,r.kt)("p",null,"After the installation is complete, ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the project directory and start the development server with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),". "),(0,r.kt)("p",null,"Next, run the following command to install the necessary packages for our example application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install styled-components swr\n")),(0,r.kt)("p",null,"or with Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add styled-components swr\n")),(0,r.kt)("h3",{id:"creating-a-server"},"Creating a Server"),(0,r.kt)("p",null,"For the example application we'll be building, we'll set up a server with express running on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3001"),". The server basically returns a list of users that will be rendered on the client-side. "),(0,r.kt)("p",null,"In the project root folder, create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"server")," folder, navigate to it on the command line and run the following command to create a new Node.js project with an auto-generated ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,r.kt)("p",null,"or with Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\n")),(0,r.kt)("p",null,"Next, we'll install the necessary packages to build up our server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express cors nodemon\n")),(0,r.kt)("p",null,"with Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add express cors nodemon\n")),(0,r.kt)("p",null,"Still in the server folder, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server/index.js"',title:'"server/index.js"'},'const express = require(\'express\');\nconst cors = require(\'cors\')\nconst app = express();\n\napp.use(cors());\nconst data = [\n    {\n        "name": "Kim Doe",\n        "age": 23,\n        "avatar": "https://randomuser.me/api/portraits/women/44.jpg"\n    },\n    {\n        "name": "Mary Jane",\n        "age": 25,\n        "avatar": "https://randomuser.me/api/portraits/women/50.jpg"\n    },\n    {\n        "name": "Ken Joe",\n        "age": 24,\n        "avatar": "https://randomuser.me/api/portraits/women/18.jpg"\n    }\n    ];\n\napp.get(\'/\', (req, res) => {\n    res.json(data);\n});\n\napp.listen(3001, () => {\n    console.log(\'App listening on port 3001\');\n});\n\n')),(0,r.kt)("p",null,"In the above code, we're basically creating a server in express.js and also, we created a dummy data array for the list of users we'll render on the client-side. We also added ",(0,r.kt)("inlineCode",{parentName:"p"},"cors")," to allow our client application communicate with the server without running into errors."),(0,r.kt)("p",null,"Next, we'll edit the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"server/package.json")," to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server/package.json"',title:'"server/package.json"'},'{\n  "name": "server",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "dependencies": {\n    "cors": "^2.8.5",\n    "express": "^4.18.2"\n  },\n  "scripts": {\n    "dev": "nodemon index.js"\n  }\n}\n')),(0,r.kt)("p",null,"NOTE: I have ",(0,r.kt)("inlineCode",{parentName:"p"},"nodemon")," installed globally so it's not included in the list of dependencies, but you'll find it included in yours. Also, if you're using git you may want to create a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file in the server folder to avoid pushing the files in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,r.kt)("p",null,"We can now run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm dev")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," (depending on the package manager you used) to start up the server. If everything works correctly you should see ",(0,r.kt)("inlineCode",{parentName:"p"},"App listening on port 3001")," logged to the console."),(0,r.kt)("h3",{id:"data-fetching-with-fetch-api"},"Data Fetching with ",(0,r.kt)("inlineCode",{parentName:"h3"},"Fetch() API")),(0,r.kt)("p",null,"Let's go back to the client-side code now that we have the server up and running. In this part, we'll fetch the users from our backend (the server we created earlier) and display them in a simple component."),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," folder in the root directory and create a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"components"),". In the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," folder create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Home.js")," file with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/components/Home.js"',title:'"src/components/Home.js"'},"\nimport React from 'react'\nimport { useState, useEffect } from 'react'\n\nconst Home = () => {\n  const [users, setUsers] = useState(null);\n    useEffect(() => {\n      async function fetchUsers() {\n        const response = await fetch('http://localhost:3001');\n        const data = await response.json();\n        setUsers(data)\n      }\n      fetchUsers();\n    }, [])\n  \n    if (!users) return <h2>Loading...</h2>\n    return (\n      <>\n        <div>\n          {\n            users.map((user, index) => {\n             return <h2 key={index}>{user.name}</h2>\n            })\n          }\n        </div>\n      </>\n    )\n}\n\nexport default Home\n")),(0,r.kt)("p",null,"Next, edit the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.js")," to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/App.js"',title:'"src/App.js"'},"import './App.css';\nimport Home from './components/Home'\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <Home/>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,"In the code above, we're importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home.js")," component we created to render it in the homepage of our application. Now, if you navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),", the list of users from the server should be displayed as shown below:"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-03-use-swr/Home.png",alt:"useswr"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Our app works correctly. Awesome! Now, let's see how the application behaves when we add a new user to the user list on the server."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"server/index.js")," file, add a new user to the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," array like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server/index.js"',title:'"server/index.js"'},'...\nconst data = [\n    ...\n    //highlight-start\n    {\n        "name": "John Doe",\n        "age": 24,\n        "avatar": "https://randomuser.me/api/portraits/women/18.jpg"\n    }\n    //highlight-end\n]\n\n')),(0,r.kt)("p",null,"Notice how the list isn't updated with the new user when we navigate back to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),". It's only when we reload the page before we get the updated list of users. "),(0,r.kt)("p",null,"The GIF below shows this even better:"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-03-use-swr/fetch.gif",alt:"useswr"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Inconsistencies in UI updates and data fetching behavior could be disastrous for applications that rely on real-time data to provide a reactive and seamless experience to users. This is one major problem that SWR aims to solve."),(0,r.kt)("h3",{id:"data-fetching-with-swr"},"Data Fetching With SWR"),(0,r.kt)("p",null,"In this part, we'll see how SWR outshines other data fetching methods by automatically re-validating and updating data without requiring us to manually refresh or reload the application."),(0,r.kt)("p",null,"Edit the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/Home.js")," to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/components/Home.js"',title:'"src/components/Home.js"'},"import React from 'react'\nimport useSWR from 'swr'\n\nconst Home = () => {\n  const fetcher = (...args) => fetch(...args).then(res => res.json());\n  const { data, error, isLoading } = useSWR('http://localhost:3001', fetcher)\n  \n    if (error) return <div>Failed to fetch users.</div>\n    if (isLoading) return <h2>Loading...</h2>\n    return (\n      <>\n        <div>\n          {\n            data.map((user, index) => {\n             return <h2 key={index}>{user.name}</h2>\n            })\n          }\n        </div>\n      </>\n    )\n}\n\nexport default Home\n")),(0,r.kt)("p",null,"Let's go through the code above to understand what's going on."),(0,r.kt)("p",null,"From the code above, we import the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSWR")," hook from SWR. The hooks take a key, that is, the URL of our server and a fetcher function that contains the logic for fetching the data. The hook then returns three values based on the state of the result from the server. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," object contains the list of users and the ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," will contain any error that is thrown. Next, we map through the users array that is returned in the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," object and render them on the page."),(0,r.kt)("p",null,"Now, if you navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),", the list of users should be displayed like below:"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-03-use-swr/Home-2.png",alt:"useswr"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"So far so good. Now, let's also add a new user to the list on the server and see how the application behaves. Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"server/index.js")," file and add a new user to the data array like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="server/index.js"',title:'"server/index.js"'},'...\nconst data = [\n    ...\n     //highlight-start\n    {\n        "name": "Peter Pan",\n        "age": 24,\n        "avatar": "https://randomuser.me/api/portraits/women/21.jpg"\n    }\n    //highlight-end\n]\n\n')),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," in the browser and note how the users list is automatically updated with the new user we added without us reloading the page. "),(0,r.kt)("p",null,"The GIF below shows this in action."),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-03-use-swr/swr.gif",alt:"useswr"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Notice how fast and consistent the UI is updated with the new user!"),(0,r.kt)("p",null,"This example shows one of the incredible powers of SWR over other client-side data fetching methods. It shows how SWR is able to auto re-validate and update the UI instantly using cached data and returning the latest user from the server."),(0,r.kt)("p",null,"How SWR is able to infer that the data has been updated and then re-validating and updating the UI is beyond the scope of this article. However, if you're curious to know, you can read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://swr.vercel.app/docs/revalidation"},"here")," in the docs."),(0,r.kt)("hr",null),(0,r.kt)(c,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"additional-features-of-swr"},"Additional Features of SWR"),(0,r.kt)("p",null,"We saw one of SWR's best features in action in the previous section; this section will show you even more of what SWR is made and capable of."),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"SWR simplifies paginating data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSWR")," hook. We'll see a basic example of paginating data with ",(0,r.kt)("inlineCode",{parentName:"p"},"useSWR")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://rickandmortyapi.com/documentation/#introduction"},"Rick and Morty Character API"),"."),(0,r.kt)("p",null,"In the components folder of our example application, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"Characters.js")," and add the following code to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/components/Characters.js"',title:'"src/components/Characters.js"'},'import React from "react";\nimport { useState } from "react";\nimport useSWR from "swr";\nimport styled from "styled-components";\n\nconst Wrapper = styled.div`\n  margin: 50px auto;\n`;\nconst Character = styled.div`\n  width: 250px;\n  height: 200px;\n  border-radius: 6px;\n  outline: none;\n  border: none;\n`;\n\nconst Button = styled.button`\n  width: 120px;\n  height: 40px;\n  border-radius: 6px;\n  background-color: #6c6ce3;\n  margin-inline: 10px;\n  outline: none;\n  border: none;\n  color: white;\n  font-weight: bold;\n`;\n\nconst Container = styled.div`\nwidth: 100%;\nmargin: 0 auto;\ndisplay: grid;\ngap: 10px;\npadding-block: 20px;\ngrid-template-columns: 2fr 2fr 2fr 2fr;\n`;\n\n\nconst Characters = () => {\n  const [pageIndex, setPageIndex] = useState(1);\n\n  const fetcher = (...args) => fetch(...args).then((res) => res.json());\n\n  const { data, error, isLoading } = useSWR(`https://rickandmortyapi.com/api/character/?page=${pageIndex}`,fetcher);\n\n  if (error) return <div>Failed to fetch characters.</div>;\n  if (isLoading) return <h2>Loading...</h2>;\n\n  return (\n    <>\n      <Container>\n        {data.results.map((character) => (\n            <Character key={character.id}>\n                <img width={100} height={100} src={character.image} />\n                <div>{character.name}</div>\n            </Character>\n        ))}\n      </Container>\n        <Wrapper>\n          <Button onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>\n          <Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>\n        </Wrapper>\n    </>\n  );\n};\n\nexport default Characters;\n\n')),(0,r.kt)("p",null,"In the above code, we are fetching characters from the Rick and Morty API. The endpoint returns 20 characters per request. We also used a React state to keep track of the pages so we can simply move forward and backward through the fetched characters to create a pagination effect."),(0,r.kt)("p",null,"Next, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," file in the root folder and edit its content to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.js"',title:'"App.js"'},"import './App.css';\n// import Home from './components/Home'\nimport Characters from './components/Characters'\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        {/* <Home/> */}\n        <Characters/>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,"Basically, what we're doing is commenting out the previous Home component and then import and render the ",(0,r.kt)("inlineCode",{parentName:"p"},"Characters")," component on the homepage instead."),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and you should see the characters rendered as shown in the GIF below, with pagination enabled:"),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-03-use-swr/pagination.gif",alt:"useswr"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"You can read more about pagination in SWR in the ",(0,r.kt)("a",{parentName:"p",href:"https://swr.vercel.app/docs/pagination"},"docs"),"."),(0,r.kt)("h3",{id:"preloading-data-with-swr"},"Preloading Data With SWR"),(0,r.kt)("p",null,"Another notable use case of SWR is data preloading. With SWR, we can prefetch data, for example, fetching blog posts from a CMS or prefetching page routes in Next.js for faster and smooth client-side transitions."),(0,r.kt)("p",null,"We can prefetch data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"preload")," API from SWR. The following example from the docs shows how you can preload a user component on the click of a button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState } from 'react'\nimport useSWR, { preload } from 'swr'\n\nconst fetcher = (url) => fetch(url).then((res) => res.json())\n\n// Preload the resource before rendering the User component below,\n// this prevents potential waterfalls in your application.\n// You can also start preloading when hovering the button or link, too.\npreload('/api/user', fetcher)\n\nfunction User() {\n  const { data } = useSWR('/api/user', fetcher)\n  ...\n}\n\nexport default function App() {\n  const [show, setShow] = useState(false)\n  return (\n    <div>\n      <button onClick={() => setShow(true)}>Show User</button>\n      {show ? <User /> : null}\n    </div>\n  )\n}\n")),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h3",{id:"swrdevtools"},"SWRDevTools"),(0,r.kt)("p",null,"The newest version of SWR comes with developer tools for debugging and writing your code more efficiently and confidently. You can install the SWRDevTools extensions for both Chrome and Firefox from their respective stores."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chrome: ",(0,r.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/swr-devtools/liidbicegefhheghhjbomajjaehnjned"},"https://chrome.google.com/webstore/detail/swr-devtools/liidbicegefhheghhjbomajjaehnjned")),(0,r.kt)("li",{parentName:"ul"},"Firefox: ",(0,r.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/swr-devtools/"},"https://addons.mozilla.org/en-US/firefox/addon/swr-devtools/"))),(0,r.kt)("p",null,"Be aware that SWRDevTools is not an official project of Vercel. You can learn more about the project from their ",(0,r.kt)("a",{parentName:"p",href:"https://swr-devtools.vercel.app/"},"website"),"."),(0,r.kt)("h3",{id:"typescript-support"},"TypeScript Support"),(0,r.kt)("p",null,"SWR also comes with full TypeScript support out of the box. If you're using TypeScript you can be rest assured of type safety in your  application. For example, SWR will infer the argument types of fetcher from key, so you can have the preferred types automatically. "),(0,r.kt)("p",null,"You can also explicitly specify the types for ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fetcher"),"'s arguments like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import useSWR, { Key, Fetcher } from 'swr'\n\nconst uid: Key = '<user_id>'\nconst fetcher: Fetcher<User, string> = (id) => getUserById(id)\n\nconst { data } = useSWR(uid, fetcher)\n// `data` will be `User | undefined`.\n\n")),(0,r.kt)("p",null,"You can read more about using TypeScript with SWR ",(0,r.kt)("a",{parentName:"p",href:"https://swr.vercel.app/docs/typescript"},"here"),"."),(0,r.kt)("p",null,"This section only touched on a few of SWR's many capabilities, so your first encounter with it will not be overwhelming. You can however, check the ",(0,r.kt)("a",{parentName:"p",href:"https://swr.vercel.app/docs/getting-started"},"documentation")," for other features that might interest you."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, we learned about the basics of SWR, its importance in developing modern web applications, and how you can get started with it. We also created an example application in React and explored some capabilities of SWR to see its use cases and benefits over other conventional client-side data fetching methods.  "),(0,r.kt)("p",null,"I hope you found this article useful and that you will begin using SWR to achieve the performance improvements you've always desired in your applications!"))}u.isMDXComponent=!0}}]);