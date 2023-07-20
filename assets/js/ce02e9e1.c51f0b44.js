"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,v=d["".concat(l,".").concat(p)]||d[p]||b[p]||o;return n?a.createElement(v,s(s({ref:t},u),{},{components:n})):a.createElement(v,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5,title:"Reactivity"},s=void 0,i={unversionedId:"documentation/usage/Reactivity",id:"documentation/usage/Reactivity",title:"Reactivity",description:"Obsidian is first and foremost a dependency injection library. But it also includes reactive programming features that allow you to observe changes in your data and react to them. This is useful for things like updating the UI when a value changes.",source:"@site/docs/documentation/usage/Reactivity.mdx",sourceDirName:"documentation/usage",slug:"/documentation/usage/Reactivity",permalink:"/obsidian/docs/documentation/usage/Reactivity",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/usage/Reactivity.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Reactivity"},sidebar:"docs2",previous:{title:"Classes",permalink:"/obsidian/docs/documentation/usage/Classes"},next:{title:"Service locator",permalink:"/obsidian/docs/documentation/usage/ServiceLocator"}},l={},c=[{value:"Observable",id:"observable",level:2},{value:"Create observables",id:"create-observables",level:3},{value:"Observe changes",id:"observe-changes",level:3},{value:"Observe changes in hooks or components",id:"observe-changes-in-hooks-or-components",level:4},{value:"Observe changes imperatively",id:"observe-changes-imperatively",level:4},{value:"Update Observables",id:"update-observables",level:3},{value:"Update Observables from hooks or components",id:"update-observables-from-hooks-or-components",level:4},{value:"Avoid recreating the initial observable",id:"avoid-recreating-the-initial-observable",level:3},{value:"Merge multiple observable sources",id:"merge-multiple-observable-sources",level:3}],u={toc:c};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Obsidian is first and foremost a dependency injection library. But it also includes reactive programming features that allow you to observe changes in your data and react to them. This is useful for things like updating the UI when a value changes."),(0,r.kt)("h2",{id:"observable"},"Observable"),(0,r.kt)("p",null,"Making a class field reactive is as simple as wrapping it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable")," decorator. Observable is a data holder classes that also allows you to subscribe to changes in the data."),(0,r.kt)("h3",{id:"create-observables"},"Create observables"),(0,r.kt)("p",null,"In the example below, we declare a boolean observable called ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoggedIn"),". We can then subscribe to changes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"isLoggedIn")," value and update the UI accordingly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Observable } from 'react-obsidian';\n\nclass UserService {\n  public isLoggedIn = new Observable(false); // The initial value is false\n}\n\nexport default new UserService();\n")),(0,r.kt)("h3",{id:"observe-changes"},"Observe changes"),(0,r.kt)("h4",{id:"observe-changes-in-hooks-or-components"},"Observe changes in hooks or components"),(0,r.kt)("p",null,"Once you have declared an observable, you can subscribe to changes in the value by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useObserver")," hook. This hook will return the current value of the observable and subscribe to changes in the value. When the value changes, the hook will re-render the component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useObserver } from 'react-obsidian';\nimport userService from './UserService';\n\nconst useLogin = () => {\n  const [isLoggedIn] = useObserver(userService.isLoggedIn);\n\n  return {isLoggedIn};\n}\n")),(0,r.kt)("h4",{id:"observe-changes-imperatively"},"Observe changes imperatively"),(0,r.kt)("p",null,"You can also subscribe to changes in an observable imperatively by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method on the observable. This method returns a function that can be called to unsubscribe from the observable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import userService from './UserService';\n\nconst unsubscribe = userService.isLoggedIn.subscribe((isLoggedIn: boolean) => {\n  // Do something with the isLoggedIn value\n});\n")),(0,r.kt)("h3",{id:"update-observables"},"Update Observables"),(0,r.kt)("p",null,"Observables expose the data they hold via a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property. You can update the value of an observable by setting the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property.\nThis will also trigger any subscribers to the observable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import userService from './UserService';\n\nuserService.isLoggedIn.value = true; // Update the value and notify all subscribers\n")),(0,r.kt)("h4",{id:"update-observables-from-hooks-or-components"},"Update Observables from hooks or components"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useObserver")," hook also returns a setter function that can be used to update the value of the observable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useObserver } from 'react-obsidian';\nimport userService from './UserService';\n\nconst useLogin = () => {\n  const [isLoggedIn, setIsLoggedIn] = useObserver(userService.isLoggedIn);\n  const onLogoutButtonPress = useCallback(() => {\n    setIsLoggedIn(false);\n  }, [setIsLoggedIn]);\n\n  return {isLoggedIn, onLogoutButtonPress};\n}\n")),(0,r.kt)("h3",{id:"avoid-recreating-the-initial-observable"},"Avoid recreating the initial observable"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useObserver")," hook, it is important to avoid recreating the initial observable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Avoid instantiating observables in hooks"',title:'"Avoid',instantiating:!0,observables:!0,in:!0,'hooks"':!0},"const useLogin = () => {\n  const [isLoggedIn] = useObserver(new Observable(false));\n}\n")),(0,r.kt)("p",null,"Even if the value of the observable is the same, this can cause unexpected behavior since it's instantiated on every render."),(0,r.kt)("p",null,"To solve this, you can pass a generator function to the useObserver hook instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const useLogin = () => {\n  const [isLoggedIn] = useObserver(() => new Observable(false));\n}\n")),(0,r.kt)("p",null,"If you pass a function to the useObserver hook, it will only be called on the first render. This ensures that the observable is only instantiated once."),(0,r.kt)("h3",{id:"merge-multiple-observable-sources"},"Merge multiple observable sources"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MediatorObservable")," is a special type of observable that allows you to merge multiple observable sources into a single observable. This is useful for creating side effect from one or more observables."),(0,r.kt)("p",null,"In the example below, we create a ",(0,r.kt)("inlineCode",{parentName:"p"},"MediatorObservable")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"downloadStatus")," that will be updated when either the ",(0,r.kt)("inlineCode",{parentName:"p"},"networkConditions")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"batteryLevel")," observables are updated. We can then subscribe to changes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"downloadStatus")," observable to update the UI or perform other side effects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MediatorObservable, Observable } from 'react-obsidian';\n\nconst networkConditions = new Observable<'poor' | 'strong'>();\nconst batteryLevel = new Observable<'low' | 'normal'>();\n\nconst downloadStatus = new MediatorObservable<'paused' | 'active'>('active')\n  .addSource(networkConditions, (condition: 'poor' | 'strong') => {\n    this.value = condition === 'poor' ? 'paused' : 'active';\n  })\n  .addSource(batteryLevel, (level: 'low' | 'normal') => {\n    this.value = level === 'low' ? 'paused' : 'active';\n  });\n\n")))}b.isMDXComponent=!0}}]);