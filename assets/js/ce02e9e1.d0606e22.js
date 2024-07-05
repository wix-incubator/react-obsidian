"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9585],{4721:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(1085),a=n(1184);const r={sidebar_position:5,title:"Reactivity",tags:["Observable","MediatorObservable","useObserver","Reactivity"]},t=void 0,i={id:"documentation/usage/Reactivity",title:"Reactivity",description:"Obsidian is first and foremost a dependency injection library. But it also includes reactive programming features that allow you to observe changes in your data and react to them. This is useful for things like updating the UI when a value changes.",source:"@site/docs/documentation/usage/Reactivity.mdx",sourceDirName:"documentation/usage",slug:"/documentation/usage/Reactivity",permalink:"/obsidian/docs/documentation/usage/Reactivity",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/documentation/usage/Reactivity.mdx",tags:[{inline:!0,label:"Observable",permalink:"/obsidian/docs/tags/observable"},{inline:!0,label:"MediatorObservable",permalink:"/obsidian/docs/tags/mediator-observable"},{inline:!0,label:"useObserver",permalink:"/obsidian/docs/tags/use-observer"},{inline:!0,label:"Reactivity",permalink:"/obsidian/docs/tags/reactivity"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Reactivity",tags:["Observable","MediatorObservable","useObserver","Reactivity"]},sidebar:"docs2",previous:{title:"Classes",permalink:"/obsidian/docs/documentation/usage/Classes"},next:{title:"Service locator",permalink:"/obsidian/docs/documentation/usage/ServiceLocator"}},l={},c=[{value:"Observable",id:"observable",level:2},{value:"Create observables",id:"create-observables",level:3},{value:"Observe changes",id:"observe-changes",level:3},{value:"Observe changes in hooks or components",id:"observe-changes-in-hooks-or-components",level:4},{value:"Observe changes imperatively",id:"observe-changes-imperatively",level:4},{value:"Update Observables",id:"update-observables",level:3},{value:"Update Observables from hooks or components",id:"update-observables-from-hooks-or-components",level:4},{value:"Avoid recreating the initial observable",id:"avoid-recreating-the-initial-observable",level:3},{value:"Merge multiple observable sources",id:"merge-multiple-observable-sources",level:3}];function d(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Obsidian is first and foremost a dependency injection library. But it also includes reactive programming features that allow you to observe changes in your data and react to them. This is useful for things like updating the UI when a value changes."}),"\n",(0,o.jsx)(s.h2,{id:"observable",children:"Observable"}),"\n",(0,o.jsxs)(s.p,{children:["Making a class field reactive is as simple as wrapping it with the ",(0,o.jsx)(s.code,{children:"Observable"})," decorator. Observable is a data holder classes that also allows you to subscribe to changes in the data."]}),"\n",(0,o.jsx)(s.h3,{id:"create-observables",children:"Create observables"}),"\n",(0,o.jsxs)(s.p,{children:["In the example below, we declare a boolean observable called ",(0,o.jsx)(s.code,{children:"isLoggedIn"}),". We can then subscribe to changes in the ",(0,o.jsx)(s.code,{children:"isLoggedIn"})," value and update the UI accordingly."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"import { Observable } from 'react-obsidian';\n\nclass UserService {\n  public isLoggedIn = new Observable(false); // The initial value is false\n}\n\nexport default new UserService();\n"})}),"\n",(0,o.jsx)(s.h3,{id:"observe-changes",children:"Observe changes"}),"\n",(0,o.jsx)(s.h4,{id:"observe-changes-in-hooks-or-components",children:"Observe changes in hooks or components"}),"\n",(0,o.jsxs)(s.p,{children:["Once you have declared an observable, you can subscribe to changes in the value by using the ",(0,o.jsx)(s.code,{children:"useObserver"})," hook. This hook will return the current value of the observable and subscribe to changes in the value. When the value changes, the hook will re-render the component."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"import { useObserver } from 'react-obsidian';\nimport userService from './UserService';\n\nconst useLogin = () => {\n  const [isLoggedIn] = useObserver(userService.isLoggedIn);\n\n  return {isLoggedIn};\n}\n"})}),"\n",(0,o.jsx)(s.h4,{id:"observe-changes-imperatively",children:"Observe changes imperatively"}),"\n",(0,o.jsxs)(s.p,{children:["You can also subscribe to changes in an observable imperatively by calling the ",(0,o.jsx)(s.code,{children:"subscribe"})," method on the observable. This method returns a function that can be called to unsubscribe from the observable."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"import userService from './UserService';\n\nconst unsubscribe = userService.isLoggedIn.subscribe((isLoggedIn: boolean) => {\n  // Do something with the isLoggedIn value\n});\n"})}),"\n",(0,o.jsx)(s.h3,{id:"update-observables",children:"Update Observables"}),"\n",(0,o.jsxs)(s.p,{children:["Observables expose the data they hold via a ",(0,o.jsx)(s.code,{children:"value"})," property. You can update the value of an observable by setting the value of the ",(0,o.jsx)(s.code,{children:"value"})," property.\nThis will also trigger any subscribers to the observable."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"import userService from './UserService';\n\nuserService.isLoggedIn.value = true; // Update the value and notify all subscribers\n"})}),"\n",(0,o.jsx)(s.h4,{id:"update-observables-from-hooks-or-components",children:"Update Observables from hooks or components"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"useObserver"})," hook also returns a setter function that can be used to update the value of the observable."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"import { useObserver } from 'react-obsidian';\nimport userService from './UserService';\n\nconst useLogin = () => {\n  const [isLoggedIn, setIsLoggedIn] = useObserver(userService.isLoggedIn);\n  const onLogoutButtonPress = useCallback(() => {\n    setIsLoggedIn(false);\n  }, [setIsLoggedIn]);\n\n  return {isLoggedIn, onLogoutButtonPress};\n}\n"})}),"\n",(0,o.jsx)(s.h3,{id:"avoid-recreating-the-initial-observable",children:"Avoid recreating the initial observable"}),"\n",(0,o.jsxs)(s.p,{children:["When using the ",(0,o.jsx)(s.code,{children:"useObserver"})," hook, it is important to avoid recreating the initial observable."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",metastring:'title="Avoid instantiating observables in hooks"',children:"const useLogin = () => {\n  const [isLoggedIn] = useObserver(new Observable(false));\n}\n"})}),"\n",(0,o.jsx)(s.p,{children:"Even if the value of the observable is the same, this can cause unexpected behavior since it's instantiated on every render."}),"\n",(0,o.jsx)(s.p,{children:"To solve this, you can pass a generator function to the useObserver hook instead:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"const useLogin = () => {\n  const [isLoggedIn] = useObserver(() => new Observable(false));\n}\n"})}),"\n",(0,o.jsx)(s.p,{children:"If you pass a function to the useObserver hook, it will only be called on the first render. This ensures that the observable is only instantiated once."}),"\n",(0,o.jsx)(s.h3,{id:"merge-multiple-observable-sources",children:"Merge multiple observable sources"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"MediatorObservable"})," is a special type of observable that allows you to merge multiple observable sources into a single observable. This is useful for creating side effect from one or more observables."]}),"\n",(0,o.jsxs)(s.p,{children:["In the example below, we create a ",(0,o.jsx)(s.code,{children:"MediatorObservable"})," called ",(0,o.jsx)(s.code,{children:"downloadStatus"})," that will be updated when either the ",(0,o.jsx)(s.code,{children:"networkConditions"})," or ",(0,o.jsx)(s.code,{children:"batteryLevel"})," observables are updated. We can then subscribe to changes in the ",(0,o.jsx)(s.code,{children:"downloadStatus"})," observable to update the UI or perform other side effects."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-ts",children:"import { MediatorObservable, Observable } from 'react-obsidian';\n\nconst networkConditions = new Observable<'poor' | 'strong'>();\nconst batteryLevel = new Observable<'low' | 'normal'>();\n\nconst downloadStatus = new MediatorObservable<'paused' | 'active'>('active')\n  .addSource(networkConditions, (condition: 'poor' | 'strong') => {\n    this.value = condition === 'poor' ? 'paused' : 'active';\n  })\n  .addSource(batteryLevel, (level: 'low' | 'normal') => {\n    this.value = level === 'low' ? 'paused' : 'active';\n  });\n\n"})})]})}function b(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1184:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>i});var o=n(4041);const a={},r=o.createContext(a);function t(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);