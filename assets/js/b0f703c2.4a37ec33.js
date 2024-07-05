"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3544],{4932:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(1085),o=i(1184);const r={sidebar_position:6,title:"Service locator"},a=void 0,c={id:"documentation/usage/ServiceLocator",title:"Service locator",description:"Obtaining dependencies imperatively",source:"@site/docs/documentation/usage/ServiceLocator.mdx",sourceDirName:"documentation/usage",slug:"/documentation/usage/ServiceLocator",permalink:"/obsidian/docs/documentation/usage/ServiceLocator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/usage/ServiceLocator.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Service locator"},sidebar:"docs2",previous:{title:"Reactivity",permalink:"/obsidian/docs/documentation/usage/Reactivity"},next:{title:"Meta",permalink:"/obsidian/docs/category/meta"}},s={},d=[{value:"Obtaining dependencies imperatively",id:"obtaining-dependencies-imperatively",level:2},{value:"Example",id:"example",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"obtaining-dependencies-imperatively",children:"Obtaining dependencies imperatively"}),"\n",(0,t.jsx)(n.p,{children:"Obsidian is an Inversion of Control container. This means that it will automatically resolve dependencies for you, and you don't need to worry about how to obtain them. However, there are times when you need to obtain a dependency imperatively, for example when you need to pass a dependency to a third-party library that doesn't support dependency injection."}),"\n",(0,t.jsxs)(n.p,{children:["For these cases, you can obtain a graph instance and access the dependencies it provides imperatively. This is done by using the ",(0,t.jsx)(n.code,{children:"Obsidian.obtain()"})," function which allows you to treat the graph as a Service Locator."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Consider the following graph which provides two dependencies: ",(0,t.jsx)(n.code,{children:"fooService"})," and ",(0,t.jsx)(n.code,{children:"barService"})," where ",(0,t.jsx)(n.code,{children:"barService"})," depends on ",(0,t.jsx)(n.code,{children:"fooService"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {Singleton, Graph, ObjectGraph, Provides} from 'react-obsidian';\n\n@Singleton() @Graph()\nexport class SomeGraph extends ObjectGraph {\n  @Provides()\n  fooService(): FooService {\n    return new FooService();\n  }\n\n  @Provides()\n  barService(fooService: FooService): AppInitializer {\n    return new BarService(fooService);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Obtaining the dependencies directly from the graph is straight forward:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:"Obtaining a dependency imperatively",children:"Obsidian.obtain(ApplicationGraph).fooService();\n\n// Even though barService depends on fooService, you don't need to provide its dependency\nObsidian.obtain(ApplicationGraph).barService();\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1184:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(4041);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);