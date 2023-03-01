// 剑指 Offer II 070. 排序数组中只出现一次的数字
// 给定一个只包含整数的有序数组 nums ，每个元素都会出现两次，唯有一个数只会出现一次，请找出这个唯一的数字。
// 你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。
// 输入: nums = [1,1,2,3,3,4,4,8,8]
// 输出: 2

//1. 第一种方法，超出时空间复杂度
var singleNonDuplicate = function (nums) { 
    const map = new Map()
    for (let i = 0; i < nums.length; i++){
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
        else {
            map.set(nums[i], 1)
        }
    }
    for (let i = 0; i < nums.length; i++) { 
        if (map.get(nums[i]) === 1) {
            return nums[i]
        }
    }
}

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]
console.log(singleNonDuplicate(nums));