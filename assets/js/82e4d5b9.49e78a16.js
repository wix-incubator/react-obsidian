"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7920],{7493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(1085),i=n(1184);const o={sidebar_position:1,title:"Mocking dependencies in unit tests",tags:["Testing","Architecture"]},a=void 0,r={id:"guides/mockDependencies",title:"Mocking dependencies in unit tests",description:"Tests are an integral part of any software project. They let you verify that your code works as expected and that it doesn't break when you make changes. We want our tests to be as clear as possible so that developers don't have to waste time figuring out what the test is doing our how to fix it when it fails.",source:"@site/docs/guides/mockDependencies.mdx",sourceDirName:"guides",slug:"/guides/mockDependencies",permalink:"/obsidian/docs/guides/mockDependencies",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/mockDependencies.mdx",tags:[{inline:!0,label:"Testing",permalink:"/obsidian/docs/tags/testing"},{inline:!0,label:"Architecture",permalink:"/obsidian/docs/tags/architecture"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Mocking dependencies in unit tests",tags:["Testing","Architecture"]},sidebar:"guides",next:{title:"Configurable applications",permalink:"/obsidian/docs/guides/configurableApplications"}},c={},l=[{value:"The problem",id:"the-problem",level:2},{value:"The solution",id:"the-solution",level:2},{value:"Step 1: Encapsulate interactions with third-party dependencies",id:"step-1-encapsulate-interactions-with-third-party-dependencies",level:3},{value:"Step 2: Convert dependencies to ES6 classes",id:"step-2-convert-dependencies-to-es6-classes",level:3},{value:"Step 3: Mock dependencies using jest-mock-extended",id:"step-3-mock-dependencies-using-jest-mock-extended",level:3},{value:"Wrapping up",id:"wrapping-up",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Tests are an integral part of any software project. They let you verify that your code works as expected and that it doesn't break when you make changes. We want our tests to be as clear as possible so that developers don't have to waste time figuring out what the test is doing our how to fix it when it fails."}),"\n",(0,s.jsx)(t.p,{children:"Obsidian promotes Object Oriented design, a paradigm that focuses on the relationships between objects and how they interact with each other. In this article we'll learn how adopting this approach lets us mock objects more easily and as a result improve the readability and maintainability of our tests."}),"\n",(0,s.jsxs)(t.admonition,{title:"On readable tests and developer velocity",type:"tip",children:[(0,s.jsx)(t.p,{children:'"Every time the developers have to stop and puzzle through a test to figure out what it means, they have less time left to spend on creating new features, and the team velocity drops."'}),(0,s.jsxs)(t.p,{children:["\u2014 ",(0,s.jsx)(t.a,{href:"https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627",children:"Growing Object-Oriented Software, Guided by Tests"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"the-problem",children:"The problem"}),"\n",(0,s.jsx)(t.p,{children:"The setup phase of a test is often the most complex part of the test. It involves creating test data, mocking dependencies and instantiating the unit-under-test. We've identified three common problems that make tests brittle, difficult to maintain, and hard to understand:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Partial mocks"})," - a unit test is meant to test a single unit of code in isolation. If a dependency is partially mocked, our test is no longer testing a single unit. A bug in the partially mocked dependency can cause this unit test to fail preventing us from quickly identifying the root cause of the failure."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Dependencies are introduced implicitly to the unit-under-test, usually via imports"})," - we should always create valid objects. If an object depends on another object, we should pass that dependency explicity in through the constructor. The constructor serves as the contract for the dependencies that a class requires to function. There's no point in creating partially working classes, and the constructor is used to enforces this constraint."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Manual mocks"})," - manually mocking dependencies is a tedious and error prone process. It's easy to forget to mock a dependency, or to mock it incorrectly."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"To illustrate these problems, let's look at a simple example."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"showLineNumbers",children:"describe('Example', () => {\n  const openURL = jest.fn();\n\n  let logger;\n  let foo;\n  let uut;\n\n  beforeEach(() => {\n    // Problem 1: Partial mocks\n    logger = require('./Logger');\n    logger.log = jest.fn();\n    const spy = jest.spyOn(logger, 'warn');\n\n    // Problem 2: Implicit dependencies.\n    // Our UUT uses Linking.openUrl so we mock it on the module level.\n    jest.mock('react-native', () => ({\n      Linking: {\n        openURL  \n      },\n    }));\n    // Problem 3: Manual mocks\n    foo = {\n      doSomething: jest.fn(),\n    }\n    uut = new Example(logger, foo);\n  });\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"the-solution",children:"The solution"}),"\n",(0,s.jsx)(t.p,{children:"To achieve our goal of reducing boilerplate and improving readability, we'll refactor the above example as follows:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Convert all dependencies to ES6 classes"})," - this will allow us to mock them using ",(0,s.jsx)(t.a,{href:"https://github.com/marchaos/jest-mock-extended",children:"jest-mock-extended"})," - a library that lets us create mock classes in a type-safe manner."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Pass dependencies in through the constructor"})," - we'll pass the dependencies explicitly to the unit-under-test. This step will require us to declare new classes that will encapsulate interactions with third-party libraries."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-1-encapsulate-interactions-with-third-party-dependencies",children:"Step 1: Encapsulate interactions with third-party dependencies"}),"\n",(0,s.jsx)(t.p,{children:"Implicit dependencies (dependencies introduced by importing a module) make it difficult to reason about the code and to test it. To avoid this problem, we'll create a new class that encapsulates interactions with the third-party library. We'll see how this approach lets us mock dependencies more easily."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="Encapsulating the Linking module in a new class responsible for opening URLs"',children:"import {Linking} from 'react-native';\n\nexport class UrlOpener {\n  public async openUrl(url: string) {\n    if (await Linking.canOpenURL(url)) {\n      await Linking.openURL(url);\n    } else {\n      throw new Error(`Can't open URL: ${url}`);\n    }\n  }\n}\n"})}),"\n",(0,s.jsxs)(t.admonition,{title:"On decoupling third party dependencies",type:"tip",children:[(0,s.jsx)(t.p,{children:'"Avoid littering direct calls to library classes in your code. You might think that you\'ll never change them, but that can become a self-fulfilling prophecy."'}),(0,s.jsxs)(t.p,{children:["\u2014 ",(0,s.jsx)(t.a,{href:"https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052",children:"Working Effectively with Legacy Code"})]})]}),"\n",(0,s.jsx)(t.h3,{id:"step-2-convert-dependencies-to-es6-classes",children:"Step 2: Convert dependencies to ES6 classes"}),"\n",(0,s.jsxs)(t.p,{children:["We'll convert the ",(0,s.jsx)(t.code,{children:"Logger"})," and ",(0,s.jsx)(t.code,{children:"Foo"})," classes to ES6 classes:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="Logger.ts"',children:"export class Logger {\n  public log(message: string) {\n    console.log(message);\n  }\n\n  public warn(message: string) {\n    console.warn(message);\n  }\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="Foo.ts"',children:"export class Foo {\n  public doSomething() {\n    console.log('doing something...');\n    setTimeout(() => {\n      console.log('done!');\n    }, 1000);\n  }\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-3-mock-dependencies-using-jest-mock-extended",children:"Step 3: Mock dependencies using jest-mock-extended"}),"\n",(0,s.jsxs)(t.p,{children:["When we mock a dependency using ",(0,s.jsx)(t.code,{children:"jest-mock-extended"}),", we get a mock object that has all the methods and properties of the original object. This means that we don't have to mock each method and property individually. And, because we eliminated the implicit dependency on the ",(0,s.jsx)(t.code,{children:"Linking"})," module, we can use this approach to mock it as well."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"showLineNumbers",children:"import {mock} from 'jest-mock-extended';\nimport {Logger} from './Logger';\nimport {Foo} from './Foo';\n\ndescribe('Example', () => {\n  let logger: Logger;\n  let foo: Foo;\n  let urlOpener: UrlOpener;\n  let uut: Example;\n\n  beforeEach(() => {\n    logger = mock<Logger>();\n    foo = mock<Foo>();\n    urlOpener = mock<UrlOpener>();\n    uut = new Example(logger, foo, urlOpener);\n  });\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"wrapping-up",children:"Wrapping up"}),"\n",(0,s.jsxs)(t.p,{children:["While we didn't use any API from ",(0,s.jsx)(t.code,{children:"Obsidian"})," in this refactor, this change was made possible due to how Obsidian influences the design of our code. Obsidian makes it easy to introduce classes to each other by passing them explicitly in through the constructor. This approach encourages us to split our code into smaller classes that are easier to test."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(4041);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);