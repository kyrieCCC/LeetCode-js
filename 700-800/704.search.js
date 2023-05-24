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
// 正常的二分查找的方法
// 首先创建两个变量left和right分别指向左右
// 随后根据target的大小不断缩小范围，直到找到对应的下标
// 如果找不到返回-1

const search_other = (nums, target) => {
    return nums.findIndex(item => item == target)
}
//其他有意思的解法，但并不是二分查找，并且时间复杂度为on
//但是一行代码解决QAQ


const nums1 = [-1, 0, 3, 5, 9, 12], target1 = 9
const nums2 = [-1, 0, 3, 5, 9, 12], target2 = 2
console.log(search(nums1, target1));
console.log(search(nums2, target2));
console.log(search_other(nums1, target1));
console.log(search_other(nums2, target2));