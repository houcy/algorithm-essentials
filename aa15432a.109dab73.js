(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(298)),i=n(302),u=n(303),c={title:"Path Sum II"},l={unversionedId:"binary-tree/recursion/path-sum-ii",id:"binary-tree/recursion/path-sum-ii",isDocsHomePage:!1,title:"Path Sum II",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/recursion/path-sum-ii.md",slug:"/binary-tree/recursion/path-sum-ii",permalink:"/algorithm-essentials/binary-tree/recursion/path-sum-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/recursion/path-sum-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Path Sum",permalink:"/algorithm-essentials/binary-tree/recursion/path-sum"},next:{title:"Binary Tree Maximum Path Sum",permalink:"/algorithm-essentials/binary-tree/recursion/binary-tree-maximum-path-sum"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(o.b)("p",null,"Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum."),Object(o.b)("p",null,"For example:\nGiven the below binary tree and ",Object(o.b)("inlineCode",{parentName:"p"},"sum = 22"),","),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"          5\n         / \\\n        4   8\n       /   / \\\n      11  13  4\n     /  \\    / \\\n    7    2  5   1\n")),Object(o.b)("p",null,"return"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[\n   [5,4,11,2],\n   [5,8,4,5]\n]\n")),Object(o.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(o.b)("p",null,"\u8ddf\u4e0a\u4e00\u9898\u76f8\u6bd4\uff0c\u672c\u9898\u662f\u6c42\u8def\u5f84\u672c\u8eab\u3002\u4e14\u8981\u6c42\u51fa\u6240\u6709\u7ed3\u679c\uff0c\u5de6\u5b50\u6811\u6c42\u5230\u4e86\u6ee1\u610f\u7ed3\u679c\uff0c\u4e0d\u80fd return\uff0c\u8981\u63a5\u7740\u6c42\u53f3\u5b50\u6811\u3002"),Object(o.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(o.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"java",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Path Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public List<List<Integer>> pathSum(TreeNode root, int sum) {\n        List<List<Integer>> result = new ArrayList<>();\n        ArrayList<Integer>  cur = new ArrayList<>(); // \u4e2d\u95f4\u7ed3\u679c\n        pathSum(root, sum, cur, result);\n        return result;\n    }\n    private static void pathSum(TreeNode root, int gap, ArrayList<Integer> cur,\n                                List<List<Integer>> result) {\n        if (root == null) return;\n\n        cur.add(root.val);\n\n        if (root.left == null && root.right == null) { // leaf\n            if (gap == root.val)\n                result.add(new ArrayList<>(cur));\n        }\n        pathSum(root.left, gap - root.val, cur, result);\n        pathSum(root.right, gap - root.val, cur, result);\n\n        cur.remove(cur.size() - 1);\n    }\n}\n"))),Object(o.b)(u.a,{value:"cpp",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Path Sum II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    vector<vector<int> > pathSum(TreeNode *root, int sum) {\n        vector<vector<int> > result;\n        vector<int> cur; // \u4e2d\u95f4\u7ed3\u679c\n        pathSum(root, sum, cur, result);\n        return result;\n    }\nprivate:\n    void pathSum(TreeNode *root, int gap, vector<int> &cur,\n            vector<vector<int> > &result) {\n        if (root == nullptr) return;\n\n        cur.push_back(root->val);\n\n        if (root->left == nullptr && root->right == nullptr) { // leaf\n            if (gap == root->val)\n                result.push_back(cur);\n        }\n        pathSum(root->left, gap - root->val, cur, result);\n        pathSum(root->right, gap - root->val, cur, result);\n\n        cur.pop_back();\n    }\n};\n")))),Object(o.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/binary-tree/recursion/path-sum"}),"Path Sum"))))}b.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(f,u(u({ref:t},l),{},{components:n})):a.a.createElement(f,u({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},300:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},301:function(e,t,n){"use strict";var r=n(0),a=n(300);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(301),i=n(299),u=n(47),c=n.n(u),l=37,s=39;t.a=function(e){var t=e.block,n=e.children,u=e.defaultValue,p=e.values,b=e.groupId,m=Object(o.a)(),f=m.tabGroupChoices,d=m.setTabGroupChoices,v=Object(r.useState)(u),h=v[0],y=v[1],O=Object(r.useState)(!1),g=O[0],j=O[1];if(null!=b){var w=f[b];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&y(w)}var S=function(e){y(e),null!=b&&d(b,e)},P=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},T=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",T)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),x(e)},onFocus:function(){return S(t)},onClick:function(){S(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);