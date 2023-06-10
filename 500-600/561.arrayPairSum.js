// 561. 数组拆分
// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对,
// 例如(a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
// 返回该 最大总和 。
// 输入：nums = [1,4,3,2]
// 输出：4
// 解释：所有可能的分法（忽略元素顺序）为：
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// 所以最大总和为 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) { 
    nums = nums.sort((a, b) => a - b)
    let res = 0
    for (let i = 0; i < nums.length; i += 2){
        res += nums[i]
    }
    return res
}
// 分组的原因是因为要找出每组中的最小值
// 那么直接进行排序，每次按顺序选择最小的两个值进行加法
// 这样就累加就能得到res的最小值

/**
 * 
 * @param {number[]} nums 
 * @returns 
 */
const arrayPairSum_plus = (nums) => {
    return nums.sort((a, b) => { a - b }).filter((item, index) => {
        return index % 2 == 0
    }).reduce((a, b) => a + b)
}
// 第一种解法的简便写法，但是实际上算法并没有什么优化
// sort排序，filter过滤奇数项，reduce计算结果
// 最后输出值

const arrayPairSum_fast = (nums) => {
    const fast = (nums) => {
        if (nums.length <= 1) {
            return nums
        }
        const mid = Math.floor(nums.length / 2)
        const midItem = nums.splice(mid, 1)[0]
        const left = [], right = []
        for (let i = 0; i < nums.length; i++) {
            nums[i] < midItem ? left.push(nums[i]) : right.push(nums[i])
        }
        return fast(left).concat(midItem, fast(right))
    }
    const arr = fast(nums)
    let res = 0
    for (let i in arr) {
        if (i % 2 == 0) {
            res += arr[i]
        }
    }
    return res
}

const nums1 = [1, 4, 3, 2]
const nums2 = [6, 2, 6, 5, 1, 2]
console.log(arrayPairSum(nums1));
console.log(arrayPairSum(nums2));
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log(arrayPairSum_plus(nums1));
console.log(arrayPairSum_plus(nums2));
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
console.log(arrayPairSum_fast(nums1));
console.log(arrayPairSum_fast(nums2));