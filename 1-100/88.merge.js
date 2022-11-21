// 88. 合并两个有序数组
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
var merge = function (nums1, m, nums2, n) { 
    nums1.splice(m, nums1.length - m, ...nums2) //直接在nums1的尾部插入数组
    return nums1.sort() //对插入的数组进行排序
}
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
const result = merge(nums1, m, nums2, n)
console.log(result)
