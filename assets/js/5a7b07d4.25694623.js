"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return n?i.createElement(u,o(o({ref:t},c),{},{components:n})):i.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/how-to-import-csv",source:"@site/blog/2022-01-18-csv-import.md",title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"react",permalink:"/blog/tags/react"}],readingTime:4.645,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",slug:"how-to-import-csv",authors:"melih",tags:["javascript","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},nextItem:{title:"How to Multipart File Upload Using FormData with HTML",permalink:"/blog/how-to-multipart-upload"},relatedPosts:[{title:"Temporal API - A new approach to managing Date and Time in JS",permalink:"/blog/temporal-date-api",formattedDate:"August 19, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.8,date:"2022-08-19T00:00:00.000Z"},{title:"Refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.9,date:"2021-11-26T00:00:00.000Z"},{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows",formattedDate:"November 9, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:7.48,date:"2022-11-09T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.65,date:"2022-02-22T00:00:00.000Z"},{title:"Refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.9,date:"2021-11-26T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.025,date:"2021-10-25T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Example",id:"example",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2},{value:"How to CSV Import with Refine?",id:"how-to-csv-import-with-refine",level:2},{value:"Refine CSV Import Usage",id:"refine-csv-import-usage",level:2},{value:"Example",id:"example-1",level:2}],c=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const d={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,a.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,a.kt)("p",{parentName:"admonition"},"You should know that ",(0,a.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,a.kt)("p",null,"In this guide, we will learn how to import any CSV file received from the user with React. Our application will consist of two parts. We will create a form for the user to select a file. Next, we will do some operations with JavaScript to be able to view this CSV file. Let's start with our example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"First, let's create a ",(0,a.kt)("a",{parentName:"p",href:"https://tr.reactjs.org/docs/forms.html"},"Form")," in React so that the user can upload a CSV file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.js"',title:'"App.js"'},'function App() {\n    return (\n        <div style={{ textAlign: "center" }}>\n            <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n            <form>\n                //highlight-start\n                <input type={"file"} accept={".csv"} />\n                //highlight-end\n                <button>IMPORT CSV</button>\n            </form>\n        </div>\n    );\n}\n')),(0,a.kt)("p",null,"We created a simple form and our input items. With the accept feature of the input element, we specify that the format of the file can only be CSV. Now, let's load and read the CSV file selected by the user with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FileReader"},"FileReader"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\n\nfunction App() {\n    const [file, setFile] = useState();\n\n    const fileReader = new FileReader();\n\n    const handleOnChange = (e) => {\n        setFile(e.target.files[0]);\n    };\n\n    const handleOnSubmit = (e) => {\n        e.preventDefault();\n\n        if (file) {\n            fileReader.onload = function (event) {\n                const csvOutput = event.target.result;\n            };\n\n            fileReader.readAsText(file);\n        }\n    };\n\n    return (\n        <div style={{ textAlign: "center" }}>\n            <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n            <form>\n                <input\n                    type={"file"}\n                    id={"csvFileInput"}\n                    accept={".csv"}\n                    onChange={handleOnChange}\n                />\n\n                <button\n                    onClick={(e) => {\n                        handleOnSubmit(e);\n                    }}\n                >\n                    IMPORT CSV\n                </button>\n            </form>\n        </div>\n    );\n}\n')),(0,a.kt)("p",null,"Here, once the user-selected file has been successfully uploaded, we can process and display the file. Now let's load a sample CSV file and see it output on our console."),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/console.gif",alt:"console_csv_output"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"As you can see, we can now read a selected CSV file. We can convert this file, which we read as a plain text type, into an Array of Object with JavaScript and place it inside a Table element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n import React, { useState } from "react";\n\nfunction App() {\n  const [file, setFile] = useState();\n  const [array, setArray] = useState([]);\n\n  const fileReader = new FileReader();\n\n  const handleOnChange = (e) => {\n    setFile(e.target.files[0]);\n  };\n\n  const csvFileToArray = string => {\n    const csvHeader = string.slice(0, string.indexOf("\\n")).split(",");\n    const csvRows = string.slice(string.indexOf("\\n") + 1).split("\\n");\n\n    const array = csvRows.map(i => {\n      const values = i.split(",");\n      const obj = csvHeader.reduce((object, header, index) => {\n        object[header] = values[index];\n        return object;\n      }, {});\n      return obj;\n    });\n\n    setArray(array);\n  };\n\n  const handleOnSubmit = (e) => {\n    e.preventDefault();\n\n    if (file) {\n      fileReader.onload = function (event) {\n        const text = event.target.result;\n        csvFileToArray(text);\n      };\n\n      fileReader.readAsText(file);\n    }\n  };\n\n  const headerKeys = Object.keys(Object.assign({}, ...array));\n\n  return (\n    <div style={{ textAlign: "center" }}>\n      <h1>REACTJS CSV IMPORT EXAMPLE </h1>\n      <form>\n        <input\n          type={"file"}\n          id={"csvFileInput"}\n          accept={".csv"}\n          onChange={handleOnChange}\n        />\n\n        <button\n          onClick={(e) => {\n            handleOnSubmit(e);\n          }}\n        >\n          IMPORT CSV\n        </button>\n      </form>\n\n      <br />\n\n      <table>\n        <thead>\n          <tr key={"header"}>\n            {headerKeys.map((key) => (\n              <th>{key}</th>\n            ))}\n          </tr>\n        </thead>\n\n        <tbody>\n          {array.map((item) => (\n            <tr key={item.id}>\n              {Object.values(item).map((val) => (\n                <td>{val}</td>\n              ))}\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}\n....\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/overview.gif",alt:"overview_csv"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"We formatted the CSV file that came in plain text format, using Javascript ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"},"slice")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"},"split")," methods, and created two separate array. Then we converted Header and Rows arrays to Array of Object format as Key, Value."),(0,a.kt)("hr",null),(0,a.kt)(c,{title:"Not confident with your frontend skills?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/csv-import-example-hw3ne?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"csv-import-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("h2",{id:"how-to-csv-import-with-refine"},"How to CSV Import with Refine?"),(0,a.kt)("p",null,"The CSV import with ",(0,a.kt)("strong",{parentName:"p"},"refine")," is very simple and out-of-the-box feature. How to use it is explained step by step in the guide and example."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/import-export/csv-import/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"refine")," CSV import guide for more information. \u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/import-export-antd/src/pages/posts/list.tsx#L32"},"View Source")),(0,a.kt)("h2",{id:"refine-csv-import-usage"},"Refine CSV Import Usage"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-01-18-csv-import/importing.gif",alt:"importing_csv"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Importing CSV files is simple and fast using the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/"},(0,a.kt)("inlineCode",{parentName:"a"},"useImport"))," hook and ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/components/buttons/import-button/"},(0,a.kt)("inlineCode",{parentName:"a"},"ImportButton"))," provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    useTable,\n    //highlight-start\n    useImport,\n    ImportButton,\n    //highlight-end\n} from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    //highlight-start\n    const importProps = useImport<IPostFile>();\n    //highlight-end\n\n    return (\n        <List\n            pageHeaderProps={{\n                //highlight-start\n                extra: <ImportButton {...importProps} />,\n                //highlight-end\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column dataIndex="status" title="Status" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPostFile {\n    title: string;\n    categoryId: string;\n}\ninterface IPost {\n    id: string;\n    title: string;\n    status: string;\n}\n')),(0,a.kt)("p",null,"You can also divide the data into chunk with the ",(0,a.kt)("inlineCode",{parentName:"p"},"batchSize")," option while performing the insertion process."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/import-export/useImport/#api-reference"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"refine")," CSV Import API References for more information. \u2192")),(0,a.kt)("h2",{id:"example-1"},"Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-import-export-example-4nneu?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-import-export-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0}}]);