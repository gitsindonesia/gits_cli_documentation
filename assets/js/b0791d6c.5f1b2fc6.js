"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[6634],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,l(l({ref:e},c),{},{components:n})):a.createElement(g,l({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3551:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Getting Started",o={unversionedId:"gits_cli/started",id:"gits_cli/started",title:"Getting Started",description:"Requirement",source:"@site/docs/gits_cli/started.md",sourceDirName:"gits_cli",slug:"/gits_cli/started",permalink:"/gits_cli_documentation/docs/gits_cli/started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebars",previous:{title:"Innovation Idea",permalink:"/gits_cli_documentation/docs/guidelines/innovation_idea"},next:{title:"General",permalink:"/gits_cli_documentation/docs/category/general"}},s={},p=[{value:"Requirement",id:"requirement",level:2},{value:"IDE Recommendation",id:"ide-recommendation",level:2},{value:"Installations",id:"installations",level:2},{value:"Additional Tools Installations",id:"additional-tools-installations",level:3},{value:"Usage",id:"usage",level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"requirement"},"Requirement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dart SDK 2.19 - latest"),(0,r.kt)("li",{parentName:"ul"},"Flutter: 3.7.0 - latest")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Dart SDK Installation ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://dart.dev/get-dart"},"Dart SDK"))),(0,r.kt)("li",{parentName:"ul"},"Flutter SDK Installation ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.flutter.dev/development/tools/sdk/releases?tab=macos"},"Flutter SDK"))))),(0,r.kt)("h2",{id:"ide-recommendation"},"IDE Recommendation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode"))),(0,r.kt)("h2",{id:"installations"},"Installations"),(0,r.kt)("p",null,"Install current version ",(0,r.kt)("inlineCode",{parentName:"p"},"gits cli internal 3.0.0")," by this command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dart pub global activate --source git https://git.gits.id/RnD/flutter-cli.git\n")),(0,r.kt)("p",null,"   Make sure gits cli was installed, you can check by this command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gits -v\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Output"',title:'"Output"'},"Gits CLI 3.0.0\n")),(0,r.kt)("p",null,"If this directory is missing from your PATH, locate the file for your platform and add it."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform"),(0,r.kt)("th",{parentName:"tr",align:null},"Cache location"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"macOS or Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"HOME/.pub-cache/bin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Windows*"),(0,r.kt)("td",{parentName:"tr",align:null},"%LOCALAPPDATA%\\Pub\\Cache\\bin")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want install spesific version gits cli you need to follow this step:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Clone source this from repository ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://git.gits.id/RnD/flutter-cli"},"Gits Cli"))),(0,r.kt)("li",{parentName:"ol"},"Checkout to selected tag, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"2.19.0")),(0,r.kt)("li",{parentName:"ol"},"Download dependency with run ",(0,r.kt)("inlineCode",{parentName:"li"},"dart pub get")),(0,r.kt)("li",{parentName:"ol"},"Install from localy path wtih run ",(0,r.kt)("inlineCode",{parentName:"li"},"dart pub global activate --source path .")))),(0,r.kt)("h3",{id:"additional-tools-installations"},"Additional Tools Installations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"lcov")," for requirement command ",(0,r.kt)("inlineCode",{parentName:"p"},"gits coverage"),"."),(0,r.kt)("p",{parentName:"li"},"Install lcov with follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linux-test-project/lcov"},"this installation"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"gherkin")," for requirement command ",(0,r.kt)("inlineCode",{parentName:"p"},"gits cucumber"),"."),(0,r.kt)("p",{parentName:"li"},"Install gherkin executable and make sure to export to your PATH from this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gitsindonesia/gits_cli/releases/tag/cucumber"},"Gherkin Executable")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the Gits CLI, you must run the ",(0,r.kt)("inlineCode",{parentName:"p"},"gits")," command from the terminal on your project directory."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This CLI can only be used on Gits Flutter Starter Kit, please clone it first and configure it based on the documentation on the following link ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../starter_kit/started"},"Gits Flutter Starter Kit")))))}u.isMDXComponent=!0}}]);