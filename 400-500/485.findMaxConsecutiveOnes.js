// 485. 最大连续 1 的个数
// 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
// 输入：nums = [1,1,0,1,1,1]
// 输出：3
// 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
// 输入：nums = [1,0,1,1,0,1]
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) { 
    let max = 0
    let i = nums.indexOf(1), j = nums.indexOf(1)
    if (nums.length == 1 || i == -1) {
        return nums[0]
    }
    while(j < nums.length) {
        if(nums[j + 1] == 1) {
            j++
        } else {
            max = Math.max(j - i + 1, max)
            i = nums.indexOf(1, j + 1) 
            j = nums.indexOf(1, j + 1)
            if (i == -1) {
                return max
            }
        }
    }
}
// 直接使用i与j两个指针分别指向第一个1和最后一个1
// 每次遇到0的时候就重新判断新的1在哪里
// 每次遇到零都要将现在的长度计算出来，存在max当中
// 最后返回最大的max值

const findMaxConsecutiveOnes_ans = (nums) => {
    let max = 0, count = 0
    const n = nums.length
    for (let i = 0; i < n; i++){
        if (nums[i] == 1) {
            count++
        } else {
            max = Math.max(count, max)
            count = 0
        }
    }
    max = Math.max(count, max)
    return max
}

const nums1 = [1, 1, 0, 1, 1, 1]
const nums2 = [1, 0, 1, 1, 0, 1]
const nums3 = [0, 0]

console.log(findMaxConsecutiveOnes(nums1));
console.log(findMaxConsecutiveOnes(nums2));
console.log(findMaxConsecutiveOnes(nums3));
console.log('=-=-=-=-=-=-=--=-=-=-=--=-=-=-=-==-=-=-=-=');
console.log(findMaxConsecutiveOnes_ans(nums1));
console.log(findMaxConsecutiveOnes_ans(nums2));
console.log(findMaxConsecutiveOnes_ans(nums3));