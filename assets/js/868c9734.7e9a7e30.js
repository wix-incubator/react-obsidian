"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,title:"Clearing graphs"},i=void 0,s={unversionedId:"meta/clearingGraphs",id:"meta/clearingGraphs",title:"Clearing graphs",description:"Graphs can be cleared by invoking the Obsidian.clearGraphs() function. This is useful in tests or when you need to reset the system to it's original state, for example after a user logs out.",source:"@site/docs/meta/clearingGraphs.mdx",sourceDirName:"meta",slug:"/meta/clearingGraphs",permalink:"/obsidian/docs/meta/clearingGraphs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/meta/clearingGraphs.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Clearing graphs"},sidebar:"tutorialSidebar",previous:{title:"Graph middlewares",permalink:"/obsidian/docs/meta/middlewares"}},l={},c=[{value:"Clearing graphs automatically during execution of Jest tests",id:"clearing-graphs-automatically-during-execution-of-jest-tests",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Graphs can be cleared by invoking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Obsidian.clearGraphs()")," function. This is useful in tests or when you need to reset the system to it's original state, for example after a user logs out."),(0,a.kt)("h4",{id:"clearing-graphs-automatically-during-execution-of-jest-tests"},"Clearing graphs automatically during execution of Jest tests"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.setup.js")," file and add it to ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#setupfilesafterenv-array"},"setupFilesAfterEnv"),". Then, import the following file when ensures graphs are cleared before each test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import 'react-obsidian/clearGraphs';\n")))}u.isMDXComponent=!0}}]);