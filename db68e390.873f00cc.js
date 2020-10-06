(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{265:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),c=(t(0),t(298)),o=t(302),i=t(303),s={title:"Longest Consecutive Sequence"},l={unversionedId:"linear-list/array/longest-consecutive-sequence",id:"linear-list/array/longest-consecutive-sequence",isDocsHomePage:!1,title:"Longest Consecutive Sequence",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/longest-consecutive-sequence.md",slug:"/linear-list/array/longest-consecutive-sequence",permalink:"/algorithm-essentials/linear-list/array/longest-consecutive-sequence",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/longest-consecutive-sequence.md",version:"current",sidebar:"someSidebar",previous:{title:"Remove Duplicates from Sorted Array II",permalink:"/algorithm-essentials/linear-list/array/remove-duplicates-from-sorted-array-ii"},next:{title:"2Sum",permalink:"/algorithm-essentials/linear-list/array/2sum"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],m={rightToc:u};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(c.b)("p",null,"Given an unsorted array of integers, find the length of the longest consecutive elements sequence."),Object(c.b)("p",null,"For example,\nGiven ",Object(c.b)("inlineCode",{parentName:"p"},"[100, 4, 200, 1, 3, 2]"),",\nThe longest consecutive elements sequence is ",Object(c.b)("inlineCode",{parentName:"p"},"[1, 2, 3, 4]"),". Return its length: 4."),Object(c.b)("p",null,"Your algorithm should run in ",Object(c.b)("inlineCode",{parentName:"p"},"O(n)")," complexity."),Object(c.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(c.b)("p",null,"\u5982\u679c\u5141\u8bb8",Object(c.b)("span",Object(a.a)({parentName:"p"},{className:"math math-inline"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mi",{parentName:"mrow"},"O"),Object(c.b)("mo",Object(a.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(c.b)("mi",{parentName:"mrow"},"n"),Object(c.b)("mi",{parentName:"mrow"},"log"),Object(c.b)("mo",{parentName:"mrow"},"\u2061"),Object(c.b)("mi",{parentName:"mrow"},"n"),Object(c.b)("mo",Object(a.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(c.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"O(n \\log n)")))),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"O"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mopen"}),"("),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord mathnormal"}),"n"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mop"}),"lo",Object(c.b)("span",Object(a.a)({parentName:"span"},{style:{marginRight:"0.01389em"}}),"g")),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mord mathnormal"}),"n"),Object(c.b)("span",Object(a.a)({parentName:"span"},{className:"mclose"}),")"))))),"\u7684\u590d\u6742\u5ea6\uff0c\u90a3\u4e48\u53ef\u4ee5\u5148\u6392\u5e8f\uff0c\u53ef\u662f\u672c\u9898\u8981\u6c42",Object(c.b)("inlineCode",{parentName:"p"},"O(n)"),"\u3002"),Object(c.b)("p",null,"\u7531\u4e8e\u5e8f\u5217\u91cc\u7684\u5143\u7d20\u662f\u65e0\u5e8f\u7684\uff0c\u53c8\u8981\u6c42",Object(c.b)("inlineCode",{parentName:"p"},"O(n)"),"\uff0c\u9996\u5148\u8981\u60f3\u5230\u7528\u54c8\u5e0c\u8868\u3002"),Object(c.b)("p",null,"\u7528\u4e00\u4e2a\u54c8\u5e0c\u8868\u5b58\u50a8\u6240\u6709\u51fa\u73b0\u8fc7\u7684\u5143\u7d20\uff0c\u5bf9\u6bcf\u4e2a\u5143\u7d20\uff0c\u4ee5\u8be5\u5143\u7d20\u4e3a\u4e2d\u5fc3\uff0c\u5f80\u5de6\u53f3\u6269\u5f20\uff0c\u76f4\u5230\u4e0d\u8fde\u7eed\u4e3a\u6b62\uff0c\u8bb0\u5f55\u4e0b\u6700\u957f\u7684\u957f\u5ea6\u3002"),Object(c.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(c.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// Longest Consecutive Sequence\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\npublic class Solution {\n    public int longestConsecutive(int[] nums) {\n        final HashSet<Integer> mySet = new HashSet<Integer>();\n        for (int i : nums) mySet.add(i);\n\n        int longest = 0;\n        for (int i : nums) {\n            int length = 1;\n            for (int j = i - 1; mySet.contains(j); --j) {\n                mySet.remove(j);\n                ++length;\n            }\n            for (int j = i + 1; mySet.contains(j); ++j) {\n                mySet.remove(j);\n                ++length;\n            }\n            longest = Math.max(longest, length);\n        }\n        return longest;\n    }\n}\n"))),Object(c.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// Longest Consecutive Sequence\n// Time Complexity: O(n)\uff0cSpace Complexity: O(n)\nclass Solution {\npublic:\n    int longestConsecutive(const vector<int> &nums) {\n        unordered_set<int> my_set;\n        for (auto i : nums) my_set.insert(i);\n\n        int longest = 0;\n        for (auto i : nums) {\n            int length = 1;\n            for (int j = i - 1; my_set.find(j) != my_set.end(); --j) {\n                my_set.erase(j);\n                ++length;\n            }\n            for (int j = i + 1; my_set.find(j) != my_set.end(); ++j) {\n                my_set.erase(j);\n                ++length;\n            }\n            longest = max(longest, length);\n        }\n        return longest;\n    }\n};\n")))))}b.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,f=m["".concat(o,".").concat(p)]||m[p]||b[p]||c;return t?r.a.createElement(f,i(i({ref:n},l),{},{components:t})):r.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},300:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},301:function(e,n,t){"use strict";var a=t(0),r=t(300);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var a=t(0),r=t.n(a),c=t(301),o=t(299),i=t(47),s=t.n(i),l=37,u=39;n.a=function(e){var n=e.block,t=e.children,i=e.defaultValue,m=e.values,b=e.groupId,p=Object(c.a)(),f=p.tabGroupChoices,O=p.setTabGroupChoices,j=Object(a.useState)(i),d=j[0],y=j[1],g=Object(a.useState)(!1),v=g[0],h=g[1];if(null!=b){var N=f[b];null!=N&&N!==d&&m.some((function(e){return e.value===N}))&&y(N)}var w=function(e){y(e),null!=b&&O(b,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},S=function(){h(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",S)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},m.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===n,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":d===n}),style:v?{}:{outline:"none"},key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e),C(e)},onFocus:function(){return w(n)},onClick:function(){w(n),h(!1)},onPointerDown:function(){return h(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===d}))[0]))}},303:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);