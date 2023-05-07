// 349. 两个数组的交集
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。
// 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) { 
    const map = new Map()
    const map2 = new Map()
    const res1 = []
    const res2 = []

    for(let i = 0; i < nums1.length; i++){
        map.set(nums1[i], map.get(nums1[i]) == undefined ? 1 : 1) 
    }

    for(let i = 0; i < nums2.length; i++){
        if(map.has(nums2[i])){
            res1.push(nums2[i])
        }
    }
    
    for(let i = 0; i < res1.length; i++){
        if(map2.has(res1[i])){
            continue
        }
        map2.set(res1[i], 1)
        res2.push(res1[i])
    }
    return res2 
}

const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
console.log(intersection(nums1, nums2));