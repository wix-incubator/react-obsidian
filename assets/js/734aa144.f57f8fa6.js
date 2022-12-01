"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[465],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5437:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1,title:"Graph middlewares"},i=void 0,l={unversionedId:"meta/middlewares",id:"meta/middlewares",title:"Graph middlewares",description:'Graph middlewares let you plug into the graph creation process and modify the graph in any way you want. This is useful when working on large scale applications where "observability" is a key concern. For example, you can use a middleware to swizzle providers, add logging, or even add a new provider to the graph.',source:"@site/docs/meta/middlewares.mdx",sourceDirName:"meta",slug:"/meta/middlewares",permalink:"/obsidian/docs/meta/middlewares",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/meta/middlewares.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Graph middlewares"},sidebar:"tutorialSidebar",previous:{title:"Service locator",permalink:"/obsidian/docs/usage/ServiceLocator"},next:{title:"Clearing graphs",permalink:"/obsidian/docs/meta/clearingGraphs"}},s={},d=[{value:"Example: adding a logging middleware",id:"example-adding-a-logging-middleware",level:2}],p={toc:d};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Graph middlewares let you plug into the graph creation process and modify the graph in any way you want. This is useful when working on large scale applications where "observability" is a key concern. For example, you can use a middleware to swizzle providers, add logging, or even add a new provider to the graph.'),(0,a.kt)("p",null,"Middleware follow the Chain of Responsibility pattern and therefore must always return a graph, either by creating one explicitly or by returning the instance created by another member in the resolve chain."),(0,a.kt)("h2",{id:"example-adding-a-logging-middleware"},"Example: adding a logging middleware"),(0,a.kt)("p",null,"The following example demonstrates how to add a middleware that's used for logging purposes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { GraphMiddleware } from 'react-obsidian';\n\nconst loggingMiddleware = new class extends GraphMiddleware {\n      resolve<Props>(resolveChain: GraphResolveChain, Graph: Constructable<T>, props?: Props) {\n        const t1 = Date.now();\n        const graph = resolveChain.proceed(Graph, props);\n        const t2 = Date.now();\n        console.log(`Graph created in ${t2 - t1} milliseconds`);\n        return graph;\n      }\n    }();\n\nObsidian.addGraphMiddleware(loggingMiddleware);\n")))}c.isMDXComponent=!0}}]);