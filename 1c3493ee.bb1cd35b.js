(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{298:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var n=i.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},b=function(e){var n=l(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),m=t,d=b["".concat(a,".").concat(m)]||b[m]||p[m]||o;return r?i.a.createElement(d,u(u({ref:n},s),{},{components:r})):i.a.createElement(d,u({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return u})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(2),i=r(6),o=(r(0),r(298)),a={title:"House Robber II"},u={unversionedId:"dp/house-robber-ii",id:"dp/house-robber-ii",isDocsHomePage:!1,title:"House Robber II",description:"\u63cf\u8ff0",source:"@site/docs/dp/house-robber-ii.md",slug:"/dp/house-robber-ii",permalink:"/algorithm-essentials/dp/house-robber-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/house-robber-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"House Robber",permalink:"/algorithm-essentials/dp/house-robber"},next:{title:"House Robber III",permalink:"/algorithm-essentials/dp/house-robber-iii"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],s={rightToc:c};function l(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"This time, all houses at this place are ",Object(o.b)("strong",{parentName:"p"},"arranged in a circle"),"."),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,'\u5982\u679c\u62a2\u52ab\u7b2c\u4e00\u5bb6\uff0c\u5219\u4e0d\u53ef\u4ee5\u62a2\u6700\u540e\u4e00\u5bb6\uff1b\u5426\u5219\uff0c\u53ef\u4ee5\u62a2\u6700\u540e\u4e00\u5bb6\u3002\u56e0\u6b64\uff0c\u8fd9\u4e2a\u95ee\u9898\u5c31\u8f6c\u5316\u6210\u4e3a\u4e86\u4e24\u8d9f\u52a8\u89c4\uff0c\u53ef\u4ee5\u590d\u7528 "House Robber" \u7684\u4ee3\u7801\u3002'),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"// House Robber II\n// Time Complexity: O(n), Space Complexity: O(1)\npublic class Solution {\n    public int rob(int[] nums) {\n        if (nums.length == 1) return nums[0];\n        return Math.max(rob1(nums, 0, nums.length - 1),\n                rob1(nums, 1, nums.length));\n    }\n\n    private static int rob1(int[] nums, int begin, int end) {\n        if (nums == null || begin >= end) return 0;\n        if ((end - begin) == 1) return nums[begin];\n\n        int even = nums[begin];\n        int odd = Math.max(nums[begin], nums[begin + 1]);\n\n        for (int i = begin + 2; i < end; ++i) {\n            if ((i-begin) % 2 == 0) {\n                even = Math.max(even + nums[i], odd);\n            } else {\n                odd = Math.max(odd + nums[i], even);\n            }\n        }\n        return Math.max(even, odd);\n    }\n}\n")))}l.isMDXComponent=!0}}]);