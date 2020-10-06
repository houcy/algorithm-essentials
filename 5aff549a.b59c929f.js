(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{150:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(6),l=(t(0),t(298)),i=t(302),o=t(303),c={title:"Same Tree"},u={unversionedId:"binary-tree/traversal/same-tree",id:"binary-tree/traversal/same-tree",isDocsHomePage:!1,title:"Same Tree",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/same-tree.md",slug:"/binary-tree/traversal/same-tree",permalink:"/algorithm-essentials/binary-tree/traversal/same-tree",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/same-tree.md",version:"current",sidebar:"someSidebar",previous:{title:"Recover Binary Search Tree",permalink:"/algorithm-essentials/binary-tree/traversal/recover-binary-search-tree"},next:{title:"Symmetric Tree",permalink:"/algorithm-essentials/binary-tree/traversal/symmetric-tree"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],p={rightToc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(l.b)("p",null,"Given two binary trees, write a function to check if they are equal or not."),Object(l.b)("p",null,"Two binary trees are considered equal if they are structurally identical and the nodes have the same value."),Object(l.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(l.b)("p",null,"\u65e0"),Object(l.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(l.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Same Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        if (p == null && q == null) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (p == null || q == null) return false;  // \u526a\u679d\n        return p.val == q.val      // \u4e09\u65b9\u5408\u5e76\n                && isSameTree(p.left, q.left)\n                && isSameTree(p.right, q.right);\n    }\n}\n"))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Same Tree\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSameTree(TreeNode *p, TreeNode *q) {\n        if (!p && !q) return true;   // \u7ec8\u6b62\u6761\u4ef6\n        if (!p || !q) return false;  // \u526a\u679d\n        return p->val == q->val      // \u4e09\u65b9\u5408\u5e76\n                && isSameTree(p->left, q->left)\n                && isSameTree(p->right, q->right);\n    }\n};\n")))),Object(l.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(l.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Same Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\npublic class Solution {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        Stack<TreeNode> s = new Stack<>();\n        s.push(p);\n        s.push(q);\n\n        while(!s.empty()) {\n            p = s.pop();\n            q = s.pop();\n\n            if (p == null && q == null) continue;\n            if (p == null || q == null) return false;\n            if (p.val != q.val) return false;\n\n            s.push(p.left);\n            s.push(q.left);\n\n            s.push(p.right);\n            s.push(q.right);\n        }\n        return true;\n    }\n}\n"))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Same Tree\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(logn)\nclass Solution {\npublic:\n    bool isSameTree(TreeNode *p, TreeNode *q) {\n        stack<TreeNode*> s;\n        s.push(p);\n        s.push(q);\n\n        while(!s.empty()) {\n            p = s.top(); s.pop();\n            q = s.top(); s.pop();\n\n            if (!p && !q) continue;\n            if (!p || !q) return false;\n            if (p->val != q->val) return false;\n\n            s.push(p->left);\n            s.push(q->left);\n\n            s.push(p->right);\n            s.push(q->right);\n        }\n        return true;\n    }\n};\n")))),Object(l.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/binary-tree/traversal/symmetric-tree"}),"Symmetric Tree"))))}b.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||l;return t?a.a.createElement(m,o(o({ref:n},u),{},{components:t})):a.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},300:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},301:function(e,n,t){"use strict";var r=t(0),a=t(300);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),a=t.n(r),l=t(301),i=t(299),o=t(47),c=t.n(o),u=37,s=39;n.a=function(e){var n=e.block,t=e.children,o=e.defaultValue,p=e.values,b=e.groupId,f=Object(l.a)(),m=f.tabGroupChoices,d=f.setTabGroupChoices,v=Object(r.useState)(o),y=v[0],O=v[1],h=Object(r.useState)(!1),j=h[0],g=h[1];if(null!=b){var T=m[b];null!=T&&T!==y&&p.some((function(e){return e.value===T}))&&O(T)}var w=function(e){O(e),null!=b&&d(b,e)},q=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},N=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",S),window.addEventListener("mousedown",N)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===n}),style:j?{}:{outline:"none"},key:n,ref:function(e){return q.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(q,e.target,e),S(e)},onFocus:function(){return w(n)},onClick:function(){w(n),g(!1)},onPointerDown:function(){return g(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===y}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}}}]);