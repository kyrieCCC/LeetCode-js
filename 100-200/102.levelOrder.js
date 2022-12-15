// 102. 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
var levelOrder = function (root) { 
    const res = []
    if (!root) {
        return res
    }
    const tempArr = []
    tempArr.push(root)
    while (tempArr.length) {
        const len = tempArr.length
        res.push([])
        for (let i = 1; i <= len; i++){
            const node = tempArr.shift()
            res[res.length - 1].push(node.val)
            if (node.left) tempArr.push(node.left)
            if(node.right) tempArr.push(node.right)
        }
    }
    return res
}