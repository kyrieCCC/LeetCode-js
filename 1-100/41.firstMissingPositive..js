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
//击败92%的用户
// 首先我们需要将得到的数组进行排序，排序的方式与查找消失的数字类似
// 排序结束后可以按顺序遍历数组中的值
// 查看哪一个值不符合序号的下标，则输出对应下标

//2. 另一个做法
const firstMissingPositivePlus = (nums) => {
    if (nums.length === 0) {
        return 1
    }
    if (nums.length === 1 && nums[i] <= 0) {
        return 1
    }
    const arr = []
    for (let i = 0; i < nums.length; i++){
        if (nums[i] >= 1) {
            arr[nums[i]] = true
        }
    }

    if (!arr.length) return 1
    
    for (let i = 1; i < arr.length; i++){
        if (!arr[i]) {
            return i
        }
    }
    return arr.length
}
//与上个题解法类似
//mihoyo春招练习


const nums = [1, 2, 0]
console.log(firstMissingPositivePlus(nums));