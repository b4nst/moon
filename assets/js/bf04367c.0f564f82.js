"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3916],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(g,s(s({ref:t},m),{},{components:a})):n.createElement(g,s({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const r={slug:"moon-v1.4",title:"moon v1.4 - New tag target scope, MQL support for query commands, and more!",authors:["milesj"],tags:["query","lang","tag","alias"],image:"./img/moon/v1.4.png"},s=void 0,l={permalink:"/blog/moon-v1.4",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-05-01_moon-v1.4.mdx",source:"@site/blog/2023-05-01_moon-v1.4.mdx",title:"moon v1.4 - New tag target scope, MQL support for query commands, and more!",description:"With this release, we're bringing further improvements to tags and MQL.",date:"2023-05-01T00:00:00.000Z",formattedDate:"May 1, 2023",tags:[{label:"query",permalink:"/blog/tags/query"},{label:"lang",permalink:"/blog/tags/lang"},{label:"tag",permalink:"/blog/tags/tag"},{label:"alias",permalink:"/blog/tags/alias"}],readingTime:1.73,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"moon-v1.4",title:"moon v1.4 - New tag target scope, MQL support for query commands, and more!",authors:["milesj"],tags:["query","lang","tag","alias"],image:"./img/moon/v1.4.png"},nextItem:{title:"proto v0.8 - Version detection and installation improvements",permalink:"/blog/proto-v0.8"}},i={image:a(914).Z,authorsImageUrls:[void 0]},p=[{value:"Run targets by tag with <code>#tag:task</code>",id:"run-targets-by-tag-with-tagtask",level:2},{value:"Updated <code>moon query</code> commands to support MQL",id:"updated-moon-query-commands-to-support-mql",level:2},{value:"Deprecated <code>node.aliasPackageNames</code> setting",id:"deprecated-nodealiaspackagenames-setting",level:2},{value:"Other changes",id:"other-changes",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this release, we're bringing further improvements to tags and MQL."),(0,o.kt)("h2",{id:"run-targets-by-tag-with-tagtask"},"Run targets by tag with ",(0,o.kt)("inlineCode",{parentName:"h2"},"#tag:task")),(0,o.kt)("p",null,"We love our community, as you all continuously suggest new and awesome features that haven't crossed\nour minds. One such feature was the ability to run tasks for all projects with a tag,\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/issues/803"},"suggested by @theoephraim"),", which is now possible with\nthe new ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/target#by-tag"},"tag scope"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"#tag:task"),"."),(0,o.kt)("p",null,"As an example, we can easily lint all projects that have the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run '#frontend:lint'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Because ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," is special syntax and denotes a comment, the target will need to be quoted to work\ncorrectly!")),(0,o.kt)("h2",{id:"updated-moon-query-commands-to-support-mql"},"Updated ",(0,o.kt)("inlineCode",{parentName:"h2"},"moon query")," commands to support MQL"),(0,o.kt)("p",null,"Last week we announced ",(0,o.kt)("a",{parentName:"p",href:"./moon-v1.3#run-targets-based-on-a-query"},"MQL"),", a custom query language for\napplying filters to moon's project graph, primarily through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/run"},(0,o.kt)("inlineCode",{parentName:"a"},"moon run")),"\ncommand. We plan to slowly integrate MQL throughout moon as it provides an easy to use API, and an\noverall better developer experience."),(0,o.kt)("p",null,"As such, we've updated both ",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/query/projects"},(0,o.kt)("inlineCode",{parentName:"a"},"moon query projects"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/commands/query/tasks"},(0,o.kt)("inlineCode",{parentName:"a"},"moon query tasks"))," to support MQL statements as an optional first\nargument. Totally makes sense that query commands would support MQL!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Find all projects with a `lint` or `build` task\n$ moon query projects "task=[lint,build]"\n\n# Find all tasks with an id that starts with "dev"\n$ moon query tasks "task~dev-*"\n')),(0,o.kt)("h2",{id:"deprecated-nodealiaspackagenames-setting"},"Deprecated ",(0,o.kt)("inlineCode",{parentName:"h2"},"node.aliasPackageNames")," setting"),(0,o.kt)("p",null,"moon project's support the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/project#aliases"},"concept of aliasing"),", where\nlanguage/ecosystem specific names are used alongside moon's. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," field from\n",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". However, aliasing was off by default for Node.js projects and had to be explicitly\nenabled with the ",(0,o.kt)("inlineCode",{parentName:"p"},"node.aliasPackageNames")," setting."),(0,o.kt)("p",null,"In an effort to streamline moon adoption for Node.js codebases, we're deprecating that setting, and\ninstead will now always inherit the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," name as an alias. For example, if you're package\nname was ",(0,o.kt)("inlineCode",{parentName:"p"},"@company/utils"),", you can now run a target like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ moon run @company/utils:build\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This setting is now a no-op and can be removed from your configuration.")),(0,o.kt)("h2",{id:"other-changes"},"Other changes"),(0,o.kt)("p",null,"View the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/v1.4.0"},"official release")," for a full list of\nchanges."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upgraded to proto v0.8.")))}c.isMDXComponent=!0},914:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/v1.4-b1df8286618a63bb7bfdc2a708da9d6b.png"}}]);