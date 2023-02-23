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
var maxSubArray = function (nums) { 
    let pre = 0, max = nums[0]
    nums.forEach(item => {
        pre = Math.max(pre + item, item)
        max = Math.max(max, pre)
    });
    return max
}
//动态规划的解法，使用两两比较 pre+item与item，但不能跨位置，这就符合了题目中描述的需要是连续字串
//另外需要max的作用是max来比较当前的pre与item元素的值大小，可能某一个item就是最大的



//每次寻找最大的窜，找不到就直接加上原来的
const add = (nums) => {
    let res = 0
    for (let i = 0; i < nums.length; i++){
        let temp = nums[i]
        for (let j = i + 1; j < nums.length; j++){
            temp = Math.max(nums[j], temp + nums[j])
            res = Math.max(res, temp)
        }
    }
    return res
}

const nums = [-2, 1, -3, 1, -1, 2, 4, -5, 4]
const nums1 = [5, 4, -1, 7, 8]
console.log(add(nums1))