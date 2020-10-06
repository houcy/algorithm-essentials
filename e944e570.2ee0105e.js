(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),l=(n(0),n(298)),i=n(302),o=n(303),u={title:"Remove Duplicates from Sorted List II"},c={unversionedId:"linear-list/linked-list/remove-duplicates-from-sorted-list-ii",id:"linear-list/linked-list/remove-duplicates-from-sorted-list-ii",isDocsHomePage:!1,title:"Remove Duplicates from Sorted List II",description:"\u63cf\u8ff0",source:"@site/docs/linear-list/linked-list/remove-duplicates-from-sorted-list-ii.md",slug:"/linear-list/linked-list/remove-duplicates-from-sorted-list-ii",permalink:"/algorithm-essentials/linear-list/linked-list/remove-duplicates-from-sorted-list-ii",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/linear-list/linked-list/remove-duplicates-from-sorted-list-ii.md",version:"current",sidebar:"someSidebar",previous:{title:"Remove Duplicates from Sorted List",permalink:"/algorithm-essentials/linear-list/linked-list/remove-duplicates-from-sorted-list"},next:{title:"Rotate List",permalink:"/algorithm-essentials/linear-list/linked-list/rotate-list"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u9012\u5f52\u7248",id:"\u9012\u5f52\u7248",children:[]},{value:"\u8fed\u4ee3\u7248",id:"\u8fed\u4ee3\u7248",children:[]},{value:"\u76f8\u5173\u9898\u76ee",id:"\u76f8\u5173\u9898\u76ee",children:[]}],d={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(l.b)("p",null,"Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list."),Object(l.b)("p",null,"For example,"),Object(l.b)("p",null,"Given ",Object(l.b)("inlineCode",{parentName:"p"},"1->2->3->3->4->4->5"),", return ",Object(l.b)("inlineCode",{parentName:"p"},"1->2->5"),"."),Object(l.b)("p",null,"Given ",Object(l.b)("inlineCode",{parentName:"p"},"1->1->1->2->3"),", return ",Object(l.b)("inlineCode",{parentName:"p"},"2->3"),"."),Object(l.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(l.b)("p",null,"\u65e0"),Object(l.b)("h3",{id:"\u9012\u5f52\u7248"},"\u9012\u5f52\u7248"),Object(l.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Remove Duplicates from Sorted List II\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        if (head ==null || head.next == null) return head;\n\n        ListNode p = head.next;\n        if (head.val == p.val) {\n            while (p != null && head.val == p.val) {\n                p = p.next;\n            }\n            return deleteDuplicates(p);\n        } else {\n            head.next = deleteDuplicates(head.next);\n            return head;\n        }\n    }\n};\n"))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Remove Duplicates from Sorted List II\n// \u9012\u5f52\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *deleteDuplicates(ListNode *head) {\n        if (head == nullptr || head->next == nullptr) return head;\n\n        ListNode *p = head->next;\n        if (head->val == p->val) {\n            while (p != nullptr && head->val == p->val) {\n                ListNode *tmp = p;\n                p = p->next;\n                delete tmp;\n            }\n            delete head;\n            return deleteDuplicates(p);\n        } else {\n            head->next = deleteDuplicates(head->next);\n            return head;\n        }\n    }\n};\n")))),Object(l.b)("h3",{id:"\u8fed\u4ee3\u7248"},"\u8fed\u4ee3\u7248"),Object(l.b)(i.a,{defaultValue:"java",values:[{label:"Java",value:"java"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"// Remove Duplicates from Sorted List II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\npublic class Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        if (head == null) return head;\n\n        ListNode dummy = new ListNode(Integer.MAX_VALUE); // \u5934\u7ed3\u70b9\n        dummy.next = head;\n        ListNode prev = dummy, cur = head;\n        while (cur != null) {\n            boolean duplicated = false;\n            while (cur.next != null && cur.val == cur.next.val) {\n                duplicated = true;\n                cur = cur.next;\n            }\n            if (duplicated) { // \u5220\u9664\u91cd\u590d\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\n                cur = cur.next;\n                continue;\n            }\n            prev.next = cur;\n            prev = prev.next;\n            cur = cur.next;\n        }\n        prev.next = cur;\n        return dummy.next;\n    }\n}\n"))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"// Remove Duplicates from Sorted List II\n// \u8fed\u4ee3\u7248\uff0c\u65f6\u95f4\u590d\u6742\u5ea6O(n)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6O(1)\nclass Solution {\npublic:\n    ListNode *deleteDuplicates(ListNode *head) {\n        if (head == nullptr) return head;\n\n        ListNode dummy(INT_MIN); // \u5934\u7ed3\u70b9\n        dummy.next = head;\n        ListNode *prev = &dummy, *cur = head;\n        while (cur != nullptr) {\n            bool duplicated = false;\n            while (cur->next != nullptr && cur->val == cur->next->val) {\n                duplicated = true;\n                ListNode *temp = cur;\n                cur = cur->next;\n                delete temp;\n            }\n            if (duplicated) { // \u5220\u9664\u91cd\u590d\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\n                ListNode *temp = cur;\n                cur = cur->next;\n                delete temp;\n                continue;\n            }\n            prev->next = cur;\n            prev = prev->next;\n            cur = cur->next;\n        }\n        prev->next = cur;\n        return dummy.next;\n    }\n};\n")))),Object(l.b)("h3",{id:"\u76f8\u5173\u9898\u76ee"},"\u76f8\u5173\u9898\u76ee"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/algorithm-essentials/linear-list/linked-list/remove-duplicates-from-sorted-list"}),"Remove Duplicates from Sorted List"))))}p.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.a.createElement(b,o(o({ref:t},c),{},{components:n})):a.a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},299:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},300:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},301:function(e,t,n){"use strict";var r=n(0),a=n(300);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},302:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(301),i=n(299),o=n(47),u=n.n(o),c=37,s=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,d=e.values,p=e.groupId,m=Object(l.a)(),b=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(r.useState)(o),h=v[0],O=v[1],j=Object(r.useState)(!1),y=j[0],x=j[1];if(null!=p){var g=b[p];null!=g&&g!==h&&d.some((function(e){return e.value===g}))&&O(g)}var N=function(e){O(e),null!=p&&f(p,e)},w=[],L=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},D=function(){x(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",L),window.addEventListener("mousedown",D)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":h===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),L(e)},onFocus:function(){return N(t)},onClick:function(){N(t),x(!1)},onPointerDown:function(){return x(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},303:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);