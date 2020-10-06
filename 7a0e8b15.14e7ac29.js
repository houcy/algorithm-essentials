(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(298)),l=n(302),o=n(303),c={title:"Valid Palindrome"},s={unversionedId:"string/valid-palindrome",id:"string/valid-palindrome",isDocsHomePage:!1,title:"Valid Palindrome",description:"\u63cf\u8ff0",source:"@site/docs/string/valid-palindrome.md",slug:"/string/valid-palindrome",permalink:"/algorithm-essentials/string/valid-palindrome",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/valid-palindrome.md",version:"current",sidebar:"someSidebar",previous:{title:"Palindrome Linked List",permalink:"/algorithm-essentials/linear-list/linked-list/palindrome-linked-list"},next:{title:"Implement strStr()",permalink:"/algorithm-essentials/string/strstr"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],d={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases."),Object(i.b)("p",null,"For example,"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"A man, a plan, a canal: Panama"')," is a palindrome.\n",Object(i.b)("inlineCode",{parentName:"p"},'"race a car"')," is not a palindrome."),Object(i.b)("p",null,"Note:\nHave you consider that the string might be empty? This is a good question to ask during an interview."),Object(i.b)("p",null,"For the purpose of this problem, we define empty string as valid palindrome."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u65e0"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Valid Palindrome\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public boolean isPalindrome(String s) {\n        s = s.toLowerCase();\n        int left = 0;\n        int right = s.length() - 1;\n        while (left < right) {\n            if (!Character.isLetterOrDigit(s.charAt(left))) ++left;\n            else if (!Character.isLetterOrDigit(s.charAt(right))) --right;\n            else if (s.charAt(left) != s.charAt(right)) return false;\n            else { ++left; --right; }\n        }\n        return true;\n    }\n}\n"))),Object(i.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Valid Palindrome\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    bool isPalindrome(string s) {\n        transform(s.begin(), s.end(), s.begin(), ::tolower);\n        auto left = s.begin(), right = prev(s.end());\n        while (left < right) {\n            if (!::isalnum(*left))  ++left;\n            else if (!::isalnum(*right)) --right;\n            else if (*left != *right) return false;\n            else { left++, right--; }\n        }\n        return true;\n    }\n};\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/simulation/palindrome-number"}),"Palindrome Number"))))}p.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(b,o(o({ref:t},s),{},{components:n})):a.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},300:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},301:function(e,t,n){"use strict";var r=n(0),a=n(300);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(301),l=n(299),o=n(47),c=n.n(o),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,d=e.values,p=e.groupId,f=Object(i.a)(),b=f.tabGroupChoices,m=f.setTabGroupChoices,g=Object(r.useState)(o),v=g[0],h=g[1],O=Object(r.useState)(!1),y=O[0],j=O[1];if(null!=p){var w=b[p];null!=w&&w!==v&&d.some((function(e){return e.value===w}))&&h(w)}var P=function(e){h(e),null!=p&&m(p,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},E=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return P(t)},onClick:function(){P(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);