// 300. 最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3, 6, 2, 7] 是数组[0, 3, 1, 6, 2, 2, 7] 的子序列。
// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
var lengthOfLIS = function (nums) { 
    const res = [] //定义存放最长子序列的数组
    let count = 0 //堆的数量
    for (let i = 0; i < nums.length; i++){
        let left = 0, right = count
        while (left < right) {//二分查找
            const mid = left + Math.floor((right - left) / 2)
            if (res[mid] > nums[i]) {
                right = mid
            }
            else if (res[mid] < nums[i]) {
                left = mid + 1
            }
            else {
                right = mid
            }
        }
        if (left === count) { //新建堆
            count++
        }
        res[left] = nums[i]//“盖住原来的值，如果盖不住就新建一个堆后放在堆顶”
    }
    return count//堆的数量即为所求的目标值
}

//击败96.36%
//本题使用的方法是贪心算法＆二分查找
//定义一个res是存放当前堆里边的最小数值
//每次到下一个位置的数字小于这个res的当前值，就可以“压住他”
//如果没有小于这个数值的值
//就新建一个堆，count++
//这样就能得到一个升序的最长子序列
//并且count的值就是题目所求的最长子序列的长度

const lengthOfLISDp = (nums) => {
    const dp = new Array(nums.length).fill(1) //初始化动态规划数组
    for (let i = 1; i < nums.length; i++){
        for (let j = 0; j < i; j++){
            if (nums[i] > nums[j]) {//当前的数值大于前面的任意一个，就会返回dp[j] + 1与当前的dp[i]进行比较
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

//本题使用的是动态规划的方法，时间复杂度为on²
//dp[i]表示的是0 - i索引的最大子序列
//返回的时候只需要找出dp的最大值，就是本题的答案


const nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLISDp(nums))