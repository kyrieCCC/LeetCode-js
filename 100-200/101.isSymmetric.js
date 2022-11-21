// 101. 对称二叉树
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

var isSymmetric = function (root) {
  if (!root) {
    //如果根节点为空，返回false
    return false;
  }
  if (!root.left && !root.right) {
    //左右节点为空，返回true
    return true;
  }
  return evalTree(root.left) === evalTree(trsf(root.right)); //比较左右子树
};
const evalTree = (root) => {
  //遍历左子树
  if (!root) {
    return "0";
  }
  return `${root.val}${root.left}${root.right}`;
};
const trsf = (root) => {
  //反转子树，让右子树以左子树的形式表达
  if (!root) {
    return null;
  }
  return {
    val: root.val,
    left: trsf(root.right), //改变左右
    right: trsf(root.left), //改变左右
  };
};
