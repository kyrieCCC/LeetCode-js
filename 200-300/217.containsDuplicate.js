// 217. 存在重复元素
// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次
// 返回 true ；如果数组中每个元素互不相同，返回 false 。
// 输入：nums = [1,2,3,1]
// 输出：true

var containsDuplicate = function (nums) { 
    const map = new Map()

    for (let i = 0; i < nums.length; i++){
        map.set(nums[i], map.get(nums[i]) == undefined ? 1 : map.get(nums[i]) + 1)
        if (map.get(nums[i]) == 2) {
            return true
        }
    }
    return false
}
//遇到计数的问题，直接无脑上map
//本题使用map来进行计数，记录每一个数值出现的次数
//当遇到次数为2的时候返回true


const containsDuplicate_low = (nums) => {
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 1; i++) { 
        if (nums[i] == nums[i + 1]) {
            return true
        }
    }
    return false
}
//使用排序
//如果排序后数组出现连续两个数字相同说明不符合条件
//我们在排序后遍历数组即可

const nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums));
console.log(containsDuplicate_low(nums));