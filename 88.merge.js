var merge = function (nums1, m, nums2, n) { 
    nums1.splice(m, nums1.length - m, ...nums2)
    return nums1.sort()
}
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
const result = merge(nums1, m, nums2, n)
console.log(result)
