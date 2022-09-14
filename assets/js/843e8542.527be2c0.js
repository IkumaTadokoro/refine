"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84722],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),u=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(f,a(a({ref:n},l),{},{components:t})):o.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},90658:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const i={id:"antd-custom-sider",title:"Sider"},a=void 0,s={unversionedId:"ui-frameworks/antd/customization/antd-custom-sider",id:"ui-frameworks/antd/customization/antd-custom-sider",title:"Sider",description:"There are 2 ways that will allow you to customize your `` component if you need it.",source:"@site/docs/ui-frameworks/antd/customization/sider.md",sourceDirName:"ui-frameworks/antd/customization",slug:"/ui-frameworks/antd/customization/antd-custom-sider",permalink:"/docs/ui-frameworks/antd/customization/antd-custom-sider",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/ui-frameworks/antd/customization/sider.md",tags:[],version:"current",lastUpdatedBy:"Melih \xd6zkalay",lastUpdatedAt:1663163634,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{id:"antd-custom-sider",title:"Sider"},sidebar:"someSidebar",previous:{title:"Layout",permalink:"/docs/ui-frameworks/antd/customization/antd-custom-layout"},next:{title:"Tutorial",permalink:"/docs/ui-frameworks/mui/tutorial"}},d={},u=[{value:"Customize Sider by Using <code>render</code> property",id:"customize-sider-by-using-render-property",level:2},{value:"Recreating the Default Sider Menu",id:"recreating-the-default-sider-menu",level:2}],l={toc:u};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are 2 ways that will allow you to customize your ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider />")," component if you need it."),(0,r.kt)("p",null,"You can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," elements and ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," state that we use in our default ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component by using ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," properties. Customize it to your needs or you can create a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider />")," component and use it either by passing it to ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine />"))," or using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-frameworks/antd/customization/antd-custom-layout"},"Custom Layout"),"."),(0,r.kt)("h2",{id:"customize-sider-by-using-render-property"},"Customize Sider by Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"render")," property"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=360px hideCode disableScroll url=http://localhost:3000/posts",live:!0,previewHeight:"360px",hideCode:!0,disableScroll:!0,url:"http://localhost:3000/posts"},'const {\n    AntdLayout,\n    Grid,\n    Menu,\n    Icons,\n    Title: DefaultTitle,\n    Sider,\n    Header,\n} = RefineAntd;\nconst {\n    useTranslate,\n    useLogout,\n    useTitle,\n    CanAccess,\n    ITreeMenu,\n    useIsExistAuthentication,\n    useRouterContext,\n    useMenu,\n    useRefineContext,\n} = RefineCore;\nimport { Header } from "@pankod/refine-antd";\n\n// visible-block-start\nimport {\n    useTranslate,\n    useLogout,\n    useTitle,\n    CanAccess,\n    ITreeMenu,\n    useIsExistAuthentication,\n    useRouterContext,\n    useMenu,\n    useRefineContext,\n} from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    Grid,\n    Icons,\n    Title as DefaultTitle,\n    Menu,\n    Sider,\n} from "@pankod/refine-antd";\nexport type SiderRenderProps = {\n    items: JSX.Element[];\n    logout: React.ReactNode;\n    dashboard: React.ReactNode;\n};\n\nexport type RefineLayoutSiderProps = {\n    render?: (props: SiderRenderProps) => React.ReactNode;\n};\n\nconst PostList: React.FC = () => {\n    return <div>Post List</div>;\n};\n\nconst App: React.FC = () => {\n    const API_URL = "https://api.fake-rest.refine.dev";\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n            Sider={Sider}\n            Layout={({ children, Footer, Header, Sider, OffLayoutArea }) => {\n                return (\n                    <AntdLayout\n                        style={{ minHeight: "100vh", flexDirection: "row" }}\n                    >\n                        <Sider\n                            render={({ items }) => {\n                                return (\n                                    <>\n                                        <Menu.Item\n                                            style={{\n                                                fontWeight: 700,\n                                            }}\n                                        >\n                                            Custom Element\n                                        </Menu.Item>\n                                        {items}\n                                    </>\n                                );\n                            }}\n                        />\n                        <AntdLayout>\n                            {Header && <Header />}\n                            <AntdLayout.Content>\n                                <div\n                                    style={{\n                                        padding: 12,\n                                        minHeight: 360,\n                                    }}\n                                >\n                                    {children}\n                                </div>\n                                {OffLayoutArea && <OffLayoutArea />}\n                            </AntdLayout.Content>\n                            {Footer && <Footer />}\n                        </AntdLayout>\n                    </AntdLayout>\n                );\n            }}\n        />\n    );\n};\n\n// visible-block-end\n// Header and sider components import from antd package at the part of invisible code block to avoid getting render error\n// They are declared as null in ReactLiveScope\nrender(\n    <RefineAntdDemo\n        Layout={({ children, Footer, OffLayoutArea }) => {\n            return (\n                <AntdLayout\n                    style={{ minHeight: "100vh", flexDirection: "row" }}\n                >\n                    <Sider\n                        render={({ items }) => {\n                            return (\n                                <>\n                                    <Menu.Item\n                                        style={{\n                                            fontWeight: 700,\n                                        }}\n                                    >\n                                        Custom Element\n                                    </Menu.Item>\n                                    {items}\n                                </>\n                            );\n                        }}\n                    />\n                    <AntdLayout>\n                        <Header />\n                        <AntdLayout.Content>\n                            <div\n                                style={{\n                                    padding: 12,\n                                    minHeight: 360,\n                                }}\n                            >\n                                {children}\n                            </div>\n                            {OffLayoutArea && <OffLayoutArea />}\n                        </AntdLayout.Content>\n                        {Footer && <Footer />}\n                    </AntdLayout>\n                </AntdLayout>\n            );\n        }}\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Menu.Item")," component gives you an implemention ready component compatible with Sider menu items. If you want to add anything else to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," state to manage your component.")),(0,r.kt)("h2",{id:"recreating-the-default-sider-menu"},"Recreating the Default Sider Menu"),(0,r.kt)("p",null,"You can also customize your Sider component by creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomSider")," component."),(0,r.kt)("p",null,"When you examine the code of the live-preview example below, you will see the same code that we used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"default sider")," component. You can create a customized ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomSider")," component for yourself by following this code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode disableScroll url=http://localhost:3000/posts",live:!0,hideCode:!0,disableScroll:!0,url:"http://localhost:3000/posts"},'const { AntdLayout, Grid, Menu, Icons, Title: DefaultTitle } = RefineAntd;\nconst {\n    useTranslate,\n    useLogout,\n    useTitle,\n    CanAccess,\n    ITreeMenu,\n    useIsExistAuthentication,\n    useRouterContext,\n    useMenu,\n    useRefineContext,\n} = RefineCore;\n\n// visible-block-start\nimport {\n    useTranslate,\n    useLogout,\n    useTitle,\n    CanAccess,\n    ITreeMenu,\n    useIsExistAuthentication,\n    useRouterContext,\n    useMenu,\n    useRefineContext,\n} from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    Grid,\n    Icons,\n    Title as DefaultTitle,\n} from "@pankod/refine-antd";\nexport type SiderRenderProps = {\n    items: JSX.Element[];\n    logout: React.ReactNode;\n    dashboard: React.ReactNode;\n};\n\nexport type RefineLayoutSiderProps = {\n    render?: (props: SiderRenderProps) => React.ReactNode;\n};\n\nconst PostList: React.FC = () => {\n    return <div>Post List</div>;\n};\n\nconst { DashboardOutlined, LogoutOutlined, UnorderedListOutlined } = Icons;\n\nconst CustomSider: React.FC<RefineLayoutSiderProps> = ({ render }) => {\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const isExistAuthentication = useIsExistAuthentication();\n    const { Link } = useRouterContext();\n    const { mutate: mutateLogout } = useLogout();\n    const Title = useTitle();\n    const translate = useTranslate();\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n    const { hasDashboard } = useRefineContext();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    const RenderToTitle = Title ?? DefaultTitle;\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n\n            if (children.length > 0) {\n                return (\n                    <CanAccess\n                        key={route}\n                        resource={name.toLowerCase()}\n                        action="list"\n                        params={{\n                            resource: item,\n                        }}\n                    >\n                        <SubMenu\n                            key={route}\n                            icon={icon ?? <UnorderedListOutlined />}\n                            title={label}\n                        >\n                            {renderTreeView(children, selectedKey)}\n                        </SubMenu>\n                    </CanAccess>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(\n                parentName !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                    params={{\n                        resource: item,\n                    }}\n                >\n                    <Menu.Item\n                        key={route}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={icon ?? (isRoute && <UnorderedListOutlined />)}\n                    >\n                        <Link to={route}>{label}</Link>\n                        {!collapsed && isSelected && (\n                            <div className="ant-menu-tree-arrow" />\n                        )}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    const logout = isExistAuthentication ? (\n        <Menu.Item\n            key="logout"\n            onClick={() => mutateLogout()}\n            icon={<LogoutOutlined />}\n        >\n            {translate("buttons.logout", "Logout")}\n        </Menu.Item>\n    ) : null;\n\n    const dashboard = hasDashboard ? (\n        <Menu.Item\n            key="dashboard"\n            style={{\n                fontWeight: selectedKey === "/" ? "bold" : "normal",\n            }}\n            icon={<DashboardOutlined />}\n        >\n            <Link to="/">{translate("dashboard.title", "Dashboard")}</Link>\n            {!collapsed && selectedKey === "/" && (\n                <div className="ant-menu-tree-arrow" />\n            )}\n        </Menu.Item>\n    ) : null;\n\n    const items = renderTreeView(menuItems, selectedKey);\n\n    const renderSider = () => {\n        if (render) {\n            return render({\n                dashboard,\n                items,\n                logout,\n            });\n        }\n        return (\n            <>\n                {dashboard}\n                {items}\n                {logout}\n            </>\n        );\n    };\n\n    const antLayoutSider: CSSProperties = {\n        position: "relative",\n    };\n    const antLayoutSiderMobile: CSSProperties = {\n        position: "fixed",\n        height: "100vh",\n        zIndex: 999,\n    };\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            collapsedWidth={isMobile ? 0 : 80}\n            breakpoint="lg"\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <RenderToTitle collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                defaultOpenKeys={defaultOpenKeys}\n                mode="inline"\n                onClick={() => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n                }}\n            >\n                {renderSider()}\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n\nconst App: React.FC = () => {\n    const API_URL = "https://api.fake-rest.refine.dev";\n\n    return (\n        <Refine\n            // highlight-next-line\n            Sider={CustomSider}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        Sider={CustomSider}\n        initialRoutes={["/posts"]}\n        resources={[\n            {\n                name: "posts",\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to create a multi-level menu, you can take a look at this ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/multi-level-menu/"},(0,r.kt)("inlineCode",{parentName:"a"},"multi-level menu"))," example and also ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/multi-level-menu/"},(0,r.kt)("inlineCode",{parentName:"a"},"here"))," is the guide.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," provides the logout functionality."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," hook can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},"Refer to authProvider docs for more detailed information. ","\u2192"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/auth/useLogout"},"Refer to useLogout docs for more detailed information. ","\u2192"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can further customize the Sider and its appearance.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/#Layout.Sider"},"Refer to Ant Design docs for more detailed information about Sider. ","\u2192"))))}c.isMDXComponent=!0}}]);