// 剑指 Offer 53 - II. 0～n-1中缺失的数字
// 一个长度为n - 1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n - 1之内。
// 在范围0～n - 1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
// 输入: [0,1,3]
// 输出: 2
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) { 
    if(nums.length == 1 && nums[0] == 0){
        return nums[0] + 1
    }
    if(nums.length == 1 && nums[0] != 0) {
        return 0
    }
    let i = 0
    while(i <= nums.length) {
        if(i != nums[i]){
            return i
        }
        i++
    }
}
// 正常解法
// 循环找出缺失的数字
// 返回index值

const missingNumber_ans = (nums) => {
    const set = new Set();
    const n = nums.length + 1;
    for (let i = 0; i < n - 1; i++) {
        set.add(nums[i]);
    }
    let missing = -1;
    for (let i = 0; i <= n - 1; i++) {
        if (!set.has(i)) {
            missing = i;
            break;
        }
    }
    return missing;
}
// 哈希集合
// 记录每一个出现过的元素
// 再来遍历元素找出缺失的值

const nums1 = [0, 1, 3]
const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 9]
console.log(missingNumber(nums1));
console.log(missingNumber(nums2));