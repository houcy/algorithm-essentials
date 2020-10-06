(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(298)),c=n(302),s=n(303),o={title:"Regular Expression Matching"},l={unversionedId:"string/regular-expression-matching",id:"string/regular-expression-matching",isDocsHomePage:!1,title:"Regular Expression Matching",description:"\u63cf\u8ff0",source:"@site/docs/string/regular-expression-matching.md",slug:"/string/regular-expression-matching",permalink:"/algorithm-essentials/string/regular-expression-matching",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/string/regular-expression-matching.md",version:"current",sidebar:"someSidebar",previous:{title:"Longest Palindromic Substring",permalink:"/algorithm-essentials/string/longest-palindromic-substring"},next:{title:"Wildcard Matching",permalink:"/algorithm-essentials/string/wildcard-matching"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Implement regular expression matching with support for ",Object(i.b)("inlineCode",{parentName:"p"},"'.'")," and ",Object(i.b)("inlineCode",{parentName:"p"},"'*'"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"'.'")," Matches any single character.\n",Object(i.b)("inlineCode",{parentName:"p"},"'*'")," Matches zero or more of the preceding element."),Object(i.b)("p",null,"The matching should cover the entire input string (not partial)."),Object(i.b)("p",null,"The function prototype should be:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"bool isMatch(const char *s, const char *p)\n")),Object(i.b)("p",null,"Some examples:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'isMatch("aa","a") \u2192 false\nisMatch("aa","aa") \u2192 true\nisMatch("aaa","aa") \u2192 false\nisMatch("aa", "a*") \u2192 true\nisMatch("aa", ".*") \u2192 true\nisMatch("ab", ".*") \u2192 true\nisMatch("aab", "c*a*b") \u2192 true\n')),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u8fd9\u662f\u4e00\u9053\u5f88\u6709\u6311\u6218\u7684\u9898\u3002"),Object(i.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(i.b)(c.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Regular Expression Matching\n// Time complexity: O(n)\n// Space complexity: O(1)\nclass Solution {\n    public boolean isMatch(final String s, final String p) {\n        return isMatch(s, 0, p, 0);\n    }\n    private static boolean matchFirst(String s, int i, String p, int j) {\n        if (j == p.length()) return i == s.length();\n        if (i == s.length()) return j == p.length();\n        return p.charAt(j) == '.' || s.charAt(i) == p.charAt(j);\n    }\n    private static boolean isMatch(String s, int i, String p, int j) {\n        if (j == p.length()) return i == s.length();\n\n        // next char is not '*', then must match current character\n        final char b = p.charAt(j);\n        if (j == p.length() - 1 || p.charAt(j + 1) != '*') {\n            if (matchFirst(s, i, p, j)) return isMatch(s, i + 1, p, j + 1);\n            else return false;\n        } else { // next char is '*'\n            if (isMatch(s, i, p, j+2)) return true;  // try the length of 0\n            while (matchFirst(s, i, p, j))  // try all possible lengths\n                if (isMatch(s, ++i, p, j+2)) return true;\n            return false;\n        }\n    }\n}\n\n"))),Object(i.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Regular Expression Matching\n// Time complexity: O(n)\n// Space complexity: O(1)\nclass Solution {\npublic:\n    bool isMatch(const string& s, const string& p) {\n        return isMatch(s.c_str(), p.c_str());\n    }\nprivate:\n    bool matchFirst(const char *s, const char *p) {\n        return *p == *s || (*p == '.' && *s != '\\0');\n    }\n\n    bool isMatch(const char *s, const char *p) {\n        if (*p == '\\0') return *s == '\\0';    //empty\n\n        // next char is not '*', then must match current character\n        if (*(p + 1) != '*') {\n            if (matchFirst(s, p)) return isMatch(s + 1, p + 1);\n            else return false;\n        } else { // next char is '*'\n            if (isMatch(s, p + 2)) return true;    // try the length of 0\n            while ( matchFirst(s, p) )       // try all possible lengths\n                if (isMatch(++s, p + 2)) return true;\n            return false;\n        }\n    }\n};\n\n\n")))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/string/wildcard-matching"}),"Wildcard Matching"))))}b.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||b[h]||i;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},300:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},301:function(e,t,n){"use strict";var r=n(0),a=n(300);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(301),c=n(299),s=n(47),o=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,p=e.values,b=e.groupId,h=Object(i.a)(),f=h.tabGroupChoices,m=h.setTabGroupChoices,g=Object(r.useState)(s),d=g[0],j=g[1],O=Object(r.useState)(!1),v=O[0],y=O[1];if(null!=b){var x=f[b];null!=x&&x!==d&&p.some((function(e){return e.value===x}))&&j(x)}var w=function(e){j(e),null!=b&&m(b,e)},M=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},T=function(){y(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",T)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":d===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return M.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(M,e.target,e),E(e)},onFocus:function(){return w(t)},onClick:function(){w(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===d}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);