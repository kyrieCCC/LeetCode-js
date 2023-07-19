// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4]
// 注：[3,1,2,4] 也是正确的答案之一。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) { 
    const arr1 = [], arr2 = [];
    for (const item of nums) {
        item % 2 !== 0 ? arr1.push(item) : arr2.push(item)
    }
    return arr1.concat(arr2)
}
// 正常的for循环解法
// 遍历全部元素，当元素为奇数则放到arr1，反之放置到arr2
// 最后返回concat拼接起来的结果

const exchange_plus = (nums) => {
    
}

const nums1 = [1, 2, 3, 4]
console.log(exchange(nums1));