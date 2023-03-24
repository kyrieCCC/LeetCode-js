// 145. 二叉树的后序遍历
// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
// 输入：root = [1,null,2,3]
// 输出：[3,2,1]

var postorderTraversal = function (root) { 
    const res = []
    const dfs = (root) => {
        if (!root) {
            return root
        }
        dfs(root.left)
        dfs(root.right)
        res.push(root.val)
    }
    dfs(root)
    return res
}