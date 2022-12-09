// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
var maxSubArrayTimeout = function(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    let max = -100
    //let res = []  
    for(let i = 0; i < nums.length; i++){
        let resArr = nums[i]
        for (let j = i + 1; j < nums.length; j++){
            if (max < nums[i]) {
                max = nums[i]
            }
            if (max < nums[j]) {
                max = nums[j]
            }
            resArr = resArr + nums[j]
            if(resArr > max){
                max = resArr
                //res = nums.slice(i, j + 1)
            }
        }
    }
    return max
};
//很可惜的是多了一步，我们使用双循环的方法一个指向头部一个指向尾部，就可以拿到最大值
//这个版本的答案是可行的，但是因为我们的事件复杂度太高，超时
//新的解法如下

const nums = [-2, 1]
console.log(maxSubArray(nums))