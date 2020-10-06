(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var r=n(2),o=n(6),a=(n(0),n(298)),l=n(302),i=n(303),s={title:"Merge Two Sorted Lists"},c={unversionedId:"sorting/merge-sort/merge-two-sorted-lists",id:"sorting/merge-sort/merge-two-sorted-lists",isDocsHomePage:!1,title:"Merge Two Sorted Lists",description:"\u63cf\u8ff0",source:"@site/docs/sorting/merge-sort/merge-two-sorted-lists.md",slug:"/sorting/merge-sort/merge-two-sorted-lists",permalink:"/algorithm-essentials/sorting/merge-sort/merge-two-sorted-lists",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/merge-sort/merge-two-sorted-lists.md",version:"current",sidebar:"someSidebar",previous:{title:"Merge Two Sorted Arrays",permalink:"/algorithm-essentials/sorting/merge-sort/merge-two-sorted-arrays"},next:{title:"Merge k Sorted Lists",permalink:"/algorithm-essentials/sorting/merge-sort/merge-k-sorted-lists"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],d={rightToc:u};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u65e0"),Object(a.b)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),Object(a.b)(l.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"java",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Merge Two Sorted Lists\n// \u65f6\u95f4\u590d\u6742\u5ea6O(min(m,n))\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        if (l1 == null) return l2;\n        if (l2 == null) return l1;\n        ListNode dummy = new ListNode(-1);\n        ListNode p = dummy;\n        for (; l1 != null && l2 != null; p = p.next) {\n            if (l1.val > l2.val) { p.next = l2; l2 = l2.next; }\n            else { p.next = l1; l1 = l1.next; }\n        }\n        p.next = l1 != null ? l1 : l2;\n        return dummy.next;\n    }\n}\n"))),Object(a.b)(i.a,{value:"cpp",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Merge Two Sorted Lists\n// \u65f6\u95f4\u590d\u6742\u5ea6O(min(m,n))\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {\n        if (l1 == nullptr) return l2;\n        if (l2 == nullptr) return l1;\n        ListNode dummy(-1);\n        ListNode *p = &dummy;\n        for (; l1 != nullptr && l2 != nullptr; p = p->next) {\n            if (l1->val > l2->val) { p->next = l2; l2 = l2->next; }\n            else { p->next = l1; l1 = l1->next; }\n        }\n        p->next = l1 != nullptr ? l1 : l2;\n        return dummy.next;\n    }\n};\n")))),Object(a.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/sorting/merge-sort/merge-two-sorted-arrays"}),"Merge Two Sorted Arrays")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/sorting/merge-sort/merge-k-sorted-lists"}),"Merge k Sorted Lists"))))}m.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return n?o.a.createElement(f,i(i({ref:t},c),{},{components:n})):o.a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},300:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},301:function(e,t,n){"use strict";var r=n(0),o=n(300);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(301),l=n(299),i=n(47),s=n.n(i),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,d=e.values,m=e.groupId,p=Object(a.a)(),f=p.tabGroupChoices,b=p.setTabGroupChoices,g=Object(r.useState)(i),v=g[0],O=g[1],y=Object(r.useState)(!1),j=y[0],w=y[1];if(null!=m){var h=f[m];null!=h&&h!==v&&d.some((function(e){return e.value===h}))&&O(h)}var x=function(e){O(e),null!=m&&b(m,e)},T=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},L=function(){w(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",L)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),N(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);