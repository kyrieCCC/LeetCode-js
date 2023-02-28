// 448. 找到所有数组中消失的数字
// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间[1, n] 内。
// 请你找出所有在[1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]
var findDisappearedNumbers = function (nums) { 
    let i = 0
    while (i < nums.length) {
        if (nums[i] === i + 1) {
            i++
            continue
        }
        const index = nums[i] - 1
        if (nums[index] === nums[i]) {
            i++
            continue
        }
        [nums[index], nums[i]] = [nums[i], nums[index]]  //排序，把数字放到对应的位置上
        console.log(nums);
    }
    const res = []
    for (let j = 0; j < nums.length; j++){ //遍历排序后的数组，看看缺少了那些数字
        if (nums[j] !== j + 1) {
            res.push(j + 1)
        }
    }
    return res
}
// mihoyo春季招聘练习题

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
const result = findDisappearedNumbers(nums)
console.log(result)
