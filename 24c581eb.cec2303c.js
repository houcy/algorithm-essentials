(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(298)),o={title:"Largest Number"},s={unversionedId:"sorting/other/largest-number",id:"sorting/other/largest-number",isDocsHomePage:!1,title:"Largest Number",description:"\u63cf\u8ff0",source:"@site/docs/sorting/other/largest-number.md",slug:"/sorting/other/largest-number",permalink:"/algorithm-essentials/sorting/other/largest-number",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/other/largest-number.md",version:"current",sidebar:"someSidebar",previous:{title:"Maximum Gap",permalink:"/algorithm-essentials/sorting/radix-sort/maximum-gap"},next:{title:"\u57fa\u6570\u6392\u5e8f\u3001\u6876\u6392\u5e8f\u548c\u8ba1\u6570\u6392\u5e8f\u7684\u533a\u522b",permalink:"/algorithm-essentials/sorting/summary"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a list of non negative integers, arrange them such that they form the largest number."),Object(a.b)("p",null,"For example, given ",Object(a.b)("inlineCode",{parentName:"p"},"[3, 30, 34, 5, 9]"),", the largest formed number is ",Object(a.b)("inlineCode",{parentName:"p"},"9534330"),"."),Object(a.b)("p",null,"Note: The result may be very large, so you need to return a string instead of an integer."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u8fd9\u9898\u53ef\u4ee5\u5148\u628a\u6bcf\u4e2a\u6574\u6570\u53d8\u6210\u5b57\u7b26\u4e32\uff0c\u5f97\u5230\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u7136\u540e\u628a\u8fd9\u4e2a\u6570\u7ec4\u6309\u7279\u5b9a\u89c4\u5219\u6392\u4e2a\u5e8f\uff0c\u987a\u5e8f\u8f93\u51fa\u5373\u53ef\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Largest Number\n// Time Complexity: O(n), Space Complexity: O(n)\npublic class Solution {\n    public String largestNumber(int[] nums) {\n        final String[] strings = new String[nums.length];\n        for (int i = 0; i < nums.length; ++i) {\n            strings[i] = String.valueOf(nums[i]);\n        }\n        Arrays.sort(strings, (String s1, String s2) -> {\n            String leftRight = s1 + s2;\n            String rightLeft = s2 + s1;\n            return -leftRight.compareTo(rightLeft);\n        });\n\n\n        StringBuilder sb = new StringBuilder();\n        for (final String s : strings) {\n            sb.append(s);\n        }\n\n        while(sb.charAt(0)=='0' && sb.length()>1){\n            sb.deleteCharAt(0);\n        }\n\n        return sb.toString();\n    }\n}\n")))}u.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,b=p["".concat(o,".").concat(g)]||p[g]||m[g]||a;return n?i.a.createElement(b,s(s({ref:t},c),{},{components:n})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);