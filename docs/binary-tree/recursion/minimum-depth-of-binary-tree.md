---
title: Minimum Depth of Binary Tree
---

### 描述

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

### 分析

无

### 递归版

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Minimum Depth of Binary Tree
// 递归版，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public int minDepth(TreeNode root) {
        return minDepth(root, false);
    }
    private static int minDepth(TreeNode root, boolean hasbrother) {
        if (root == null) return hasbrother ? Integer.MAX_VALUE : 0;

        return 1 + Math.min(minDepth(root.left, root.right != null),
                minDepth(root.right, root.left != null));
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Minimum Depth of Binary Tree
// 递归版，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    int minDepth(const TreeNode *root) {
        return minDepth(root, false);
    }
private:
    static int minDepth(const TreeNode *root, bool hasbrother) {
        if (!root) return hasbrother ? INT_MAX : 0;

        return 1 + min(minDepth(root->left, root->right != NULL),
                minDepth(root->right, root->left != NULL));
    }
};
```

</TabItem>
</Tabs>

### 迭代版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Minimum Depth of Binary Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
public class Solution {
    public int minDepth(TreeNode root) {
        if (root == null) return 0;

        int result = Integer.MAX_VALUE;
        Stack<Pair> s = new Stack<>();
        s.push(new Pair(root, 1));

        while (!s.empty()) {
            final Pair p = s.pop();
            TreeNode node = p.node;
            int depth = p.depth;

            if (node.left == null && node.right == null)
                result = Math.min(result, depth);

            if (node.left != null && result > depth) // 深度控制，剪枝
                s.push(new Pair(node.left, depth + 1));

            if (node.right != null && result > depth) // 深度控制，剪枝
                s.push(new Pair(node.right, depth + 1));
        }

        return result;
    }

    static class Pair {
        TreeNode node;
        int depth;
        public Pair(TreeNode node, int depth) {
            this.node = node;
            this.depth = depth;
        }
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Minimum Depth of Binary Tree
// 迭代版，时间复杂度O(n)，空间复杂度O(logn)
class Solution {
public:
    int minDepth(TreeNode* root) {
        if (root == nullptr)
            return 0;

        int result = INT_MAX;

        stack<pair<TreeNode*, int>> s;
        s.push(make_pair(root, 1));

        while (!s.empty()) {
            auto node = s.top().first;
            auto depth = s.top().second;
            s.pop();

            if (node->left == nullptr && node->right == nullptr)
                result = min(result, depth);

            if (node->left && result > depth) // 深度控制，剪枝
                s.push(make_pair(node->left, depth + 1));

            if (node->right && result > depth) // 深度控制，剪枝
                s.push(make_pair(node->right, depth + 1));
        }

        return result;
    }
};
```

</TabItem>
</Tabs>

### 相关题目

- [Maximum Depth of Binary Tree](maximum-depth-of-binary-tree.md)
