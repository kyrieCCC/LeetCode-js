// 226. 翻转二叉树 
// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
var invertTree = function (root) { 
    if (!root) { //递归的终止条件
        return null
    }
    const left = invertTree(root.left) //递归遍历左子节点
    const right = invertTree(root.right) //递归遍历右子节点
    root.left = right
    root.right = left
    return root
}
//使用递归的方法，遍历出左右节点的值，并保存，在遍历递归完成后将左右的位置调换实现二叉树的反转