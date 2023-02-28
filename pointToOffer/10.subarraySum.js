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

//2. map解决双循环的时间复杂度高的问题
const subarraySumPlus = (nums, k) => {
    const map = new Map()
    map.set(0, 1)
    let count = 0, pre = 0
    for (let i = 0; i < nums.length; i++){
        pre = pre + nums[i]
        if (map.has(pre - k)) {
            count = map.get(pre - k) + count
        }
        if (map.has(pre)) {
            map.set(pre, map.get(pre) + 1)
        }
        else {
            map.set(pre, 1)
        }
    }
    return count
}

//与leetcode第一题类似，使用map来记录每一个和的位置
//当指定的连续子串和达到指定目标，count+1
//若不是则map.set

const nums = [1, 1, 1], k = 3
console.log(subarraySumPlus(nums, k));