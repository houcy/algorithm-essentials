(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{298:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return j}));var n=t(0),s=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=s.a.createContext({}),i=function(e){var a=s.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},l=function(e){var a=i(e.components);return s.a.createElement(p.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return s.a.createElement(s.a.Fragment,{},a)}},O=s.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=i(t),O=n,j=l["".concat(c,".").concat(O)]||l[O]||o[O]||r;return t?s.a.createElement(j,m(m({ref:a},p),{},{components:t})):s.a.createElement(j,m({ref:a},p))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,c=new Array(r);c[0]=O;var m={};for(var b in a)hasOwnProperty.call(a,b)&&(m[b]=a[b]);m.originalType=e,m.mdxType="string"==typeof e?e:n,c[1]=m;for(var p=2;p<r;p++)c[p]=t[p];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},299:function(e,a,t){"use strict";function n(e){var a,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(s&&(s+=" "),s+=t);else for(a in e)e[a]&&(s&&(s+=" "),s+=a);return s}a.a=function(){for(var e,a,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(s&&(s+=" "),s+=a);return s}},300:function(e,a,t){"use strict";var n=t(0),s=Object(n.createContext)(void 0);a.a=s},301:function(e,a,t){"use strict";var n=t(0),s=t(300);a.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(301),c=t(299),m=t(47),b=t.n(m),p=37,i=39;a.a=function(e){var a=e.block,t=e.children,m=e.defaultValue,l=e.values,o=e.groupId,O=Object(r.a)(),j=O.tabGroupChoices,N=O.setTabGroupChoices,u=Object(n.useState)(m),h=u[0],g=u[1],d=Object(n.useState)(!1),f=d[0],v=d[1];if(null!=o){var y=j[o];null!=y&&y!==h&&l.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=o&&N(o,e)},x=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},C=function(){v(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",C)}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a})},l.map((function(e){var a=e.value,t=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===a,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===a}),style:f?{}:{outline:"none"},key:a,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case i:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case p:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(x,e.target,e),k(e)},onFocus:function(){return w(a)},onClick:function(){w(a),v(!1)},onPointerDown:function(){return v(!1)}},t)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},303:function(e,a,t){"use strict";var n=t(0),s=t.n(n);a.a=function(e){return s.a.createElement("div",null,e.children)}},75:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return o}));var n=t(2),s=t(6),r=(t(0),t(298)),c=t(302),m=t(303),b={title:"Container With Most Water"},p={unversionedId:"greedy/container-with-most-water",id:"greedy/container-with-most-water",isDocsHomePage:!1,title:"Container With Most Water",description:"\u63cf\u8ff0",source:"@site/docs/greedy/container-with-most-water.md",slug:"/greedy/container-with-most-water",permalink:"/algorithm-essentials/greedy/container-with-most-water",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/greedy/container-with-most-water.md",version:"current",sidebar:"someSidebar",previous:{title:"Longest Substring Without Repeating Characters",permalink:"/algorithm-essentials/greedy/longest-substring-without-repeating-characters"},next:{title:"Patching Array",permalink:"/algorithm-essentials/greedy/patching-array"}},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],l={rightToc:i};function o(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given ",Object(r.b)("inlineCode",{parentName:"p"},"n")," non-negative integers ",Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"a"),Object(r.b)("mn",{parentName:"msub"},"1")),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"a"),Object(r.b)("mn",{parentName:"msub"},"2")),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(r.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(r.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(r.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"."),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"a"),Object(r.b)("mi",{parentName:"msub"},"n"))),Object(r.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"a_1, a_2, ..., a_n")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.625em",verticalAlign:"-0.19444em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"1")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.30110799999999993em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mtight"}),"2")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"."),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.151392em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"n")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(r.b)("span",{parentName:"span"})))))))))),", where each represents a point at coordinate ",Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(r.b)("mi",{parentName:"mrow"},"i"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"a"),Object(r.b)("mi",{parentName:"msub"},"i")),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(r.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(i, a_i)")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.31166399999999994em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"i")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")"))))),". n vertical lines are drawn such that the two endpoints of line ",Object(r.b)("inlineCode",{parentName:"p"},"i")," is at ",Object(r.b)("span",Object(n.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),"("),Object(r.b)("mi",{parentName:"mrow"},"i"),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{separator:"true"}),","),Object(r.b)("msub",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msub"},"a"),Object(r.b)("mi",{parentName:"msub"},"i")),Object(r.b)("mo",Object(n.a)({parentName:"mrow"},{stretchy:"false"}),")")),Object(r.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"(i, a_i)")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mopen"}),"("),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"i"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mpunct"}),","),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mspace",style:{marginRight:"0.16666666666666666em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal"}),"a"),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.31166399999999994em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight"}),"i")))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),Object(r.b)("span",{parentName:"span"})))))),Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"mclose"}),")")))))," and ",Object(r.b)("inlineCode",{parentName:"p"},"(i, 0)"),". Find two lines, which together with x-axis forms a container, such that the container contains the most water."),Object(r.b)("p",null,"Note: You may not slant the container."),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u6bcf\u4e2a\u5bb9\u5668\u7684\u9762\u79ef\uff0c\u53d6\u51b3\u4e8e\u6700\u77ed\u7684\u6728\u677f\u3002"),Object(r.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(m.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Container With Most Water\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public int maxArea(int[] height) {\n        int start = 0;\n        int end = height.length - 1;\n        int result = Integer.MIN_VALUE;\n        while (start < end) {\n            int area = Math.min(height[end], height[start]) * (end - start);\n            result = Math.max(result, area);\n            if (height[start] <= height[end]) {\n                start++;\n            } else {\n                end--;\n            }\n        }\n        return result;\n    }\n}\n"))),Object(r.b)(m.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// LeetCode, Container With Most Water\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    int maxArea(vector<int> &height) {\n        int start = 0;\n        int end = height.size() - 1;\n        int result = INT_MIN;\n        while (start < end) {\n            int area = min(height[end], height[start]) * (end - start);\n            result = max(result, area);\n            if (height[start] <= height[end]) {\n                start++;\n            } else {\n                end--;\n            }\n        }\n        return result;\n    }\n};\n")))),Object(r.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/algorithm-essentials/linear-list/array/trapping-rain-water"}),"Trapping Rain Water")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/algorithm-essentials/stack-and-queue/stack/largest-rectangle-in-histogram"}),"Largest Rectangle in Histogram"))))}o.isMDXComponent=!0}}]);