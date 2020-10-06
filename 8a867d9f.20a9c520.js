(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),a=(n(0),n(298)),o=n(302),c=n(303),s={title:"Letter Combinations of a Phone Number"},u={unversionedId:"brute-force/letter-combinations-of-a-phone-number",id:"brute-force/letter-combinations-of-a-phone-number",isDocsHomePage:!1,title:"Letter Combinations of a Phone Number",description:"\u63cf\u8ff0",source:"@site/docs/brute-force/letter-combinations-of-a-phone-number.md",slug:"/brute-force/letter-combinations-of-a-phone-number",permalink:"/algorithm-essentials/brute-force/letter-combinations-of-a-phone-number",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/brute-force/letter-combinations-of-a-phone-number.md",version:"current"},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52",id:"\u9012\u5f52",children:[]},{value:"\u8fed\u4ee3",id:"\u8fed\u4ee3",children:[]}],b={rightToc:l};function p(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a digit string, return all possible letter combinations that the number could represent."),Object(a.b)("p",null,"A mapping of digit to letters (just like on the telephone buttons) is given below."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Phone Keyboard",src:n(315).default})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input:"),"Digit string ",Object(a.b)("inlineCode",{parentName:"p"},'"23"')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output:")," ",Object(a.b)("inlineCode",{parentName:"p"},'["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]'),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:"),"\nAlthough the above answer is in lexicographical order, your answer could be in any order you want."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u65e0"),Object(a.b)("h3",{id:"\u9012\u5f52"},"\u9012\u5f52"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    private static final String[] keyboard =\n            new String[]{ " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    public List<String> letterCombinations(String digits) {\n        List<String> result = new ArrayList<>();\n        if (digits.isEmpty()) return result;\n        dfs(digits, 0, "", result);\n        return result;\n    }\n\n    private static void dfs(String digits, int cur, String path,\n                            List<String> result) {\n        if (cur == digits.length()) {\n            result.add(path);\n            return;\n        }\n        final String str = keyboard[digits.charAt(cur) - \'0\'];\n\n        for (char c : keyboard[digits.charAt(cur) - \'0\'].toCharArray()) {\n            dfs(digits, cur + 1, path + c, result);\n        }\n    }\n}\n'))),Object(a.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\nclass Solution {\npublic:\n    const vector<string> keyboard { " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    vector<string> letterCombinations (const string &digits) {\n        vector<string> result;\n        if (digits.empty()) return result;\n        dfs(digits, 0, "", result);\n        return result;\n    }\n\n    void dfs(const string &digits, size_t cur, string path,\n            vector<string> &result) {\n        if (cur == digits.size()) {\n            result.push_back(path);\n            return;\n        }\n        for (auto c : keyboard[digits[cur] - \'0\']) {\n            dfs(digits, cur + 1, path + c, result);\n        }\n    }\n};\n')))),Object(a.b)("h3",{id:"\u8fed\u4ee3"},"\u8fed\u4ee3"),Object(a.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    private static final String[] keyboard =\n            new String[]{ " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n                    "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    public List<String> letterCombinations(String digits) {\n        if (digits.isEmpty()) return new ArrayList<>();\n        List<String> result = new ArrayList<>();\n        result.add("");\n        for (char d : digits.toCharArray()) {\n            final int n = result.size();\n            final int m = keyboard[d - \'0\'].length();\n\n            // resize to n * m\n            for (int i = 1; i < m; ++i) {\n                for (int j = 0; j < n; ++j) {\n                    result.add(result.get(j));\n                }\n            }\n\n            for (int i = 0; i < result.size(); ++i) {\n                result.set(i, result.get(i) + keyboard[d - \'0\'].charAt(i/n));\n            }\n        }\n        return result;\n    }\n}\n'))),Object(a.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'// Letter Combinations of a Phone Number\n// \u65f6\u95f4\u590d\u6742\u5ea6O(3^n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    const vector<string> keyboard { " ", "", "abc", "def", // \'0\',\'1\',\'2\',...\n            "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };\n\n    vector<string> letterCombinations (const string &digits) {\n        if (digits.empty()) return vector<string>();\n        vector<string> result(1, "");\n        for (auto d : digits) {\n            const size_t n = result.size();\n            const size_t m = keyboard[d - \'0\'].size();\n\n            // resize to n * m\n            for (size_t i = 1; i < m; ++i) {\n                for (size_t j = 0; j < n; ++j) {\n                    result.push_back(result[j]);\n                }\n            }\n\n            for (size_t i = 0; i < result.size(); ++i) {\n                result[i] = result[i] + keyboard[d - \'0\'][i/n];\n            }\n        }\n        return result;\n    }\n};\n')))))}p.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),f=r,d=b["".concat(o,".").concat(f)]||b[f]||p[f]||a;return n?i.a.createElement(d,c(c({ref:t},u),{},{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},300:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},301:function(e,t,n){"use strict";var r=n(0),i=n(300);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(301),o=n(299),c=n(47),s=n.n(c),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,f=Object(a.a)(),d=f.tabGroupChoices,m=f.setTabGroupChoices,g=Object(r.useState)(c),v=g[0],y=g[1],j=Object(r.useState)(!1),O=j[0],h=j[1];if(null!=p){var w=d[p];null!=w&&w!==v&&b.some((function(e){return e.value===w}))&&y(w)}var k=function(e){y(e),null!=p&&m(p,e)},C=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},N=function(){h(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",N)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),x(e)},onFocus:function(){return k(t)},onClick:function(){k(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),i=n.n(r);t.a=function(e){return i.a.createElement("div",null,e.children)}},315:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/phone-keyboard-a697160e29404c1c63994256f357ab55.png"}}]);