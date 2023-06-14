"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29374],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Comparing the best headless CMS solutions",description:"We compared best headless CMS solutions -  Strapi, Hasura, and Hygraph. We'll highlight their pros and cons.",slug:"best-headless-cms",authors:"joseph_mawa",tags:["comparison","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-08-compare-cms%2Fsocial.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/best-headless-cms",source:"@site/blog/2023-02-08-compare-cms.md",title:"Comparing the best headless CMS solutions",description:"We compared best headless CMS solutions -  Strapi, Hasura, and Hygraph. We'll highlight their pros and cons.",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"comparison",permalink:"/blog/tags/comparison"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:9.875,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Comparing the best headless CMS solutions",description:"We compared best headless CMS solutions -  Strapi, Hasura, and Hygraph. We'll highlight their pros and cons.",slug:"best-headless-cms",authors:"joseph_mawa",tags:["comparison","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-08-compare-cms%2Fsocial.png",hide_table_of_contents:!1},prevItem:{title:"Pilot & refine architecture",permalink:"/blog/refine-pixels-1"},nextItem:{title:"The Important Differences between URI VS URL",permalink:"/blog/uri-vs-url"},relatedPosts:[{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.935,date:"2023-04-13T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.855,date:"2022-07-21T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",description:"We will make a web application that allows you to quickly create subscribers and send emails to your subscribers in a simple way. We\u2019ll use refine to develop the frontend easily and strapi for backend solutions.",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.125,date:"2021-10-25T00:00:00.000Z"}],authorPosts:[{title:"5 Best Free Platforms for Hosting Hobby Web Projects",description:"A list of the best free platforms for hosting hobby web projects. You can host your static websites, React apps, and more for free.",permalink:"/blog/5-top-free-react-hosting-platforms",formattedDate:"November 23, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.155,date:"2022-11-23T00:00:00.000Z"},{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"June 1, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:13.02,date:"2023-06-01T00:00:00.000Z"},{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",description:"We'll compare the best online IDEs and code editors for web development. We'll also look at the pros and cons of each.",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"November 1, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:16.055,date:"2022-11-01T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"The best headless CMS",id:"the-best-headless-cms",level:2},{value:"Strapi",id:"strapi",level:3},{value:"How to start using Strapi",id:"how-to-start-using-strapi",level:4},{value:"refine built-in Strapi data provider",id:"refine-built-in-strapi-data-provider",level:4},{value:"Pros of using Strapi",id:"pros-of-using-strapi",level:4},{value:"Cons of using Strapi",id:"cons-of-using-strapi",level:4},{value:"Hasura",id:"hasura",level:3},{value:"How to start using Hasura",id:"how-to-start-using-hasura",level:4},{value:"refine built-in Hasura data provider",id:"refine-built-in-hasura-data-provider",level:4},{value:"Pros of Hasura",id:"pros-of-hasura",level:4},{value:"Cons of Hasura",id:"cons-of-hasura",level:4},{value:"Hygraph",id:"hygraph",level:3},{value:"How to start using Hygraph",id:"how-to-start-using-hygraph",level:4},{value:"Pros of Hygraph",id:"pros-of-hygraph",level:4},{value:"Cons of Hygraph",id:"cons-of-hygraph",level:4},{value:"Comparing the best CMS",id:"comparing-the-best-cms",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const d={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"A content management system, abbreviated as CMS,  is software for creating and managing content. With traditional CMS, you can create textual content and upload images and multimedia content like audio and video files. The CMS then generates and serves the presentation layer with the created content."),(0,n.kt)("p",null,"On the other hand, unlike traditional CMS, headless content management systems are content repositories without the presentation layer. A headless CMS decouples your content from the presentation. You can build the presentation layer in any way and using any framework of your choice with a Headless CMS. Therefore, making it easy to extend your customers' digital experience from the web to mobile and IoT devices."),(0,n.kt)("p",null,"You need to pick the appropriate headless CMS for a better developer experience and to provide a satisfactory digital experience to your customers. There are several headless CMS out there. The most popular ones include Strapi, Contentful, Hygraph, Sanity, and Headless WordPress."),(0,n.kt)("p",null,"Each headless CMS has strengths and weaknesses. Some of them are tailor-made for a specific purpose. And different projects have different requirements. Therefore, it may be difficult to zero down on a headless CMS which meets your project requirements. This article will compare Strapi, Hasura, and Hygraph. We will go above and beyond to highlight their pros and cons."),(0,n.kt)("h2",{id:"the-best-headless-cms"},"The best headless CMS"),(0,n.kt)("h3",{id:"strapi"},"Strapi"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," is a popular open-source headless CMS built based on Node.js. It has an intuitive, customizable UI for creating content. While writing this article, Strapi's cloud hosting platform is still in beta. Therefore, you need to self-host your Strapi project at the moment. Strapi has several out-of-the-box integrations for some of the most popular tools and frameworks."),(0,n.kt)("p",null,"With Strapi, you can access the content API using REST or GraphQL API. Internally, Strapi uses the Koa web framework. If you want to customize the Strapi back end, you need a working knowledge of Koa."),(0,n.kt)("h4",{id:"how-to-start-using-strapi"},"How to start using Strapi"),(0,n.kt)("p",null,"To get the feel of Strapi, you can create a Strapi project from scratch or use one of the available starter templates. If you are an absolute beginner to Strapi, I recommend you start with the available starter templates."),(0,n.kt)("p",null,"The command below will create the Next blog starter template. Respond to the prompts during the installation process. You can choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Quickstart")," option as your installation type."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# npm\nnpx create-strapi-starter project-name next-blog\n\n# yarn\nyarn create strapi-starter project-name next-blog\n")),(0,n.kt)("p",null,"Once the installation is complete, Strapi will launch the admin panel. You will have to create your admin account by filling out the form."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-08-compare-cms%2Fstrapi-login-page.png",alt:"best headless cms"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"After creating your admin account, the Strapi dashboard looks like the image below. The Strapi documentation has detailed getting-started guides you can use to explore the main features of Strapi."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-08-compare-cms%2Fstrapi-dashboard.png",alt:"best headless cms"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"Instead of using a starter template like in the example above, you can also create a Strapi project from the ground up using one of the commands below."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# npm\nnpx create-strapi-app@latest project-name --quickstart\n\n# yarn\nyarn create strapi-app project-name --quickstart\n")),(0,n.kt)("h4",{id:"refine-built-in-strapi-data-provider"},"refine built-in Strapi data provider"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/#overview"},"data provider")," is an interface a ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/"},"refine")," application uses to communicate with an API. refine has data providers for most of the popular CMS and platforms.  You can use refine's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/strapi-v4"},"Strapi data provider")," to interact with your Strapi instance from a refine application."),(0,n.kt)("p",null,"You can install the Strapi data provider in a refine application like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @refinedev/strapi-v4\n")),(0,n.kt)("p",null,"The refine documentation has comprehensive guides on ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/"},"data providers"),"."),(0,n.kt)("h4",{id:"pros-of-using-strapi"},"Pros of using Strapi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Strapi is open-source"),(0,n.kt)("li",{parentName:"ul"},"It has an active community support"),(0,n.kt)("li",{parentName:"ul"},"It is released under the terms of MIT and Strapi's Enterprise Edition Supplemental License"),(0,n.kt)("li",{parentName:"ul"},"Strapi has an excellent documentation"),(0,n.kt)("li",{parentName:"ul"},"You can quickly get up and running with Strapi"),(0,n.kt)("li",{parentName:"ul"},"The admin panel has an intuitive UI"),(0,n.kt)("li",{parentName:"ul"},"You can access your content via REST or GraphQL API"),(0,n.kt)("li",{parentName:"ul"},"Strapi is flexible and customizable"),(0,n.kt)("li",{parentName:"ul"},"Supports several integrations out of the box"),(0,n.kt)("li",{parentName:"ul"},"Since you can use GraphQL API to access your content, Strapi comes with all the benefits of GraphQL.")),(0,n.kt)("h4",{id:"cons-of-using-strapi"},"Cons of using Strapi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At the time of writing this article, Strapi's cloud service is still in beta. You have to self-host your Strapi projects."),(0,n.kt)("li",{parentName:"ul"},"Any Strapi project must strictly use one of the supported databases. The latest version, Strapi version 4, only supports MySQL, MariaDB, PostgreSQL, and SQLite.  ")),(0,n.kt)("h3",{id:"hasura"},"Hasura"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/"},"Hasura")," is an open-source GraphQL engine. You can use Hasura to connect to a database and third-party REST and GraphQL API endpoints. It then uses a GraphQL API to expose your data. Though Hasura primarily exposes your data via a GraphQL API, you can create REST API endpoints from GraphQL queries and mutations."),(0,n.kt)("p",null,"You can use the most popular cloud SQL databases like AWS RDS Postgres and  Azure Postgres with Hasura cloud. However, be aware that Hasura mainly supports PostgreSQL databases at the time of writing this article."),(0,n.kt)("p",null,"Compared to Strapi, Hygraph, and other headless CMS, Hasura is more of a GraphQL engine than a CMS. It provides an instant, fast, and secure GraphQL API for your database with built-in data caching and authorizations."),(0,n.kt)("p",null,"The Hasura console doesn't provide functionality for managing content like the other headless CMS."),(0,n.kt)("h4",{id:"how-to-start-using-hasura"},"How to start using Hasura"),(0,n.kt)("p",null,"Hasura cloud is the fastest way to start using Hasura.  You can create an account using your email id or log in using GitHub or Google.  "),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-08-compare-cms%2Fhasura-cloud-login-page.png",alt:"best headless cms"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"After logging into your Hasura cloud account, you can create a Neon PostgreSQL database or connect an existing database. There are detailed how-to guides in the Hasura documentation on creating a new database or adding a database from the supported cloud database providers. I won't repeat them here."),(0,n.kt)("p",null,"After creating a database and populating it with entries, you can query, mutate, and subscribe from the API explorer in the Hasura console. You can also create REST API endpoints to access the database."),(0,n.kt)("h4",{id:"refine-built-in-hasura-data-provider"},"refine built-in Hasura data provider"),(0,n.kt)("p",null,"As highlighted above, refine has data providers for most CMS and platforms. You can use the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/hasura"},"Hasura data provider"),"\xa0to communicate with your Hasura GraphQL API or REST API endpoints from a refine application."),(0,n.kt)("p",null,"You can install the Hasura data provider in your refine application like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @refinedev/hasura\n")),(0,n.kt)("p",null,"Check the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/data-provider/"},"refine documentation")," on using data providers in a refine application."),(0,n.kt)("h4",{id:"pros-of-hasura"},"Pros of Hasura"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It has an intuitive UI and console"),(0,n.kt)("li",{parentName:"ul"},"Hasura is open-source"),(0,n.kt)("li",{parentName:"ul"},"The GraphQL engine is Apache version 2.0 licensed. Other resources, such as the documentation and tutorials, are MIT licensed."),(0,n.kt)("li",{parentName:"ul"},"Hasura offers a generous free tier without requiring a credit card or payment information"),(0,n.kt)("li",{parentName:"ul"},"Hasura supports most of the popular SQL cloud databases"),(0,n.kt)("li",{parentName:"ul"},"It has comprehensive documentation"),(0,n.kt)("li",{parentName:"ul"},"Hasura has an active and supportive community"),(0,n.kt)("li",{parentName:"ul"},"It is easy to pick up"),(0,n.kt)("li",{parentName:"ul"},"There are both cloud and self-hosted Hasura instances"),(0,n.kt)("li",{parentName:"ul"},"It is performant")),(0,n.kt)("h4",{id:"cons-of-hasura"},"Cons of Hasura"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hasura doesn't support NoSQL databases while writing this article. Though, there are plans to include them in the future."),(0,n.kt)("li",{parentName:"ul"},"Hasura is tailored towards exposing databases via GraphQL API. It doesn't have content management capabilities like the other headless CMS.")),(0,n.kt)("hr",null),(0,n.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hygraph"},"Hygraph"),(0,n.kt)("p",null,"Hygraph is another headless CMS with an intuitive UI for creating, editing and modifying content. Unlike Strapi, Hygraph is not open-source. You can interact with the Hygraph content via GraphQL API. It also has a feature for composing content from third-party REST and GraphQL APIs."),(0,n.kt)("p",null,"Hygraph provides a generous community plan for free without even asking for a credit card or payment information. The free plan also comes with most of the features of the paid plans.  "),(0,n.kt)("h4",{id:"how-to-start-using-hygraph"},"How to start using Hygraph"),(0,n.kt)("p",null,"To start using ",(0,n.kt)("a",{parentName:"p",href:"https://hygraph.com/"},"Hygraph"),", you need to have an account. If you haven't, create an account using your email id or log in with your Google, Facebook, or GitHub account. You can create a new project or use one of the available starter projects after setting up an account to explore Hygraph."),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-08-compare-cms%2Fhygraph-login-page.png",alt:"best headless cms"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"As highlighted above, Hygraph has an intuitive UI for creating and managing content. Starting shouldn't be difficult if you are already familiar with other CMS. If you are a beginner to CMS, there are comprehensive getting-started guides in the Hygraph documentation to set you off. However, it requires you to have a basic understanding of GraphQL."),(0,n.kt)("p",null,"In this article, our primary goal is to compare Hygraph with other similar headless CMS. Therefore, we won't explore the details of creating a project or managing your content with Hygraph."),(0,n.kt)("h4",{id:"pros-of-hygraph"},"Pros of Hygraph"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hygraph has an intuitive UI for creating, editing, and managing content"),(0,n.kt)("li",{parentName:"ul"},"It has an excellent documentation"),(0,n.kt)("li",{parentName:"ul"},"Good community support"),(0,n.kt)("li",{parentName:"ul"},"It offers a generous free community plan which includes most of the features in the paid plans"),(0,n.kt)("li",{parentName:"ul"},"You can compose content from third-party REST and GraphQL APIs"),(0,n.kt)("li",{parentName:"ul"},"It serves content using low-latency Edge CDN"),(0,n.kt)("li",{parentName:"ul"},"It has a feature for content permission management"),(0,n.kt)("li",{parentName:"ul"},"Because it serves content using GraphQL API, it has all the benefits of GraphQL, such as avoiding multiple round-trips when querying content")),(0,n.kt)("h4",{id:"cons-of-hygraph"},"Cons of Hygraph"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can only access content in the CMS using GraphQL API"),(0,n.kt)("li",{parentName:"ul"},"It is not open-source."),(0,n.kt)("li",{parentName:"ul"},"It is not as customizable as Hasura")),(0,n.kt)("h2",{id:"comparing-the-best-cms"},"Comparing the best CMS"),(0,n.kt)("p",null,"In this section, we will compare Hasura, Strapi, and Hygraph. The table below summarizes their similarities and differences."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Strapi"),(0,n.kt)("th",{parentName:"tr",align:null},"Hasura"),(0,n.kt)("th",{parentName:"tr",align:null},"Hygraph"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"MIT and Enterprise Edition Supplemental License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache version 2.0 and MIT"),(0,n.kt)("td",{parentName:"tr",align:null},"Proprietary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GitHub stars"),(0,n.kt)("td",{parentName:"tr",align:null},"51.1k"),(0,n.kt)("td",{parentName:"tr",align:null},"29k"),(0,n.kt)("td",{parentName:"tr",align:null},"Not available")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Open source"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"No")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Active maintenance"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Good"),(0,n.kt)("td",{parentName:"tr",align:null},"Good"),(0,n.kt)("td",{parentName:"tr",align:null},"Good")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pricing"),(0,n.kt)("td",{parentName:"tr",align:null},"Free"),(0,n.kt)("td",{parentName:"tr",align:null},"Generous free plan"),(0,n.kt)("td",{parentName:"tr",align:null},"Generous free plan")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Community support"),(0,n.kt)("td",{parentName:"tr",align:null},"Good"),(0,n.kt)("td",{parentName:"tr",align:null},"Good"),(0,n.kt)("td",{parentName:"tr",align:null},"Good")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Open GitHub issues"),(0,n.kt)("td",{parentName:"tr",align:null},"296"),(0,n.kt)("td",{parentName:"tr",align:null},"1886"),(0,n.kt)("td",{parentName:"tr",align:null},"Not available")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Closed GitHub issues"),(0,n.kt)("td",{parentName:"tr",align:null},"6938"),(0,n.kt)("td",{parentName:"tr",align:null},"3473"),(0,n.kt)("td",{parentName:"tr",align:null},"Not available")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ease of use"),(0,n.kt)("td",{parentName:"tr",align:null},"Easy"),(0,n.kt)("td",{parentName:"tr",align:null},"Easy"),(0,n.kt)("td",{parentName:"tr",align:null},"Easy")))),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://discord.gg/refine"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Though our focus in this article was on Strapi, Hasura, and Hygraph, there are many excellent headless content management systems out there. As mentioned above, each headless CMS has strengths and weaknesses.  Some are tailor-made for a specific purpose."),(0,n.kt)("p",null,"If you are looking for an open-source, customizable headless CMS with an intuitive UI, Strapi may be the best option. It can serve your content using REST or GraphQL API. However, on the flip side, you may have to self-host your Strapi project because Strapi's cloud solution is still in beta.  Strapi also supports a few databases at the moment."),(0,n.kt)("p",null,"Hygraph is similar to Strapi, but it is not open-source. It has an intuitive UI for creating content and a cloud solution to which you can automatically deploy your project. You can get up and running with Hygraph faster than Strapi, but it is not as flexible and customizable."),(0,n.kt)("p",null,"Hasura is more of a GraphQL engine than a headless CMS. It is an excellent choice if you want a fast and secure GraphQL API  to source data from a database or third-party REST or GraphQL API. However, Hasura doesn't have the content creation capabilities of the other headless CMS."),(0,n.kt)("p",null,"I hope this article has highlighted the main features of Strapi, Hasura, and Hypgraph so that you can pick the most suitable for your project."))}h.isMDXComponent=!0}}]);