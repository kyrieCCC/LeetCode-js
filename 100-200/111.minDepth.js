// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明：叶子节点是指没有子节点的节点。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

//解法一 DFS
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
// 通过递归来遍历这个二叉树
// 每当左右子树都没有值的时候，返回深度为1
// 当左子树或者右子树存在的时候，进行递归，判断左右子树的深度
// 由此往下，来比较左右子树的深度大小，取出小的值
// 最后返回结果+1表示包括根节点