// 2248. 多个数组求交集
// 给你一个二维整数数组 nums ，其中 nums[i] 是由 不同 正整数组成的一个非空数组，
// 按 升序排列 返回一个数组，数组中的每个元素在 nums 所有数组 中都出现过。
// 输入：nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// 输出：[3,4]
// 解释
// nums[0] = [3, 1, 2, 4, 5]，nums[1] = [1, 2, 3, 4]
// nums[2] = [3, 4, 5, 6]，在 nums 中每个数组中都出现的数字是 3 和 4 ，所以返回[3, 4] 。

//解法一 我的方法之map大法
var intersection = function (nums) { 
    const map = new Map()
    if (nums.length === 1) {
        return nums[0].sort((a, b) => a - b)
    }
    const res = []
    for (let i = 0; i < nums.length; i++){
        let len = nums[i].length
        for (let j = 0; j < len; j++){
            if (map.has(nums[i][j])) {
                map.set(nums[i][j], map.get(nums[i][j]) + 1)
                if (map.get(nums[i][j]) === nums.length) {
                    res.push(nums[i][j])
                }
            }
            else {
                map.set(nums[i][j], 1)
            }
        }
    }
    return res.sort((a, b) => a - b)
}
//击败40% 腾讯春招练习
//看到计数，首先想到的就是使用map，使用map记录每一个数值出现的次数
//再挑出符合条件的数值
//最后别忘了排序




const nums1 = [[25, 44, 47, 42, 43, 10], [40, 10, 8, 30, 5, 23], [36, 10]]
const nums2 = [[4, 43, 15, 30, 27, 22], [15, 30, 43, 27, 10, 4]]
console.log(intersection(nums1));
console.log(intersection(nums2));