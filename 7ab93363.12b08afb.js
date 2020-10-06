(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{179:function(A,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return g})),t.d(e,"metadata",(function(){return E})),t.d(e,"rightToc",(function(){return B})),t.d(e,"default",(function(){return i}));var n=t(2),r=t(6),o=(t(0),t(298)),g={title:"Nim Game"},E={unversionedId:"number-theory/nim-game",id:"number-theory/nim-game",isDocsHomePage:!1,title:"Nim Game",description:"\u63cf\u8ff0",source:"@site/docs/number-theory/nim-game.md",slug:"/number-theory/nim-game",permalink:"/algorithm-essentials/number-theory/nim-game",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/number-theory/nim-game.md",version:"current"},B=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],a={rightToc:B};function i(A){var e=A.components,g=Object(r.a)(A,["components"]);return Object(o.b)("wrapper",Object(n.a)({},a,g,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones."),Object(o.b)("p",null,"Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap."),Object(o.b)("p",null,"For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u8fd9\u9898\u662f\u5c3c\u59c6\u6e38\u620f\u7684\u7b80\u5316\u7248\u3002"),Object(o.b)("p",null,"\u5c3c\u59c6\u6e38\u620f\u6700\u6d41\u884c\u7684\u7248\u672c\u662f\u752812\u679a\u786c\u5e01\u3002"),Object(o.b)("p",null,Object(o.b)("img",{src:t(361).default})),Object(o.b)("p",null,"\u6e38\u620f\u89c4\u5219\u5f88\u7b80\u5355\uff0c\u6e38\u620f\u53cc\u65b9\u8f6e\u6d41\u53d6 1 \u679a\u6216\u591a\u679a\u786c\u5e01\uff08\u53ea\u80fd\u5728\u540c\u4e00\u884c\uff09\uff0c\u8c01\u62ff\u5230\u6700\u540e\u4e00\u679a\u5c31\u7b97\u8d62\u3002"),Object(o.b)("p",null,"\u6709\u8da3\u7684\u662f\uff0c\u6709\u4eba\u53d1\u73b0\uff0c\u5f53\u6269\u5c55\u5230\u4efb\u610f\u591a\u884c\uff0c\u6bcf\u884c\u6709\u4efb\u610f\u679a\u786c\u5e01\u65f6\uff0c\u5229\u7528\u4e8c\u8fdb\u5236\uff0c\u53ef\u4ee5\u628a\u8fd9\u4e2a\u6e38\u620f\u73a9\u5f97\u98ce\u751f\u6c34\u8d77\u3002\u54c8\u4f5b\u5927\u5b66\u7684\u6570\u5b66\u6559\u6388\u5e03\u987f\u5728 1901 \u5e74\u9996\u6b21\u53d1\u8868\u4e86\u8bba\u6587\u8be6\u8ff0\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e5f\u6b63\u662f\u4ed6\uff0c\u6b63\u5f0f\u5c06\u8fd9\u4e2a\u6e38\u620f\u547d\u540d\u4e3a",Object(o.b)("strong",{parentName:"p"},"\u5c3c\u59c6\u6e38\u620f"),"\u3002"),Object(o.b)("p",null,"\u628a\u73a9\u5bb6\u6bcf\u4e00\u6b65\u64cd\u4f5c\u4e4b\u540e\u7684\u6e38\u620f\u5c40\u9762\u53eb\u505a\u201c\u68cb\u5c40\u201d\u3002\u5728\u5e03\u987f\u7684\u8bba\u6587\u4e2d\uff0c\u5982\u679c\u73a9\u5bb6\u6bcf\u4e00\u6b65\u64cd\u4f5c\u540e\u7684\u68cb\u5c40\u80fd\u4fdd\u8bc1\u81ea\u5df1\u83b7\u80dc\uff0c\u90a3\u5c31\u662f\u201c\u5b89\u5168\u7684\u201d\uff0c\u5426\u5219\u5c31\u662f\u201c\u4e0d\u5b89\u5168\u7684\u201d\u3002\u6bcf\u4e2a\u4e0d\u5b89\u5168\u68cb\u5c40\u90fd\u53ef\u4ee5\u4e00\u6b65\u6b63\u786e\u7684\u64cd\u4f5c\u53d8\u6210\u5b89\u5168\u7684\uff0c\u800c\u5982\u679c\u6ca1\u6709\u6b63\u786e\u5730\u64cd\u4f5c\uff0c\u4e00\u4e2a\u5b89\u5168\u7684\u68cb\u5c40\u5c31\u4f1a\u53d8\u6210\u4e0d\u5b89\u5168\u7684\u3002"),Object(o.b)("p",null,"\u56de\u5230\u6211\u4eec\u4e0a\u9762\u8bf4\u7684\u90a3\u4e2a\u6d41\u884c\u7248\u672c\u4e0a\uff0c\u53ef\u4ee5\u770b\u5230\u5728\u521d\u59cb\u72b6\u6001\uff0c\u5b83\u7684\u4e8c\u8fdb\u5236\u8868\u793a\u5982\u4e0b\u56fe\uff1a"),Object(o.b)("p",null,Object(o.b)("img",{src:t(362).default})),Object(o.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7b2c 2 \u5217\u4e4b\u548c\u4e3a\u5947\u6570\uff0c\u6240\u4ee5\u8fd9\u4e2a\u672c\u7248\u7684\u521d\u59cb\u72b6\u6001\u662f\u4e0d\u5b89\u5168\u7684\u3002\u62ff\u6389\u6700\u4e0a\u9762\u4e00\u884c\u7684 2 \u679a\u786c\u5e01\uff0c\u7b2c 1 \u884c\u5c31\u53d8\u6210\u4e86 1 \uff0c\u4ece\u800c\u7559\u4e0b\u4e86\u4e00\u4e2a\u5b89\u5168\u68cb\u5c40\u3002\u901a\u8fc7\u7528\u5176\u4ed6\u65b9\u6cd5\u8bd5\u9a8c\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u62ff\u6389\u7b2c 1 \u884c\u7684 2 \u679a\u786c\u5e01\u662f\u7559\u4e0b\u5b89\u5168\u68cb\u5c40\u7684\u552f\u4e00\u64cd\u4f5c\u3002"),Object(o.b)("p",null,"\u5c3c\u59c6\u6e38\u620f\u6df1\u53d7\u6570\u5b66\u5bb6\u559c\u7231\u5e76\u88ab\u5e7f\u6cdb\u7814\u7a76\uff0c\u5b83\u56e0\u6b64\u4ea7\u751f\u4e86\u5f88\u591a\u53d8\u4f53\u30021910 \u5e74\u7f8e\u56fd\u6570\u5b66\u5bb6\u7a46\u5c14\u5c31\u63d0\u51fa\u4e86\u4e00\u4e2a\uff0c\u5b83\u89c4\u5219\u4e0e\u5c3c\u59c6\u6e38\u620f\u76f8\u540c\uff0c\u53ea\u4e0d\u8fc7\u73a9\u5bb6\u53ef\u4ee5\u4ece\u4e0d\u8d85\u8fc7\u6307\u5b9a\u6570 k \u7684\u4efb\u610f\u591a\u884c\u91cc\u62ff\u6389\u786c\u5e01\u3002\u6709\u8da3\u7684\u662f\uff0c\u5b83\u540c\u6837\u53ef\u4ee5\u901a\u8fc7\u4e8c\u8fdb\u5236\u6765\u5206\u6790\uff0c\u53ea\u8981\u628a\u5b89\u5168\u68cb\u5c40\u5b9a\u4e49\u4e3a\uff1a\u4e8c\u8fdb\u5236\u8868\u91cc\u7684\u6bcf\u5217\u4e4b\u548c\u90fd\u53ef\u4ee5\u88ab k + 1 \u6574\u9664\u5c31\u53ef\u4ee5\u4e86\u3002"),Object(o.b)("p",null,"\u8fd9\u9898\u662f\u884c\u6570\u4e3a1\uff0ck=3\u7684\u7b80\u5316\u7248\u5c3c\u59c6\u6e38\u620f\u3002\u7531\u4e8e\u662f\u5148\u624b\uff0c\u53ea\u9700\u8981\u5224\u65ad\u5f53\u524d\u7684\u77f3\u5934\u6570\u80fd\u5426\u88ab4\u6574\u9664\uff0c\u5982\u679c\u80fd\u6574\u9664\uff0c\u5219\u4e00\u5b9a\u4f1a\u8f93\uff0c\u5426\u5219\u4e00\u5b9a\u80fd\u8d62\u3002"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u53c2\u8003\u8d44\u6599"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.guokr.com/article/68595/"}),"http://www.guokr.com/article/68595/")),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Nim Game\n// Time Complexity: O(1), Space Complexity: O(1)\npublic class Solution {\n    public boolean canWinNim(int n) {\n        return n % 4 != 0;\n    }\n}\n")))}i.isMDXComponent=!0},298:function(A,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return s}));var n=t(0),r=t.n(n);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function g(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function E(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function B(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},o=Object.keys(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var a=r.a.createContext({}),i=function(A){var e=r.a.useContext(a),t=e;return A&&(t="function"==typeof A?A(e):E(E({},e),A)),t},c=function(A){var e=i(A.components);return r.a.createElement(a.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return r.a.createElement(r.a.Fragment,{},e)}},Q=r.a.forwardRef((function(A,e){var t=A.components,n=A.mdxType,o=A.originalType,g=A.parentName,a=B(A,["components","mdxType","originalType","parentName"]),c=i(t),Q=n,s=c["".concat(g,".").concat(Q)]||c[Q]||u[Q]||o;return t?r.a.createElement(s,E(E({ref:e},a),{},{components:t})):r.a.createElement(s,E({ref:e},a))}));function s(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var o=t.length,g=new Array(o);g[0]=Q;var E={};for(var B in e)hasOwnProperty.call(e,B)&&(E[B]=e[B]);E.originalType=A,E.mdxType="string"==typeof A?A:n,g[1]=E;for(var a=2;a<o;a++)g[a]=t[a];return r.a.createElement.apply(null,g)}return r.a.createElement.apply(null,t)}Q.displayName="MDXCreateElement"},361:function(A,e,t){"use strict";t.r(e),e.default=t.p+"assets/images/nim-game-1-4d970e0e6d98feeba5fd953974022443.png"},362:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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"}}]);