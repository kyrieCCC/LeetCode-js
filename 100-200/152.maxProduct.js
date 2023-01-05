// 152. 乘积最大子数组
// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），
// 并返回该子数组所对应的乘积。
// 输入: nums = [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
var maxProduct = function(nums) {
    let res = nums[0]
    let min = nums[0], max = nums[0]
    let temp1 = 0, temp2 = 0
    for (let i = 1; i < nums.length; i++){
        temp1 = min * nums[i]
        temp2 = max * nums[i]
        min = Math.min(temp1, temp2, nums[i])
        max = Math.max(nums[i], temp2, temp1)
        res = Math.max(max, res)
    }
    return res
};

const nums = [2, 3, -2, 4]
console.log(maxProduct(nums))