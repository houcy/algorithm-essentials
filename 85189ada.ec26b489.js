(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{190:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return u})),t.d(e,"metadata",(function(){return m})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return s}));var i=t(2),r=t(6),a=(t(0),t(298)),u={title:"Maximum Gap"},m={unversionedId:"sorting/radix-sort/maximum-gap",id:"sorting/radix-sort/maximum-gap",isDocsHomePage:!1,title:"Maximum Gap",description:"\u63cf\u8ff0",source:"@site/docs/sorting/radix-sort/maximum-gap.md",slug:"/sorting/radix-sort/maximum-gap",permalink:"/algorithm-essentials/sorting/radix-sort/maximum-gap",editUrl:"https://github.com/soulmachine/algorithm-essentials/edit/master/docs/sorting/radix-sort/maximum-gap.md",version:"current",sidebar:"someSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/algorithm-essentials/sorting/radix-sort/README"},next:{title:"Largest Number",permalink:"/algorithm-essentials/sorting/other/largest-number"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5206\u6790",id:"\u5206\u6790",children:[]},{value:"\u89e3\u6cd5 1 \u6876\u6392\u5e8f",id:"\u89e3\u6cd5-1-\u6876\u6392\u5e8f",children:[]},{value:"\u89e3\u6cd5 2 \u57fa\u6570\u6392\u5e8f",id:"\u89e3\u6cd5-2-\u57fa\u6570\u6392\u5e8f",children:[]},{value:"\u89e3\u6cd5 3 \u8ba1\u6570\u6392\u5e8f",id:"\u89e3\u6cd5-3-\u8ba1\u6570\u6392\u5e8f",children:[]}],o={rightToc:l};function s(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(a.b)("wrapper",Object(i.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),Object(a.b)("p",null,"Given an unsorted array, find the maximum difference between the successive elements in its sorted form."),Object(a.b)("p",null,"Try to solve it in linear time/space."),Object(a.b)("p",null,"Return 0 if the array contains less than 2 elements."),Object(a.b)("p",null,"You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range."),Object(a.b)("h3",{id:"\u5206\u6790"},"\u5206\u6790"),Object(a.b)("p",null,"\u8fd9\u9053\u9898\u6700\u76f4\u63a5\u7684\u89e3\u6cd5\u662f\uff0c\u5148\u6392\u5e8f\uff0c\u5f97\u5230\u6709\u5e8f\u6570\u7ec4\uff0c\u7136\u540e\u76f8\u90bb\u5143\u7d20\u76f8\u51cf\uff0c\u627e\u51fa\u5dee\u6700\u5927\u7684\uff0c\u65f6\u95f4\u590d\u6742\u5ea6",Object(a.b)("inlineCode",{parentName:"p"},"O(n log n)"),"\u3002"),Object(a.b)("p",null,"\u7136\u800c\u672c\u9898\u8981\u6c42",Object(a.b)("inlineCode",{parentName:"p"},"O(n)"),"\u65f6\u95f4\uff0c\u6709\u6ca1\u6709",Object(a.b)("inlineCode",{parentName:"p"},"O(n)"),"\u7684\u6392\u5e8f\u7b97\u6cd5\u5462\uff1f\u6876\u6392\u5e8f\u3001\u57fa\u6570\u6392\u5e8f\u3001\u8ba1\u6570\u6392\u5e8f\u3002"),Object(a.b)("h3",{id:"\u89e3\u6cd5-1-\u6876\u6392\u5e8f"},"\u89e3\u6cd5 1 \u6876\u6392\u5e8f"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Maximum Gap\n// Bucket Sort\n// Time Complexity: O(n+k), Space Complexity: O(n+k)\npublic class Solution {\n    public int maximumGap(int[] nums) {\n        if (nums.length < 2) return 0;\n        bucketSort(nums);\n\n        int maxDiff = Integer.MIN_VALUE;\n        for (int i = 1; i < nums.length; ++i) {\n            maxDiff = Math.max(maxDiff, nums[i] - nums[i - 1]);\n        }\n        return maxDiff;\n    }\n\n    private static void bucketSort(int[] nums) {\n        if (nums.length < 2) return;\n        int minValue = Integer.MAX_VALUE;\n        int maxValue = Integer.MIN_VALUE;\n\n        for (int i : nums) {\n            minValue = Math.min(minValue, i);\n            maxValue = Math.max(maxValue, i);\n        }\n\n        final int bucketSize = (maxValue - minValue) / nums.length + 1;\n        final int bucketCount = (maxValue - minValue) / bucketSize + 1;\n        final ArrayList<Integer>[] buckets = new ArrayList[bucketCount];\n        for (int i = 0; i < buckets.length; ++i) {\n            buckets[i] = new ArrayList<>();\n        }\n\n        for (int x : nums) {\n            final int index = (x - minValue) / bucketSize;\n            buckets[index].add(x);\n        }\n\n        for (final ArrayList<Integer> list : buckets) {\n            Collections.sort(list);\n        }\n\n        int i = 0;\n        for (final ArrayList<Integer> list : buckets) {\n            for (int x : list) {\n                nums[i++] = x;\n            }\n        }\n    }\n}\n")),Object(a.b)("h3",{id:"\u89e3\u6cd5-2-\u57fa\u6570\u6392\u5e8f"},"\u89e3\u6cd5 2 \u57fa\u6570\u6392\u5e8f"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Maximum Gap\n// Radix Sort\n// Time Complexity: O(nd), Space Complexity: O(n+d)\npublic class Solution {\n    public int maximumGap(int[] nums) {\n        if (nums.length < 2) return 0;\n        radixSort(nums);\n\n        int maxDiff = Integer.MIN_VALUE;\n        for (int i = 1; i < nums.length; ++i) {\n            maxDiff = Math.max(maxDiff, nums[i] - nums[i - 1]);\n        }\n        return maxDiff;\n    }\n    private static void radixSort(int[] nums) {\n        int minValue = Integer.MAX_VALUE;\n        int maxValue = Integer.MIN_VALUE;\n\n        for (int i : nums) {\n            minValue = Math.min(minValue, i);\n            maxValue = Math.max(maxValue, i);\n        }\n\n        final int D = Integer.toString(maxValue - minValue).length();\n        final ArrayList<Integer>[] buckets = new ArrayList[10];\n        for (int i = 0; i < buckets.length; ++i) {\n            buckets[i] = new ArrayList<>();\n        }\n\n        for (int i = 0; i < D; ++i) {\n            for (int x : nums) {\n                final int index = getDigit(x - minValue, i);\n                final ArrayList<Integer> bucket = buckets[index];\n                bucket.add(x);\n            }\n\n            int index = 0;\n            for (ArrayList<Integer> bucket : buckets) {\n                for (int x : bucket) {\n                    nums[index++] = x;\n                }\n                bucket.clear();\n            }\n        }\n    }\n\n    // get the i-th digit of n\n    private static int getDigit(int n, int i) {\n        for (int j = 0; j < i; ++j) {\n            n /= 10;\n        }\n        return n % 10;\n    }\n}\n")),Object(a.b)("h3",{id:"\u89e3\u6cd5-3-\u8ba1\u6570\u6392\u5e8f"},"\u89e3\u6cd5 3 \u8ba1\u6570\u6392\u5e8f"),Object(a.b)("p",null,"\u8ba1\u6570\u6392\u5e8f\u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u6876\u6392\u5e8f\uff0c\u5f53\u6876\u7684\u4e2a\u6570\u6700\u5927\u7684\u65f6\u5019\uff0c\u5c31\u662f\u8ba1\u6570\u6392\u5e8f\u3002"),Object(a.b)("p",null,"\u672c\u9898\u7528\u8ba1\u6570\u6392\u5e8f\u4f1a MLE\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-java"}),"// Maximum Gap\n// Counting Sort\n// Time Complexity: O(n), Space Complexity: O(max-min)\npublic class Solution {\n    public int maximumGap(int[] nums) {\n        if (nums.length < 2) return 0;\n        countingSort(nums);\n\n        int maxDiff = Integer.MIN_VALUE;\n        for (int i = 1; i < nums.length; ++i) {\n            maxDiff = Math.max(maxDiff, nums[i] - nums[i - 1]);\n        }\n        return maxDiff;\n    }\n    private static void countingSort(int[] nums) {\n        int minValue = Integer.MAX_VALUE;\n        int maxValue = Integer.MIN_VALUE;\n\n        for (int i : nums) {\n            minValue = Math.min(minValue, i);\n            maxValue = Math.max(maxValue, i);\n        }\n\n        final int[] buckets = new int[maxValue - minValue + 1];\n\n        for (int i : nums) {\n            buckets[i - minValue]++;\n        }\n\n        for (int i = 0, index = 0; i < buckets.length; ++i) {\n            Arrays.fill(nums, index, index + buckets[i], i + minValue);\n            index += buckets[i];\n        }\n    }\n}\n")))}s.isMDXComponent=!0},298:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return f}));var i=t(0),r=t.n(i);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=r.a.createContext({}),s=function(n){var e=r.a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):m(m({},e),n)),t},c=function(n){var e=s(n.components);return r.a.createElement(o.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,u=n.parentName,o=l(n,["components","mdxType","originalType","parentName"]),c=s(t),b=i,f=c["".concat(u,".").concat(b)]||c[b]||p[b]||a;return t?r.a.createElement(f,m(m({ref:e},o),{},{components:t})):r.a.createElement(f,m({ref:e},o))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,u=new Array(a);u[0]=b;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=n,m.mdxType="string"==typeof n?n:i,u[1]=m;for(var o=2;o<a;o++)u[o]=t[o];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);