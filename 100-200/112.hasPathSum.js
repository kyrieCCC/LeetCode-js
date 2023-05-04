// 112. 路径总和
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
// 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 如果存在，返回 true ；否则，返回 false 。
// 叶子节点 是指没有子节点的节点。
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// 输出：true
// 解释：等于目标和的根节点到叶节点路径如上图所示。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) { 
    const dfs = (node, current) => {
        if (current == 0 && !node.left && !node.right) {
            return true
        }
        if (!node.left && !node.right) {
            return false
        }
        if (node.left && dfs(node.left, current - node.left.val)) {
            return true
        }
        if (node.right && dfs(node.right, current - node.right.val)) {
            return true
        }
        return false
    }
    if (!root) {
        return false
    }
    return dfs(root, targetSum - root.val)
}