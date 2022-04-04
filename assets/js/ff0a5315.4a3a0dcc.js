"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73716],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"useImport",title:"useImport"},p=void 0,s={unversionedId:"ui-frameworks/antd/hooks/import/useImport",id:"ui-frameworks/antd/hooks/import/useImport",isDocsHomePage:!1,title:"useImport",description:"useImport hook allows you to handle your CSV import logic easily. It gives you the properties to pass to Ant Design's ` and  components and handles the upload logic. It uses papaparse under the hood to parse CSV` files.",source:"@site/docs/ui-frameworks/antd/hooks/import/useImport.md",sourceDirName:"ui-frameworks/antd/hooks/import",slug:"/ui-frameworks/antd/hooks/import/useImport",permalink:"/docs/ui-frameworks/antd/hooks/import/useImport",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/hooks/import/useImport.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1644408496,formattedLastUpdatedAt:"2/9/2022",frontMatter:{id:"useImport",title:"useImport"},sidebar:"someSidebar",previous:{title:"useStepsForm",permalink:"/docs/ui-frameworks/antd/hooks/form/useStepsForm"},next:{title:"useSimpleList",permalink:"/docs/ui-frameworks/antd/hooks/list/useSimpleList"}},d=[{value:"Usage",id:"usage",children:[{value:"With <code>&lt;ImportButton&gt;</code> (Recommended)",id:"with-importbutton-recommended",children:[],level:3},{value:"With Ant Design&#39;s <code>&lt;Upload&gt;</code> and <code>&lt;Button&gt;</code> Components",id:"with-ant-designs-upload-and-button-components",children:[],level:3},{value:"Handling Relational Data",id:"handling-relational-data",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return Values",id:"return-values",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useImport")," hook allows you to handle your ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," import logic easily. It gives you the properties to pass to Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Upload>"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," components and handles the upload logic. It uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.papaparse.com/docs"},(0,o.kt)("inlineCode",{parentName:"a"},"papaparse"))," under the hood to parse ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," files. "),(0,o.kt)("p",null,"It's return type is compatible with ",(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/components/buttons/import-button"},(0,o.kt)("inlineCode",{parentName:"a"},"<ImportButton>")),". It can also be further customized by using it with Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Upload>")),"\xa0and ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," props."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useImport } from "@pankod/refine-antd";\n\nconst { uploadProps, buttonProps, mutationResult } = useImport(options);\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Assume we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," file of this contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","categoryId"\n"dummy title 1","3"\n"dummy title 2","44"\n')),(0,o.kt)("p",null,"This file should be parsed as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'[\n    {\n        title: "dummy title 1",\n        categoryId: "3",\n    },\n    {\n        title: "dummy title 2",\n        categoryId: "44",\n    }\n]\n')),(0,o.kt)("h3",{id:"with-importbutton-recommended"},"With ",(0,o.kt)("inlineCode",{parentName:"h3"},"<ImportButton>")," (Recommended)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    useTable,\n// highlight-start\n    useImport,\n    ImportButton,\n// highlight-end\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const importProps = useImport<IPostFile>();\n\n    return (\n        <List\n            pageHeaderProps={{\n// highlight-next-line\n                extra: <ImportButton {...importProps} />,\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n                <Table.Column dataIndex="status" title="Status" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPostFile {\n    title: string;\n    categoryId: string;\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: string;\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/components/buttons/import-button"},(0,o.kt)("inlineCode",{parentName:"a"},"<ImportButton"))," accepts two properties: ",(0,o.kt)("inlineCode",{parentName:"p"},"buttonProps")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadProps"),". It just wraps ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component with the ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Upload>\b"))," component to reduce some boilerplate code."),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"with-ant-designs-upload-and-button-components"},"With Ant Design's ",(0,o.kt)("inlineCode",{parentName:"h3"},"<Upload>")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"<Button>")," Components"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    useTable,\n// highlight-start\n    useImport,\n    Button,\n    Icons,\n    Upload,\n// highlight-end\n} from "@pankod/refine-antd";\n\nconst { ImportOutlined } = Icons;\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const { buttonProps, uploadProps } = useImport<IPostFile>();\n\n    return (\n        <List\n// highlight-start\n            pageHeaderProps={{\n                extra: (\n                    <Upload {...uploadProps}>\n                        <Button icon={<ImportOutlined />} {...buttonProps}>\n                            Import\n                        </Button>\n                    </Upload>\n                ),\n            }}\n// highlight-end\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n')),(0,o.kt)("p",null,"This usage is open to further customizations of Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Upload>"))," components."),(0,o.kt)("br",null),(0,o.kt)("p",null,"In both examples, when user clicks the import buttons and selects a ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," file, ",(0,o.kt)("inlineCode",{parentName:"p"},"useImport")," parses the content with ",(0,o.kt)("a",{parentName:"p",href:"https://www.papaparse.com/docs"},"papaparse"),", creates the resources one by one or as batches (depending on the configuration). Which endpoint to create the given resource is inferred from the current route."),(0,o.kt)("p",null,"Resources are added one by one (",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useCreate"},(0,o.kt)("inlineCode",{parentName:"a"},"useCreate")),") or as batches (",(0,o.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/useCreateMany"},(0,o.kt)("inlineCode",{parentName:"a"},"useCreateMany")),") if explicitly configured with ",(0,o.kt)("a",{parentName:"p",href:"#useimport-options"},(0,o.kt)("inlineCode",{parentName:"a"},"batchSize"))," option. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"batchSize")," is 1."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"batchSize")," is more than 1, ",(0,o.kt)("inlineCode",{parentName:"p"},"createMany")," method should be implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"DataProvider"),".",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/core/providers/data-provider"},"Refer to DataProvider documentation for further information about importing the default css. ","\u2192")))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,o.kt)("p",null,"In some cases, you might want to change/process the data of ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," file after parsing. Example cases of this requirement: your data contains relational data and references to data in other places, your backend API requires your data to be sent in a specific format. You can further customize ",(0,o.kt)("inlineCode",{parentName:"p"},"useImport")," to achieve this."),(0,o.kt)("p",null,"Assume this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," file we want to create resources from:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," are relational fields, we shouldn't store them as objects. Instead, we should keep only their ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," fields in our exported files. And ",(0,o.kt)("inlineCode",{parentName:"p"},"CSV")," format doesn't support JSON data, we stored ",(0,o.kt)("inlineCode",{parentName:"p"},"category.id")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user.id")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),"."),(0,o.kt)("p",null,"When creating these resources back, we should map it back to our backend API's required format. ",(0,o.kt)("inlineCode",{parentName:"p"},"mapData")," option allows us to do this. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const importProps = useImport<IPostFile>({\n    mapData: (item) => {\n        return {\n            title: item.title,\n            content: item.content,\n            status: item.status,\n            category: {\n                id: item.categoryId,\n            },\n            user: {\n                id: item.userId,\n            },\n        };\n    },\n});\n\ninterface IPostFile {\n    title: string;\n    status: string;\n    content: string;\n    categoryId: string;\n    userId: string;\n}\n")),(0,o.kt)("p",null,"Now, parsed data is mapped to conform our APIs requirements."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,o.kt)("td",{parentName:"tr",align:null},"Default resource name this button imports to. Inferred from route by default."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mapData"),(0,o.kt)("td",{parentName:"tr",align:null},"A mapping function that runs for every record. Mapped data will be included in the request payload."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(value: any, index?: number, array?: any[], data?: any[][]): any;")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"papaparseOptions"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom Papa Parse options."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.papaparse.com/docs"},(0,o.kt)("inlineCode",{parentName:"a"},"ParseConfig"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"batchSize"),(0,o.kt)("td",{parentName:"tr",align:null},"Requests batch size. If it is 1, all records are sent one by one. By default, it is ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},(0,o.kt)("inlineCode",{parentName:"a"},"Number.MAX_SAFE_INTEGER"))," to send all records in one batch. If it is more than 1, ",(0,o.kt)("inlineCode",{parentName:"td"},"createMany")," should be implemented on DataProvider."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onFinish"),(0,o.kt)("td",{parentName:"tr",align:null},"Called with errors and successful responses when all requests are sent."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(results: { succeeded: ImportSuccessResult<TVariables, TData>[]; errored: ImportErrorResult<TVariables>[]; }) => void")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,o.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,o.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,o.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,o.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,o.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,o.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,o.kt)("td",{parentName:"tr",align:null},'"There was an error while creating ',(0,o.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,o.kt)("inlineCode",{parentName:"td"},"statusCode"),')" or "Error when updating ',(0,o.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,o.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metaData"),(0,o.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,o.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,o.kt)("td",{parentName:"tr",align:null},"{}")))),(0,o.kt)("h3",{id:"return-values"},"Return Values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"uploadProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Props to pass to Ant Design's ",(0,o.kt)("inlineCode",{parentName:"td"},"<Upload>")," component"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/upload/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Upload>")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buttonProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Props to pass to Ant Design's ",(0,o.kt)("inlineCode",{parentName:"td"},"<Button>")," component"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,o.kt)("td",{parentName:"tr",align:null},"Result of the mutation/mutations of creating imported resources"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,o.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"},"TError,"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"},"  { resource: string; values: TVariables; },"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"}," unknown>")),")  ","|"," ",(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,o.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"},"{ data: TData[]},"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"},"TError,"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"},"  { resource: string; values: TVariables[]; },"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"a"}," unknown>")),")")))),(0,o.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Desription"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TItem"),(0,o.kt)("td",{parentName:"tr",align:null},"Interface of parsed csv data"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TData"),(0,o.kt)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,o.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TError"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,o.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,o.kt)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"any"))))))}u.isMDXComponent=!0}}]);