// 110. 平衡二叉树
// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：true

var isBalanced = function (root) { 
    const dfs = (root) => {
        if (!root) {
            return 0
        }
        const left = dfs(root.left)
        if (left == -1) {
            return -1
        }
        const right = dfs(root.right)
        if (right == -1) {
            return -1
        }
        if (Math.abs(left - right) > 1) {
            return -1
        }
        else {
            return 1 + Math.max(left, right)
        }
    }
    return (dfs(root) != -1)
}