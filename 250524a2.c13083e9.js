(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{104:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return o})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return b}));var t=r(2),i=r(6),u=(r(0),r(298)),a={title:"Ugly Number"},o={unversionedId:"number-theory/ugly-number",id:"number-theory/ugly-number",isDocsHomePage:!1,title:"Ugly Number",description:"\u63cf\u8ff0",source:"@site/docs/number-theory/ugly-number.md",slug:"/number-theory/ugly-number",permalink:"/algorithm-essentials/number-theory/ugly-number",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/number-theory/ugly-number.md",version:"current",sidebar:"someSidebar",previous:{title:"Happy Number",permalink:"/algorithm-essentials/number-theory/happy-number"},next:{title:"Ugly Number II",permalink:"/algorithm-essentials/number-theory/ugly-number-ii"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],c={rightToc:l};function b(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(u.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(u.b)("p",null,"Write a function to check whether a given number is an ugly number."),Object(u.b)("p",null,"Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7."),Object(u.b)("p",null,"Note that 1 is typically treated as an ugly number."),Object(u.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(u.b)("p",null,"\u601d\u8def\u5f88\u7b80\u5355\uff0c\u628a",Object(u.b)("inlineCode",{parentName:"p"},"n"),"\u91cc\u9762\u7684 2,3,5 \u5168\u90e8\u6d88\u6389\uff0c\u770b\u6700\u540e\u80fd\u4e0d\u80fd\u5269\u4e0b 1\u3002"),Object(u.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(u.b)("pre",null,Object(u.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"// Ugly Number\n// Time complexity: O(logn), Space complexity: O(1)\npublic class Solution {\n    public boolean isUgly(int num) {\n        if (num == 0) return false;\n        while (num % 2 == 0) num /= 2;\n        while (num % 3 == 0) num /= 3;\n        while (num % 5 == 0) num /= 5;\n        return num == 1;\n    }\n}\n")),Object(u.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(t.a)({parentName:"li"},{href:"/algorithm-essentials/number-theory/ugly-number-ii"}),"Ugly Number II"))))}b.isMDXComponent=!0},298:function(e,n,r){"use strict";r.d(n,"a",(function(){return m})),r.d(n,"b",(function(){return y}));var t=r(0),i=r.n(t);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){u(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),b=function(e){var n=i.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=b(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,u=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=b(r),s=t,y=m["".concat(a,".").concat(s)]||m[s]||p[s]||u;return r?i.a.createElement(y,o(o({ref:n},c),{},{components:r})):i.a.createElement(y,o({ref:n},c))}));function y(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var u=r.length,a=new Array(u);a[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,a[1]=o;for(var c=2;c<u;c++)a[c]=r[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);