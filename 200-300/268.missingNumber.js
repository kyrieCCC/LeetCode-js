// 268. 丢失的数字
// 给定一个包含[0, n] 中 n 个数的数组 nums ，找出[0, n] 这个范围内没有出现在数组中的那个数。
// 输入：nums = [3,0,1]
// 输出：2
// 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) { 
    nums = nums.sort((a, b) => a - b)
    const len = nums.length
    for (let i = 0; i < len; i++){
        if (nums[i] != i) {
            return i
        }
    }
    return len
}

const nums1 = [3, 0, 1]
const nums2 = [0, 1]
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1]

console.log(missingNumber(nums1));
console.log(missingNumber(nums2));
console.log(missingNumber(nums3));