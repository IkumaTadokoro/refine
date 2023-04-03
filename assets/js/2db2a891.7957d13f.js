"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),l=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={id:"useForgotPassword",title:"useForgotPassword",siderbar_label:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useForgotPassword/index.ts"},s=void 0,i={unversionedId:"api-reference/core/hooks/auth/useForgotPassword",id:"api-reference/core/hooks/auth/useForgotPassword",title:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/api-reference/core/hooks/auth/useForgotPassword.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useForgotPassword",permalink:"/docs/api-reference/core/hooks/auth/useForgotPassword",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useForgotPassword.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680535066,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"useForgotPassword",title:"useForgotPassword",siderbar_label:"useForgotPassword",description:"useForgotPassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useForgotPassword/index.ts"},sidebar:"someSidebar",previous:{title:"useRegister",permalink:"/docs/api-reference/core/hooks/auth/useRegister"},next:{title:"useUpdatePassword",permalink:"/docs/api-reference/core/hooks/auth/useUpdatePassword"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after forgotPassword",id:"redirection-after-forgotpassword",level:2},{value:"Error handling",id:"error-handling",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError."),(0,n.kt)("p",null,"Data that is resolved from ",(0,n.kt)("inlineCode",{parentName:"p"},"forgotPassword")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,n.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When ",(0,n.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values ",(0,n.kt)("inlineCode",{parentName:"li"},'{ name: "Forgot Password Error", message: "Invalid credentials" }'),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Normally refine provides a default forgot password page. If you prefer to use this default forgot password page, there is no need to handle forgot password flow manually.",(0,n.kt)("br",{parentName:"p"}),"\n","If we want to build a custom forgotPassword page instead of the default one that comes with ",(0,n.kt)("strong",{parentName:"p"},"refine"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," can be used like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customForgotPasswordPage"',title:'"pages/customForgotPasswordPage"'},'import { useForgotPassword } from "@refinedev/core";\n\ntype forgotPasswordVariables = {\n    email: string;\n};\n\nexport const forgotPasswordPage = () => {\n    const { mutate: forgotPassword } =\n        useForgotPassword<forgotPasswordVariables>();\n\n    const onSubmit = (values: forgotPasswordVariables) => {\n        forgotPassword(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,n.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," can accept any kind of object for values since ",(0,n.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,n.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,n.kt)("inlineCode",{parentName:"p"},"useForgotPassword"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useForgotPassword } from "@refinedev/core";\n\nconst { mutate: forgotPassword } = useForgotPassword<{ email: string }>();\n'))),(0,n.kt)("h2",{id:"redirection-after-forgotpassword"},"Redirection after forgotPassword"),(0,n.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,n.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," hook if you want to redirect yourself to a certain URL."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useForgotPassword } from "@refinedev/core";\n\nconst { mutate: forgotPassword } = useForgotPassword();\n\nforgotPassword({ redirectPath: "/custom-url" });\n')),(0,n.kt)("p",null,"Then, you can handle this URL in your ",(0,n.kt)("inlineCode",{parentName:"p"},"forgotPassword")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    forgotPassword: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,n.kt)("h2",{id:"error-handling"},"Error handling"),(0,n.kt)("p",null,"Since the methods of ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," value in the response."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useForgotPassword } from "@refinedev/core";\n\nconst { mutate: forgotPassword } = useForgotPassword();\n\nforgotPassword(\n    {\n        email: "refine@example.com",\n    },\n    {\n        onSuccess: (data) => {\n            if (!data.success) {\n                // handle error\n            }\n\n            // handle success\n        },\n    },\n);\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useForgotPassword")," hook will not be called if ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," because the callback is triggered only when the promise is rejected. However, the methods of ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise.")))}p.isMDXComponent=!0}}]);