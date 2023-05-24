// 704. 二分查找
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 - 1。
// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) { 
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let midIndex = Math.floor((right - left) / 2) + left
        if (target == nums[midIndex]) {
            return midIndex
        }
        if (target < nums[midIndex]) {
            right = midIndex - 1
        }
        else {
            left = midIndex + 1
        }
    }
    return -1
}

const nums1 = [-1, 0, 3, 5, 9, 12], target1 = 9
const nums2 = [-1, 0, 3, 5, 9, 12], target2 = 2