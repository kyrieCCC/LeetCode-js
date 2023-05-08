// 414. 第三大的数
// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
// 输入：[3, 2, 1]
// 输出：1
// 解释：第三大的数是 1 。

// 输入：[3, 2, 1]
// 输出：1
// 解释：第三大的数是 1 。


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = nums.sort((a, b) => a - b)
    set = [...new Set(nums)]

    if(set.length >= 3){
        return set[set.length - 4]
    } else {
        return set[set.length - 1]
    }
};