// 617. 合并二叉树
// 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// 输出：[3,4,5,5,4,null,7]

var mergeTrees = function (root1, root2) { 
    const plus = (root1, root2) => {
        if (!root1) {
            return root2
        }
        if (!root2) {
            return root1
        }
        root1.val += root2.val
        root1.left = plus(root1.left, root2.left)
        root1.right = plus(root1.right, root2.right)
        return root1
    }
    return plus(root1, root2)
}
//使用递归的方法，递归两边的左 右子树，并进行相加，需要注意的是我们的终止条件
//终止条件是当我们root1的节点为空，我们需要返回roo2的节点，因为这样才能填充节点
//如果两边都为null，同样的root1的节点返回的也是null