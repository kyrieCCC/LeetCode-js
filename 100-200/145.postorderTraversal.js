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

//使用正常遍历二叉树的方式，由于后序遍历为左 右 根的顺序
//故我们的递归顺序为dfs(root.left) =>  dfs(root.right) => 根节点

       