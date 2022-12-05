// 31. 下一个排列
// 例如，arr = [1, 2, 3] ，以下这些都可以视作 arr 的排列：[1, 2, 3]、[1, 3, 2]、[3, 1, 2]、[2, 3, 1] 
// 输入：nums = [1,2,3]
// 输出：[1, 3, 2]
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
var nextPermutation = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--){
        let n = nums[i]
        if (n < nums[i + 1]) {
            let index = i + 1
            while (n < nums[index + 1]) {
                index++
            }
            nums[i] = nums[index]
            nums[index] = n
            let left = i + 1
            let rigth = nums.length - 1
            while (left < rigth) {
                [nums[left], nums[rigth]] = [nums[rigth], nums[left]]
                left++
                rigth--
            }
            break
        } else if (i === 0) {
            nums.reverse()
        }
    }
};
const nums = [1, 2, 3]
nextPermutation(nums)
console.log(nums)