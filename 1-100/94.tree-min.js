// 94. 二叉树的中序遍历
// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
// 输入：root = [1,null,2,3]
// 输出：[1,3,2]

var inorderTraversal = function (root) { 
    const res = []
    const skt = []
    while (root || skt.length) {
        while(root){
            skt.push(root)
            root = root.left
        }
        root = skt.pop()
        res.push(root.val)
        root = root.right
    }
    return res
}
//遍历左节点，把全部左节点放到skt数组中，直到最后一个左节点

var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};
// 定义 inorder(root) 表示当前遍历到 root\textit{ root }root 节点的答案，
// 那么按照定义，我们只要递归调用 inorder(root.left) 来遍历 root\textit{ root }root 节点的左子树
// ，然后将 root\textit{ root }root 节点的值加入答案，
// 再递归调用inorder(root.right) 来遍历 root\textit{ root }root 节点的右子树即可，
// 递归终止的条件为碰到空节点。
