"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[1328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Getting Started",l={unversionedId:"starter_kit/started",id:"starter_kit/started",title:"Getting Started",description:"Requirement",source:"@site/docs/starter_kit/started.md",sourceDirName:"starter_kit",slug:"/starter_kit/started",permalink:"/gits_cli_documentation/docs/starter_kit/started",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mySidebars",previous:{title:"Introduction",permalink:"/gits_cli_documentation/docs/starter_kit/introduction"},next:{title:"Concepts",permalink:"/gits_cli_documentation/docs/starter_kit/concepts"}},p={},s=[{value:"Requirement",id:"requirement",level:2},{value:"Installation",id:"installation",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"requirement"},"Requirement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dart SDK 2.19 - latest"),(0,r.kt)("li",{parentName:"ul"},"Flutter: 3.7.0 - latest")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Dart SDK Installation ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://dart.dev/get-dart"},"Dart SDK"))),(0,r.kt)("li",{parentName:"ul"},"Flutter SDK Installation ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.flutter.dev/development/tools/sdk/releases?tab=macos"},"Flutter SDK"))))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"../gits_cli/started"},"Gits CLI"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create new project with run command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits create my-app\n")),(0,r.kt)("p",{parentName:"li"},"To see all available options and flags, run ",(0,r.kt)("inlineCode",{parentName:"p"},"gits create --help")," or check in ",(0,r.kt)("a",{parentName:"p",href:"../gits_cli/project/create"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run your emulator or connect your device")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now you can run apps in VS Code with press ",(0,r.kt)("inlineCode",{parentName:"p"},"F5")," or you can run via terminal with command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits run\n")),(0,r.kt)("p",{parentName:"li"},"To see all available options and flags, run ",(0,r.kt)("inlineCode",{parentName:"p"},"gits run --help")," or check in ",(0,r.kt)("a",{parentName:"p",href:"../gits_cli/project/run"},"here"),"."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want install manually you need to follow this step:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone source this from repository ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://git.gits.id/RnD/fluttergits"},"Gits Flutter Starter Kit"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# via SSH\n\ngit clone git@git.gits.id:RnD/fluttergits.git\n\n# via HTTPS\n\ngit clone https://git.gits.id/RnD/fluttergits.git my-app\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," folder and initialize the new one."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd my-app\nrm -rf .git \ngit init\ngit commit -am "initial commit"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Init configuration"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits init\ngits config\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the dependencies"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits get\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run your emulator or connect your device")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now you can run apps in VS Code with press ",(0,r.kt)("inlineCode",{parentName:"p"},"F5")," or you can run via terminal with command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits run\n")),(0,r.kt)("p",{parentName:"li"},"To see all available options and flags, run ",(0,r.kt)("inlineCode",{parentName:"p"},"gits run --help")," or check in ",(0,r.kt)("a",{parentName:"p",href:"../gits_cli/project/run"},"here"),".")))))}m.isMDXComponent=!0}}]);