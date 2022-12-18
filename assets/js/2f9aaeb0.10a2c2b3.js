"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),i=n(7294),r=n(6010),o=n(2389),l=n(7392),s=n(7094),c=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:h,className:m}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[v,C]=(0,i.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==v&&f.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==v&&(T(t),C(a),null!=h&&w(h,String(a)))},P=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>N.push(e),onKeyDown:P,onClick:x},o,{className:(0,r.Z)("tabs__item",u,o?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,i.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function h(e){const t=(0,o.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},8882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),r=n(5488),o=n(5162);const l={sidebar_position:2,title:"Configurable applications",toc_max_heading_level:4},s=void 0,c={unversionedId:"guides/configurableApplications",id:"guides/configurableApplications",title:"Configurable applications",description:"Designing applications to be flexible and configurable makes them more tolerable to changing requirements. The ability to change code frequently and quickly is one of the most important KPIs of any development team. This is generally made possible by a design that facilitates small pull requests, that modify a minimal amount of code across a minimal number of files.",source:"@site/docs/guides/configurableApplications.mdx",sourceDirName:"guides",slug:"/guides/configurableApplications",permalink:"/obsidian/docs/guides/configurableApplications",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/configurableApplications.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configurable applications",toc_max_heading_level:4},sidebar:"guides",previous:{title:"Mocking dependencies in unit tests",permalink:"/obsidian/docs/guides/mockDependencies"}},p={},u=[{value:"Configuring applications with providers",id:"configuring-applications-with-providers",level:2},{value:"Example: Interchangeable dependencies according to external configurations",id:"example-interchangeable-dependencies-according-to-external-configurations",level:3},{value:"Step 1: Declare a graph",id:"step-1-declare-a-graph",level:4},{value:"Step 2: Implement another HTTP client",id:"step-2-implement-another-http-client",level:4},{value:"Step 3: Make the clients interchangeable",id:"step-3-make-the-clients-interchangeable",level:4},{value:"Step 4: Return the correct client according to the configuration",id:"step-4-return-the-correct-client-according-to-the-configuration",level:4},{value:"Conclusion and after thoughts",id:"conclusion-and-after-thoughts",level:4}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Designing applications to be flexible and configurable makes them more tolerable to changing requirements. The ability to change code frequently and quickly is one of the most important KPIs of any development team. This is generally made possible by a design that facilitates small pull requests, that modify a minimal amount of code across a minimal number of files."),(0,i.kt)("p",null,"The Dependency Injection pattern helps us write flexible code that is more tolerable to change by addressing three key concerns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How can a class be ",(0,i.kt)("ins",null,"independent")," from the creation of the objects it depends on?"),(0,i.kt)("li",{parentName:"ul"},"How can an application, and the objects it uses support different ",(0,i.kt)("ins",null,"configurations"),"?"),(0,i.kt)("li",{parentName:"ul"},"How can the ",(0,i.kt)("ins",null,"behavior")," of a piece of code be changed without editing it directly?")),(0,i.kt)("p",null,"In this article we will learn how Obsidian can help us address these concerns."),(0,i.kt)("h2",{id:"configuring-applications-with-providers"},"Configuring applications with providers"),(0,i.kt)("p",null,"When using Obsidian, dependencies are declared and constructed in classes called Graphs. Each dependency is constructed by a method called a provider which acts as a ",(0,i.kt)("strong",{parentName:"p"},"Seam"),". Lets see how we can leverage them to make our apps flexible and configurable."),(0,i.kt)("admonition",{title:"What are Seams?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A seam is a place where you can alter behavior in your program without editing in that place."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052"},"Working Effectively with Legacy Code")," by Michael Feathers")),(0,i.kt)("h3",{id:"example-interchangeable-dependencies-according-to-external-configurations"},"Example: Interchangeable dependencies according to external configurations"),(0,i.kt)("p",null,"In this example we'll learn how to change the concrete object returned by a provider according to an external configuration. In a real life scenario, the external configuration would represent an A/B test or a feature toggle."),(0,i.kt)("h4",{id:"step-1-declare-a-graph"},"Step 1: Declare a graph"),(0,i.kt)("p",null,"Lets declare a simple graph that provides a single dependency: an HTTP client used to make network requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Singleton() @Graph()\nclass ApplicationGraph extends ObjectGraph {\n  @Provides()\n  httpClient(): HttpClient {\n    return new HttpClient();\n  }\n}\n")),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient")," is using the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," API to make network requests and for the sake of simplicity, it only supports ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class HttpClient {\n  async get(url: string): Promise<any> {\n    const response = await fetch(url, { method: 'GET' });\n    return await response.json();\n  }\n\n  async post(url: string, body: any): Promise<any> {\n    const response = fetch(url, { method: 'POST', body: JSON.stringify(body) });\n    return await response.json();\n  }\n}\n")),(0,i.kt)("h4",{id:"step-2-implement-another-http-client"},"Step 2: Implement another HTTP client"),(0,i.kt)("p",null,"Just like our current HTTP client, the new client will only support ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests. The only difference is that it will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"axios")," library to make network requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class AxiosClient {\n  async get(url: string): Promise<any> {\n    const response = await axios.get(url);\n    return response.data;\n  }\n\n  async post(url: string, body: any): Promise<any> {\n    const response = await axios.post(url, body);\n    return response.data;\n  }\n}\n")),(0,i.kt)("h4",{id:"step-3-make-the-clients-interchangeable"},"Step 3: Make the clients interchangeable"),(0,i.kt)("p",null,"To easily switch between the two clients, we'll use a well known principle called ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dependency_inversion_principle"},"Dependency Inversion"),". This principle states that high-level modules should not depend on low-level modules. Both the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"AxiosClient")," are low-level modules, so we'll make the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationGraph")," depend on an abstraction called ",(0,i.kt)("inlineCode",{parentName:"p"},"NetworkClient")," instead."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface NetworkClient {\n  get(url: string): Promise<any>;\n  post(url: string, body: any): Promise<any>;\n}\n")),(0,i.kt)("p",null,"The two network clients will implement this interface:"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"http",label:"HttpClient",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class HttpClient implements NetworkClient {\n  override async get(url: string): Promise<any> {\n    const response = await fetch(url, { method: 'GET' });\n    return await response.json();\n  }\n\n  override async post(url: string, body: any): Promise<any> {\n    const response = fetch(url, { method: 'POST', body: JSON.stringify(body) });\n    return await response.json();\n  }\n}\n"))),(0,i.kt)(o.Z,{value:"axios",label:"AxiosClient",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class AxiosClient implements NetworkClient {\n  override async get(url: string): Promise<any> {\n    const response = await axios.get(url);\n    return response.data.json;\n  }\n\n  override async post(url: string, body: any): Promise<any> {\n    const response = await axios.post(url, body);\n    return response.data.json;\n  }\n}\n")))),(0,i.kt)("h4",{id:"step-4-return-the-correct-client-according-to-the-configuration"},"Step 4: Return the correct client according to the configuration"),(0,i.kt)("p",null,"To determine which client to return, we'll use a new dependency called ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfig")," which will be used to access the application's configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Singleton() @Graph()\nclass ApplicationGraph extends ObjectGraph {\n  @Provides()\n  httpClient(appConfig: AppConfig): NetworkClient {\n    return appConfig.shouldUseAxiosClient() ? new AxiosClient() : new HttpClient();\n  }\n\n  @Provides()\n  appConfig(): AppConfig {\n    return new AppConfig();\n  }\n}\n")),(0,i.kt)("p",null,"We're done! Now we can easily control which network client to use according the application's configuration."),(0,i.kt)("h4",{id:"conclusion-and-after-thoughts"},"Conclusion and after thoughts"),(0,i.kt)("p",null,"In this example we learned how to make dependencies interchangeable, and how to control which dependency to use according to an external configuration. This is a very common use case in large scale applications where we need an extra layer of assurance that changes can be easily rolled back in case of a bug."),(0,i.kt)("p",null,"Two important things to note about this example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The provider's return type was changed to ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkClient")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient"),". This change could lead to further changes in the codebase, but it's a small price to pay for the flexibility it provides."),(0,i.kt)("li",{parentName:"ol"},"We wanted to keep the example short and easy to follow, so the two HTTP clients are simplified implementations of an actual client. They also share the same API which made it easy to implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"NetworkClient")," interface and have the two clients implement it. If the two clients had different APIs, perhaps because they supported typed request options and responses, then we would have to create common interfaces that would represent the common parts of the two APIs and adapters that would convert the two clients' APIs to the common API and vice versa.")))}h.isMDXComponent=!0}}]);