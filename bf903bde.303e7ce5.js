(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{244:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return l})),t.d(e,"metadata",(function(){return c})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return d}));var i=t(2),a=t(6),r=(t(0),t(298)),o=t(302),s=t(303),l={title:"Text Justification"},c={unversionedId:"simulation/text-justification",id:"simulation/text-justification",isDocsHomePage:!1,title:"Text Justification",description:"\u63cf\u8ff0",source:"@site/docs/simulation/text-justification.md",slug:"/simulation/text-justification",permalink:"/algorithm-essentials/simulation/text-justification",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/simulation/text-justification.md",version:"current",sidebar:"someSidebar",previous:{title:"Divide Two Integers",permalink:"/algorithm-essentials/simulation/divide-two-integers"},next:{title:"Max Points on a Line",permalink:"/algorithm-essentials/simulation/max-points-on-a-line"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],b={rightToc:u};function d(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(r.b)("p",null,"Given an array of words and a length ",Object(r.b)("inlineCode",{parentName:"p"},"L"),", format the text such that each line has exactly ",Object(r.b)("inlineCode",{parentName:"p"},"L")," characters and is fully (left and right) justified."),Object(r.b)("p",null,"You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ",Object(r.b)("inlineCode",{parentName:"p"},"' '")," when necessary so that each line has exactly ",Object(r.b)("inlineCode",{parentName:"p"},"L")," characters."),Object(r.b)("p",null,"Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right."),Object(r.b)("p",null,"For the last line of text, it should be left justified and no extra space is inserted between words."),Object(r.b)("p",null,"For example,"),Object(r.b)("p",null,"words: ",Object(r.b)("inlineCode",{parentName:"p"},'["This", "is", "an", "example", "of", "text", "justification."]')),Object(r.b)("p",null,"L: 16."),Object(r.b)("p",null,"Return the formatted lines as:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),'[\n   "This    is    an",\n   "example  of text",\n   "justification.  "\n]\n')),Object(r.b)("p",null,"Note: Each word is guaranteed not to exceed ",Object(r.b)("inlineCode",{parentName:"p"},"L")," in length."),Object(r.b)("p",null,"Corner Cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A line other than the last line might contain only one word. What should you do in this case?"),Object(r.b)("li",{parentName:"ul"},"In this case, that line should be left")),Object(r.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(r.b)("p",null,"\u65e0"),Object(r.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(r.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(r.b)(s.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Text Justification\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public List<String> fullJustify(String[] words, int maxWidth) {\n        List<String> result = new ArrayList<>();\n        final int n = words.length;\n        int begin = 0, len = 0; // \u5f53\u524d\u884c\u7684\u8d77\u70b9\uff0c\u5f53\u524d\u957f\u5ea6\n        for (int i = 0; i < n; ++i) {\n            if (len + words[i].length() + (i - begin) > maxWidth) {\n                result.add(connect(words, begin, i - 1, len, maxWidth, false));\n                begin = i;\n                len = 0;\n            }\n            len += words[i].length();\n        }\n        // \u6700\u540e\u4e00\u884c\u4e0d\u8db3 maxWidth\n        result.add(connect(words, begin, n - 1, len, maxWidth, true));\n        return result;\n    }\n    /**\n     * @brief \u5c06 words[begin, end] \u8fde\u6210\u4e00\u884c\n     * @param[in] words \u5355\u8bcd\u5217\u8868\n     * @param[in] begin \u5f00\u59cb\n     * @param[in] end \u7ed3\u675f\n     * @param[in] len words[begin, end]\u6240\u6709\u5355\u8bcd\u52a0\u8d77\u6765\u7684\u957f\u5ea6\n     * @param[in] L \u9898\u76ee\u89c4\u5b9a\u7684\u4e00\u884c\u957f\u5ea6\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u5bf9\u9f50\u540e\u7684\u5f53\u524d\u884c\n     */\n    private static String connect(String[] words, int begin, int end,\n                   int len, int L, boolean is_last) {\n        StringBuilder sb = new StringBuilder();\n        final int n = end - begin + 1;\n        for (int i = 0; i < n; ++i) {\n            sb.append(words[begin + i]);\n            addSpaces(sb, i, n - 1, L - len, is_last);\n        }\n\n        final int m = L - sb.length();\n        for (int i = 0; i < m; ++i) sb.append(' ');\n        return sb.toString();\n    }\n\n    /**\n     * @brief \u6dfb\u52a0\u7a7a\u683c.\n     * @param[inout]s \u4e00\u884c\n     * @param[in] i \u5f53\u524d\u7a7a\u9699\u7684\u5e8f\u53f7\n     * @param[in] n \u7a7a\u9699\u603b\u6570\n     * @param[in] L \u603b\u5171\u9700\u8981\u6dfb\u52a0\u7684\u7a7a\u989d\u6570\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u65e0\n     */\n    private static void addSpaces(StringBuilder sb, int i,\n                                  int n, int L, boolean is_last) {\n        if (n < 1 || i > n - 1) return;\n        int spaces = is_last ? 1 : (L / n + (i < (L % n) ? 1 : 0));\n        for (int j = 0; j < spaces; ++j) sb.append(' ');\n    }\n }\n"))),Object(r.b)(s.a,{value:"cpp",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"// Text Justification\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    vector<string> fullJustify(vector<string> &words, int L) {\n        vector<string> result;\n        const int n = words.size();\n        int begin = 0, len = 0; // \u5f53\u524d\u884c\u7684\u8d77\u70b9\uff0c\u5f53\u524d\u957f\u5ea6\n        for (int i = 0; i < n; ++i) {\n            if (len + words[i].size() + (i - begin) > L) {\n                result.push_back(connect(words, begin, i - 1, len, L, false));\n                begin = i;\n                len = 0;\n            }\n            len += words[i].size();\n        }\n        // \u6700\u540e\u4e00\u884c\u4e0d\u8db3L\n        result.push_back(connect(words, begin, n - 1, len, L, true));\n        return result;\n    }\n    /**\n     * @brief \u5c06 words[begin, end] \u8fde\u6210\u4e00\u884c\n     * @param[in] words \u5355\u8bcd\u5217\u8868\n     * @param[in] begin \u5f00\u59cb\n     * @param[in] end \u7ed3\u675f\n     * @param[in] len words[begin, end]\u6240\u6709\u5355\u8bcd\u52a0\u8d77\u6765\u7684\u957f\u5ea6\n     * @param[in] L \u9898\u76ee\u89c4\u5b9a\u7684\u4e00\u884c\u957f\u5ea6\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u5bf9\u9f50\u540e\u7684\u5f53\u524d\u884c\n     */\n    string connect(vector<string> &words, int begin, int end,\n            int len, int L, bool is_last) {\n        string s;\n        int n = end - begin + 1;\n        for (int i = 0; i < n; ++i) {\n            s += words[begin + i];\n            addSpaces(s, i, n - 1, L - len, is_last);\n        }\n\n        if (s.size() < L) s.append(L - s.size(), ' ');\n        return s;\n    }\n\n    /**\n     * @brief \u6dfb\u52a0\u7a7a\u683c.\n     * @param[inout]s \u4e00\u884c\n     * @param[in] i \u5f53\u524d\u7a7a\u9699\u7684\u5e8f\u53f7\n     * @param[in] n \u7a7a\u9699\u603b\u6570\n     * @param[in] L \u603b\u5171\u9700\u8981\u6dfb\u52a0\u7684\u7a7a\u989d\u6570\n     * @param[in] is_last \u662f\u5426\u662f\u6700\u540e\u4e00\u884c\n     * @return \u65e0\n     */\n    void addSpaces(string &s, int i, int n, int L, bool is_last) {\n        if (n < 1 || i > n - 1) return;\n        int spaces = is_last ? 1 : (L / n + (i < (L % n) ? 1 : 0));\n        s.append(spaces, ' ');\n    }\n};\n")))))}d.isMDXComponent=!0},298:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return f}));var i=t(0),a=t.n(i);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var c=a.a.createContext({}),u=function(n){var e=a.a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},b=function(n){var e=u(n.components);return a.a.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},p=a.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,o=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),b=u(t),p=i,f=b["".concat(o,".").concat(p)]||b[p]||d[p]||r;return t?a.a.createElement(f,s(s({ref:e},c),{},{components:t})):a.a.createElement(f,s({ref:e},c))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},299:function(n,e,t){"use strict";function i(n){var e,t,a="";if("string"==typeof n||"number"==typeof n)a+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=i(n[e]))&&(a&&(a+=" "),a+=t);else for(e in n)n[e]&&(a&&(a+=" "),a+=e);return a}e.a=function(){for(var n,e,t=0,a="";t<arguments.length;)(n=arguments[t++])&&(e=i(n))&&(a&&(a+=" "),a+=e);return a}},300:function(n,e,t){"use strict";var i=t(0),a=Object(i.createContext)(void 0);e.a=a},301:function(n,e,t){"use strict";var i=t(0),a=t(300);e.a=function(){var n=Object(i.useContext)(a.a);if(null==n)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return n}},302:function(n,e,t){"use strict";var i=t(0),a=t.n(i),r=t(301),o=t(299),s=t(47),l=t.n(s),c=37,u=39;e.a=function(n){var e=n.block,t=n.children,s=n.defaultValue,b=n.values,d=n.groupId,p=Object(r.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,g=Object(i.useState)(s),h=g[0],j=g[1],O=Object(i.useState)(!1),v=O[0],w=O[1];if(null!=d){var y=f[d];null!=y&&y!==h&&b.some((function(n){return n.value===y}))&&j(y)}var x=function(n){j(n),null!=d&&m(d,n)},L=[],T=function(n){n.metaKey||n.altKey||n.ctrlKey||w(!0)},C=function(){w(!1)};return Object(i.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",C)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":e})},b.map((function(n){var e=n.value,t=n.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),style:v?{}:{outline:"none"},key:e,ref:function(n){return L.push(n)},onKeyDown:function(n){!function(n,e,t){switch(t.keyCode){case u:!function(n,e){var t=n.indexOf(e)+1;n[t]?n[t].focus():n[0].focus()}(n,e);break;case c:!function(n,e){var t=n.indexOf(e)-1;n[t]?n[t].focus():n[n.length-1].focus()}(n,e)}}(L,n.target,n),T(n)},onFocus:function(){return x(e)},onClick:function(){x(e),w(!1)},onPointerDown:function(){return w(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((function(n){return n.props.value===h}))[0]))}},303:function(n,e,t){"use strict";var i=t(0),a=t.n(i);e.a=function(n){return a.a.createElement("div",null,n.children)}}}]);