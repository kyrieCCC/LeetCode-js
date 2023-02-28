// 剑指 Offer II 010.和为 k 的子数组
// 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。
// 输入:nums = [1,1,1], k = 2
// 输出: 2
// 解释: 此题 [1,1] 与 [1,1] 为两种不同的情况

//1. 暴力双循环解决，这一方法字节双循环
//并计算累计的和
var subarraySum = function (nums, k) { 
    let count = 0
    for (let i = 0; i < nums.length; i++){
        let sum = 0
        for (let j = i; j >= 0; j--){
            sum += nums[j]
            if (sum === k) {
               count++
           }
        }
    }
    return count
}

const nums = [1, 1, 1], k = 2
console.log(subarraySum(nums, k));