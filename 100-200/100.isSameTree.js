// 100. 相同的树
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
// 输入：p = [1,2,3], q = [1,2,3]
// 输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) { 
    if (!p && !q) {
        return true
    }
    const dfs = (root, str) => {
        root ? str += root.val : str += 'null'
        const leftStr = root && dfs(root.left, str)
        const rightStr = root && dfs(root.right, str)
        return str + leftStr + rightStr
    }
    return dfs(p, '') == dfs(q, '')
}
//击败95%
//直接使用处理二叉树常用的递归的方式进行处理
//用一段字符串来记录每个节点的值
//最后判断两个字符串是否相等，从而判断是否为相同的树


const isSameTree_1 = (p, q) => {
    let flag = true
    const dfs = (p, q) => {
        if (!p && !q) {
            return
        }
        if (p && q) {
            if (p.val !== q.val) {
                return flag = false
            }
            dfs(p.left, q.left)
            dfs(p.right, q.right)
        }
        else {
            return flag = false
        }
    }
    dfs(p, q)
    return flag
}
//击败95%
//依旧是使用递归的方式，与第一个递归不同的在于
//动态的判断是否相等，而第一种方法是针对最终的结果进行比较