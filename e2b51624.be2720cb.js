(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{270:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return o}));var n=t(2),r=t(6),c=(t(0),t(298)),s=t(302),m=t(303),b={title:"Jump Game"},p={unversionedId:"greedy/jump-game",id:"greedy/jump-game",isDocsHomePage:!1,title:"Jump Game",description:"\u63cf\u8ff0",source:"@site/docs/greedy/jump-game.md",slug:"/greedy/jump-game",permalink:"/algorithm-essentials/greedy/jump-game",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/greedy/jump-game.md",version:"current",sidebar:"someSidebar",previous:{title:"Sqrt(x)",permalink:"/algorithm-essentials/divide-and-conquer/sqrt"},next:{title:"Jump Game II",permalink:"/algorithm-essentials/greedy/jump-game-ii"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",children:[]},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",children:[]},{value:"\u4ee3\u7801 3",id:"\u4ee3\u7801-3",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],i={rightToc:l};function o(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(c.b)("p",null,"Given an array of non-negative integers, you are initially positioned at the first index of the array."),Object(c.b)("p",null,"Each element in the array represents your maximum jump length at that position."),Object(c.b)("p",null,"Determine if you are able to reach the last index."),Object(c.b)("p",null,"For example:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"A = [2,3,1,1,4]"),", return true."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"A = [3,2,1,0,4]"),", return false."),Object(c.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(c.b)("p",null,"\u7531\u4e8e\u6bcf\u5c42\u6700\u591a\u53ef\u4ee5\u8df3",Object(c.b)("inlineCode",{parentName:"p"},"A[i]"),"\u6b65\uff0c\u4e5f\u53ef\u4ee5\u8df3 0 \u6216 1 \u6b65\uff0c\u56e0\u6b64\u5982\u679c\u80fd\u5230\u8fbe\u6700\u9ad8\u5c42\uff0c\u5219\u8bf4\u660e\u6bcf\u4e00\u5c42\u90fd\u53ef\u4ee5\u5230\u8fbe\u3002\u6709\u4e86\u8fd9\u4e2a\u6761\u4ef6\uff0c\u8bf4\u660e\u53ef\u4ee5\u7528\u8d2a\u5fc3\u6cd5\u3002"),Object(c.b)("p",null,"\u601d\u8def\u4e00\uff1a\u6b63\u5411\uff0c\u4ece 0 \u51fa\u53d1\uff0c\u4e00\u5c42\u4e00\u5c42\u7f51\u4e0a\u8df3\uff0c\u770b\u6700\u540e\u80fd\u4e0d\u80fd\u8d85\u8fc7\u6700\u9ad8\u5c42\uff0c\u80fd\u8d85\u8fc7\uff0c\u8bf4\u660e\u80fd\u5230\u8fbe\uff0c\u5426\u5219\u4e0d\u80fd\u5230\u8fbe\u3002"),Object(c.b)("p",null,"\u601d\u8def\u4e8c\uff1a\u9006\u5411\uff0c\u4ece\u6700\u9ad8\u5c42\u4e0b\u697c\u68af\uff0c\u4e00\u5c42\u4e00\u5c42\u4e0b\u964d\uff0c\u770b\u6700\u540e\u80fd\u4e0d\u80fd\u4e0b\u964d\u5230\u7b2c 0 \u5c42\u3002"),Object(c.b)("p",null,"\u601d\u8def\u4e09\uff1a\u5982\u679c\u4e0d\u6562\u7528\u8d2a\u5fc3\uff0c\u53ef\u4ee5\u7528\u52a8\u89c4\uff0c\u8bbe\u72b6\u6001\u4e3a",Object(c.b)("inlineCode",{parentName:"p"},"f[i]"),"\uff0c\u8868\u793a\u4ece\u7b2c 0 \u5c42\u51fa\u53d1\uff0c\u8d70\u5230",Object(c.b)("inlineCode",{parentName:"p"},"A[i]"),"\u65f6\u5269\u4f59\u7684\u6700\u5927\u6b65\u6570\uff0c\u5219\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\u4e3a\uff1a"),Object(c.b)("div",{className:"math math-display"},Object(c.b)("span",Object(n.a)({parentName:"div"},{className:"katex-display"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(c.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),Object(c.b)("semantics",{parentName:"math"},Object(c.b)("mrow",{parentName:"semantics"},Object(c.b)("mi",{parentName:"mrow"},"f"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(c.b)("mi",{parentName:"mrow"},"i"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(c.b)("mo",{parentName:"mrow"},"="),Object(c.b)("mi",{parentName:"mrow"},"m"),Object(c.b)("mi",{parentName:"mrow"},"a"),Object(c.b)("mi",{parentName:"mrow"},"x"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(c.b)("mi",{parentName:"mrow"},"f"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(c.b)("mi",{parentName:"mrow"},"i"),Object(c.b)("mo",{parentName:"mrow"},"\u2212"),Object(c.b)("mn",{parentName:"mrow"},"1"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(c.b)("mi",{parentName:"mrow"},"A"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"["),Object(c.b)("mi",{parentName:"mrow"},"i"),Object(c.b)("mo",{parentName:"mrow"},"\u2212"),Object(c.b)("mn",{parentName:"mrow"},"1"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"]"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")"),Object(c.b)("mo",{parentName:"mrow"},"\u2212"),Object(c.b)("mn",{parentName:"mrow"},"1"),Object(c.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(c.b)("mi",{parentName:"mrow"},"i"),Object(c.b)("mo",{parentName:"mrow"},">"),Object(c.b)("mn",{parentName:"mrow"},"0")),Object(c.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"f[i] = max(f[i-1], A[i-1])-1, i > 0")))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"="),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"m"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"x"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.10764em"}}),"f"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"A"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"["),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),"]"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mbin"}),"\u2212"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222222222222222em"}}))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.85396em",verticalAlign:"-0.19444em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"1"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),">"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.2777777777777778em"}}))),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}})),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"0")))))),Object(c.b)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),Object(c.b)(s.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(c.b)(m.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Jump Game\n// \u601d\u8def1\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean canJump(int[] nums) {\n        int reach = 1; // \u6700\u53f3\u80fd\u8df3\u5230\u54ea\u91cc\n        for (int i = 0; i < reach && reach < nums.length; ++i)\n            reach = Math.max(reach,  i + 1 + nums[i]);\n        return reach >= nums.length;\n    }\n}\n"))),Object(c.b)(m.a,{value:"cpp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Jump Game\n// \u601d\u8def1\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool canJump(const vector<int>& nums) {\n        int reach = 1; // \u6700\u53f3\u80fd\u8df3\u5230\u54ea\u91cc\n        for (int i = 0; i < reach && reach < nums.size(); ++i)\n            reach = max(reach,  i + 1 + nums[i]);\n        return reach >= nums.size();\n    }\n};\n")))),Object(c.b)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),Object(c.b)(s.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(c.b)(m.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Jump Game\n// \u601d\u8def2\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public boolean canJump(int[] nums) {\n        if (nums.length == 0) return true;\n        // \u9006\u5411\u4e0b\u697c\u68af\uff0c\u6700\u5de6\u80fd\u4e0b\u964d\u5230\u7b2c\u51e0\u5c42\n        int left_most = nums.length - 1;\n\n        for (int i = nums.length - 2; i >= 0; --i)\n            if (i + nums[i] >= left_most)\n                left_most = i;\n\n        return left_most == 0;\n    }\n}\n"))),Object(c.b)(m.a,{value:"cpp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Jump Game\n// \u601d\u8def2\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool canJump (const vector<int>& nums) {\n        if (nums.empty()) return true;\n        // \u9006\u5411\u4e0b\u697c\u68af\uff0c\u6700\u5de6\u80fd\u4e0b\u964d\u5230\u7b2c\u51e0\u5c42\n        int left_most = nums.size() - 1;\n\n        for (int i = nums.size() - 2; i >= 0; --i)\n            if (i + nums[i] >= left_most)\n                left_most = i;\n\n        return left_most == 0;\n    }\n};\n")))),Object(c.b)("h3",{id:"\u4ee3\u7801-3"},"\u4ee3\u7801 3"),Object(c.b)(s.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(c.b)(m.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Jump Game\n// \u601d\u8def\u4e09\uff0c\u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public boolean canJump(int[] nums) {\n        int[] f = new int[nums.length];\n        for (int i = 1; i < nums.length; i++) {\n            f[i] = Math.max(f[i - 1], nums[i - 1]) - 1;\n            if (f[i] < 0) return false;;\n        }\n        return f[nums.length - 1] >= 0;\n    }\n}\n"))),Object(c.b)(m.a,{value:"cpp",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// Jump Game\n// \u601d\u8def\u4e09\uff0c\u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    bool canJump(const vector<int>& nums) {\n        vector<int> f(nums.size(), 0);\n        f[0] = 0;\n        for (int i = 1; i < nums.size(); i++) {\n            f[i] = max(f[i - 1], nums[i - 1]) - 1;\n            if (f[i] < 0) return false;;\n        }\n        return f[nums.size() - 1] >= 0;\n    }\n};\n")))),Object(c.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/algorithm-essentials/greedy/jump-game-ii"}),"Jump Game II "))))}o.isMDXComponent=!0},298:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"b",(function(){return O}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},i=function(e){var a=l(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),i=l(t),u=n,O=i["".concat(s,".").concat(u)]||i[u]||o[u]||c;return t?r.a.createElement(O,m(m({ref:a},p),{},{components:t})):r.a.createElement(O,m({ref:a},p))}));function O(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=u;var m={};for(var b in a)hasOwnProperty.call(a,b)&&(m[b]=a[b]);m.originalType=e,m.mdxType="string"==typeof e?e:n,s[1]=m;for(var p=2;p<c;p++)s[p]=t[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},299:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},300:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},301:function(e,a,t){"use strict";var n=t(0),r=t(300);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(301),s=t(299),m=t(47),b=t.n(m),p=37,l=39;a.a=function(e){var a=e.block,t=e.children,m=e.defaultValue,i=e.values,o=e.groupId,u=Object(c.a)(),O=u.tabGroupChoices,j=u.setTabGroupChoices,N=Object(n.useState)(m),f=N[0],d=N[1],h=Object(n.useState)(!1),g=h[0],y=h[1];if(null!=o){var v=O[o];null!=v&&v!==f&&i.some((function(e){return e.value===v}))&&d(v)}var w=function(e){d(e),null!=o&&j(o,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},C=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",C)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a})},i.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(s.a)("tabs__item",b.a.tabItem,{"tabs__item--active":f===a}),style:g?{}:{outline:"none"},key:a,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case l:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(x,e.target,e),T(e)},onFocus:function(){return w(a)},onClick:function(){w(a),y(!1)},onPointerDown:function(){return y(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===f}))[0]))}},303:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);