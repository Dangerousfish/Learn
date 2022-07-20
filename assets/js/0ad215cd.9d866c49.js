"use strict";(self.webpackChunklearn=self.webpackChunklearn||[]).push([[388],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),s=n,N=k["".concat(u,".").concat(s)]||k[s]||c[s]||l;return a?r.createElement(N,i(i({ref:t},m),{},{components:a})):r.createElement(N,i({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={slug:"0720.md",title:464,authors:["Honki"],tags:["robotics","\u4f34\u5b78\u677e","\u4f34\u5b78\u677e\u6d3b\u52d5\u8a18\u9304"]},i="Exhiberry Pi kick off -- Arduino CLI Getting Started",o={permalink:"/Learn/blog/0720.md",editUrl:"https://github.com/accomdemy/Learn/blog/0720.md",source:"@site/blog/0720.md",title:"464",description:"\u8b70\u7a0b",date:"2022-07-20T04:57:28.000Z",formattedDate:"July 20, 2022",tags:[{label:"robotics",permalink:"/Learn/blog/tags/robotics"},{label:"\u4f34\u5b78\u677e",permalink:"/Learn/blog/tags/\u4f34\u5b78\u677e"},{label:"\u4f34\u5b78\u677e\u6d3b\u52d5\u8a18\u9304",permalink:"/Learn/blog/tags/\u4f34\u5b78\u677e\u6d3b\u52d5\u8a18\u9304"}],readingTime:1.58,truncated:!1,authors:[{Name:"Honki",tittle:"Community Member",url:"https://www.facebook.com/honki",imageURL:"https://scontent.fcok15-1.fna.fbcdn.net/v/t39.30808-6/271006435_10158650977131375_3729515632184744925_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xUqVrKmlkQMAX9Drdlc&_nc_ht=scontent.fcok15-1.fna&oh=00_AT_pyAkiy0aW14s9_uSbwemg8Q-_-IXvDgLDLgEG1jKpzg&oe=62D8BB72",key:"Honki"}],frontMatter:{slug:"0720.md",title:"464",authors:["Honki"],tags:["robotics","\u4f34\u5b78\u677e","\u4f34\u5b78\u677e\u6d3b\u52d5\u8a18\u9304"]},nextItem:{title:"\u5f9e0\u5230\u6709\u88fd\u4f5c\u81ea\u5df1\u7684CPU\uff01\uff01 \u7b2c\u4e8c\u5468\u6d3b\u52d5\u8a18\u9304 20220712",permalink:"/Learn/blog/risc0712.md"}},u={authorsImageUrls:[void 0]},p=[{value:"\u8b70\u7a0b",id:"\u8b70\u7a0b",level:2},{value:"\u5171\u7b46",id:"\u5171\u7b46",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u8b70\u7a0b"},"\u8b70\u7a0b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rate.cx/rate?QEaptd"},"\u958b\u5834\u8abf\u67e5")),(0,n.kt)("li",{parentName:"ul"},"\u95dc\u65bc\u3000Exhiberry Pi",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hackmd.io/@openlabtaipei/S1U7nC3q8"},"\u958b\u6e90\u9304\u50cf\u85dd\u8853\u540c\u6b65\u64ad\u653e\u5668\u958b\u767c\u8a08\u756b")),(0,n.kt)("li",{parentName:"ul"},"\u9060\u7aef\u66f4\u65b0"),(0,n.kt)("li",{parentName:"ul"},"OTA on ESP32 vs Other Arduino Boards"),(0,n.kt)("li",{parentName:"ul"},"OTA",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7d42\u7aef\u7cfb\u7d71\u52a0\u5165 OTA \u6a5f\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5efa\u7acb OTA server"),(0,n.kt)("li",{parentName:"ul"},"\u8a2d\u8a08 OTA \u89f8\u767c\u6a5f\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u7dad\u8b77 OTA \u6d41\u7a0b\uff08\u97cc\u9ad4\u767c\u4f48\u3001\u7248\u672c\u7ba1\u7406\u3001\u7570\u5e38\u8ffd\u8e64...\uff09"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://gw.alicdn.com/imgextra/i1/739771706/TB20I4FotbJ8KJjy1zjXXaqapXa_!!739771706.png"},"IR \u529f\u80fd\u5916\u5305\u7684\u6982\u5ff5")),(0,n.kt)("li",{parentName:"ul"},"[Cloud Storage]","-- network --","[Linux Board]","-- usb --","[Arduino Boards]"))),(0,n.kt)("li",{parentName:"ul"},"\u786c\u9ad4\u9078\u64c7",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Banana Pi BPI-M2 Zero",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ethernet port"))),(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9 wiki -- Linux images",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Armbian",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"armbian => debian for ARM"))))))),(0,n.kt)("li",{parentName:"ul"},"Armbian",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DHCP"),(0,n.kt)("li",{parentName:"ul"},"auto-expand SD "),(0,n.kt)("li",{parentName:"ul"},"enabled sshd:22"),(0,n.kt)("li",{parentName:"ul"},"password: 1234"))),(0,n.kt)("li",{parentName:"ul"},"\u7248\u672c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bullseye, buster "),(0,n.kt)("li",{parentName:"ul"},"focal"),(0,n.kt)("li",{parentName:"ul"},"current vs edge"))))),(0,n.kt)("li",{parentName:"ul"},"\u74b0\u5883\u8a2d\u5b9a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"sudo dpkg-reconfigure dash"),(0,n.kt)("li",{parentName:"ul"},"sudo update-alternatives --config editor"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/andrewintw/skel-home.git"},"https://github.com/andrewintw/skel-home.git")))),(0,n.kt)("li",{parentName:"ul"},"Arduino-CLI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"install.sh"),(0,n.kt)("li",{parentName:"ul"},"PATH"),(0,n.kt)("li",{parentName:"ul"},"~/.arduino15/",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"package_index.json"),(0,n.kt)("li",{parentName:"ul"},"library_index.json "))),(0,n.kt)("li",{parentName:"ul"},"\u6383\u96f7: board list"))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Arduino-CLI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"board list"),(0,n.kt)("li",{parentName:"ul"},"board listall"),(0,n.kt)("li",{parentName:"ul"},"board search"),(0,n.kt)("li",{parentName:"ul"},"core list"),(0,n.kt)("li",{parentName:"ul"},"core search -a"),(0,n.kt)("li",{parentName:"ul"},"core install"),(0,n.kt)("li",{parentName:"ul"},"core list --all"),(0,n.kt)("li",{parentName:"ul"},"Nano detect issue",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"serial-discovery"))),(0,n.kt)("li",{parentName:"ul"},"sketch new"),(0,n.kt)("li",{parentName:"ul"},"compile"),(0,n.kt)("li",{parentName:"ul"},"upload",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"avrdude"))),(0,n.kt)("li",{parentName:"ul"},"sketch attach")))),(0,n.kt)("h2",{id:"\u5171\u7b46"},"\u5171\u7b46"),(0,n.kt)("p",null,"(\u96a8\u610f\u5beb\u4e0b\u4f60\u60f3\u8a18\u9304\u7684\u4e8b\u60c5)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"[color=orange][name=Paoyung Chang]","[time=Fri, Jul 1, 2022 12:39 AM]")),(0,n.kt)("p",null,"\u5075\u6e2c\u5de5\u5177\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/arduino/board-discovery"},"arduino/board-discovery"),"\n\u8f38\u51fa\u5982\u4e0b\uff1a(\u9700\u5f9e VID:PID \u518d\u505a\u5224\u65b7)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ board-discovery git:(master) \u2717 go run 0701.go\nDEVICES:\n  SERIAL:\n - VENDOR ID (VID): 0x10c4\n   PRODUCT ID (PID): 0xea60\n   SERIAL NUMBER: 029CTMHA\n   CONNECTED ON PORT: /dev/ttyUSB0\n\n - VENDOR ID (VID): 0x2341\n   PRODUCT ID (PID): 0x0043\n   SERIAL NUMBER: 95635333630351C0F161\n   CONNECTED ON PORT: /dev/ttyACM0\n")))}c.isMDXComponent=!0}}]);