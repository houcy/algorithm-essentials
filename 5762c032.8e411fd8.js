(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(298)),s=a(302),c=a(303),o={title:"Gas Station"},l={unversionedId:"linear-list/array/gas-station",id:"linear-list/array/gas-station",isDocsHomePage:!1,title:"Gas Station",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/gas-station.md",slug:"/linear-list/array/gas-station",permalink:"/algorithm-essentials/linear-list/array/gas-station",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/gas-station.md",version:"current",sidebar:"someSidebar",previous:{title:"Set Matrix Zeroes",permalink:"/algorithm-essentials/linear-list/array/set-matrix-zeroes"},next:{title:"Candy",permalink:"/algorithm-essentials/linear-list/array/candy"}},b=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"There are ",Object(i.b)("inlineCode",{parentName:"p"},"N")," gas stations along a circular route, where the amount of gas at station ",Object(i.b)("inlineCode",{parentName:"p"},"i")," is ",Object(i.b)("inlineCode",{parentName:"p"},"gas[i]"),"."),Object(i.b)("p",null,"You have a car with an unlimited gas tank and it costs ",Object(i.b)("inlineCode",{parentName:"p"},"cost[i]")," of gas to travel from station ",Object(i.b)("inlineCode",{parentName:"p"},"i")," to its next station (",Object(i.b)("inlineCode",{parentName:"p"},"i+1"),"). You begin the journey with an empty tank at one of the gas stations."),Object(i.b)("p",null,"Return the starting gas station's index if you can travel around the circuit once, otherwise return -1."),Object(i.b)("p",null,"Note:\nThe solution is guaranteed to be unique."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u9996\u5148\u60f3\u5230\u7684\u662f",Object(i.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"O"),Object(i.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(i.b)("msup",{parentName:"mrow"},Object(i.b)("mi",{parentName:"msup"},"N"),Object(i.b)("mn",{parentName:"msup"},"2")),Object(i.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(i.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"O(N^2)")))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1.064108em",verticalAlign:"-0.25em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"O"),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10903em"}}),"N"),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(i.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"2")))))))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"))))),"\u7684\u89e3\u6cd5\uff0c\u5bf9\u6bcf\u4e2a\u70b9\u8fdb\u884c\u6a21\u62df\u3002"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"O(N)"),"\u7684\u89e3\u6cd5\u662f\uff0c\u8bbe\u7f6e\u4e24\u4e2a\u53d8\u91cf\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"sum"),"\u5224\u65ad\u5f53\u524d\u7684\u6307\u9488\u7684\u6709\u6548\u6027\uff1b",Object(i.b)("inlineCode",{parentName:"p"},"total"),"\u5219\u5224\u65ad\u6574\u4e2a\u6570\u7ec4\u662f\u5426\u6709\u89e3\uff0c\u6709\u5c31\u8fd4\u56de\u901a\u8fc7",Object(i.b)("inlineCode",{parentName:"p"},"sum"),"\u5f97\u5230\u7684\u4e0b\u6807\uff0c\u6ca1\u6709\u5219\u8fd4\u56de-1\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(s.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Gas Station\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int canCompleteCircuit(int[] gas, int[] cost) {\n        int total = 0;\n        int j = -1;\n        for (int i = 0, sum = 0; i < gas.length; ++i) {\n            sum += gas[i] - cost[i];\n            total += gas[i] - cost[i];\n            if (sum < 0) {\n                j = i;\n                sum = 0;\n            }\n        }\n        return total >= 0 ? j + 1 : -1;\n    }\n};\n"))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Gas Station\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int canCompleteCircuit(vector<int> &gas, vector<int> &cost) {\n        int total = 0;\n        int j = -1;\n        for (int i = 0, sum = 0; i < gas.size(); ++i) {\n            sum += gas[i] - cost[i];\n            total += gas[i] - cost[i];\n            if (sum < 0) {\n                j = i;\n                sum = 0;\n            }\n        }\n        return total >= 0 ? j + 1 : -1;\n    }\n};\n")))))}p.isMDXComponent=!0},298:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,O=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(O,c(c({ref:t},l),{},{components:a})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},299:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},300:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},301:function(e,t,a){"use strict";var n=a(0),r=a(300);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(301),s=a(299),c=a(47),o=a.n(c),l=37,b=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,u=e.values,p=e.groupId,m=Object(i.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,f=Object(n.useState)(c),d=f[0],g=f[1],h=Object(n.useState)(!1),y=h[0],v=h[1];if(null!=p){var N=O[p];null!=N&&N!==d&&u.some((function(e){return e.value===N}))&&g(N)}var w=function(e){g(e),null!=p&&j(p,e)},C=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},k=function(){v(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",k)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":d===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),x(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===d}))[0]))}},303:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);