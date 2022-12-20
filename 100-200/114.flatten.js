// 114. 二叉树展开为链表
// 给你二叉树的根结点 root ，请你将它展开为一个单链表：
// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。
// 输入：root = [1,2,5,3,4,null,6]
// 输出：[1,null,2,null,3,null,4,null,5,null,6]
var flatten = function (root) { 
    const list = []
    preArr(root, list)
    for (let i = 1; i < list.length; i++){
        const preNode = list[i - 1]
        preNode.left = null
        preNode.right = list[i]
    }
}
const preArr = (root, arr) => {
    if (root) {
        arr.push(root)
        preArr(root.left, arr)
        preArr(root.right, arr)
    }
}

//使用了先序遍历的方法进行遍历，首先根据二叉树先序遍历拿到全部的NODE节点
//将我们拿到的list一个一个放到我们的新的链表当中，每个数值的左边都是null，右边都是current也就是当前NODE
//这样建立出来的就是一个没有左节点的二叉树，类似链表