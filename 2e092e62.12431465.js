(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var r=t(2),o=t(6),a=(t(0),t(298)),i=t(302),l=t(303),c={title:"Populating Next Right Pointers in Each Node II"},u={unversionedId:"binary-tree/traversal/populating-next-right-pointers-in-each-node-ii",id:"binary-tree/traversal/populating-next-right-pointers-in-each-node-ii",isDocsHomePage:!1,title:"Populating Next Right Pointers in Each Node II",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii.md",slug:"/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii",permalink:"/algorithm-essentials/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/populating-next-right-pointers-in-each-node-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Flatten Binary Tree to Linked List",permalink:"/algorithm-essentials/binary-tree/traversal/flatten-binary-tree-to-linked-list"},next:{title:"Construct Binary Tree from Preorder and Inorder Traversal",permalink:"/algorithm-essentials/binary-tree/construction/construct-binary-tree-from-preorder-and-inorder-traversal"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],s={rightToc:p};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,'Follow up for problem "Populating Next Right Pointers in Each Node".'),Object(a.b)("p",null,"What if the given tree could be any binary tree? Would your previous solution still work?"),Object(a.b)("p",null,"Note: You may only use constant extra space."),Object(a.b)("p",null,"For example,\nGiven the following binary tree,"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"         1\n       /  \\\n      2    3\n     / \\    \\\n    4   5    7\n")),Object(a.b)("p",null,"After calling your function, the tree should look like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"         1 -> NULL\n       /  \\\n      2 -> 3 -> NULL\n     / \\    \\\n    4-> 5 -> 7 -> NULL\n")),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u8981\u5904\u7406\u4e00\u4e2a\u8282\u70b9\uff0c\u53ef\u80fd\u9700\u8981\u6700\u53f3\u8fb9\u7684\u5144\u5f1f\u8282\u70b9\uff0c\u9996\u5148\u60f3\u5230\u7528\u5e7f\u641c\u3002\u4f46\u5e7f\u641c\u4e0d\u662f\u5e38\u6570\u7a7a\u95f4\u7684\uff0c\u672c\u9898\u8981\u6c42\u5e38\u6570\u7a7a\u95f4\u3002"),Object(a.b)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u9898\u7684\u4ee3\u7801\u539f\u5c01\u4e0d\u52a8\uff0c\u4e5f\u53ef\u4ee5\u89e3\u51b3 Populating Next Right Pointers in Each Node I."),Object(a.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(a.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Populating Next Right Pointers in Each Node II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void connect(TreeLinkNode root) {\n        if (root == null) return;\n\n        TreeLinkNode dummy = new TreeLinkNode(-1);\n        for (TreeLinkNode curr = root, prev = dummy;\n                curr != null; curr = curr.next) {\n            if (curr.left != null){\n                prev.next = curr.left;\n                prev = prev.next;\n            }\n            if (curr.right != null){\n                prev.next = curr.right;\n                prev = prev.next;\n            }\n        }\n        connect(dummy.next);\n    }\n}\n"))),Object(a.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Populating Next Right Pointers in Each Node II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void connect(TreeLinkNode *root) {\n        if (root == nullptr) return;\n\n        TreeLinkNode dummy(-1);\n        for (TreeLinkNode *curr = root, *prev = &dummy;\n                curr; curr = curr->next) {\n            if (curr->left != nullptr){\n                prev->next = curr->left;\n                prev = prev->next;\n            }\n            if (curr->right != nullptr){\n                prev->next = curr->right;\n                prev = prev->next;\n            }\n        }\n        connect(dummy.next);\n    }\n};\n")))),Object(a.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(a.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Populating Next Right Pointers in Each Node II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public void connect(TreeLinkNode root) {\n        while (root!= null ) {\n            TreeLinkNode next = null; // the first node of next level\n            TreeLinkNode prev = null; // previous node on the same level\n            for (; root != null; root = root.next) {\n                if (next == null) next = root.left != null ? root.left : root.right;\n\n                if (root.left != null) {\n                    if (prev != null) prev.next = root.left;\n                    prev = root.left;\n                }\n                if (root.right != null) {\n                    if (prev != null) prev.next = root.right;\n                    prev = root.right;\n                }\n            }\n            root = next; // turn to next level\n        }\n    }\n}\n"))),Object(a.b)(l.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Populating Next Right Pointers in Each Node II\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    void connect(TreeLinkNode *root) {\n        while (root) {\n            TreeLinkNode * next = nullptr; // the first node of next level\n            TreeLinkNode * prev = nullptr; // previous node on the same level\n            for (; root; root = root->next) {\n                if (!next) next = root->left ? root->left : root->right;\n\n                if (root->left) {\n                    if (prev) prev->next = root->left;\n                    prev = root->left;\n                }\n                if (root->right) {\n                    if (prev) prev->next = root->right;\n                    prev = root->right;\n                }\n            }\n            root = next; // turn to next level\n        }\n    }\n};\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/binary-tree/recursion/populating-next-right-pointers-in-each-node"}),"Populating Next Right Pointers in Each Node"))))}b.isMDXComponent=!0},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=r,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||a;return t?o.a.createElement(d,l(l({ref:n},u),{},{components:t})):o.a.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},299:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},300:function(e,n,t){"use strict";var r=t(0),o=Object(r.createContext)(void 0);n.a=o},301:function(e,n,t){"use strict";var r=t(0),o=t(300);n.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(301),i=t(299),l=t(47),c=t.n(l),u=37,p=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,s=e.values,b=e.groupId,f=Object(a.a)(),d=f.tabGroupChoices,v=f.setTabGroupChoices,m=Object(r.useState)(l),h=m[0],g=m[1],O=Object(r.useState)(!1),y=O[0],j=O[1];if(null!=b){var x=d[b];null!=x&&x!==h&&s.some((function(e){return e.value===x}))&&g(x)}var N=function(e){g(e),null!=b&&v(b,e)},T=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},P=function(){j(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",w),window.addEventListener("mousedown",P)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},s.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===n,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===n}),style:y?{}:{outline:"none"},key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e),w(e)},onFocus:function(){return N(n)},onClick:function(){N(n),j(!1)},onPointerDown:function(){return j(!1)}},t)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},303:function(e,n,t){"use strict";var r=t(0),o=t.n(r);n.a=function(e){return o.a.createElement("div",null,e.children)}}}]);