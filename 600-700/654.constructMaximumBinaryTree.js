// 654. 最大二叉树
// 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:
// 创建一个根节点，其值为 nums 中的最大值。
// 递归地在最大值 左边 的 子数组前缀上 构建左子树。
// 递归地在最大值 右边 的 子数组后缀上 构建右子树。
// 返回 nums 构建的 最大二叉树 。

// 输入：nums = [3,2,1,6,0,5]
// 输出：[6,3,5,null,2,0,null,null,1]
// 解释：递归调用如下所示：
// - [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
//     - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
//         - 空数组，无子节点。
//         - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
//             - 空数组，无子节点。
//             - 只有一个元素，所以子节点是一个值为 1 的节点。
//     - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
//         - 只有一个元素，所以子节点是一个值为 0 的节点。
// - 空数组，无子节点。
        
//解法一 通过递归构建树
var constructMaximumBinaryTree = function (nums) { 
    const buildTree = (nums, left, right) => {
        if (left > right) {
            return null
        }
        let maxIndex = left
        for (let i = left + 1; i <= right; i++){
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i
            }
        }
        const node = new TreeNode(nums[maxIndex])
        node.left = buildTree(nums, left, maxIndex - 1)
        node.right = buildTree(nums, maxIndex + 1, right)
        return node
    }
    return buildTree(nums, 0, nums.length - 1)
}

//击败96% mihoyo春季招聘练习题
//本题使用的方法是递归法
//首先通过循环拿到规定的子数组中的最大值，分离出左右两个部分作为左右子树
//每次执行函数都会创建一个树节点treenode
//递归完成后的node即为父节点


//解法二 单调栈
const constructMaximumBinaryTreePlus = (nums) => {
    const tree = new Array(nums.length).fill(0)
    const stack = []
    for (let i = 0; i < nums.length; i++){
        tree[i] = new TreeNode(nums[i])
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            tree[i].left = tree[stack[stack.length - 1]]
            stack.pop()
        }
        if (stack.length) {
            tree[stack[stack.length - 1]].right = tree[i]
        }
        stack.push(i)
    }
    return tree[stack[0]]
}