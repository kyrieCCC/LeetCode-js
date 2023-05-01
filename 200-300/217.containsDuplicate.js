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

const nums = [1, 2, 3, 4]
console.log(containsDuplicate(nums));