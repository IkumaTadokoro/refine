"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"useRegister",title:"useRegister",siderbar_label:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useRegister/index.ts"},o=void 0,s={unversionedId:"api-reference/core/hooks/authentication/useRegister",id:"api-reference/core/hooks/authentication/useRegister",title:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/api-reference/core/hooks/authentication/useRegister.md",sourceDirName:"api-reference/core/hooks/authentication",slug:"/api-reference/core/hooks/authentication/useRegister",permalink:"/docs/api-reference/core/hooks/authentication/useRegister",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/authentication/useRegister.md",tags:[],version:"current",lastUpdatedBy:"Salih \xd6zdemir",lastUpdatedAt:1686748472,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"useRegister",title:"useRegister",siderbar_label:"useRegister",description:"useRegister data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useRegister/index.ts"},sidebar:"someSidebar",previous:{title:"usePermissions",permalink:"/docs/api-reference/core/hooks/authentication/usePermissions"},next:{title:"useForgotPassword",permalink:"/docs/api-reference/core/hooks/authentication/useForgotPassword"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Logged In after successful registration",id:"logged-in-after-successful-registration",level:2},{value:"Redirection after register",id:"redirection-after-register",level:2},{value:"Error handling",id:"error-handling",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRegister")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError."),(0,a.kt)("p",null,"Data that is resolved from ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,a.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When an ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values: ",(0,a.kt)("inlineCode",{parentName:"li"},'{ name: "Register Error", message: "Error while registering" }'),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," provides a default registration page, page which handles the registration flow manually.\nIf you want to use a custom registration page however, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useRegister")," hook like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister } from "@refinedev/core";\n\ntype RegisterVariables = {\n    email: string;\n    password: string;\n};\n\nexport const RegisterPage = () => {\n    const { mutate: register } = useRegister<RegisterVariables>();\n\n    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n        e.preventDefault();\n\n        const values = {\n            email: e.currentTarget.email.value,\n            password: e.currentTarget.password.value,\n        };\n\n        register(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useRegister")," hook can accept any kind of object for values since the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method from ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"useRegister"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: register } = useRegister<{ email: string; password: string }>();\n"))),(0,a.kt)("h2",{id:"logged-in-after-successful-registration"},"Logged In after successful registration"),(0,a.kt)("p",null,"If you want to log in to the user after successful registration, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogin")," hook after the ",(0,a.kt)("inlineCode",{parentName:"p"},"useRegister")," hook's ",(0,a.kt)("inlineCode",{parentName:"p"},"onSuccess")," callback:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customRegisterPage"',title:'"pages/customRegisterPage"'},'import { useRegister, useLogin } from "@refinedev/core";\n\ntype FormVariables = {\n    email: string;\n    password: string;\n};\n\nexport const RegisterPage = () => {\n    const { mutate: register } = useRegister<FormVariables>();\n    const { mutate: login } = useLogin<FormVariables>();\n\n    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n        e.preventDefault();\n\n        const values = {\n            email: e.currentTarget.email.value,\n            password: e.currentTarget.password.value,\n        };\n\n        register(values, {\n            //highlight-start\n            onSuccess: () => {\n                login(values);\n            },\n            //highlight-end\n        });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,a.kt)("h2",{id:"redirection-after-register"},"Redirection after register"),(0,a.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useRegister")," hook if you want to redirect yourself to a certain URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@refinedev/core";\n\nconst { mutate: register } = useRegister();\n\nregister({ redirectPath: "/custom-url" });\n')),(0,a.kt)("p",null,"Then, you can handle this URL in your ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthBindings = {\n    // ---\n    register: ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n")),(0,a.kt)("h2",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"Since the methods of ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," value in the response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useRegister } from "@refinedev/core";\n\nconst { mutate: register } = useRegister();\n\nregister(\n    {\n        email: "refine@example.com",\n        password: "refine",\n    },\n    {\n        onSuccess: (data) => {\n            if (!data.success) {\n                // handle error\n            }\n\n            // handle success\n        },\n    },\n);\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useRegister")," hook will not be called if ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise, and the callback is only triggered when the promise is rejected.")))}p.isMDXComponent=!0}}]);