(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{298:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(301),o=t(299),c=t(47),s=t.n(c),l=37,u=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,p=e.values,d=e.groupId,b=Object(i.a)(),f=b.tabGroupChoices,v=b.setTabGroupChoices,g=Object(r.useState)(c),m=g[0],h=g[1],j=Object(r.useState)(!1),O=j[0],y=j[1];if(null!=d){var w=f[d];null!=w&&w!==m&&p.some((function(e){return e.value===w}))&&h(w)}var k=function(e){h(e),null!=d&&v(d,e)},S=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},C=function(){y(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",C)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===n,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":m===n}),style:O?{}:{outline:"none"},key:n,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(S,e.target,e),x(e)},onFocus:function(){return k(n)},onClick:function(){k(n),y(!1)},onPointerDown:function(){return y(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===m}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},64:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(6),i=(t(0),t(298)),o=t(302),c=t(303),s={title:"Word Break II"},l={unversionedId:"dp/word-break-ii",id:"dp/word-break-ii",isDocsHomePage:!1,title:"Word Break II",description:"\u63cf\u8ff0",source:"@site/docs/dp/word-break-ii.md",slug:"/dp/word-break-ii",permalink:"/algorithm-essentials/dp/word-break-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/dp/word-break-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Word Break",permalink:"/algorithm-essentials/dp/word-break"},next:{title:"Dungeon Game",permalink:"/algorithm-essentials/dp/dungeon-game"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:u};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(i.b)("p",null,"Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word."),Object(i.b)("p",null,"Return all such possible sentences."),Object(i.b)("p",null,"For example, given"),Object(i.b)("p",null,"s = ",Object(i.b)("inlineCode",{parentName:"p"},'"catsanddog"'),","),Object(i.b)("p",null,"dict = ",Object(i.b)("inlineCode",{parentName:"p"},'["cat", "cats", "and", "sand", "dog"]'),"."),Object(i.b)("p",null,"A solution is ",Object(i.b)("inlineCode",{parentName:"p"},'["cats and dog", "cat sand dog"]'),"."),Object(i.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(i.b)("p",null,"\u5728\u4e0a\u4e00\u9898\u7684\u57fa\u7840\u4e0a\uff0c\u8981\u8fd4\u56de\u89e3\u672c\u8eab\u3002"),Object(i.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(i.b)(o.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"java",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Word Break II\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\npublic class Solution {\n    public List<String> wordBreak(String s, Set<String> wordDict) {\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\u6709n+1\u4e2a\u9694\u677f\n        boolean[] f = new boolean[s.length() + 1];\n        // prev[i][j]\u4e3atrue\uff0c\u8868\u793as[j, i)\u662f\u4e00\u4e2a\u5408\u6cd5\u5355\u8bcd\uff0c\u53ef\u4ee5\u4ecej\u5904\u5207\u5f00\n        // \u7b2c\u4e00\u884c\u672a\u7528\n        boolean[][] prev = new boolean[s.length() + 1][s.length()];\n        f[0] = true;\n        for (int i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (f[j] && wordDict.contains(s.substring(j, i))) {\n                    f[i] = true;\n                    prev[i][j] = true;\n                }\n            }\n        }\n        List<String> result = new ArrayList<>();\n        List<String> path = new ArrayList<>();\n        gen_path(s, prev, s.length(), path, result);\n        return result;\n\n    }\n    // DFS\u904d\u5386\u6811\uff0c\u751f\u6210\u8def\u5f84\n    private static void gen_path(String s, boolean[][] prev,\n                  int cur, List<String> path, List<String> result) {\n        if (cur == 0) {\n            StringBuilder sb = new StringBuilder();\n            for (int i = path.size() - 1; i >= 0; --i)\n                sb.append(path.get(i)).append(' ');\n            sb.deleteCharAt(sb.length()-1);\n            result.add(sb.toString());\n        }\n        for (int i = 0; i < s.length(); ++i) {\n            if (prev[cur][i]) {\n                path.add(s.substring(i, cur));\n                gen_path(s, prev, i, path, result);\n                path.remove(path.size()-1);\n            }\n        }\n    }\n}\n"))),Object(i.b)(c.a,{value:"cpp",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'// Word Break II\n// \u52a8\u89c4\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n^2)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n^2)\nclass Solution {\npublic:\n    vector<string> wordBreak(string s, unordered_set<string> &dict) {\n        // \u957f\u5ea6\u4e3an\u7684\u5b57\u7b26\u4e32\u6709n+1\u4e2a\u9694\u677f\n        vector<bool> f(s.length() + 1, false);\n        // prev[i][j]\u4e3atrue\uff0c\u8868\u793as[j, i)\u662f\u4e00\u4e2a\u5408\u6cd5\u5355\u8bcd\uff0c\u53ef\u4ee5\u4ecej\u5904\u5207\u5f00\n        // \u7b2c\u4e00\u884c\u672a\u7528\n        vector<vector<bool> > prev(s.length() + 1, vector<bool>(s.length()));\n        f[0] = true;\n        for (size_t i = 1; i <= s.length(); ++i) {\n            for (int j = i - 1; j >= 0; --j) {\n                if (f[j] && dict.find(s.substr(j, i - j)) != dict.end()) {\n                    f[i] = true;\n                    prev[i][j] = true;\n                }\n            }\n        }\n        vector<string> result;\n        vector<string> path;\n        gen_path(s, prev, s.length(), path, result);\n        return result;\n\n    }\nprivate:\n    // DFS\u904d\u5386\u6811\uff0c\u751f\u6210\u8def\u5f84\n    void gen_path(const string &s, const vector<vector<bool> > &prev,\n            int cur, vector<string> &path, vector<string> &result) {\n        if (cur == 0) {\n            string tmp;\n            for (auto iter = path.crbegin(); iter != path.crend(); ++iter)\n                tmp += *iter + " ";\n            tmp.erase(tmp.end() - 1);\n            result.push_back(tmp);\n        }\n        for (size_t i = 0; i < s.size(); ++i) {\n            if (prev[cur][i]) {\n                path.push_back(s.substr(i, cur - i));\n                gen_path(s, prev, i, path, result);\n                path.pop_back();\n            }\n        }\n    }\n};\n')))),Object(i.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/dp/word-break"}),"Word Break"))))}d.isMDXComponent=!0}}]);