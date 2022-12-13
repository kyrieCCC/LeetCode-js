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
        if (!root) { //递归终止条件
            return true
        }
        if (root.val <= lower || root.val >= upper) { //判断大小
            return false
        }
        return dfs(root.left, lower, root.val) && dfs(root.right, root.val, upper) ///递归
    }
    return dfs(root, -Infinity, Infinity)
}
//这里使用的递归的方法，定义dfs来递归寻找子树的每一个value，然后于lower或者upper对比看是否出现差异
//如果左子树的values大于root那么返回flase，相反，我们会返回true