(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{217:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),i=(t(0),t(298)),l=t(302),c=t(303),o={title:"Pascal's Triangle"},s={unversionedId:"simulation/pascal-s-triangle",id:"simulation/pascal-s-triangle",isDocsHomePage:!1,title:"Pascal's Triangle",description:"\u63cf\u8ff0",source:"@site/docs/simulation/pascal-s-triangle.md",slug:"/simulation/pascal-s-triangle",permalink:"/algorithm-essentials/simulation/pascal-s-triangle",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/pascal-s-triangle.md",version:"current",sidebar:"someSidebar",previous:{title:"Substring with Concatenation of All Words",permalink:"/algorithm-essentials/simulation/substring-with-concatenation-of-all-words"},next:{title:"Pascal's Triangle II",permalink:"/algorithm-essentials/simulation/pascal-s-triangle-ii"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ece\u5de6\u5230\u53f3",id:"\u4ece\u5de6\u5230\u53f3",children:[]},{value:"\u4ece\u53f3\u5230\u5de6",id:"\u4ece\u53f3\u5230\u5de6",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given ",Object(i.b)("inlineCode",{parentName:"p"},"numRows"),", generate the first ",Object(i.b)("inlineCode",{parentName:"p"},"numRows")," of Pascal's triangle."),Object(i.b)("p",null,"For example, given ",Object(i.b)("inlineCode",{parentName:"p"},"numRows = 5"),","),Object(i.b)("p",null,"Return"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"[\n     [1],\n    [1,1],\n   [1,2,1],\n  [1,3,3,1],\n [1,4,6,4,1]\n]\n")),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u672c\u9898\u53ef\u4ee5\u7528\u961f\u5217\uff0c\u8ba1\u7b97\u4e0b\u4e00\u884c\u65f6\uff0c\u7ed9\u4e0a\u4e00\u884c\u5de6\u53f3\u5404\u52a0\u4e00\u4e2a 0\uff0c\u7136\u540e\u4e0b\u4e00\u884c\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u5c31\u7b49\u4e8e\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u4e4b\u548c\u3002"),Object(i.b)("p",null,"\u53e6\u4e00\u79cd\u601d\u8def\uff0c\u4e0b\u4e00\u884c\u7b2c\u4e00\u4e2a\u5143\u7d20\u548c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u8d4b\u503c\u4e3a 1\uff0c\u4e2d\u95f4\u7684\u6bcf\u4e2a\u5143\u7d20\uff0c\u7b49\u4e8e\u4e0a\u4e00\u884c\u7684\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u5143\u7d20\u4e4b\u548c\u3002"),Object(i.b)("h3",{id:"\u4ece\u5de6\u5230\u53f3"},"\u4ece\u5de6\u5230\u53f3"),Object(i.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        List<List<Integer>> result = new ArrayList<>();\n        if(numRows == 0) return result;\n\n        result.add(new ArrayList<>(Arrays.asList(1))); //first row\n\n        for(int i = 2; i <= numRows; ++i) {\n            Integer[] current = new Integer[i]; // \u672c\u884c\n            Arrays.fill(current, 1);\n            List<Integer> prev = result.get(i - 2); // \u4e0a\u4e00\u884c\n\n            for(int j = 1; j < i - 1; ++j) {\n                current[j] = prev.get(j-1) + prev.get(j); // \u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u4e4b\u548c\n            }\n            result.add(new ArrayList<>(Arrays.asList(current)));\n        }\n        return result;\n    }\n}\n"))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// LeetCode, Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > generate(int numRows) {\n        vector<vector<int> > result;\n        if(numRows == 0) return result;\n\n        result.push_back(vector<int>(1,1)); //first row\n\n        for(int i = 2; i <= numRows; ++i) {\n            vector<int> current(i,1);  // \u672c\u884c\n            const vector<int> &prev = result[i-2];  // \u4e0a\u4e00\u884c\n\n            for(int j = 1; j < i - 1; ++j) {\n                current[j] = prev[j-1] + prev[j]; // \u5de6\u4e0a\u89d2\u548c\u53f3\u4e0a\u89d2\u4e4b\u548c\n            }\n            result.push_back(current);\n        }\n        return result;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u4ece\u53f3\u5230\u5de6"},"\u4ece\u53f3\u5230\u5de6"),Object(i.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<List<Integer>> generate(int numRows) {\n        List<List<Integer>> result = new ArrayList<>();\n        List<Integer> array = new ArrayList<>();\n        for (int i = 1; i <= numRows; i++) {\n            for (int j = i - 2; j > 0; j--) {\n                array.set(j, array.get(j - 1) + array.get(j));\n            }\n            array.add(1);\n            result.add(new ArrayList<Integer>(array));\n        }\n        return result;\n    }\n}\n"))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// LeetCode, Pascal's Triangle\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    vector<vector<int> > generate(int numRows) {\n        vector<vector<int> > result;\n        vector<int> array;\n        for (int i = 1; i <= numRows; i++) {\n            for (int j = i - 2; j > 0; j--) {\n                array[j] = array[j - 1] + array[j];\n            }\n            array.push_back(1);\n            result.push_back(array);\n        }\n        return result;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/simulation/pascal-s-triangle-ii"}),"Pascal's Triangle II"))))}p.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(t),f=r,m=b["".concat(l,".").concat(f)]||b[f]||p[f]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(301),l=t(299),c=t(47),o=t.n(c),s=37,u=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,b=e.values,p=e.groupId,f=Object(i.a)(),m=f.tabGroupChoices,d=f.setTabGroupChoices,j=Object(r.useState)(c),v=j[0],O=j[1],g=Object(r.useState)(!1),y=g[0],w=g[1];if(null!=p){var h=m[p];null!=h&&h!==v&&b.some((function(e){return e.value===h}))&&O(h)}var T=function(e){O(e),null!=p&&d(p,e)},P=[],L=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",L),window.addEventListener("mousedown",x)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n})},b.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":v===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(P,e.target,e),L(e)},onFocus:function(){return T(n)},onClick:function(){T(n),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);