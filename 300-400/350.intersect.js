// 350. 两个数组的交集 II
// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数
// 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2, 2]
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) { 
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let l = 0, r = 0, ans = [];
    while (l < nums1.length && r < nums2.length) {
        if (nums1[l] === nums2[r]) {
            ans.push(nums1[l]);
            l++;
            r++;
        } else nums1[l] < nums2[r] ? l++ : r++;
    }
    return ans;
}
// 官方答案
// 首先将数组排序，再使用双指针
// 如果相同元素就推入答案数组，反之让指针移动

const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
const nums11 = [4,9,5], nums21 = [9,4,9,8,4]
console.log(intersect(nums1, nums2));
console.log(intersect(nums11, nums21));