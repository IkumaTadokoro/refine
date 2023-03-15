"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=n(67294),o=n(3905);const i={id:"custom-form-validation",title:"Custom Form Validation"},s=void 0,l={unversionedId:"advanced-tutorials/forms/custom-form-validation",id:"advanced-tutorials/forms/custom-form-validation",title:"Custom Form Validation",description:"In refine, we can use the form validation that comes with Ant Design with the rules property of the Form.Item component.",source:"@site/docs/advanced-tutorials/forms/custom-form-validation.md",sourceDirName:"advanced-tutorials/forms",slug:"/advanced-tutorials/forms/custom-form-validation",permalink:"/docs/advanced-tutorials/forms/custom-form-validation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/forms/custom-form-validation.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678907067,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"custom-form-validation",title:"Custom Form Validation"},sidebar:"someSidebar",previous:{title:"Supabase",permalink:"/docs/advanced-tutorials/data-provider/supabase"},next:{title:"Save and Continue",permalink:"/docs/advanced-tutorials/forms/save-and-continue"}},u={},c=[{value:"Example",id:"example",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"refine"),", we can use the form validation that comes with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ant Design")," with the ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Rule"},"rules")," property of the ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/form/#Form.Item"},"Form.Item")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<Form>\n    <Form.Item\n        label="Title"\n        name="title"\n        // highlight-start\n        rules={[\n            {\n                required: true,\n            },\n            {\n                min: 5,\n            },\n        ]}\n        // highlight-end\n    >\n        <Input />\n    </Form.Item>\n    ...\n</Form>\n')),(0,o.kt)("p",null,"In addition to pre-defined rules, we can also prepare ",(0,o.kt)("strong",{parentName:"p"},"custom rules")," with the validator function."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Now let's prepare a rule that checks if the titles of the posts are unique. We have an endpoint like the below. We will do the uniqueness check here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts-unique-check?title=Example"',title:'"https://api.fake-rest.refine.dev/posts-unique-check?title'},'{\n    "isAvailable": true\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\n// highlight-start\nimport { useApiUrl, useCustom, HttpError } from "@refinedev/core";\nimport { useForm, Create } from "@refinedev/antd";\nimport { Form, Input } from "antd";\n//highlight-end\n\nexport const PostCreate = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    // highlight-start\n    const [title, setTitle] = useState("");\n\n    const apiUrl = useApiUrl();\n    const url = `${apiUrl}/posts-unique-check`;\n    const { refetch } = useCustom<\n        PostUniqueCheckResponse,\n        HttpError,\n        PostUniqueCheckRequestQuery\n    >({\n        url,\n        method: "get",\n        config: {\n            query: {\n                title,\n            },\n        },\n        queryOptions: {\n            enabled: false,\n        },\n    });\n    // highlight-end\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    // highlight-start\n                    rules={[\n                        {\n                            required: true,\n                        },\n                        {\n                            validator: async (_, value) => {\n                                if (!value) return;\n                                const { data } = await refetch();\n                                if (data && data.data.isAvailable) {\n                                    return Promise.resolve();\n                                }\n                                return Promise.reject(\n                                    new Error("\'title\' must be unique"),\n                                );\n                            },\n                        },\n                    ]}\n                    // highlight-end\n                >\n                    // highlight-next-line\n                    <Input onChange={(event) => setTitle(event.target.value)} />\n                </Form.Item>\n                ...\n            </Form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    title: string;\n}\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\ninterface PostUniqueCheckRequestQuery {\n    title: string;\n}\n')),(0,o.kt)(a.Fragment,null,(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/examples/form/custom-form-validation.gif",alt:"custom form validation"})),(0,o.kt)("br",null)),(0,o.kt)("admonition",{title:"important",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Value must be kept in the state."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Input onChange={(event) => setTitle(event.target.value)} />\n"))))}p.isMDXComponent=!0}}]);