// 257. 二叉树的所有路径
// 给你一个二叉树的根节点 root ，按 任意顺序
// 返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。
// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) { 
    const res = []
    const find_res = (root, path) => {
        if (root) {
            path += root.val.toString()
            if (!root.left && !root.right) {
                res.push(path)
            } else {
                path += "->"
                find_res(root.left, path)
                find_res(root.right, path)
            }
        }
    }
    find_res(root, "")
    return res
}