// 98. 验证二叉搜索树
// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
// 有效 二叉搜索树定义如下：
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
// 输入：root = [2,1,3]
// 输出：true
var isValidBST = function (root) { 
    const dfs = (root, lower, upper) => {
        if (!root) {
            return true
        }
        if (root.val <= lower || root.val >= upper) {
            return false
        }
        return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper)
    }
    return dfs(root, -Infinity, Infinity)
}