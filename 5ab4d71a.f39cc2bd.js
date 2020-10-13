(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var i=t(2),r=(t(0),t(301)),a=t(305),o=t(306);const c={title:"Spiral Matrix II"},l={unversionedId:"simulation/spiral-matrix-ii",id:"simulation/spiral-matrix-ii",isDocsHomePage:!1,title:"Spiral Matrix II",description:"\u63cf\u8ff0",source:"@site/docs/simulation/spiral-matrix-ii.md",slug:"/simulation/spiral-matrix-ii",permalink:"/simulation/spiral-matrix-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/spiral-matrix-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Spiral Matrix",permalink:"/simulation/spiral-matrix"},next:{title:"ZigZag Conversion",permalink:"/simulation/zigzag-conversion"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801 1",id:"\u4ee3\u7801-1",children:[]},{value:"\u4ee3\u7801 2",id:"\u4ee3\u7801-2",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],b={rightToc:u};function s({components:e,...n}){return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given an integer ",Object(r.b)("inlineCode",{parentName:"p"},"n"),", generate a square matrix filled with elements from 1 to ",Object(r.b)("inlineCode",{parentName:"p"},"n^2")," in spiral order."),Object(r.b)("p",null,"For example,\nGiven ",Object(r.b)("inlineCode",{parentName:"p"},"n = 3"),","),Object(r.b)("p",null,"You should return the following matrix:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"[\n [ 1, 2, 3 ],\n [ 8, 9, 4 ],\n [ 7, 6, 5 ]\n]\n")),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u8fd9\u9898\u6bd4\u4e0a\u4e00\u9898\u8981\u7b80\u5355\u3002"),Object(r.b)("h3",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801 1"),Object(r.b)(a.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public int[][] generateMatrix(int n) {\n        int[][] matrix = new int[n][n];\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n}\n"))),Object(r.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Spiral Matrix II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector<vector<int> > matrix(n, vector<int>(n));\n        int begin = 0, end = n - 1;\n        int num = 1;\n\n        while (begin < end) {\n            for (int j = begin; j < end; ++j) matrix[begin][j] = num++;\n            for (int i = begin; i < end; ++i) matrix[i][end] = num++;\n            for (int j = end; j > begin; --j) matrix[end][j] = num++;\n            for (int i = end; i > begin; --i) matrix[i][begin] = num++;\n            ++begin;\n            --end;\n        }\n\n        if (begin == end) matrix[begin][begin] = num;\n\n        return matrix;\n    }\n};\n")))),Object(r.b)("h3",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801 2"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// LeetCode, Spiral Matrix II\n// @author \u9f9a\u9646\u5b89 (http://weibo.com/luangong)\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<vector<int> > generateMatrix(int n) {\n        vector< vector<int> > matrix(n, vector<int>(n));\n        if (n == 0) return matrix;\n        int beginX = 0, endX = n - 1;\n        int beginY = 0, endY = n - 1;\n        int num = 1;\n        while (true) {\n            for (int j = beginX; j <= endX; ++j) matrix[beginY][j] = num++;\n            if (++beginY > endY) break;\n\n            for (int i = beginY; i <= endY; ++i) matrix[i][endX] = num++;\n            if (beginX > --endX) break;\n\n            for (int j = endX; j >= beginX; --j) matrix[endY][j] = num++;\n            if (beginY > --endY) break;\n\n            for (int i = endY; i >= beginY; --i) matrix[i][beginX] = num++;\n            if (++beginX > endX) break;\n        }\n        return matrix;\n    }\n};\n")),Object(r.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/simulation/spiral-matrix"}),"Spiral Matrix"))))}s.isMDXComponent=!0},301:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),b=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(t),p=i,d=s["".concat(o,".").concat(p)]||s[p]||m[p]||a;return t?r.a.createElement(d,c(c({ref:n},u),{},{components:t})):r.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},302:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},303:function(e,n,t){"use strict";var i=t(0);const r=Object(i.createContext)(void 0);n.a=r},304:function(e,n,t){"use strict";var i=t(0),r=t(303);n.a=function(){const e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},305:function(e,n,t){"use strict";var i=t(0),r=t.n(i),a=t(304),o=t(302),c=t(49),l=t.n(c);const u=37,b=39;n.a=function(e){const{block:n,children:t,defaultValue:c,values:s,groupId:m}=e,{tabGroupChoices:p,setTabGroupChoices:d}=Object(a.a)(),[f,g]=Object(i.useState)(c),[j,O]=Object(i.useState)(!1);if(null!=m){const e=p[m];null!=e&&e!==f&&s.some((n=>n.value===e))&&g(e)}const v=e=>{g(e),null!=m&&d(m,e)},x=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},h=()=>{O(!1)};return Object(i.useEffect)((()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",h)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},s.map((({value:e,label:n})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),style:j?{}:{outline:"none"},key:e,ref:e=>x.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case b:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case u:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(x,e.target,e),y(e)},onFocus:()=>v(e),onClick:()=>{v(e),O(!1)},onPointerDown:()=>O(!1)},n)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((e=>e.props.value===f))[0]))}},306:function(e,n,t){"use strict";var i=t(0),r=t.n(i);n.a=function(e){return r.a.createElement("div",null,e.children)}}}]);