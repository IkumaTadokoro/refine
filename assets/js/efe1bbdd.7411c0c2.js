"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"text",title:"Text",swizzle:!0},i=void 0,s={unversionedId:"api-reference/chakra-ui/components/fields/text",id:"api-reference/chakra-ui/components/fields/text",title:"Text",description:"This field lets you show basic text. It uses Mantine `` component.",source:"@site/docs/api-reference/chakra-ui/components/fields/text.md",sourceDirName:"api-reference/chakra-ui/components/fields",slug:"/api-reference/chakra-ui/components/fields/text",permalink:"/docs/api-reference/chakra-ui/components/fields/text",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/chakra-ui/components/fields/text.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678986631,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"text",title:"Text",swizzle:!0},sidebar:"someSidebar",previous:{title:"Tag",permalink:"/docs/api-reference/chakra-ui/components/fields/tag"},next:{title:"Url",permalink:"/docs/api-reference/chakra-ui/components/fields/url"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],l=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const u={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    legacyRouterProvider: routerProvider,\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    Layout: RefineChakra.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n            {children}\n        </ChakraUI.ChakraProvider>\n    );\n};\n')),(0,a.kt)("p",null,"This field lets you show basic text. It uses Mantine ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/text/usage"},(0,a.kt)("inlineCode",{parentName:"a"},"<Text>"))," component."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how to use it in a basic show page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@refinedev/core";\nimport { ShowButton } from "@refinedev/chakra-ui";\n\n// visible-block-start\nimport { useShow } from "@refinedev/core";\nimport {\n    Show,\n    // highlight-next-line\n    TextField,\n} from "@refinedev/chakra-ui";\nimport { Heading } from "@chakra-ui/react";\n\nconst PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show isLoading={isLoading}>\n            <Heading as="h5" size="sm">\n                Id\n            </Heading>\n            // highlight-next-line\n            <TextField value={record?.id} />\n            <Heading as="h5" size="sm">\n                Title\n            </Heading>\n            // highlight-next-line\n            <TextField value={record?.title} />\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            notificationProvider={RefineChakra.notificationProvider()}\n            resources={[\n                {\n                    name: "posts",\n                    show: PostShow,\n                    list: () => (\n                        <RefineChakra.VStack alignItems="flex-start">\n                            <RefineChakra.Text>\n                                This page is empty.\n                            </RefineChakra.Text>\n                            <ShowButton colorScheme="black" recordItemId="123">\n                                Show Item 123\n                            </ShowButton>\n                        </RefineChakra.VStack>\n                    ),\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(l,{module:"@refinedev/chakra-ui/TextField",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Chakra UI ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/text/usage"},"Text"),".")))}f.isMDXComponent=!0}}]);