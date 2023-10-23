"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48667],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(37140);const l="tabItem_wHwb";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(25773),r=n(27378),l=n(37140),o=n(83457),i=n(35595),s=n(76457);const u="tabList_J5MA",p="tabItem_l0OV";function c(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function m(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement(c,(0,a.Z)({},e,t)),r.createElement(d,(0,a.Z)({},e,t)))}function g(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(27378),r=n(35331),l=n(30654),o=n(70784),i=n(71819);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=u(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,m]=c({queryString:n,groupId:r}),[g,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=d??g;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),h(e)}),[m,h,l]),tabValues:l}}},36642:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(27378),r=n(30780),l=n(39798),o=n(33337);function i(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function u(e){let t=i(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=i(e,!0,!0),n+=s(e,!0)),a.createElement(o.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(l.Z,{value:"yarn"},a.createElement(r.Z,{language:"shell"},i(e,!1,!1))),a.createElement(l.Z,{value:"yarn1"},a.createElement(r.Z,{language:"shell"},t)),a.createElement(l.Z,{value:"npm"},a.createElement(r.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(l.Z,{value:"pnpm"},a.createElement(r.Z,{language:"shell"},n)))}},27915:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(27378),r=n(83469),l=n(9619);function o(e){let{text:t}=e;return a.createElement(l.Z,{text:t,icon:r.SZw,variant:"success",className:"absolute right-0 top-1.5"})}},9634:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(27378),r=n(81884),l=n(25773),o=n(9928),i=n(83469),s=n(31792);const u={discord:o.omb,github:o.zhw,moon:i.Gp0,"new-project":i.g6h,"new-task":i.EQ8,project:i.pL1,"project-config":i.dhu,"project-config-global":i.YdP,"project-graph":i.Bkj,"run-task":i.sl_,task:i.diR,"task-config":i.o$R,token:i.BwA,toolchain:i.AlB,"toolchain-config":i.eDR,twitter:o.mdU,workspace:i.emM,"workspace-config":i.cRF};function p(e){let{name:t,...n}=e;return a.createElement(s.Z,(0,l.Z)({},n,{icon:u[t]}))}function c(e){let{links:t}=e;return a.createElement("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-2"},t.map((e=>a.createElement(r.default,{key:e.url,href:e.url,className:"focus:outline-none"},a.createElement("div",{className:"relative rounded-lg px-3 py-3 flex items-center space-x-2 border-solid border border-t-0 border-b-2 bg-gray-50 hover:bg-gray-100/90 border-gray-200/75 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-900/75"},a.createElement("div",{className:"flex-shrink-0"},a.createElement(p,{size:"lg",name:e.icon})),a.createElement("div",{className:"flex-1 min-w-0 text-gray-900 dark:text-gray-100"},e.label))))))}},9619:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(27378),r=n(40624),l=n(31792);const o={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:n,text:i,variant:s}=e;return a.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",s?o[s]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(l.Z,{icon:n,className:"mr-1"}),i)}},96841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(25773),r=(n(27378),n(35318)),l=(n(33337),n(39798),n(27915)),o=n(9634),i=n(36642);const s={title:"Install moon"},u=void 0,p={unversionedId:"install",id:"install",title:"Install moon",description:"The following guide can be used to install moon and integrate it into an existing repository (with",source:"@site/docs/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/install",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/install.mdx",tags:[],version:"current",frontMatter:{title:"Install moon"},sidebar:"docs",previous:{title:"Action graph",permalink:"/docs/how-it-works/action-graph"},next:{title:"Setup workspace",permalink:"/docs/setup-workspace"}},c={},d=[{value:"Installing",id:"installing",level:2},{value:"proto",id:"proto",level:3},{value:"Linux, macOS, WSL",id:"linux-macos-wsl",level:3},{value:"Windows",id:"windows",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Other",id:"other",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Nightly releases",id:"nightly-releases",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{text:"2 min",mdxType:"HeaderLabel"}),(0,r.kt)("p",null,"The following guide can be used to install moon and integrate it into an existing repository (with\nor without incremental adoption), or to a fresh repository."),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"The entirety of moon is packaged and shipped as a single binary. It works on all major operating\nsystems, and does not require any external dependencies. For convenience, we provide the following\nscripts to download and install moon."),(0,r.kt)("h3",{id:"proto"},"proto"),(0,r.kt)("p",null,"moon can be installed and managed in ",(0,r.kt)("a",{parentName:"p",href:"/proto"},"proto's toolchain")," using a TOML plugin. This will\ninstall moon to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/tools/moon")," and make the binary available at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.proto/bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'proto add-plugin moon "source:https://raw.githubusercontent.com/moonrepo/moon/master/proto-plugin.toml"\nproto install moon\n')),(0,r.kt)("p",null,"Furthermore, the version of moon can be pinned on a per-project basis using the ",(0,r.kt)("inlineCode",{parentName:"p"},".prototools")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title=".prototools"',title:'".prototools"'},'moon = "1.3.0"\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We suggest using proto to manage moon (and other tools), as it allows for multiple versions to be\ninstalled and used. The other installation options only allow for a single version (typically the\nlatest).")),(0,r.kt)("h3",{id:"linux-macos-wsl"},"Linux, macOS, WSL"),(0,r.kt)("p",null,"In a terminal that supports Bash, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://moonrepo.dev/install/moon.sh | bash\n")),(0,r.kt)("p",null,"This will install moon to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.moon/bin"),". You'll then need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," manually in your shell\nprofile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export PATH="$HOME/.moon/bin:$PATH"\n')),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"In Powershell or Windows Terminal, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"irm https://moonrepo.dev/install/moon.ps1 | iex\n")),(0,r.kt)("p",null,"This will install moon to ",(0,r.kt)("inlineCode",{parentName:"p"},"~\\.moon\\bin")," and prepend to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable for the\ncurrent session. To persist across sessions, update ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," manually."),(0,r.kt)("h3",{id:"nodejs"},"Node.js"),(0,r.kt)("p",null,"moon is also packaged and shipped as a single binary through the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@moonrepo/cli"},(0,r.kt)("inlineCode",{parentName:"a"},"@moonrepo/cli"))," npm package. Begin by installing this\npackage at the root of the repository. This is also useful in ",(0,r.kt)("em",{parentName:"p"},"pinning the exact version")," the\nrepository should be using."),(0,r.kt)(i.Z,{dep:"@moonrepo/cli",dev:!0,mdxType:"AddDepsTabs"}),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("p",null,"moon can also be downloaded and installed manually, by downloading an asset from\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases"},"https://github.com/moonrepo/moon/releases"),". Be sure to\nrename the file after downloading, and apply the executable bit (",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x"),") on macOS and Linux."),(0,r.kt)("h2",{id:"upgrading"},"Upgrading"),(0,r.kt)("p",null,"If using proto, moon can be upgraded using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"proto install moon --pin\n")),(0,r.kt)("p",null,"Otherwise, moon can be upgraded with the ",(0,r.kt)("a",{parentName:"p",href:"./commands/upgrade"},(0,r.kt)("inlineCode",{parentName:"a"},"moon upgrade"))," command. However, this\nwill only upgrade moon if it was installed in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.moon/bin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"moon upgrade\n")),(0,r.kt)("p",null,"Otherwise, you can re-run the installers above and it will download, install, and overwrite with the\nlatest version."),(0,r.kt)("h2",{id:"nightly-releases"},"Nightly releases"),(0,r.kt)("p",null,"moon supports nightly releases, which are built and published once a day, and for each merged\nfeature to our develop branches. When using a nightly release, you'll need to download and execute\nthe binaries manually."),(0,r.kt)("p",null,"Nightlies are published to the following channels:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To our npm package\n",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@moonrepo/cli?activeTab=versions"},(0,r.kt)("inlineCode",{parentName:"a"},"@moonrepo/cli"))," under the\n",(0,r.kt)("inlineCode",{parentName:"li"},"nightly")," tag. Releases are versioned by date."),(0,r.kt)("li",{parentName:"ul"},"As a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/moonrepo/moon/releases/tag/nightly"},"GitHub prerelease")," using the\n",(0,r.kt)("inlineCode",{parentName:"li"},"nightly")," tag. This tag always represents the latest release, and is not historical.")),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)(o.Z,{links:[{icon:"workspace-config",label:"Setup workspace",url:"./setup-workspace"}],mdxType:"NextSteps"}))}g.isMDXComponent=!0}}]);