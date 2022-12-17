// 128. 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。


// var longestConsecutive = function (nums) {
//     if(!nums.length) return 0
//     nums.sort((a, b) => a - b)
//     let i = 0, maxLen = 1
//     while (i < nums.length) {
//         if (nums[i + 1] - nums[i] === 1) {
//             maxLen++
//             i++
//         }
//         else if (nums[i + 1] - nums[i] === 0) {
//             i++
//         }
//         else {
//             nums = nums.slice(i, nums.length-1)
//             return longestConsecutive(nums)
//         }
//     }
//     return maxLen
// };
//失败版本


var longestConsecutive = function (nums) { 
    const set = new Set(nums)
    let maxLen = 0
    for (let i = 0; i < nums.length; i++){
        if (!set.has(nums[i] - 1)) {
            let count = 1, cur = nums[i]
            while (set.has(cur + 1)) {
                count++
                cur++
            }
            maxLen = Math.max(maxLen, count)
        }
    }
    return maxLen
}
//这个解法使用的是set方法，set方法可以帮我我们去重数组
//我们每次到下一个值的时候都去查找set
//然后每次都把count值进行比较，拿出序列最长的一段

const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
console.log(longestConsecutive(nums))