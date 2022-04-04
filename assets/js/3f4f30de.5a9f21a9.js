"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36646],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var A=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,A,r=function(e,t){if(null==e)return{};var n,A,r={},a=Object.keys(e);for(A=0;A<a.length;A++)n=a[A],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(A=0;A<a.length;A++)n=a[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=A.createContext({}),s=function(e){var t=A.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return A.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},c=A.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),p=r,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||a;return n?A.createElement(m,o(o({ref:t},d),{},{components:n})):A.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return A.createElement.apply(null,o)}return A.createElement.apply(null,n)}c.displayName="MDXCreateElement"},34225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var A=n(87462),r=n(63366),a=(n(67294),n(3905)),o=n(71741),i=["components"],l={id:"list-button",title:"List"},s=void 0,d={unversionedId:"ui-frameworks/antd/components/buttons/list-button",id:"ui-frameworks/antd/components/buttons/list-button",isDocsHomePage:!1,title:"List",description:"` is using Ant Design's  component. It uses the list method from useNavigation` under the hood. It can be useful when redirecting the app to the list page route of resource.",source:"@site/docs/ui-frameworks/antd/components/buttons/list.md",sourceDirName:"ui-frameworks/antd/components/buttons",slug:"/ui-frameworks/antd/components/buttons/list-button",permalink:"/docs/ui-frameworks/antd/components/buttons/list-button",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/components/buttons/list.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1647437572,formattedLastUpdatedAt:"3/16/2022",frontMatter:{id:"list-button",title:"List"},sidebar:"someSidebar",previous:{title:"Import",permalink:"/docs/ui-frameworks/antd/components/buttons/import-button"},next:{title:"Refresh",permalink:"/docs/ui-frameworks/antd/components/buttons/refresh-button"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",children:[],level:3},{value:"<code>hideText</code>",id:"hidetext",children:[],level:3},{value:"<code>ignoreAccessControlProvider</code>",id:"ignoreaccesscontrolprovider",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,A.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<ListButton>")," is using Ant Design's ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," method from ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the list page route of resource."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useShow } from "@pankod/refine-core";\nimport {\n    Show,\n    Typography,\n    // highlight-next-line\n    ListButton,\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => {\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        // highlight-next-line\n        <Show pageHeaderProps={{ extra: <ListButton /> }} isLoading={isLoading}>\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n}\n')),(0,a.kt)("p",null,"Will look like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o.Z,alt:"Default list button"})),(0,a.kt)("br",null),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The button text is defined automatically by ",(0,a.kt)("strong",{parentName:"p"},"refine")," based on ",(0,a.kt)("em",{parentName:"p"},"resource")," object name property."))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"resourcenameorroutename"},(0,a.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,a.kt)("p",null,"Redirection endpoint(",(0,a.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/list"),") is defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"<ListButton>")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," property of the resource object as the endpoint to redirect after clicking."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return <ListButton resourceNameOrRouteName="categories" />;\n};\n')),(0,a.kt)("p",null,"Clicking the button will trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," method of ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/hooks/navigation/useNavigation"},(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,a.kt)("inlineCode",{parentName:"p"},"/categories"),"."),(0,a.kt)("h3",{id:"hidetext"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,a.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return <ListButton hideText />;\n};\n')),(0,a.kt)("h3",{id:"ignoreaccesscontrolprovider"},(0,a.kt)("inlineCode",{parentName:"h3"},"ignoreAccessControlProvider")),(0,a.kt)("p",null,"It is used to skip access control for the button so that it doesn't check for access control. This is relevant only when an ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/providers/accessControl-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,a.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ListButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n    return <ListButton ignoreAccessControlProvider />;\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},"Ant Design button properties"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/button/#API"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonProps"))," & ",(0,a.kt)("inlineCode",{parentName:"td"},"{ resourceName?: string; hideText?: boolean; }")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceNameOrRouteName"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for redirection"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"required-block"},(0,a.kt)("div",null,"resourceName")," ",(0,a.kt)("div",{className:" required"},"deprecated"))),(0,a.kt)("td",{parentName:"tr",align:null},"Determines which resource to use for redirection"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hideText"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ignoreAccessControlProvider"),(0,a.kt)("td",{parentName:"tr",align:null},"Skip access control"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},"Humanized resource name that it reads from route")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"icon"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,a.kt)("inlineCode",{parentName:"a"},"<BarsOutlined />")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onClick"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the handler to handle click event"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(event) => void")),(0,a.kt)("td",{parentName:"tr",align:null},"Triggers navigation for redirection to the list page of resource")))))}p.isMDXComponent=!0},71741:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAQAAACkCAYAAAAANPwSAAAACXBIWXMAAAsSAAALEgHS3X78AAAf/klEQVR42u3dWYwd1b0vYB5ukocoD9F5iYLOy3kAZXgI5AUegiJQEokInYOIcix0IAKhIIRwQGYMhCEMIcwzxkwBzBTmMYwmjgEzhNkMNgRsBhNiRtNtt+226/avzq19q/fQk7vttuv7pBL27r2raq9Vjfz/1Vqrtvl8ZX+xemBtMTi4vgAAAAC2Xqn9kwEkC9hGEAAAAADNkixgG80AAAAAzSMQAAAAgAYSCAAAAEADCQQAAACggQQCAAAA0EACAQAAAGgggQAAAAAjGnxrcTEw96pi1TGHFv0zfl70/+h7Rf+O2xZ923+16Nvu/9gmcxtq07Rt2cZDbZ02T9unDwQCAAAATLn1779XrD7/zKJ/1x8q0qfJlr5In6RvBAIAAABMqsFlS4tVR84s+r77DUX4dN2G+iZ9lL4SCAAAALBx1q4p7z73ff/fFNxbyjbUV+mz9J1AAAAAgHEbXPpO0f+fuyqwt9SpBEN9lz4UCAAAADBmaxcu+N8FAkcqOr/z9aL/V78oBmZfUKx9fH45h31DX5/GmyJp27Rx2jptnrZPH4wYCuz472VfCgQAAAAYPQx46P6i7/vf7F1k7rx9MTDnomL9xys01maWPkhfpE96TyH4ZtmnAgEAAAB6hwELF/QOA8q56WcUGwYGNNQ0kz5J3/Rc6yGhwBhHCggEAAAAGqZcM6DHNIH+n+1UDC5+TSNN9z5849Wyr3pNHxjLmgICAQAAgCZZu6bnAoL9++xZbPhypTbaQqSv+v/nv3ouNDja0wcEAgAAAA1SPlqwVxiwxhSBLS4UGOqzXqFA+UhCgQAAAACDy5Z2nXueoedGBmzBoUBGCnSbPjDU1+lzgQAAAEDDrTpyZveicSPWDPj000+LZcuWFUuWLCkWL15s24gtbZi2TJuOV9YU6Bb2pM8FAgAAAA2W59r3ffcbXYaVnzGh/a1du7YsXpcvX16sWrWq2LBhg0beSGnDtGXaNG2bNh6P8ukD7YHPUJ+n7wUCAAAADdVt7YA8036ijxac6J1sxqYaeTGuQGGoL9OnY11LQCAAAADQAP277thRKA7MuWjCxWruYjO10sbjDV3Spx3Bz64/FAgAAAA00eBbizuHkn/n68X6j1dMaH+5c52h7UyttPF4RwmkT9O37f2da0AgAAAA0DADc6/qvGv8q19MeH9Z/M6aAVMvbZy2Hq/0bcdokKFrQCAAAADQMKuO/k1ngTj7ggnvLyvis2lMpK3Ttx1PGzjmUIHAaL744otyW716tcYAAAC2Cv3/vXtHgbj28fkCga00EEjfdowImfHz5gYCK1euLF544YXijjvuKB599NHi1Vdf7TrnZbvttiu3Aw44YIv+vgk0Xn755Y5t0aJFVgIFAICmBQI/+l5HgdjrUXQCgS0/ECgfMdkeCAxdA9MmEHjsscda21RK4b/77ru3Cv327Q9/+EPx0UcfdQQC++233xZ90bz00ks9v3O2nXfeuTj44IM3+S/yiy++WDzzzDPFK6+84jcbAAA2kb4dvt1RIG7o7xcIbKWBQPq2YxHJoWtgWgQChx56aLHNNtsUBx100JSHDiMVxdVWL06bEgjUt3nz5m2y89pll13KYyakAQAANlEgsP1XOwrETV2ksmnbuiMQGLoGNmsgsHbt2mLvvfcuw4Czzz57yo+XYf9V0XvKKaeUd6czlH7FihXFk08+WfzmN78p9tprr2Gf6RUIjHcFzfXr12/WVTfrgcAhhxxSvPHGG+WWKQMJAGbNmjUsFEibjPRdxmNwcFAgAAAA0ykQaC8Op0EgcNdddxXnn39++eeqXhlpG89+999//9aWuvDwww8vbr/99mJgYGDS2jQ11Hhrpc0aCHTp800WCHzwwQfFT37ykzIMuPPOO6f8eFkfoD48ft26dWMqXuuBwPz588v/7rDDDq0i9rLLLivWrFnTdV+Zm/+nP/2pHIqfz2RL6HD99dcX/f9vOE4umOwn53T00Ud37OOzzz4rf5btoosu6vj5m2++2fr5U089NaZA4LTTTuv6nrxevefee+/tOE6Ov88++5Q//+lPf1qccMIJxV/+8peOoCNtmD6dMWNGq63y31/+8pdle2VKxoUXXljssccew0KI/D1bpm0AAADNCwROOumk1p9H28bqtttuK0488cTi888/L7dly5YVDz74YHHccceVW6/acDyyj4QN9ennAoERitMf/OAHxbe+9a1NNnc8RWpVnGZ7/fXXx/S5sQyxT0jQXhTnQkjR3OszKZbz9ILIaIXq9eq1yg033DAsyGgPLM4999xWwT1SujWWQCCLDFbv+e1vf9t6/e9///uI3//kk08eloSdc845I77/gQceKPff6+cZwQAAADQrEJgqCQROPfXUjtczYj1FfHXuuYl81VVXFYcddlg5nT211jvvvNN6/8cff1xcffXV5ZT3jDI49thji2effbZ47rnnyr9Xow+yPfHEE612yc3Q7C/b6aefXrz77rvNDQSyov+2225b7LTTTl1X9Z9KuaNdLzzTITfddFPx9ttvjzkQOOaYY4prrrmmDAHqr+dOeSVF/W677TYsMLjlllvK4j5TEqrX99xzz/IirBfrt95667Dj19+frbqwIkV4QoK8/vvf/37UEGa0QODpp59uveeMM87o+Fy23/3ud2Uad/nll7eOXU3BiAzdqV5LG+R7Z+RC2ueoo44qv3POO780GUVQH0GQv2d7/vnn/R8aAAAEAlMaCPT19ZVFfBY5z6jv448/vizyU49khHRGNx944IHl6PZIzZMRDKl5XnvttbIuXLBgQXlj9sMPPyz3ldczdSB1XurdfD4hwtKlS8t6K6OuGxsIZFG/r3zlK8WPf/zjMW8Z2jFZli9fXt6Z73ZXOsVrOidrCvQKBPKIwroUxe0FceQOeP1Oe330QO7w//rXv279PBdbfl6NJsiQ/MqSJUs6zrM+rWDhwoWt1/MIxY0JBPK9991339Z7cmFH7v5Xr7UPy/nkk0+GhQL5Rch6BCMdp30khTUEAABAIBD1NQQme8pAt0DgvvvuKwv2hAG5iZkbxv1tT1o466yziksuuaT8c37+t7/9resxuk0ZqEKC1E2TaYsOBL72ta9ttkCgKshzQaRjugUDKczriU19uH57MZuRBdXPMyykkrv1Iy3Ol+kK1c+ri2vOnDmt16oEKgstVnfPc2e++nl1kWa0QhVmjLZgYT0QSCiSNCtbQo0U/fXCPserRm9UQUX+283cuXNbn8twmYyOqLdnRjiceeaZ5QiBBDLtBAIAACAQmOpAINMActMzW0YlZyRAasL777+/fE+mCnRbs+3xxx8vZs6c2ap98pnZs2eX68vVC/1eawjkhm7WlLvuuuvKeql/Ix7tuMUHApEO+I//+I/NMmWgXe6K5+kCmcdRL2KTArUHAnkaQjfVz+t39jMsvnq9a0f09Q2bthAJAarXUqQnuKiK9BTsr776auvn99xzT3khVX/PUJbRjPWxg1nU77333is/s3LlytbrGdXQTRKy6j3XXntt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T4s77rijGBwc7PmepUuXFtdff31x8803FytXrpy0Y69fv7648847i48//lhHbEXmzZtXLF68WB8DAABbXyBw1113FWedddZW0RHPP/98ccABB5TBQDcffvhhsf/++xdz584tLrroomLFihWTduwvvviiPPYzzzzTei37TxHJ5vX5558Xq1evntBnTznllOL+++/v2cejmYxr4MsvvyyPDQAACAQm1W233VaceuqpW01nbNiwoefPMnrgzDPP3CTHXrduXRk+fPTRR35DNrNjjz22+Otf/7rRgcBo11e7yboGbrjhhjLAAgAABAJTGgg8+OCDZfHxwAMPFEcffXR5R/SYY44pXnvttZ77yJDqCy+8sDjooIPK7fTTTy/efffd1s8ff/zx4qSTTir3dfLJJxcLFy4c9vncAb3sssuKQw89tPz8+eefX+7z4IMPbr0nIxnynnYnnnhi8dRTT5V/zjHz+W7yXVKcZct5HH744eWd2/y5vWB76aWXiiOPPHLYa/XvkH2lfTL14JZbbmm9J+f7zjvvFM8991z5vupY2Z544omu53XeeeeVbX7VVVeV3//AAw8s/vjHPw4bvfDGG28Uhx12WMdnM+3h6quvHnb8jJJI+2c/s2bNKu69995W+1X9edxxxxVvv/32lPRBpmFceeWV5X5yrJz3ggULhr1/Y86zbrR2yXeq+qHqi7RzL7kuc31W13zOuz0QqPq48v7775dtlddnzpxZ/u6sWrVqxGsgPzv++OPL757tnHPO6TkCoNt1W0nbnH322eU+8r78LtcDi1xbuU7TZzm3nOPs2bPLoCLnkH4bqY/SvvluuR7Sn3PmzCn6+vqGve/ZZ58tTjvttPIc0ma33357xznk+s5xcw7vvffemK4RAAAQCGyGQCCFWYqP/OP9vvvuaxVu+Yf7Z5991vH5FD8pBlKAZX7+008/XRZFVSDw5JNPlp+96aabiiVLlpT/rQ+7HhgYKAuJbDlW3nPppZe2iqhKPpfipF0K9xTrkUIt595NphFcccUVrWI7w8gTCOT9//znP4e9N8VSvn/lscceK993zz33lN8x554iNueX6QeV/P2tt94qv1M1PSFBSo63du3arueVts37TjjhhLKt5s+fX+47BV5VWC1atKhr0HHNNdeUhVb9+NnSfq+88kp5Zzn7TpGbAi/9me+WY6XPcp6T3Qc5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"}}]);