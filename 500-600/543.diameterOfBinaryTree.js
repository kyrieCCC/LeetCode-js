// 543. 二叉树的直径
// 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值
// 这条路径可能穿过也可能不穿过根结点。
var diameterOfBinaryTree = function (root) { 
    let res = 0
    function deep(root) {
        if (!root) return 0
        let left = deep(root.left), right = deep(root.right)
        res = Math.max(left + right, res)
        return Math.max(left, right) + 1
    }
    deep(root)
    return res
}
//遍历每一个子节点的深度