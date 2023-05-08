// 414. 第三大的数
// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
// 输入：[3, 2, 1]
// 输出：1
// 解释：第三大的数是 1 。
// 输入：[1, 2]
// 输出：2
// 解释：第三大的数不存在, 所以返回最大的数 2 


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = nums.sort((a, b) => a - b)
    set = [...new Set(nums)]

    if(set.length >= 3){
        return set[set.length - 3]
    } else {
        return set[set.length - 1]
    }
};
//使用set
//首先针对目标数组进行排序
//随后将排序后的数组进行去重
//在判断长度是否大于或者等于3
//大于等于3则返回第三大，反之返回最大

const nums1 = [2, 3, 1]
const nums2 = [2, 1]
const nums3 = [1, 2, 2, 3]

console.log(thirdMax(nums1));
console.log(thirdMax(nums2));
console.log(thirdMax(nums3));