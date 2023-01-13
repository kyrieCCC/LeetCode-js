// 300. 最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3, 6, 2, 7] 是数组[0, 3, 1, 6, 2, 2, 7] 的子序列。
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
var lengthOfLIS = function (nums) { 
    const res = []
    let count = 0
    for (let i = 0; i < nums.length; i++){
        let left = 0, right = count
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            if (res[mid] > nums[i]) {
                right = mid
            }
            else if (res[mid] < nums[i]) {
                left = mid + 1
            }
            else {
                right = mid
            }
        }
        if (left === count) {
            count++
        }
        res[left] = nums[i]
    }
    return count
}

//击败96.36%

const nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums))