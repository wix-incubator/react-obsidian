"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),i=n(6010),r=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:r,values:u,groupId:m,className:h}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===r?r:r??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[j,w]=(0,o.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==j&&f.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==j&&(C(t),w(a),null!=m&&y(m,String(a)))},O=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>N.push(e),onKeyDown:O,onClick:x},r,{className:(0,i.Z)("tabs__item",d,r?.className,{"tabs__item--active":j===t})}),n??t)}))),t?(0,o.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},7671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=n(5488),r=n(5162);const l={sidebar_position:1},s="Introduction",c={unversionedId:"documentation/documentation",id:"documentation/documentation",title:"Introduction",description:"Obsidian is a dependency injection container with first-class support for React and React Native applications.",source:"@site/docs/documentation/documentation.mdx",sourceDirName:"documentation",slug:"/documentation/",permalink:"/obsidian/docs/documentation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/documentation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs2",next:{title:"Installation",permalink:"/obsidian/docs/documentation/installation"}},p={},d=[{value:"The 2 steps tutorial for injecting dependencies with Obsidian",id:"the-2-steps-tutorial-for-injecting-dependencies-with-obsidian",level:2},{value:"Step 1: Declare how dependencies should be created",id:"step-1-declare-how-dependencies-should-be-created",level:3},{value:"Step 2: Inject the dependencies",id:"step-2-inject-the-dependencies",level:3},{value:"Features",id:"features",level:2},{value:"Design principles",id:"design-principles",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Obsidian is a dependency injection container with first-class support for React and React Native applications."),(0,o.kt)("p",null,"Get started by ",(0,o.kt)("strong",{parentName:"p"},"following the installation guide")," bellow."),(0,o.kt)("h2",{id:"the-2-steps-tutorial-for-injecting-dependencies-with-obsidian"},"The 2 steps tutorial for injecting dependencies with Obsidian"),(0,o.kt)("h3",{id:"step-1-declare-how-dependencies-should-be-created"},"Step 1: Declare how dependencies should be created"),(0,o.kt)("p",null,"Define a singleton graph that is instantiated once and is retained throughout the lifespan of the application. All dependencies it provides are also singletons. The graph bellow provides two dependencies that can be injected: ",(0,o.kt)("inlineCode",{parentName:"p"},"fooService")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"barManager"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="A singleton graph that provides two dependencies"',title:'"A',singleton:!0,graph:!0,that:!0,provides:!0,two:!0,'dependencies"':!0},"import {Singleton, Graph, ObjectGraph, Provides} from 'react-obsidian';\n\n\n@Singleton() @Graph()\nexport class ApplicationGraph extends ObjectGraph {\n\n // fooService requires a barManager so it receives one as a parameter.\n  @Provides()\n  fooService(barManager: BarManager): FooService {\n    return new FooService(barManager);\n  }\n\n\n  @Provides()\n  barManager(): BarManager {\n    return new BarManager();\n  }\n}\n")),(0,o.kt)("h3",{id:"step-2-inject-the-dependencies"},"Step 2: Inject the dependencies"),(0,o.kt)("p",null,"Obsidian can inject dependencies into components, hooks, and classes."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"functionalComponent",label:"Functional component injection",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Injecting React functional components essentially revolves around two things: declaring the required dependencies in the hook's prototype and exporting an injected hook using the ",(0,o.kt)("inlineCode",{parentName:"p"},"injectComponent")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'},"import {DependenciesOf, injectComponent} from 'react-obsidian';\nimport {ApplicationGraph} from './ApplicationGraph';\n\n// 1. Declare which dependencies should be injected.\ntype Props = DependenciesOf<ApplicationGraph, 'fooService'>; // {fooService: FooService}\n\n// 2. Implement the component.\nconst myComponent = ({fooService}: Props) => {\n  // Do something useful with fooService\n}\n\n// 3. Export the injected component.\nexport default injectComponent(myComponent, ApplicationGraph);\n")),(0,o.kt)("p",null,"Now we can use the injected component without providing its dependencies manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="SomeComponent.tsx"',title:'"SomeComponent.tsx"'},"import MyComponent from './MyComponent';\n\nconst SomeComponent = () => {\n  // 4. Render the component - its dependencies are resolved automatically by Obsidian.\n  return <MyComponent />;\n}\n"))),(0,o.kt)(r.Z,{value:"hook",label:"Hook injection",mdxType:"TabItem"},(0,o.kt)("p",null,"Hooks are injected in a similar way to functional components. The only difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"injectHook")," function is used instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"injectComponent"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="MyHook.ts"',title:'"MyHook.ts"'},"import {DependenciesOf, injectHook} from 'react-obsidian';\nimport {ApplicationGraph} from './ApplicationGraph';\n\n// 1. Declare which dependencies should be injected.\ntype Props = DependenciesOf<ApplicationGraph, 'fooService'>; // {fooService: FooService}\n\n// 2. Implement the hook.\nconst myHook = ({fooService}: Props) => {\n  // Do something useful with fooService\n}\n\n// 3. Export the injected hook.\nexport default injectHook(myHook, ApplicationGraph);\n")),(0,o.kt)("p",null,"The injected hook can be used without providing its dependencies manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="SomeComponent.tsx"',title:'"SomeComponent.tsx"'},"import myHook from './MyHook';\n\nconst SomeComponent = () => {\n  // 4. Use the hook without providing any dependencies manually - they are injected automatically.\n  myHook();\n\n  return <>Obsidian is awesome!</>;\n}\n"))),(0,o.kt)(r.Z,{value:"classComponent",label:"Class component injection",mdxType:"TabItem"},(0,o.kt)("p",null,"To inject a class, annotate it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Injectable")," decorator. The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Injectable")," decorator takes a single parameter - the graph that should be used to resolve the dependencies. Declare the dependencies as class members and annotate them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="MyComponent.tsx"',title:'"MyComponent.tsx"'},"import {Injectable, Inject} from 'react-obsidian';\nimport {ApplicationGraph} from './ApplicationGraph';\n\n@Injectable(ApplicationGraph)\nexport MyClassComponent extends React.Component {\n  @Inject() private fooService!: FooService;\n\n}\n")),(0,o.kt)("p",null,"Render the injected component. Obsidian resolves the required dependencies automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="SomeComponent.tsx"',title:'"SomeComponent.tsx"'},"import MyComponent from './MyComponent';\n\nconst SomeComponent = () => {\n  // 4. Render the component - its dependencies are resolved automatically by Obsidian.\n  return <MyComponent />;\n}\n"))),(0,o.kt)(r.Z,{value:"class",label:"Class constructor injection",mdxType:"TabItem"},(0,o.kt)("p",null,"To inject a class, annotate it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Injectable")," decorator. The ",(0,o.kt)("inlineCode",{parentName:"p"},"@Injectable")," decorator takes a single parameter - the graph that should be used to resolve the dependencies.\nDeclare the dependencies as constructor parameters and annotate them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Inject")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="MyClass.tsx"',title:'"MyClass.tsx"'},"import {Injectable, Inject} from 'react-obsidian';\nimport {ApplicationGraph} from './ApplicationGraph';\n\n@Injectable(ApplicationGraph)\nexport MyClass {\n  constructor (fooService?: FooService);\n  constructor(@Inject() private fooService: FooService) { }\n}\n")),(0,o.kt)("p",null,"Now we can use the injected class without providing its dependencies manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const myClass = new MyClass();\n")),(0,o.kt)("p",null,"Of course, passing dependencies explicitly is still possible:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const myClass = new MyClass(new FooService());\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u269b\ufe0f Inject all React constructs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Functional components"),(0,o.kt)("li",{parentName:"ul"},"Hooks"),(0,o.kt)("li",{parentName:"ul"},"Class components"))),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udee0 Improve code structure",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Easily write object-oriented code with Single Responsibility in mind"),(0,o.kt)("li",{parentName:"ul"},"Eliminate circular dependencies"),(0,o.kt)("li",{parentName:"ul"},"Avoid implicit dependencies to make your code easier to reason about"))),(0,o.kt)("li",{parentName:"ul"},"\u2764\ufe0f Developer experience",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Seamlessly integrates into existing projects"),(0,o.kt)("li",{parentName:"ul"},"Easy to adopt gradually"),(0,o.kt)("li",{parentName:"ul"},"Scales well"),(0,o.kt)("li",{parentName:"ul"},"Idiomatic API that's easy to understand")))),(0,o.kt)("h2",{id:"design-principles"},"Design principles"),(0,o.kt)("p",null,"React Obsidian is guided by the principles of the Dependency Injection pattern, but does not strictly follow them. We allowed ourselves a degree of freedom when designing the library in order to reduce boilerplate code and library footprint."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy to start")," - Obsidian requires very little code to get you started. Once you declare a graph, using it to inject dependencies requires as little as two lines of code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intuitive API")," - The API should be verbose and understandable even to new users without prior experience with Dependency Injection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Minimal boilerplate")," - Require the bare minimum in order to construct dependencies and resolve them. ")))}m.isMDXComponent=!0}}]);