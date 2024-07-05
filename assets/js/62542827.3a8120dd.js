"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6607],{628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=n(1085),a=n(1184);const r={sidebar_position:1,title:"mockGraphs",tags:["mockGraphs","Testing","Graph"]},i=void 0,o={id:"reference/testKit/mockGraphs",title:"mockGraphs",description:"mockGraphs is a function that is used in tests to replace the implementation of graphs with a mock implementation.",source:"@site/docs/reference/testKit/mockGraphs.mdx",sourceDirName:"reference/testKit",slug:"/reference/testKit/mockGraphs",permalink:"/obsidian/docs/reference/testKit/mockGraphs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/testKit/mockGraphs.mdx",tags:[{inline:!0,label:"mockGraphs",permalink:"/obsidian/docs/tags/mock-graphs"},{inline:!0,label:"Testing",permalink:"/obsidian/docs/tags/testing"},{inline:!0,label:"Graph",permalink:"/obsidian/docs/tags/graph"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"mockGraphs",tags:["mockGraphs","Testing","Graph"]},sidebar:"reference",previous:{title:"TestKit",permalink:"/obsidian/docs/category/testkit"},next:{title:"mockModel",permalink:"/obsidian/docs/reference/testKit/mockModel"}},c={},h=[{value:"Reference",id:"reference",level:2},{value:"mockGraphs(graphNameToGraph)",id:"mockgraphsgraphnametograph",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Usage",id:"usage",level:2},{value:"Mocking a graph",id:"mocking-a-graph",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"mockGraphs"})," ",(0,s.jsx)(t.strong,{children:"is a function that is used in tests to replace the implementation of graphs with a mock implementation."})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"mockGraphs"})," function is meant to be used only in tests. It is especially useful when writing integration tests. Unlike in unit tests, where a single unit is tested in isolation, integration tests involve testing multiple ",(0,s.jsx)(t.strong,{children:"concrete"})," objects together. By doing so we can validate that the objects work together as expected. Sometimes, we may want to mock some of the dependencies instead of using concretions. For example, we wouldn't want to use a real database in our tests or send real HTTP requests. ",(0,s.jsx)(t.code,{children:"mockGraphs"})," lets us replace certain objects with fakes or mocks."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#reference",children:"Reference"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#mockgraphsgraphnametograph",children:"mockGraphs(graphNameToGraph)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsx)(t.h3,{id:"mockgraphsgraphnametograph",children:"mockGraphs(graphNameToGraph)"}),"\n",(0,s.jsx)(t.p,{children:"Replaces the implementation of the given graphs with mock implementations."}),"\n",(0,s.jsx)(t.h4,{id:"arguments",children:"Arguments"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"graphNameToGraph"})," - An object mapping graph names to graphs. The graph names must be the same as the names of the graphs being mocked."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h3,{id:"mocking-a-graph",children:"Mocking a graph"}),"\n",(0,s.jsx)(t.p,{children:"Lets say we have a graph that looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"@Singleton() @Graph()\nclass AppGraph {\n  @Provides()\n  storage(): Storage {\n    return new Storage();\n  }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The Storage class is a simple class that persists data to local storage. We don't want to use the real Storage class in our tests as it would make our tests slow and unpredictable. Instead, we'll create a fake implementation of Storage that stores data in memory."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"class FakeStorage extends Storage {\n  private data: Record<string, string> = {};\n\n  override getItem(key: string): string | undefined {\n    return this.data[key];\n  }\n\n  override setItem(key: string, value: string) {\n    this.data[key] = value;\n  }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, we'll create a graph that provides a fake implementation of Storage."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"@Singleton() @Graph()\nclass AppGraphForIntegrationTests {\n  @Provides()\n  override storage(): Storage {\n    return new FakeStorage();\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Finally, we'll mock the AppGraph in our tests by calling ",(0,s.jsx)(t.code,{children:"mockGraphs"})," with an object mapping the name of the graph to the mocked graph."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { Obsidian, mockGraphs } from 'react-obsidian';\n\ndescribe('Mocking graphs', () => {\n  beforeEach(() => {\n    mockGraphs({ AppGraph: AppGraphForIntegrationTests });\n  });\n\n  it('should use the fake storage', () => {\n    const storage = Obsidian.obtain(AppGraph).storage();\n    expect(storage).toBeInstanceOf(FakeStorage);\n  });\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(4041);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);