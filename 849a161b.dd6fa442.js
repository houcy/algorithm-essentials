(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),s=(n(0),n(298)),i=n(302),c=n(303),l={title:"3Sum Closest"},o={unversionedId:"linear-list/array/3sum-closest",id:"linear-list/array/3sum-closest",isDocsHomePage:!1,title:"3Sum Closest",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/array/3sum-closest.md",slug:"/linear-list/array/3sum-closest",permalink:"/algorithm-essentials/linear-list/array/3sum-closest",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/array/3sum-closest.md",version:"current",sidebar:"someSidebar",previous:{title:"3Sum",permalink:"/algorithm-essentials/linear-list/array/3sum"},next:{title:"4Sum",permalink:"/algorithm-essentials/linear-list/array/4sum"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],m={rightToc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(s.b)("p",null,"Given an array ",Object(s.b)("inlineCode",{parentName:"p"},"S")," of ",Object(s.b)("inlineCode",{parentName:"p"},"n")," integers, find three integers in ",Object(s.b)("inlineCode",{parentName:"p"},"S")," such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution."),Object(s.b)("p",null,"For example, given array ",Object(s.b)("inlineCode",{parentName:"p"},"S = {-1 2 1 -4}"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"target = 1"),"."),Object(s.b)("p",null,"The sum that is closest to the target is 2. (",Object(s.b)("inlineCode",{parentName:"p"},"-1 + 2 + 1 = 2"),")."),Object(s.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(s.b)("p",null,"\u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\uff0c\u590d\u6742\u5ea6 ",Object(s.b)("span",Object(a.a)({parentName:"p"},{className:"math math-inline"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",{parentName:"mrow"},"O"),Object(s.b)("mo",Object(a.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(s.b)("msup",{parentName:"mrow"},Object(s.b)("mi",{parentName:"msup"},"n"),Object(s.b)("mn",{parentName:"msup"},"2")),Object(s.b)("mo",Object(a.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(s.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"O(n^2)")))),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"1.064108em",verticalAlign:"-0.25em"}})),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.02778em"}}),"O"),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"mopen"}),"("),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"mord mathnormal"}),"n"),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"msupsub"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-t"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-r"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(s.b)("span",Object(a.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"2")))))))),Object(s.b)("span",Object(a.a)({parentName:"span"},{className:"mclose"}),")"))))),"\u3002"),Object(s.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(s.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"java",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"// 3Sum Closest\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c\n// Time Complexity: O(n^2), Space Complexity: O(1)\npublic class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        int result = 0;\n        int minGap = Integer.MAX_VALUE;\n        Arrays.sort(nums);\n\n        for (int i = 0; i < nums.length - 1; ++i) {\n            int j = i + 1;\n            int k = nums.length - 1;\n\n            while(j < k) {\n                final int sum = nums[i] + nums[j] + nums[k];\n                final int gap = Math.abs(sum - target);\n                if (gap < minGap) {\n                    result = sum;\n                    minGap = gap;\n                }\n\n                if (sum < target) ++j;\n                else              --k;\n            }\n        }\n        return result;\n    }\n}\n"))),Object(s.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"// 3Sum Closest\n// \u5148\u6392\u5e8f\uff0c\u7136\u540e\u5de6\u53f3\u5939\u903c//\n// Time Complexity: O(n^2), Space Complexity: O(1)\nclass Solution {\npublic:\n    int threeSumClosest(vector<int>& nums, int target) {\n        int result = 0;\n        int min_gap = INT_MAX;\n\n        sort(nums.begin(), nums.end());\n\n        for (auto a = nums.begin(); a != prev(nums.end(), 2); ++a) {\n            auto b = next(a);\n            auto c = prev(nums.end());\n\n            while (b < c) {\n                const int sum = *a + *b + *c;\n                const int gap = abs(sum - target);\n\n                if (gap < min_gap) {\n                    result = sum;\n                    min_gap = gap;\n                }\n\n                if (sum < target) ++b;\n                else              --c;\n            }\n        }\n\n        return result;\n    }\n};\n")))),Object(s.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/algorithm-essentials/linear-list/array/2sum"}),"2Sum")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/algorithm-essentials/linear-list/array/3sum"}),"3Sum")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"/algorithm-essentials/linear-list/array/4sum"}),"4Sum"))))}b.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,O=m["".concat(i,".").concat(p)]||m[p]||b[p]||s;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},300:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},301:function(e,t,n){"use strict";var a=n(0),r=n(300);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(301),i=n(299),c=n(47),l=n.n(c),o=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,m=e.values,b=e.groupId,p=Object(s.a)(),O=p.tabGroupChoices,j=p.setTabGroupChoices,f=Object(a.useState)(c),d=f[0],h=f[1],g=Object(a.useState)(!1),y=g[0],v=g[1];if(null!=b){var N=O[b];null!=N&&N!==d&&m.some((function(e){return e.value===N}))&&h(N)}var w=function(e){h(e),null!=b&&j(b,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},S=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",S)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},m.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":d===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},303:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);