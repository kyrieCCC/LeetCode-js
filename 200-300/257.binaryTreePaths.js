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

//直接递归遍历
//每次都判断该节点是否存在叶子节点，若存在叶子节点就继续往下
//最后每次向res中push一个完整的路径
//返回res

const binaryTreePaths_bfs = (root) => {
    const res = []
    if (!root) {
        return res
    }
    const nodeArr = [root]
    const pathArr = [root.val.toString()]
    while (nodeArr.length) {
        const node = nodeArr.shift()
        const path = pathArr.shift()
        if (!node.left && !node.right) {
            res.push(path)
        }
        if (node.left) {
            nodeArr.push(node.left)
            pathArr.push(path + "->" + node.left.val.toString())
        }
        if (node.right) {
            nodeArr.push(node.right)
            pathArr.push(path + "->" + node.right.val.toString())
        }
    }
    return res
}
//广度优先遍历
//首先拿到每一层的节点值，针对每一层的节点值进行广度优先搜索
//将路径放到res数组当中
//返回res