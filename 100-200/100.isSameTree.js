// 100. 相同的树
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
// 输入：p = [1,2,3], q = [1,2,3]
// 输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) { 
    if (!p && !q) {
        return true
    }
    const dfs = (root, str) => {
        root ? str += root.val : str += 'null'
        const leftStr = root && dfs(root.left, str)
        const rightStr = root && dfs(root.right, str)
        return str + leftStr + rightStr
    }
    return dfs(p, '') == dfs(q, '')
}
//击败95%