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
//直接使用map来查看两个数组的重合的部分
//再用一个map来给结果数组去重
//得出唯一的值
//最后以数组的形式输出

const intersection_ans = (nums1, nums2) => {
    //排序
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)

    let length1 = nums1.length, length2 = nums2.length
    let index1 = 0, index2 = 0
    const res = []

    //双指针移动判断
    while(index1 < length1 && index2 < length2){
        const item1 = nums1[index1], item2 = nums2[index2]
        if (item1 == item2) {
            //符合push条件
            if(!res.length || item1 !== res[res.length - 1]){
                res.push(item1)
            }
            index1++
            index2++
        }
        else if(item1 < item2){
            index1++
        }
        else{
            index2++
        }
    }
    return res
}
//使用排序 + 双指针的方式
//首先对数组进行排序，再用两个指针分别指向两个数组的开端
//然后不断变换指针的位置++
//判断元素是否相等，如果相等，判断是否res中存在这个值
//最后返回res

const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
console.log(intersection(nums1, nums2)); 
console.log(intersection_ans(nums1, nums2));