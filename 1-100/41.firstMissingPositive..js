// 41. 缺失的第一个正数
// 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
// 输入：nums = [1,2,0]
// 输出：3

var firstMissingPositive = function (nums) { 
    for (let i = 0; i < nums.length; i++){
        while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = temp
        }
    }
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
}

const nums = [1, 2, 0]
console.log(firstMissingPositive(nums));