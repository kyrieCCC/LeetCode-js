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
    const res = []
    for (const item of nums) {
        item % 2 !== 0 ? res.unshift(item) : res.push(item);
    }
    return res
}

const exchange_ans = (nums) => {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] % 2 == 1) {
            left++;
        }
        while (left < right && nums[right] % 2 == 0) {
            right--;
        }
        if (left < right) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
    return nums;
}
// 原地交换的解法
// 每当遇到首尾分为遇到第一个奇数和偶数的时候，将两个数进行交换
// 这样可以确保交换后的数组符合题意
// 实现原地交换，空间复杂度为o1

const nums1 = [1, 2, 3, 4]
console.log(exchange(nums1));
console.log(exchange_plus(nums1));
console.log(exchange_ans(nums1));