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
//直接使用循环的方式
//首先需要给数组进行排序
//随后判断下标的位置与原本的位置是否一一对应
//如果不对应则说明缺少了这个地方的数字
//如果循环数值没出现，则直接返回长度，表示末尾缺了这个数字

const missingNumber_map = (nums) => {
    const map = new Map()
    for (let index = 0; index < nums.length; index++) {
        map.set(nums[index], 1)
    }

    let tag = -1
    for (let i = 0; i <= nums.length; i++){
        if (!map.has(i)) {
            tag = i
            return tag
        }
    }
}
//时间复杂度on
//相比于第一种解法进行了优化，首先我们使用哈希表记录每一个出现的数字
//然后使用tag来记录下标
//再来一个循环判断下标的值是否存在，不存在则说明没有对应数字
//返回这个数字


const nums1 = [3, 0, 1]
const nums2 = [0, 1]
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1]

console.log(missingNumber(nums1));
console.log(missingNumber(nums2));
console.log(missingNumber(nums3));
console.log('```````````````````````````````````````');
console.log(missingNumber_map(nums1));
console.log(missingNumber_map(nums2));
console.log(missingNumber_map(nums3));