// 236. 二叉树的最近公共祖先
// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，
// 最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出：3
// 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
var lowestCommonAncestor = function (root, p, q) { 
    const find = (root, p, q) => {
        if (root === null || root === p || root === q) {
            return root
        }//但我们到达底部或者找到p，q就返回当前的值
        let left = find(root.left, p, q) //递归寻找对应值
        let right = find(root.right, p, q)
        if (left !== null && right !== null) {
            return root //当左右不为空，这个时候的root为公共祖先
        }
        if (left === null) { //左为空说明右边找到了值，return出来
            return right
        }
        return left //这个是右边为空左边不为空的情况
    }
    return find(root, p, q)
}

//击败96.16%, mihoyo春招练习题
//本题使用的方法是回溯and递归来找到p，q的值
//思路就是我们二叉树中进行递归，寻找我们的p， q值
//当我们找到了对应的值就把这个值return回去
//当左右都return了值，说明这个时候就是找到了公共祖先，我们直接把return root即可
//需要用到后序遍历的知识点（左->右->中）
