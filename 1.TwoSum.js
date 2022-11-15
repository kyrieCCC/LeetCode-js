//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出
//和为目标值 target  的那 两个 整数，并返回它们的数组下标。

//输入：nums = [2,7,11,15], target = 9
//输出：[0,1]
// my answer
var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++){
        for (let j = 0; j <= nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
//hash
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i <= nums.length; i++){
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        else {
            map.set(nums[i], i)
        }
    }
};

const nums = [2, 7, 11, 5]
const target = 9
const result = twoSum(nums, target);
console.log(result)