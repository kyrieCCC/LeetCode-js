// 78. 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]


var subsets = function (nums) { 
    const res = [[]]
    for (let i = 0; i < nums.length; i++){
        res.forEach((item) => {
            res.push(item.concat(nums[i]))
        })
    }
    return res
}
//击败96% 字节跳动春招练习题
//本题的解法就是循环
//首先往数组中丢入一个空的数组，随后每次在forEach的时候都重现遍历这个数组
//拿到之前放入的数值，再重新组合
//最后拿到子集


const nums = [1, 2, 3]
console.log(subsets(nums));