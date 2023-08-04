"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[8619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},l="Create",o={unversionedId:"gits_cli/project/create",id:"gits_cli/project/create",title:"Create",description:"You can create Flutter applcation with Gits FLutter Starter Kit with run command:",source:"@site/docs/gits_cli/project/create.md",sourceDirName:"gits_cli/project",slug:"/gits_cli/project/create",permalink:"/gits_cli_documentation/docs/gits_cli/project/create",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebars",previous:{title:"Project",permalink:"/gits_cli_documentation/docs/category/project"},next:{title:"Init",permalink:"/gits_cli_documentation/docs/gits_cli/project/init"}},p={},c=[{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create"},"Create"),(0,a.kt)("p",null,"You can create Flutter applcation with Gits FLutter Starter Kit with run command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gits create [project-name]\n")),(0,a.kt)("p",null,"Example create project with name ",(0,a.kt)("inlineCode",{parentName:"p"},"Gits Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gits create "Gits Example"\n')),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gits create [arguments]\n")),(0,a.kt)("p",null,"To see all available options and flags, run ",(0,a.kt)("inlineCode",{parentName:"p"},"gits create --help"),"."),(0,a.kt)("h3",{id:"available-options"},"Available Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Version Starter Kit :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version Starter Kit"),(0,a.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-t [tag-version]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--tag [tag-version]")),(0,a.kt)("td",{parentName:"tr",align:null},"Clone with Tag version gits flutter starter kit, default clone master")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refactor Rename Gits Code :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Refactor Rename Gits Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--[no-]refactor")),(0,a.kt)("td",{parentName:"tr",align:null},"Refactor rename ",(0,a.kt)("inlineCode",{parentName:"td"},"gits")," name to ",(0,a.kt)("inlineCode",{parentName:"td"},"app name"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--[no-]include-library")),(0,a.kt)("td",{parentName:"tr",align:null},"Refactor rename ",(0,a.kt)("inlineCode",{parentName:"td"},"gits")," name to ",(0,a.kt)("inlineCode",{parentName:"td"},"app name")," include Gits Library use this along with argument --refactor")))))}u.isMDXComponent=!0}}]);