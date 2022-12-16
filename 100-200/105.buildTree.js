// 105. 从前序与中序遍历序列构造二叉树
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历，
// inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]
var buildTree = function (preorder, inorder) { 
    if (!preorder.length) {
        return null
    }
    let root = new TreeNode(preorder[0])
    let midIndex = inorder.findIndex((item) => item === root.val)
    root.left = buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex + 1))
    root.right = buildTree(preorder.slice(midIndex + 1, preorder.length), inorder.slice(midIndex + 1, inorder.length))
    return root
}

//本题使用的解法首先是找到先序遍历的第一个节点，因为这是root节点
//然后左子树就是把两个不同的遍历方式使用根节点进行切割
//递归把全部子节点全都找到
//需要注意的就是先序遍历的第一个节点就是根节点，我们需要根据这个根节点来判断中序遍历中哪一些是左子树或者右子树