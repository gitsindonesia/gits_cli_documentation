"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[7099],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7839:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i="Feature",o={unversionedId:"gits_cli/generate/feature",id:"gits_cli/generate/feature",title:"Feature",description:"This command is used to generate new feature",source:"@site/docs/gits_cli/generate/feature.md",sourceDirName:"gits_cli/generate",slug:"/gits_cli/generate/feature",permalink:"/gits_cli_documentation/docs/gits_cli/generate/feature",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mySidebars",previous:{title:"Config",permalink:"/gits_cli_documentation/docs/gits_cli/generate/config"},next:{title:"Page",permalink:"/gits_cli_documentation/docs/gits_cli/generate/page"}},p={},s=[{value:"Example",id:"example",level:2},{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],u={toc:s};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feature"},"Feature"),(0,r.kt)("p",null,"This command is used to generate new feature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git feature [feature_name]\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For the example we will generate a new feature named master"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits feature master\n")),(0,r.kt)("p",null,"The feature master folder will be created automatically, we can check in ",(0,r.kt)("inlineCode",{parentName:"p"},"features/master/")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"File generated",src:a(5980).Z,width:"471",height:"202"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The feature will not be generated if the feature name we enter already exists.")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits feature [feature_name] [arguments]\n")),(0,r.kt)("p",null,"To see all available options and flags, run ",(0,r.kt)("inlineCode",{parentName:"p"},"gits feature --help"),"."),(0,r.kt)("h3",{id:"available-options"},"Available Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Flags :  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flags"),(0,r.kt)("th",{parentName:"tr",align:null},"Alternative"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-p")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--page")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new feature module with page as same name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--all")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new feature module with page as same name and unittest as same name.")))))}c.isMDXComponent=!0},5980:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/master_feature-92074721723c40929c8f3f3a1dec9886.png"}}]);