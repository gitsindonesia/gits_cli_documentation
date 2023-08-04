"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[99],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:11},i="Refactor",o={unversionedId:"gits_cli/project/refactor",id:"gits_cli/project/refactor",title:"Refactor",description:"This command aim to refactor renaming filename, classname and variable with parameter oldname replace to newname.",source:"@site/docs/gits_cli/project/refactor.md",sourceDirName:"gits_cli/project",slug:"/gits_cli/project/refactor",permalink:"/gits_cli_documentation/docs/gits_cli/project/refactor",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"mySidebars",previous:{title:"Upgrade",permalink:"/gits_cli_documentation/docs/gits_cli/project/upgrade"},next:{title:"Cucumber",permalink:"/gits_cli_documentation/docs/gits_cli/project/cucumber"}},c={},p=[{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"refactor"},"Refactor"),(0,r.kt)("p",null,"This command aim to refactor renaming filename, classname and variable with parameter oldname replace to newname."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits refactor --old-name [old-name] --new-name [new-name]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits refactor --old-name [old-name] --new-name [new-name] [arguments]\n")),(0,r.kt)("p",null,"To see all available options and flags, run ",(0,r.kt)("inlineCode",{parentName:"p"},"gits refactor --help"),"."),(0,r.kt)("h3",{id:"available-options"},"Available Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Options :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--exclude-changes [code-exclude-changes]")),(0,r.kt)("td",{parentName:"tr",align:null},"Code will exclude to refactor separate with , (coma)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--exclude-files [path-files]")),(0,r.kt)("td",{parentName:"tr",align:null},"Spesific path file will exclude to refactor both code and filename separate with , (coma)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--exclude-directories [path-directories]")),(0,r.kt)("td",{parentName:"tr",align:null},"Spesific path directory will exclude to refactor including files and codes in it separate with , (coma)")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flags :")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flags"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--[no-]include-library")),(0,r.kt)("td",{parentName:"tr",align:null},"Refactor rename ",(0,r.kt)("inlineCode",{parentName:"td"},"gits")," name to ",(0,r.kt)("inlineCode",{parentName:"td"},"app name")," include Gits Library, by default false")))))}m.isMDXComponent=!0}}]);