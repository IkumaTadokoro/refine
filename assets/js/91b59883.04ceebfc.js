"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46295],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(61054),o=n(78013),d=["components"],p={id:"useDrawerForm",title:"useDrawerForm"},s=void 0,m={unversionedId:"ui-frameworks/antd/hooks/form/useDrawerForm",id:"ui-frameworks/antd/hooks/form/useDrawerForm",isDocsHomePage:!1,title:"useDrawerForm",description:"useDrawerForm hook allows you to manage a form within a Drawer. It returns Ant Design Form and Drawer components props.",source:"@site/docs/ui-frameworks/antd/hooks/form/useDrawerForm.md",sourceDirName:"ui-frameworks/antd/hooks/form",slug:"/ui-frameworks/antd/hooks/form/useDrawerForm",permalink:"/docs/ui-frameworks/antd/hooks/form/useDrawerForm",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/hooks/form/useDrawerForm.md",tags:[],version:"current",lastUpdatedBy:"Bhaktij Koli",lastUpdatedAt:1646069108,formattedLastUpdatedAt:"2/28/2022",frontMatter:{id:"useDrawerForm",title:"useDrawerForm"},sidebar:"someSidebar",previous:{title:"useSelect",permalink:"/docs/ui-frameworks/antd/hooks/field/useSelect"},next:{title:"useForm",permalink:"/docs/ui-frameworks/antd/hooks/form/useForm"}},u=[{value:"Usage",id:"usage",children:[{value:"Create Drawer",id:"create-drawer",children:[],level:3},{value:"Edit Drawer",id:"edit-drawer",children:[],level:3}],level:2},{value:"API Parameters",id:"api-parameters",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],k={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," hook allows you to manage a form within a Drawer. It returns Ant Design ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Form")," and ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/drawer/"},"Drawer")," components props."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useDrawerForm } from "@pankod/refine-antd";\n\nconst { drawerProps, formProps } = useDrawerForm<IPost>({\n    action: "create", // or "edit"\n});\n')),(0,i.kt)("p",null,"All we have to do is to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"drawerProps")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Drawer>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"formProps")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Form>")," components."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"We'll do two examples, one for creating and one for editing a post. Let's see how ",(0,i.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," is used in both."),(0,i.kt)("h3",{id:"create-drawer"},"Create Drawer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useDrawerForm, Drawer, Form, Create, Radio, List, Input } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n// highlight-start\n    const {\n        formProps,\n        drawerProps,\n        show,\n        saveButtonProps,\n    } = useDrawerForm<IPost>({\n        action: "create",\n    });\n// highlight-end\n\n    return (\n        <>\n            <List\n// highlight-start\n                createButtonProps={{\n                    onClick: () => {\n                        show();\n                    },\n                }}\n// highlight-end\n            >\n                ...\n            </List>\n// highlight-start\n            <Drawer {...drawerProps}>\n                <Create saveButtonProps={saveButtonProps}>\n                    <Form {...formProps} layout="vertical">\n                        <Form.Item label="Title" name="title">\n                            <Input />\n                        </Form.Item>\n                        <Form.Item label="Status" name="status">\n                            <Radio.Group>\n                                <Radio value="draft">Draft</Radio>\n                                <Radio value="published">Published</Radio>\n                                <Radio value="rejected">Rejected</Radio>\n                            </Radio.Group>\n                        </Form.Item>\n                    </Form>\n                </Create>\n            </Drawer>\n// highlight-end\n        </>\n    )\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createButtonProps")," allows us to create and manage a button above the table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"    createButtonProps={{\n        onClick: () => {\n            show();\n        },\n    }}\n")),(0,i.kt)("p",null,"This code block makes ",(0,i.kt)("inlineCode",{parentName:"p"},"<Drawer>")," appear when you click the button."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," allows us to manage the save button in the drawer."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:l.Z,alt:"Create record action"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"edit-drawer"},"Edit Drawer"),(0,i.kt)("p",null,"Let's learn how to add editing capabilities to the records that will be opening form in Drawer with using ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," prop."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import {\n    useDrawerForm,\n    Drawer,\n    Form,\n    Create,\n    Radio,\n    List,\n    Edit,\n    Table,\n    EditButton,\n    Input\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const {\n        drawerProps,\n        formProps,\n        show,\n        saveButtonProps,\n        deleteButtonProps,\n        id,\n    } = useDrawerForm<IPost>({\n// highlight-next-line\n        action: "edit",\n    });\n\n    return (\n        <>\n            <List>\n                <Table>\n                    ...\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n                        key="actions"\n// highlight-start\n                        render={(_value, record) => (\n                            <EditButton\n                                size="small"\n                                recordItemId={record.id}\n                                onClick={() => show(record.id)}\n                            />\n                        )}\n// highlight-end\n                    />\n                </Table>\n            </List>\n            <Drawer {...drawerProps}>\n                <Edit\n// highlight-start\n                    saveButtonProps={saveButtonProps}\n                    deleteButtonProps={deleteButtonProps}\n                    recordItemId={id}\n// highlight-end\n                >\n// highlight-next-line\n                    <Form {...formProps} layout="vertical">\n                        <Form.Item label="Title" name="title">\n                            <Input />\n                        </Form.Item>\n                        <Form.Item label="Status" name="status">\n                            <Radio.Group>\n                                <Radio value="draft">Draft</Radio>\n                                <Radio value="published">Published</Radio>\n                                <Radio value="rejected">Rejected</Radio>\n                            </Radio.Group>\n                        </Form.Item>\n                    </Form>\n                </Edit>\n            </Drawer>\n        </>\n    )\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"refine doesn't automatically add a edit button to the each record in ",(0,i.kt)("inlineCode",{parentName:"p"},"<PostList>")," which opens edit form in ",(0,i.kt)("inlineCode",{parentName:"p"},"<Drawer>")," when clicking."),(0,i.kt)("p",{parentName:"div"},"So, we have to put the edit buttons on our list. In that way, ",(0,i.kt)("inlineCode",{parentName:"p"},"<Edit>")," form in ",(0,i.kt)("inlineCode",{parentName:"p"},"<Drawer>")," can fetch data by the record ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column<IPost>\n    title="Actions"\n    dataIndex="actions"\n    key="actions"\n    render={(_value, record) => (\n        <EditButton\n            size="small"\n            recordItemId={record.id}\n            onClick={() => show(record.id)}\n        />\n    )}\n/>\n')))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteButtonProps")," gives us the ability of saving and deleting buttons in the drawer."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:o.Z,alt:"Edit record action"})),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"api-parameters"},"API Parameters"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action ",(0,i.kt)("div",{className:" required"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"Type of form mode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"create"'),"|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"clone"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"create"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,i.kt)("td",{parentName:"tr",align:null},"Close drawer after submit"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"form"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,i.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/guides-and-concepts/mutation-mode"},"Determines when mutations are executed"),". If not explicitly configured, it is read from the mutation mode config of the resource in current route"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"pessimistic"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"optimistic"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMutationError"),(0,i.kt)("td",{parentName:"tr",align:null},"Called when ",(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," encounters an error"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(error: TError, variables: TVariables, context: any) => void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMutationSuccess"),(0,i.kt)("td",{parentName:"tr",align:null},"Called when ",(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(data: TData, variables: TVariables, context: any) => void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirect"),(0,i.kt)("td",{parentName:"tr",align:null},"Page to redirect after succesfull mutation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},' "show')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"edit')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"list"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"submit"),(0,i.kt)("td",{parentName:"tr",align:null},"Submits the form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(values?: TVariables) => Promise<TData>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"submitOnEnter"),(0,i.kt)("td",{parentName:"tr",align:null},"Listens ",(0,i.kt)("inlineCode",{parentName:"td"},"Enter")," key press to submit form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing mutations when ",(0,i.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5000"),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"warnWhenUnsavedChanges"),(0,i.kt)("td",{parentName:"tr",align:null},"Shows notification when unsaved changes exist"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,i.kt)("inlineCode",{parentName:"td"},"resource"),'" or "Successfully updated ',(0,i.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,i.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')" or "Error when updating ',(0,i.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,i.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,i.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,i.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,i.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,i.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"{ ids?: BaseKey[]; [key: string]: any; }"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,i.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,i.kt)("strong",{parentName:"p"},"<",(0,i.kt)("a",{parentName:"strong",href:"/docs/core/components/refine-config"},"Refine"),">")," component. ",(0,i.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," will use what is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"**"),": If not explicitly configured, default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," depends which ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," used. If ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"edit")," (created resources edit page). Otherwise if ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),".")),(0,i.kt)("h3",{id:"return-value"},"Return Value"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"show"),(0,i.kt)("td",{parentName:"tr",align:null},"A function that opens the drawer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(id?: BaseKey) => void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design form props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#Form"},(0,i.kt)("inlineCode",{parentName:"a"},"FormProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawerProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Props for managed drawer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/drawer/#API"},(0,i.kt)("inlineCode",{parentName:"a"},"DrawerProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deleteButtonProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Adds props for delete button"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#delete-button-props"},(0,i.kt)("inlineCode",{parentName:"a"},"DeleteButtonProps")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,i.kt)("td",{parentName:"tr",align:null},"Loading status of form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"submit"),(0,i.kt)("td",{parentName:"tr",align:null},"Submit method, the parameter is the value of the form fields"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"visible"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the drawer is visible or not"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"close"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify a function that can close the drawer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"defaultFormValuesLoading"),(0,i.kt)("td",{parentName:"tr",align:null},"DefaultFormValues loading status of form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"form"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,i.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"Record id for edit action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")," setter"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by submitting the form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,i.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"},"TError,"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"a"}," unknown>")))))),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/core/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-drawer-form-example-hby1l?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-drawer-form-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0},61054:function(e,t,n){t.Z=n.p+"assets/images/create-9b1645260ff2e3515e4120492d7dcda7.gif"},78013:function(e,t,n){t.Z=n.p+"assets/images/edit-699cf0cb67df382d0993ab99bcb53f4e.gif"}}]);