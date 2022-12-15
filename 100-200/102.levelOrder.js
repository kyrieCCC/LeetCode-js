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
        const len = tempArr.length//每次循环结束都记录长度，即这一层的节点数
        res.push([])///开始记录新的一层节点
        for (let i = 1; i <= len; i++){//把这一层的节点放进去，同时查看下一层的节点
            const node = tempArr.shift()
            res[res.length - 1].push(node.val) //放入节点
            if (node.left) tempArr.push(node.left)//寻找下一层的节点
            if (node.right) tempArr.push(node.right)//寻找下一层的节点
        }
    }
    return res
}
//这里我们因为是层序遍历，我们需要返回每一层的结果，所以我们使用层序遍历
//res每次循环都新增一个空数组，把这一层的全部节点都放到这个空数组当中