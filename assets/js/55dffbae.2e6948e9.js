"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[8562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,b=u["".concat(s,".").concat(p)]||u[p]||c[p]||o;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},l="Trunk Based Development",i={unversionedId:"guidelines/trunk_based_development",id:"guidelines/trunk_based_development",title:"Trunk Based Development",description:"Trunk based development has become SOP to implement. Learn for more SOP Trunk Based Development here",source:"@site/docs/guidelines/trunk_based_development.md",sourceDirName:"guidelines",slug:"/guidelines/trunk_based_development",permalink:"/gits_cli_documentation/docs/guidelines/trunk_based_development",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"mySidebars",previous:{title:"Conventional Commits 1.0.0",permalink:"/gits_cli_documentation/docs/guidelines/conventional_commit"},next:{title:"Integration",permalink:"/gits_cli_documentation/docs/guidelines/integration"}},s={},m=[{value:"Summary",id:"summary",level:2},{value:"Shared branches off mainline/main/trunk are bad at any release cadence",id:"shared-branches-off-mainlinemaintrunk-are-bad-at-any-release-cadence",level:2},{value:"Trunk-Based Development For Smaller Teams",id:"trunk-based-development-for-smaller-teams",level:2},{value:"Scaled Trunk-Based Development",id:"scaled-trunk-based-development",level:2},{value:"Elaboration, Claims and Caveats",id:"elaboration-claims-and-caveats",level:2},{value:"References",id:"references",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trunk-based-development"},"Trunk Based Development"),(0,r.kt)("p",null,"Trunk based development has become SOP to implement. Learn for more SOP Trunk Based Development ",(0,r.kt)("a",{parentName:"p",href:"https://bit.ly/3FRzx2g"},"here")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"A source-control branching model, where developers collaborate on code in a single branch called \u2018trunk\u2019 *, resist any pressure to create other long-lived development branches by employing documented techniques. They therefore avoid merge hell, do not break the build, and live happily ever after."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"main for the Git community since 2020 (master with unsavory connotations before)")),(0,r.kt)("h2",{id:"shared-branches-off-mainlinemaintrunk-are-bad-at-any-release-cadence"},"Shared branches off mainline/main/trunk are bad at any release cadence"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://trunkbaseddevelopment.com/trunk1a.png",alt:"Shared branches off mainline/main/trunk are bad at any release cadence"})),(0,r.kt)("h2",{id:"trunk-based-development-for-smaller-teams"},"Trunk-Based Development For Smaller Teams"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://trunkbaseddevelopment.com/trunk1b.png",alt:"Trunk-Based Development For Smaller Teams"})),(0,r.kt)("h2",{id:"scaled-trunk-based-development"},"Scaled Trunk-Based Development"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://trunkbaseddevelopment.com/trunk1c.png",alt:"Scaled Trunk-Based Development"})),(0,r.kt)("h2",{id:"elaboration-claims-and-caveats"},"Elaboration, Claims and Caveats"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://trunkbaseddevelopment.com/ix_key.png",alt:"Elaboration, Claims and Caveats"})),(0,r.kt)("p",null,"Trunk-Based Development is a key enabler of Continuous Integration and by extension Continuous Delivery. When individuals on a team are committing their changes to the trunk multiple times a day it becomes easy to satisfy the core requirement of Continuous Integration that all team members commit to trunk at least once every 24 hours. This ensures the codebase is always releasable on demand and helps to make Continuous Delivery a reality."),(0,r.kt)("p",null,"The dividing line between small team Trunk-Based Development and scaled Trunk-Based Development is a subject to team size and commit rate consideration. The precise moment a dev team is no longer \u201csmall\u201d and has transitioned to \u201cscaled\u201d is subject to practitioner debate. Regardless, teams perform a full \u201cpre integrate\u201d build (compile, unit tests, integration tests) on their dev workstations before committing/pushing for others (or bots) to see."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://trunkbaseddevelopment.com/"},"https://trunkbaseddevelopment.com/"))))}u.isMDXComponent=!0}}]);