// 169. 多数元素
// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 输入：nums = [3,2,3]
// 输出：3
var majorityElement = function (nums) { 
    const map = new Map()
    for (let i = 0; i < nums.length; i++){
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
            if (map.get(nums[i]) > nums.length / 2) {
                return nums[i]
            }
        }
        map.set(nums[i], 1)   
        
    }
}
//使用hash表的方法，记录每次数值出现的次数，每次当元素超过二分之一的次数的时候返回这个元素
const nums = [3, 2, 3]
const result = majorityElement(nums)
console.log(result)