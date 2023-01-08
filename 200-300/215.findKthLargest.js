// 215. 数组中的第K个最大元素
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5
var findKthLargest = function (nums, k) {
  //快速排序
    const arr = quick(nums)
    return arr[k - 1]
};

const quick = (nums) => {
    if (nums.length <= 1) {
        return nums
    }
    const mid = Math.floor(nums.length / 2);
    const midItem = nums.splice(mid, 1)[0];
    const left = [], right = [];
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        cur > midItem ? left.push(cur) : right.push(cur);
    }
    return quick(left).concat(midItem, quick(right))
}

const nums = [3, 2, 1, 5, 6, 4],
  k = 2;
console.log(findKthLargest(nums, k));
