(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{263:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return s}));var n=t(2),i=t(6),a=(t(0),t(298)),o={title:"Binary Tree Right Side View"},l={unversionedId:"binary-tree/traversal/binary-tree-right-side-view",id:"binary-tree/traversal/binary-tree-right-side-view",isDocsHomePage:!1,title:"Binary Tree Right Side View",description:"\u63cf\u8ff0",source:"@site/docs/binary-tree/traversal/binary-tree-right-side-view.md",slug:"/binary-tree/traversal/binary-tree-right-side-view",permalink:"/algorithm-essentials/binary-tree/traversal/binary-tree-right-side-view",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/binary-tree/traversal/binary-tree-right-side-view.md",version:"current",sidebar:"someSidebar",previous:{title:"Binary Tree Level Order Traversal II",permalink:"/algorithm-essentials/binary-tree/traversal/binary-tree-level-order-traversal-ii"},next:{title:"Invert Binary Tree",permalink:"/algorithm-essentials/binary-tree/traversal/invert-binary-tree"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]}],u={rightToc:c};function s(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom."),Object(a.b)("p",null,"For example, given the following binary tree,"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"   1            <---\n /   \\\n2     3         <---\n \\     \\\n  5     4       <---\n")),Object(a.b)("p",null,"You should return ",Object(a.b)("inlineCode",{parentName:"p"},"[1, 3, 4]"),"."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u5c42\u6b21\u904d\u5386\u3002"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"// Binary Tree Right Side View\n// \u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(n)\npublic class Solution {\n    public List<Integer> rightSideView(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        Queue<TreeNode> current = new LinkedList<>();\n        Queue<TreeNode> next = new LinkedList<>();\n\n        if(root == null) {\n            return result;\n        } else {\n            current.offer(root);\n        }\n\n        while (!current.isEmpty()) {\n            ArrayList<Integer> level = new ArrayList<>(); // elments in one level\n            while (!current.isEmpty()) {\n                TreeNode node = current.poll();\n                level.add(node.val);\n                if (node.left != null) next.add(node.left);\n                if (node.right != null) next.add(node.right);\n            }\n            result.add(level.get(level.size()-1));\n            // swap\n            Queue<TreeNode> tmp = current;\n            current = next;\n            next = tmp;\n        }\n        return result;\n    }\n}\n")))}s.isMDXComponent=!0},298:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return y}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var r=i.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},b=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),b=n,y=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(y,l(l({ref:r},u),{},{components:t})):i.a.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=b;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);