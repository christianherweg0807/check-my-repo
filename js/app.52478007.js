(function(e){function t(t){for(var s,o,r=t[0],c=t[1],l=t[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/check-my-repo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0bda":function(e,t,n){"use strict";n("2448")},"235c":function(e,t,n){"use strict";n("cb81")},2448:function(e,t,n){},2455:function(e,t,n){"use strict";n("361d")},"27e1":function(e,t,n){"use strict";n("893a")},"361d":function(e,t,n){},"3ed9":function(e,t,n){"use strict";n("da30")},"404f":function(e,t,n){e.exports=n.p+"img/box.26a4ab40.svg"},"51f5":function(e,t,n){"use strict";n("f0a9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view"),n("Footer")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar"},[n("ul",[n("li",[n("router-link",{staticClass:"name",attrs:{to:{path:"/"}}},[e._v("CHECK MY REPO")])],1),n("li",[n("router-link",{staticClass:"pages",attrs:{to:{path:"/about"}}},[e._v("About")])],1),n("li",[n("router-link",{staticClass:"pages",attrs:{to:{path:"/rules"}}},[e._v("Rules")])],1)])])},r=[],c={name:"Navbar",data:function(){return{}}},l=c,u=(n("3ed9"),n("2877")),h=Object(u["a"])(l,o,r,!1,null,"744edaf4",null),d=h.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("GitHub")]),n("p",{staticClass:"break-line"},[e._v("Open source automated tool daily checking our public")]),n("p",{staticClass:"break-line p-bottom"},[e._v("repositories health and quality")])])}],g={name:"Footer",data:function(){}},f=g,b=(n("235c"),Object(u["a"])(f,p,m,!1,null,"1776be4e",null)),v=b.exports,y={name:"app",components:{Navbar:d,Footer:v}},C=y,_=(n("034f"),Object(u["a"])(C,i,a,!1,null,null,null)),w=_.exports,L=n("9483");Object(L["a"])("".concat("/check-my-repo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var k=n("8c4f"),S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"square content"},[n("h1",[e._v("About")]),n("p",[e._v(" Aiming to help Open Source Software OSS maintainers we, at the "),n("a",{attrs:{href:"https://opensource.saucelabs.com",target:"_blank",rel:"noopener"}},[e._v("Sauce Labs Open Source Program Office")]),e._v(", created Check-My-Repo. "),n("br"),n("br"),e._v(" An automated tool built upon "),n("a",{attrs:{href:"https://todogroup.github.io/repolinter/",target:"_blank",rel:"noopener"}},[e._v("Repolinter")]),e._v(", that verifies if the main necessary parameters to comply with "),n("a",{attrs:{href:"https://opensource.guide/building-community/",target:"_blank",rel:"noopener"}},[e._v("open source best practices")]),e._v(", from Readme to License, are present in the organization's repositories. "),n("br"),n("br"),e._v(" By automating this verification open source projects maintenance is more effective and effortless, and can help you and your organization to have compliant software projects easier to service, test, upgrade, and maintain. "),n("br"),n("br"),e._v(" To implement it in your organization all you need to do is to "),n("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("fork the repository on GitHub")]),e._v(". It's that easy. ")])])])}],M={components:{},name:"About"},D=M,R=(n("27e1"),Object(u["a"])(D,S,E,!1,null,"62cecab0",null)),A=R.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"square"},[s("button",{staticClass:"content total",attrs:{"aria-label":"Total repos"},on:{click:function(t){return e.goToRepo(e.frontend[0].repo)}}},[s("img",{staticClass:"icon-space",attrs:{src:n("404f"),alt:"Feather Icon Box"}}),s("h4",[e._v("Total Repos")]),s("div",{staticClass:"result"},[e._v(e._s(e.frontend.length))]),s("p",{staticClass:"text"},[e._v("Repository "),s("img",{staticClass:"icon",attrs:{src:n("6a16"),alt:"Feather External Link"}})])]),s("button",{staticClass:"content passed",class:{"state-healthy":!e.buttonPassedOff},attrs:{"aria-label":"List healthy repos",role:"switch","aria-checked":"false"},on:{click:function(t){e.hideHealthy=!e.hideHealthy,e.buttonPassedOff=!e.buttonPassedOff}}},[s("img",{staticClass:"icon-space",attrs:{src:n("f15c"),alt:"Feather Icon Check"}}),s("h4",[e._v("Healthy Repos")]),s("div",{staticClass:"result"},[e._v(e._s(e.allPassed))]),s("p",[e._v("View repos")])]),s("button",{staticClass:"content failed",class:{"state-failed":!e.buttonFailedOff},attrs:{"aria-label":"List failing repos",role:"switch","aria-checked":"false"},on:{click:function(t){e.hideRepos=!e.hideRepos,e.buttonFailedOff=!e.buttonFailedOff}}},[s("img",{staticClass:"icon-space",attrs:{src:n("9343"),alt:"Feather Icon No Check"}}),s("h4",[e._v("Failing Repos")]),s("div",{staticClass:"result"},[e._v(e._s(e.frontend.length-e.allPassed))]),s("p",[e._v("View repos")])])]),e.hideRepos?e._e():s("div",[s("Details")],1),e.hideHealthy?e._e():s("div",[s("Healthy")],1)])},j=[],O=(n("4de4"),n("d3b7"),n("0481"),n("4069"),n("d81d"),n("f839")),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"square-detail"},[n("table",{staticClass:"table-content"},[n("tr",e._l(e.columns,(function(t){return n("th",{key:t.key},[e._v(e._s(t.name))])})),0),e._l(e.frontend,(function(t){return n("tr",{key:t},[0!==t.failed.length?[n("td",{staticClass:"td-left"},[n("a",{attrs:{href:t.url,target:"_blank",rel:"noopener"}},[e._v(e._s(t.name))])]),n("td",e._l(t.failed,(function(t){return n("span",{key:t},[t.includes("README.md")?n("span",{staticClass:"badge hight"},[e._v(" Readme ")]):e._e(),t.includes("Changelog")?n("span",{staticClass:"badge medium"},[e._v(" Changelog ")]):e._e(),t.includes("Maintainers email")?n("span",{staticClass:"badge medium"},[e._v(" Ownership ")]):e._e(),t.includes("License")?n("span",{staticClass:"badge high"},[e._v(" License ")]):e._e(),t.includes("License on headers")?n("span",{staticClass:"badge low"},[e._v(" LicenseOnHeaders")]):e._e(),t.includes("License on readme")?n("span",{staticClass:"badge low"},[e._v(" LicenseOnReadme")]):e._e(),t.includes("Do not have binaries")?n("span",{staticClass:"badge high"},[e._v(" Binaries ")]):e._e(),t.includes("Test directory")?n("span",{staticClass:"badge medium"},[e._v(" TestDir ")]):e._e(),t.includes("Contributing")?n("span",{staticClass:"badge medium"},[e._v(" Contributing ")]):e._e(),t.includes("Code of Conduct")?n("span",{staticClass:"badge high"},[e._v(" CodeOfConduct ")]):e._e(),t.includes("Security")?n("span",{staticClass:"badge low"},[e._v(" Security ")]):e._e(),t.includes("Support")?n("span",{staticClass:"badge low"},[e._v(" Support ")]):e._e(),t.includes("Issue template")?n("span",{staticClass:"badge low"},[e._v(" IssueTemplate ")]):e._e(),t.includes("Pull request template")?n("span",{staticClass:"badge low"},[e._v(" PullRequestTemplate ")]):e._e()])})),0)]:e._e()],2)}))],2)])},x=[],I={name:"Details",data:function(){return{frontend:O,columns:[{key:"name",name:"Repository name"},{key:"failed",name:"Failed rules"}]}}},q=I,H=(n("0bda"),Object(u["a"])(q,P,x,!1,null,"c63216e2",null)),F=H.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"square-healthy"},[n("table",{staticClass:"table-healthy"},[n("tr",e._l(e.columns,(function(t){return n("th",{key:t},[e._v(e._s(t))])})),0),n("tr",[n("td",[e._v(e._s(e.healthy))])])])])},G=[],N=(n("a15b"),n("b0c0"),{name:"Healthy",data:function(){return{frontend:O,columns:{name:"Healthy Repos"}}},computed:{healthy:function(){return this.frontend.filter((function(e){return e.passed&&e.failed.length<1})).map((function(e){return e.name})).join("\n")}}}),B=N,W=(n("9a6e"),Object(u["a"])(B,$,G,!1,null,"46394d7b",null)),z=W.exports,Y={components:{Details:F,Healthy:z},name:"Home",data:function(){return{frontend:O,hideRepos:!0,hideHealthy:!0,buttonPassedOff:!0,buttonFailedOff:!0}},computed:{allPassed:function(){return this.frontend.filter((function(e){return e.passed&&e.failed.length<1})).length},failedRepo:function(){return this.frontend.map((function(e){var t=e.failed;return t})).flat().length}},methods:{goToRepo:function(e){window.open(e,"_blank","noopener")}}},J=Y,U=(n("51f5"),Object(u["a"])(J,T,j,!1,null,"5fe54dbc",null)),V=U.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"square content"},[n("h1",[e._v("Rules")]),e._v(" Check-My-Repo uses a ruleset that searches for files considered essential in an open source project, according to best practices. In order to help filter the emergence of necessary actions on the missing of those files, we have separated the rules into: low, medium or high priority. Badges help to visually understand these priorities. "),n("br"),n("br"),e._v(" Following is a brief explanation of what each of these rules means and the importance of complying with them: "),n("br"),n("br"),n("span",{staticClass:"badge high"},[e._v("Binaries")]),n("p",[e._v(" The security rule looks for binary files, executables and passwords, which should not be contained in an open project. ")]),n("span",{staticClass:"badge high"},[e._v("CodeOfConduct")]),n("p",[e._v("A code of conduct establishes expectations and facilitates a healthy and constructive community.")]),n("p",{staticClass:"quote"},[e._v(" When a project seems hostile or unwelcoming, even if it’s just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It’s not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow, and create a safe environment for all. ")]),n("p",[e._v(" You can read more about it at "),n("a",{attrs:{href:"https://opensource.guide/code-of-conduct/#:~:text=as%20a%20maintainer-,Why%20do%20I%20need%20a%20code%20of%20conduct%3F,just%20your%20participants%2C%20but%20yourself.",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(". ")]),n("span",{staticClass:"badge high"},[e._v("License")]),n("p",[e._v(" Compliance with open source software (OSS) license requirements is necessary, and complex. Most open source projects today use several components, each with its own type of license. Mixing these licenses can be legally complex. But ensuring what kinds of permissions you, as the project maintainer, want is essential in order for those who use your project to be able to make these combinations properly. It is also important to protect you legally. If you want to understand it better, we highly recommend you to take the free certificate from "),n("a",{attrs:{href:"https://training.linuxfoundation.org/training/open-source-licensing-basics-for-software-developers/",target:"_blank",rel:"noopener"}},[e._v("Linux Foundation")]),e._v(". Check-my-repo searches for a License file or a license mentioned on README file. ")]),n("span",{staticClass:"badge high"},[e._v("Readme")]),n("p",[e._v(" A friendly README and clear code examples will make it easier for anyone who lands on your project to get started. It is about knowing your audience and their needs. The "),n("a",{attrs:{href:"https://opensource.guide/",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(" reminds us that the README is more than just a set of instructions, it’s a place to talk about the project goals, product vision, and roadmap, which serves as a compass to have a constructive discussion. ")]),n("span",{staticClass:"badge medium"},[e._v("Changelog")]),n("p",[e._v(" The main purpose of this rule is to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project. While Changelog is a file, a "),n("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener"}},[e._v("SemVer")]),e._v(", a semantic version, may be a better choice in systems with many dependencies. Doesn't matter what you choose, this makes it easier for people to understand the development speed of the project, or it's lack of maintenance. Check-my-repo searches if the project has a CHANGELOG.md file in the project root or if it contains a release tag on GitHub. ")]),n("span",{staticClass:"badge medium"},[e._v("Contributing")]),n("p",[e._v(" A contributor guideline saves lots of time from both maintainers and contributors. Eager contributors rely on it to be their guiding hand. ")]),n("span",{staticClass:"badge medium"},[e._v("Ownership")]),n("p",[e._v(" The main purpose of this file is to ensure someone is assigned to the project and to prevent it from going into the forgetful mode. Another reason is to provide a contact for potential contributors. When no one other than the original author has maintenance rights, continuation of the project through bifurcation can lead to confusion about the status and reliability of the project. ")]),n("span",{staticClass:"badge medium"},[e._v("TestDir")]),n("p",[e._v(" Having tests on your project can avoid regresion, breaks and so many issues. A few reasons why testing is important: when bugs are caught in the earlier stages it costs much less to fix them; you add security; helps assure quality and digital confidence; which leads to users satisfaction. ")]),n("span",{staticClass:"badge low"},[e._v("IssueTemplate")]),n("span",{staticClass:"badge low"},[e._v("PullRequestTemplate")]),n("p",[e._v(" These templates, embeded on your repository, are used to create issues and pull requests. They are highly recommended to avoid problems, keep your contributors communication clear and short and to make it easier for them express their needs. ")]),n("p",[e._v(" You can read more about it at "),n("a",{attrs:{href:"https://help.github.com/en/articles/about-issue-and-pull-request-templates",target:"_blank",rel:"noopener"}},[e._v("GitHub Docs")]),e._v(". ")]),n("span",{staticClass:"badge low"},[e._v("LicenseOnHeaders")]),n("p",[e._v(" Adding the license and copyright at the beginning of each document enhances its visibility. It is also a way to help the user quickly learn about their possibilities, even when using only one document from the project. ")]),n("span",{staticClass:"badge low"},[e._v("LicenseOnReadme")]),n("p",[e._v(" Although the license is valid in any format, as long as it is added to the project, having it in the main file ensures it will be clearly visible. So even if the license exists in a separate file it is important to have a mention of it in the README. Some projects add copyright and license on the first line of every file of the project. ")]),n("span",{staticClass:"badge low"},[e._v("Security")]),n("p",[e._v(" A SECURITY.md is where a security policy goes, a place to instruct users how to report a security vulnerability. This allows users to easily report and maintainers to quickly take actions upon vulnerabilities. ")]),n("span",{staticClass:"badge low"},[e._v("Support")]),n("p",[e._v(" A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues. A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues. It can include: how and where can a user get help and support, which communication channels should be used and what not to do to avoid communication noise. This file helps both users and maintainers to communicate to each other having their needs to get into the right channel. ")])])}],X={components:{},name:"Rules"},Z=X,ee=(n("2455"),Object(u["a"])(Z,K,Q,!1,null,"0d6d1ba6",null)),te=ee.exports;s["a"].use(k["a"]);var ne=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:A},{path:"/rules",name:"Rules",component:te}],se=new k["a"]({mode:"history",base:"/check-my-repo/",routes:ne,linkActiveClass:"active",linkExactActiveClass:"exact-active"}),ie=se,ae=n("2f62");s["a"].use(ae["a"]);var oe=new ae["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:ie,store:oe,render:function(e){return e(w)}}).$mount("#app")},"6a16":function(e,t,n){e.exports=n.p+"img/external-link.f729e99d.svg"},"85ec":function(e,t,n){},"893a":function(e,t,n){},9343:function(e,t,n){e.exports=n.p+"img/x-circle.6d2ee7ef.svg"},"9a6e":function(e,t,n){"use strict";n("b68d")},b68d:function(e,t,n){},cb81:function(e,t,n){},da30:function(e,t,n){},f0a9:function(e,t,n){},f15c:function(e,t,n){e.exports=n.p+"img/check-circle.d6824ff7.svg"},f839:function(e){e.exports=JSON.parse('[{"repo":"https://github.com/christianherweg0807","name":"aws-sdk-ruby","url":"https://github.com/christianherweg0807/aws-sdk-ruby.git","failed":["Changelog","License on headers","Security","Support"],"passed":["README.md","Maintainers email","License","License on readme","Do not have binaries","Test directory","Contributing","Code of Conduct","Issue template","Pull request template"]},{"repo":"https://github.com/christianherweg0807","name":"awscli-s3touch","url":"https://github.com/christianherweg0807/awscli-s3touch.git","failed":["Changelog","License on headers","License on readme","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Contributing"]},{"repo":"https://github.com/christianherweg0807","name":"backstage","url":"https://github.com/christianherweg0807/backstage.git","failed":["Changelog","Maintainers email","License on headers","Support"],"passed":["README.md","License","License on readme","Do not have binaries","Test directory","Contributing","Code of Conduct","Security","Issue template","Pull request template"]},{"repo":"https://github.com/christianherweg0807","name":"beats","url":"https://github.com/christianherweg0807/beats.git","failed":["Maintainers email","License on readme","Do not have binaries","Code of Conduct","Security","Support"],"passed":["README.md","Changelog","License","License on headers","Test directory","Contributing","Issue template","Pull request template"]},{"repo":"https://github.com/christianherweg0807","name":"beats4piext","url":"https://github.com/christianherweg0807/beats4piext.git","failed":["Changelog","License on headers","License on readme","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"check-my-repo","url":"https://github.com/christianherweg0807/check-my-repo.git","failed":["License on headers"],"passed":["README.md","Changelog","Maintainers email","License","License on readme","Do not have binaries","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"]},{"repo":"https://github.com/christianherweg0807","name":"CIAnalyzer","url":"https://github.com/christianherweg0807/CIAnalyzer.git","failed":["License on headers","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Changelog","Maintainers email","License","License on readme","Do not have binaries","Test directory"]},{"repo":"https://github.com/christianherweg0807","name":"cloudtrail-elk","url":"https://github.com/christianherweg0807/cloudtrail-elk.git","failed":["Changelog","License","License on headers","License on readme","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"course_github-actions-for-ci","url":"https://github.com/christianherweg0807/course_github-actions-for-ci.git","failed":["Changelog","License on headers","License on readme","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"dotfiles","url":"https://github.com/christianherweg0807/dotfiles.git","failed":["Changelog","License on headers","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","License on readme","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"dotfiles-1","url":"https://github.com/christianherweg0807/dotfiles-1.git","failed":["Changelog","License on headers","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","License on readme","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"findhashes","url":"https://github.com/christianherweg0807/findhashes.git","failed":["Changelog","License","License on headers","License on readme","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"GitHub-Security-Alerts-Workflow","url":"https://github.com/christianherweg0807/GitHub-Security-Alerts-Workflow.git","failed":["Changelog","License on headers","Test directory","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","License on readme","Do not have binaries","Contributing","Code of Conduct"]},{"repo":"https://github.com/christianherweg0807","name":"github-slideshow","url":"https://github.com/christianherweg0807/github-slideshow.git","failed":["Changelog","License on headers","License on readme","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory"]},{"repo":"https://github.com/christianherweg0807","name":"kibana","url":"https://github.com/christianherweg0807/kibana.git","failed":["Changelog","Maintainers email","License on headers","License on readme","Code of Conduct","Security","Support"],"passed":["README.md","License","Do not have binaries","Test directory","Contributing","Issue template","Pull request template"]},{"repo":"https://github.com/christianherweg0807","name":"lab-starter","url":"https://github.com/christianherweg0807/lab-starter.git","failed":["Changelog","License on headers","License on readme","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"logstash-docs","url":"https://github.com/christianherweg0807/logstash-docs.git","failed":["Changelog","License","License on headers","License on readme","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"logstash-input-s3","url":"https://github.com/christianherweg0807/logstash-input-s3.git","failed":["License on headers","Test directory","Code of Conduct","Security","Support"],"passed":["README.md","Changelog","Maintainers email","License","License on readme","Do not have binaries","Contributing","Issue template","Pull request template"]},{"repo":"https://github.com/christianherweg0807","name":"logstash-integration-aws","url":"https://github.com/christianherweg0807/logstash-integration-aws.git","failed":["Changelog","License","License on headers","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License on readme","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"mac-dev-playbook","url":"https://github.com/christianherweg0807/mac-dev-playbook.git","failed":["Changelog","License on headers","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","License on readme","Do not have binaries","Test directory"]},{"repo":"https://github.com/christianherweg0807","name":"rspec-logstash-filter","url":"https://github.com/christianherweg0807/rspec-logstash-filter.git","failed":["Changelog","License on headers","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","License on readme","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"Temptower","url":"https://github.com/christianherweg0807/Temptower.git","failed":["Changelog","License on headers","License on readme","Test directory","Contributing","Code of Conduct","Security","Support","Issue template","Pull request template"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/christianherweg0807","name":"titan-project","url":"https://github.com/christianherweg0807/titan-project.git","failed":["Changelog","License on headers","License on readme","Contributing","Code of Conduct","Security","Support","Pull request template"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Issue template"]},{"repo":"https://github.com/christianherweg0807","name":"using-github-actions-for-ci","url":"https://github.com/christianherweg0807/using-github-actions-for-ci.git","failed":["Changelog","License on headers","Test directory","Contributing","Code of Conduct","Security","Support","Pull request template"],"passed":["README.md","Maintainers email","License","License on readme","Do not have binaries","Issue template"]}]')}});
//# sourceMappingURL=app.52478007.js.map