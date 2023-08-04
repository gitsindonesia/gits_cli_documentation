"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[1943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:10},i="Upgrade",o={unversionedId:"gits_cli/project/upgrade",id:"gits_cli/project/upgrade",title:"Upgrade",description:"This command is used to upgrade the current package's dependencies to latest versions.",source:"@site/docs/gits_cli/project/upgrade.md",sourceDirName:"gits_cli/project",slug:"/gits_cli/project/upgrade",permalink:"/gits_cli_documentation/docs/gits_cli/project/upgrade",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"mySidebars",previous:{title:"Clean",permalink:"/gits_cli_documentation/docs/gits_cli/project/clean"},next:{title:"Refactor",permalink:"/gits_cli_documentation/docs/gits_cli/project/refactor"}},p={},s=[{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade"},"Upgrade"),(0,r.kt)("p",null,"This command is used to upgrade the current package's dependencies to latest versions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits upgrade\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits upgrade [argument]\n")),(0,r.kt)("p",null,"To see all available options and flags, run ",(0,r.kt)("inlineCode",{parentName:"p"},"gits upgrade --help"),"."),(0,r.kt)("h3",{id:"available-options"},"Available Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flag :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--all")),(0,r.kt)("td",{parentName:"tr",align:null},"Upgrade all project package's dependencies to latest versions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-d")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--dependency")),(0,r.kt)("td",{parentName:"tr",align:null},"Upgrade all dependency_manager package's dependencies to latest versions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-g")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--gits")),(0,r.kt)("td",{parentName:"tr",align:null},"Upgrade all gits_library package's dependencies to latest versions (Default)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom Gits Yaml :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Custom Gits Yaml"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--gits-yaml [path_file]")),(0,r.kt)("td",{parentName:"tr",align:null},"This command is used to select yaml config the application in a specific file, by default it will run the ",(0,r.kt)("inlineCode",{parentName:"td"},"gits.yaml")," file.")))))}d.isMDXComponent=!0}}]);