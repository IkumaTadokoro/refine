"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59547],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},98728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={id:"theme",title:"Theme"},i=void 0,s={unversionedId:"api-reference/chakra-ui/customization/theme",id:"version-3.xx.xx/api-reference/chakra-ui/customization/theme",title:"Theme",description:"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more. You can either create your own theme object or use theme that provide from refine. You can find more information about theme in Chakra UI documentation.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/customization/theme.md",sourceDirName:"api-reference/chakra-ui/customization",slug:"/api-reference/chakra-ui/customization/theme",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/theme",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/customization/theme.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680535066,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"theme",title:"Theme"},sidebar:"someSidebar",previous:{title:"Url",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/fields/url"},next:{title:"Layout",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/layout"}},l={},c=[{value:"Theme customization",id:"theme-customization",level:2},{value:"Theme switching",id:"theme-switching",level:2}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { useNavigation, useRouterContext } from "@pankod/refine-core";\nimport {\n    List,\n    Edit,\n    Create,\n    TableContainer,\n    Table,\n    Thead,\n    Tbody,\n    Tr,\n    Th,\n    Td,\n    Text,\n    EditButton,\n    FormControl,\n    FormErrorMessage,\n    FormLabel,\n    Input,\n} from "@pankod/refine-chakra-ui";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\nimport { useForm } from "@pankod/refine-react-hook-form";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "actions",\n                header: "Actions",\n                accessorKey: "id",\n                cell: function render({ getValue }) {\n                    return (\n                        <EditButton\n                            hideText\n                            recordItemId={getValue() as number}\n                        />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const { getHeaderGroups, getRowModel } = useTable({\n        columns,\n        refineCoreProps: {\n            initialPageSize: 5,\n        },\n    });\n\n    return (\n        <List>\n            <TableContainer whiteSpace="pre-line">\n                <Table variant="simple">\n                    <Thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <Tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => (\n                                    <Th key={header.id}>\n                                        {!header.isPlaceholder && (\n                                            <Text>\n                                                {flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                            </Text>\n                                        )}\n                                    </Th>\n                                ))}\n                            </Tr>\n                        ))}\n                    </Thead>\n                    <Tbody>\n                        {getRowModel().rows.map((row) => (\n                            <Tr key={row.id}>\n                                {row.getVisibleCells().map((cell) => (\n                                    <Td key={cell.id}>\n                                        {flexRender(\n                                            cell.column.columnDef.cell,\n                                            cell.getContext(),\n                                        )}\n                                    </Td>\n                                ))}\n                            </Tr>\n                        ))}\n                    </Tbody>\n                </Table>\n            </TableContainer>\n        </List>\n    );\n};\n\nconst PostEdit: React.FC = () => {\n    const {\n        refineCore: { formLoading },\n        saveButtonProps,\n        register,\n        formState: { errors },\n    } = useForm<IPost>();\n\n    return (\n        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <FormControl mb="3" isInvalid={!!errors?.title}>\n                <FormLabel>Title</FormLabel>\n                <Input\n                    {...register("title", { required: "Title is required" })}\n                />\n                <FormErrorMessage>\n                    {`${errors.title?.message}`}\n                </FormErrorMessage>\n            </FormControl>\n        </Edit>\n    );\n};\n\nconst PostCreate = () => {\n    const {\n        refineCore: { formLoading },\n        saveButtonProps,\n        register,\n        formState: { errors },\n    } = useForm<IPost>();\n\n    return (\n        <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>\n            <FormControl mb="3" isInvalid={!!errors?.title}>\n                <FormLabel>Title</FormLabel>\n                <Input\n                    {...register("title", { required: "Title is required" })}\n                />\n                <FormErrorMessage>\n                    {`${errors.title?.message}`}\n                </FormErrorMessage>\n            </FormControl>\n        </Create>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,o.kt)("p",null,"The theme object is where you define your application's color palette, type scale, font stacks, breakpoints, border radius values, and more. You can either create your own theme object or use theme that provide from ",(0,o.kt)("strong",{parentName:"p"},"refine"),". You can find more information about theme in Chakra UI documentation."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/customize-theme"},"Refer to the Chakra UI documentation for more information about theme. ","\u2192")),(0,o.kt)("h2",{id:"theme-customization"},"Theme customization"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ChakraProvider/>")," component can be used to change theme and other global settings. It is not required if you decide to use the default theme. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"refineTheme")," provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=450px",live:!0,url:"http://localhost:3000",previewHeight:"450px"},'setInitialRoutes(["/posts"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    // highlight-start\n    refineTheme,\n    extendTheme,\n    // highlight-end\n} from "@pankod/refine-chakra-ui";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\nconst App = () => {\n    // highlight-start\n    const customTheme = extendTheme({\n        ...refineTheme,\n        colors: {\n            sider: {\n                background: "#4A5568",\n                collapseButton: "#1a202c",\n            },\n        },\n    });\n    // highlight-end\n\n    return (\n        // highlight-next-line\n        <ChakraProvider theme={customTheme}>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                notificationProvider={notificationProvider()}\n                ReadyPage={ReadyPage}\n                Layout={Layout}\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                        edit: PostEdit,\n                        create: PostCreate,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/next/packages/chakra-ui/src/types/theme.ts"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"refineTheme")," object in the source code to see the default theme values.. ","\u2192"))),(0,o.kt)("h2",{id:"theme-switching"},"Theme switching"),(0,o.kt)("p",null,"Chakra UI comes with built-in support for managing color mode in your apps. You can manage the color mode on refine applications such as Chakra UI applications."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Chakra stores the color mode in ",(0,o.kt)("inlineCode",{parentName:"p"},"localStorage")," and appends a className to the body to ensure the color mode is persistent.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/color-mode"},"Refer to the Chakra UI documentation for more information about color mode. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=500px",live:!0,url:"http://localhost:3000",previewHeight:"500px"},'setInitialRoutes(["/posts"]);\n\nconst IconSun = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-sun"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        strokeWidth="2"\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <circle cx={12} cy={12} r={4}></circle>\n        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>\n    </svg>\n);\n\nconst IconMoonStars = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-moon-stars"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        stroke-width={2}\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>\n        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>\n        <path d="M19 11h2m-1 -1v2"></path>\n    </svg>\n);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    Box,\n    IconButton,\n    Icon,\n    // highlight-start\n    useColorMode,\n    refineTheme,\n    extendTheme,\n    // highlight-end\n} from "@pankod/refine-chakra-ui";\nimport { IconSun, IconMoonStars } from "@tabler/icons";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst Header = () => {\n    const { colorMode, toggleColorMode } = useColorMode();\n    return (\n        <Box\n            py="2"\n            px="4"\n            display="flex"\n            justifyContent="flex-end"\n            w="full"\n            bg="chakra-body-bg"\n        >\n            <IconButton\n                variant="ghost"\n                aria-label="Toggle theme"\n                onClick={toggleColorMode}\n            >\n                <Icon\n                    as={colorMode === "light" ? IconMoonStars : IconSun}\n                    w="18px"\n                    h="18px"\n                />\n            </IconButton>\n        </Box>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    // highlight-start\n    const customTheme = extendTheme({\n        ...refineTheme,\n        config: {\n            initialColorMode: "dark",\n            useSystemColorMode: false,\n        },\n    });\n    // highlight-end\n\n    return (\n        // highlight-next-line\n        <ChakraProvider theme={customTheme}>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                notificationProvider={notificationProvider()}\n                ReadyPage={ReadyPage}\n                Layout={Layout}\n                // highlight-next-line\n                Header={Header}\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                        edit: PostEdit,\n                        create: PostCreate,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')))}m.isMDXComponent=!0}}]);