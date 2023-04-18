// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

var minDepth = function (root) {
    if (!root) {
        return 0
    }
    if (!root.left && !root.right) {
        return 1
    }

    let res = Number.MAX_SAFE_INTEGER
    if (root.left !== null) {
        res = Math.min(minDepth(root.left), res)
    }
    if (root.right !== null) {
        res = Math.min(minDepth(root.right), res)
    }
    return res + 1
 }