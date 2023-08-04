"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:6},o="Endpoint",l={unversionedId:"gits_cli/generate/endpoint",id:"gits_cli/generate/endpoint",title:"Endpoint",description:"This command is used to generate endpoints in the file core/lib/src/constants/src/gits_endpoints.dart based on the endpoints in the file json2dart/json2dart.yaml",source:"@site/docs/gits_cli/generate/endpoint.md",sourceDirName:"gits_cli/generate",slug:"/gits_cli/generate/endpoint",permalink:"/gits_cli_documentation/docs/gits_cli/generate/endpoint",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mySidebars",previous:{title:"Json2Dart",permalink:"/gits_cli_documentation/docs/gits_cli/generate/json2dart"},next:{title:"Assets",permalink:"/gits_cli_documentation/docs/gits_cli/generate/assets"}},s={},p=[{value:"Options",id:"options",level:2},{value:"Available Options",id:"available-options",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"endpoint"},"Endpoint"),(0,i.kt)("p",null,"This command is used to generate endpoints in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"core/lib/src/constants/src/gits_endpoints.dart")," based on the endpoints in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"json2dart/json2dart.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gits endpoint\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gits endpoint [arguments]\n")),(0,i.kt)("p",null,"To see all available options and flags, run ",(0,i.kt)("inlineCode",{parentName:"p"},"gits endpoint --help"),"."),(0,i.kt)("h3",{id:"available-options"},"Available Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom Gits Yaml :")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Custom Gits Yaml"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--gits-yaml [path_file]")),(0,i.kt)("td",{parentName:"tr",align:null},"This command is used to select yaml config the application in a specific file, by default it will run the ",(0,i.kt)("inlineCode",{parentName:"td"},"gits.yaml")," file.")))))}d.isMDXComponent=!0}}]);