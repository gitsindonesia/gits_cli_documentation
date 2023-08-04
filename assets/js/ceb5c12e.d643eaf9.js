"use strict";(self.webpackChunkgits_cli=self.webpackChunkgits_cli||[]).push([[5333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(h,s(s({ref:t},d),{},{components:n})):i.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},s="CI/CD",r={unversionedId:"guidelines/ci_cd",id:"guidelines/ci_cd",title:"CI/CD",description:"Summary",source:"@site/docs/guidelines/ci_cd.md",sourceDirName:"guidelines",slug:"/guidelines/ci_cd",permalink:"/gits_cli_documentation/docs/guidelines/ci_cd",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"mySidebars",previous:{title:"Integration",permalink:"/gits_cli_documentation/docs/guidelines/integration"},next:{title:"Innovation Idea",permalink:"/gits_cli_documentation/docs/guidelines/innovation_idea"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"CI/CD explained",id:"cicd-explained",level:2},{value:"What is continuous integration (CI)?",id:"what-is-continuous-integration-ci",level:2},{value:"What is continuous delivery (CD)?",id:"what-is-continuous-delivery-cd",level:2},{value:"What is continuous deployment?",id:"what-is-continuous-deployment",level:2},{value:"What is continuous testing?",id:"what-is-continuous-testing",level:2},{value:"CI/CD fundamentals",id:"cicd-fundamentals",level:2},{value:"The benefits of CI/CD implementationThe benefits of CI/CD implementation",id:"the-benefits-of-cicd-implementationthe-benefits-of-cicd-implementation",level:2},{value:"References",id:"references",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cicd"},"CI/CD"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Automate your software development workflows and deploy better quality code, more often. Using a continuous and iterative process to build, test, and deploy helps avoid bugs and code failures."),(0,o.kt)("p",null,"TL;DR implemented CI/CD in GITS Flutter ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1seL9N9jTye8LWS-s7eVGaxxljFUqVhHVelOxn6HSGG8/edit?usp=sharing"},"here")),(0,o.kt)("h2",{id:"cicd-explained"},"CI/CD explained"),(0,o.kt)("p",null,"CI/CD falls under DevOps (the joining of development and operations teams) and combines the practices of continuous integration and continuous delivery. CI/CD automates much or all of the manual human intervention traditionally needed to get new code from a commit into production, encompassing the build, test (including integration tests, unit tests, and regression tests), and deploy phases, as well as infrastructure provisioning. With a CI/CD pipeline, development teams can make changes to code that are then automatically tested and pushed out for delivery and deployment. Get CI/CD right and downtime is minimized and code releases happen faster."),(0,o.kt)("p",null,"CI/CD is an essential part of DevOps and any modern software development practice. A purpose-built CI/CD platform can maximize development time by improving an organization\u2019s productivity, increasing efficiency, and streamlining workflows through built-in automation, testing, and collaboration. As applications grow larger, the features of CI/CD can help decrease development complexity. Adopting other DevOps practices \u2014 like shifting left on security and creating tighter feedback loops \u2014 helps organizations break down development silos, scale safely, and get the most out of CI/CD."),(0,o.kt)("p",null,"CI/CD is important because it helps development, security, and operations teams work as efficiently and effectively as possible. It decreases tedious and time-consuming manual development work and legacy approval processes, freeing DevOps teams to be more innovative in their software development. Automation makes processes predictable and repeatable so that there is less opportunity for error from human intervention. DevOps teams gain faster feedback and can integrate smaller changes frequently to reduce the risk of build-breaking changes. Making DevOps processes continuous and iterative speeds software development lifecycles so organizations can ship more features that customers love."),(0,o.kt)("h2",{id:"what-is-continuous-integration-ci"},"What is continuous integration (CI)?"),(0,o.kt)("p",null,"Continuous integration is the practice of integrating all your code changes into the main branch of a shared source code repository early and often, automatically testing each change when you commit or merge them, and automatically kicking off a build. With continuous integration, errors and security issues can be identified and fixed more easily, and much earlier in the development process."),(0,o.kt)("p",null,"By merging changes frequently and triggering automatic testing and validation processes, you minimize the possibility of code conflict, even with multiple developers working on the same application. A secondary advantage is that you don't have to wait long for answers and can, if necessary, fix bugs and security issues while the topic is still fresh in your mind."),(0,o.kt)("p",null,"Common code validation processes start with a static code analysis that verifies the quality of the code. Once the code passes the static tests, automated CI routines package and compile the code for further automated testing. CI processes should have a version control system that tracks changes so you know the version of the code used."),(0,o.kt)("h2",{id:"what-is-continuous-delivery-cd"},"What is continuous delivery (CD)?"),(0,o.kt)("p",null,"Continuous delivery is a software development practice that works in conjunction with CI to automate the infrastructure provisioning and application release process."),(0,o.kt)("p",null,"Once code has been tested and built as part of the CI process, CD takes over during the final stages to ensure it\u2019s packaged with everything it needs to deploy to any environment at any time. CD can cover everything from provisioning the infrastructure to deploying the application to the testing or production environment."),(0,o.kt)("p",null,"With CD, the software is built so that it can be deployed to production at any time. Then you can trigger the deployments manually or move to continuous deployment, where deployments are automated as well."),(0,o.kt)("h2",{id:"what-is-continuous-deployment"},"What is continuous deployment?"),(0,o.kt)("p",null,"Continuous deployment enables organizations to deploy their applications automatically, eliminating the need for human intervention. With continuous deployment, DevOps teams set the criteria for code releases ahead of time and when those criteria are met and validated, the code is deployed into the production environment. This allows organizations to be more nimble and get new features into the hands of users faster."),(0,o.kt)("p",null,"While you can do continuous integration without continuous delivery or deployment, you can\u2019t really do CD without already having CI in place. That\u2019s because it would be extremely difficult to be able to deploy to production at any time if you aren\u2019t practicing CI fundamentals like integrating code to a shared repo, automating testing and builds, and doing it all in small batches on a daily basis."),(0,o.kt)("h2",{id:"what-is-continuous-testing"},"What is continuous testing?"),(0,o.kt)("p",null,"Continuous testing is a software testing practice where tests are continuously run in order to identify bugs as soon as they are introduced into the codebase. In a CI/CD pipeline, continuous testing is typically performed automatically, with each code change triggering a series of tests to ensure that the application is still working as expected. This can help to identify problems early in the development process and prevent them from becoming more difficult and costly to fix later on. Continuous testing can also provide valuable feedback to developers about the quality of their code, helping them to identify and address potential issues before they are released to production."),(0,o.kt)("p",null,"In continuous testing, various types of tests are performed within the CI/CD pipeline. These can include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Unit testing"),", which checks that individual units of code work as expected"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integration testing"),", which verifies how different modules or services within an application work together"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Regression testing"),", which is performed after a bug is fixed to ensure that specific bug won't occur again")),(0,o.kt)("h2",{id:"cicd-fundamentals"},"CI/CD fundamentals"),(0,o.kt)("p",null,"There are eight fundamental elements of CI/CD that help ensure maximum efficiency for your development lifecycle. They span development and deployment. Include these fundamentals in your pipeline to improve your DevOps workflow and software delivery:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A single source repository\nSource code management (SCM) that houses all necessary files and scripts to create builds is critical. The repository should contain everything needed for the build. This includes source code, database structure, libraries, properties files, and version control. It should also contain test scripts and scripts to build applications."),(0,o.kt)("li",{parentName:"ol"},"Frequent check-ins to main branch\nIntegrate code in your trunk, mainline or master branch \u2014 i.e., trunk-based development \u2014 early and often. Avoid sub-branches and work with the main branch only. Use small segments of code and merge them into the branch as frequently as possible. Don't merge more than one change at a time."),(0,o.kt)("li",{parentName:"ol"},"Automated builds\nScripts should include everything you need to build from a single command. This includes web server files, database scripts, and application software. The CI processes should automatically package and compile the code into a usable application."),(0,o.kt)("li",{parentName:"ol"},"Self-testing builds\nCI/CD requires continuous testing. Testing scripts should ensure that the failure of a test results in a failed build. Use static pre-build testing scripts to check code for integrity, quality, and security compliance. Only allow code that passes static tests into the build."),(0,o.kt)("li",{parentName:"ol"},"Frequent iterations\nMultiple commits to the repository results in fewer places for conflicts to hide. Make small, frequent iterations rather than major changes. By doing this, it's possible to roll changes back easily if there's a problem or conflict."),(0,o.kt)("li",{parentName:"ol"},"Stable testing environments\nCode should be tested in a cloned version of the production environment. You can't test new code in the live production version. Create a cloned environment that's as close as possible to the real environment. Use rigorous testing scripts to detect and identify bugs that slipped through the initial pre-build testing process."),(0,o.kt)("li",{parentName:"ol"},"Maximum visibility\nEvery developer should be able to access the latest executables and see any changes made to the repository. Information in the repository should be visible to all. Use version control to manage handoffs so developers know which is the latest version. Maximum visibility means everyone can monitor progress and identify potential concerns."),(0,o.kt)("li",{parentName:"ol"},"Predictable deployments anytime\nDeployments should be so routine and low-risk that the team is comfortable doing them anytime. CI/CD testing and verification processes should be rigorous and reliable, giving the team confidence to deploy updates at any time. Frequent deployments incorporating limited changes also pose lower risks and can be easily rolled back.")),(0,o.kt)("h2",{id:"the-benefits-of-cicd-implementationthe-benefits-of-cicd-implementation"},"The benefits of CI/CD implementationThe benefits of CI/CD implementation"),(0,o.kt)("p",null,"Companies and organizations that adopt CI/CD tend to notice a lot of positive changes. Here are some of the benefits you can look forward to as you implement CI/CD:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Happier users and customers"),": Fewer bugs and errors make it into production, so your users and customers have a better experience. This leads to improved levels of customer satisfaction, improved customer confidence, and a better reputation for your organization."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accelerated time-to-value"),": When you can deploy any time, you can bring products and new features to market faster. Your development costs are lower, and a faster turnaround frees your team for other work. Customers get results faster, giving your company a competitive edge."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Less fire fighting"),": Testing code more often, in smaller batches, and earlier in the development cycle can seriously cut down on fire drills. This results in a smoother development cycle and less team stress. Results are more predictable, and it's easier to find and fix bugs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hit dates more reliably"),": Removing deployment bottlenecks and making deployments predictable can remove a lot of the uncertainty around hitting key dates. Breaking work into smaller, manageable bites means it's easier to complete each stage on time and track progress. This approach gives plenty of time to monitor overall progress and determine completion dates more accurately."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Free up developers\u2019 time"),": With more of the deployment process automated, the team has time for more rewarding projects. It's estimated that developers spend between 35% and 50% of their time testing, validating, and debugging code. By automating these processes, developers significantly improve their productivity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Less context switching"),": Getting real-time feedback on their code makes it easier for developers to work on one thing at a time and minimizes their cognitive load. By working with small sections of code that are automatically tested, developers can debug code quickly while their minds are still fresh from programming. Finding bugs is easier because there's less code to review."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reduce burnout"),": Research shows that CD measurably reduces deployment pain and team burnout. Developers experience less frustration and strain when working with CI/CD processes. This leads to happier and healthier employees and less burnout."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recover faster"),": CI/CD makes it easier to fix issues and recover from incidents, reducing mean time to resolution (MTTR). Continuous deployment practices mean frequent small software updates so when bugs appear, it's easier to pin them down. Developers have the option of fixing bugs quickly or rolling back the change so that the customer can get back to work quickly.")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://about.gitlab.com/topics/ci-cd/"},"https://about.gitlab.com/topics/ci-cd/"))))}u.isMDXComponent=!0}}]);