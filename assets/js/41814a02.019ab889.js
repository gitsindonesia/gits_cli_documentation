"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[2864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:r,o[1]=d;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},o="Introduction",d={unversionedId:"guidelines/introduction",id:"guidelines/introduction",title:"Introduction",description:"Different modules specified in the design document are coded in the Coding phase according to the module specification. The main goal of the coding phase is to code from the design document prepared after the design phase through a high-level language and then to unit test this code.",source:"@site/docs/guidelines/introduction.md",sourceDirName:"guidelines",slug:"/guidelines/introduction",permalink:"/gits_cli_documentation/docs/guidelines/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebars",next:{title:"Coding Guidelines",permalink:"/gits_cli_documentation/docs/guidelines/coding_guidelines"}},s={},l=[{value:"What Are Coding Rules and Guidelines?",id:"what-are-coding-rules-and-guidelines",level:2},{value:"Purpose of Having Coding Standards",id:"purpose-of-having-coding-standards",level:2},{value:"Advantages of Coding Guidelines",id:"advantages-of-coding-guidelines",level:2},{value:"References",id:"references",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Different modules specified in the design document are coded in the Coding phase according to the module specification. The main goal of the coding phase is to code from the design document prepared after the design phase through a high-level language and then to unit test this code."),(0,r.kt)("p",null,"Good software development organizations want their programmers to maintain to some well-defined and standard style of coding called coding standards. They usually make their own coding standards and guidelines depending on what suits their organization best and based on the types of software they develop. It is very important for the programmers to maintain the coding standards otherwise the code will be rejected during code review."),(0,r.kt)("h2",{id:"what-are-coding-rules-and-guidelines"},"What Are Coding Rules and Guidelines?"),(0,r.kt)("p",null,"Coding rules and guidelines ensure that software is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Safe"),": It can be used without causing harm."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Secure"),": It can\u2019t be hacked."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reliable"),": It functions as it should, every time."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testable"),": It can be tested at the code level."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Maintainable"),": It can be maintained, even as your codebase grows."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Portable"),": It works the same in every environment.")),(0,r.kt)("h2",{id:"purpose-of-having-coding-standards"},"Purpose of Having Coding Standards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A coding standard gives a uniform appearance to the codes written by different engineers."),(0,r.kt)("li",{parentName:"ul"},"It improves readability, and maintainability of the code and it reduces complexity also."),(0,r.kt)("li",{parentName:"ul"},"It helps in code reuse and helps to detect error easily."),(0,r.kt)("li",{parentName:"ul"},"It promotes sound programming practices and increases efficiency of the programmers.")),(0,r.kt)("h2",{id:"advantages-of-coding-guidelines"},"Advantages of Coding Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Coding guidelines increase the efficiency of the software and reduces the development time."),(0,r.kt)("li",{parentName:"ul"},"Coding guidelines help in detecting errors in the early phases, so it helps to reduce the extra cost incurred by the software project."),(0,r.kt)("li",{parentName:"ul"},"If coding guidelines are maintained properly, then the software code increases readability and understandability thus it reduces the complexity of the code."),(0,r.kt)("li",{parentName:"ul"},"It reduces the hidden cost for developing the software.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/coding-standards-and-guidelines/"},"https://www.geeksforgeeks.org/coding-standards-and-guidelines/"))))}u.isMDXComponent=!0}}]);