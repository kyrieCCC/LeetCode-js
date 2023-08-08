// 剑指 Offer 55 - I. 二叉树的深度
// 输入一棵二叉树的根节点，求该树的深度。
// 从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const arr = [];
  arr.push(root);
  let res = 0;
  while (arr.length) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      let node = arr.shift();
      if (node.left) arr.push(node.left);
      if (node.right) arr.push(node.right);
    }
    res += 1;
  }
  return res;
};
// 广度优先遍历
// 每次都将同一层的节点遍历完后再到下一层

var maxDepth = function(root) {
    if(!root){
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
// 深度优先遍历
// 每次都找出最深的一层进行比较