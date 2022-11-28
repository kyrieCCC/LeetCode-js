// 11. 盛最多水的容器
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，
// 第 i 条线的两个端点是(i, 0) 和(i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。
var maxArea = function (height) { 
    let res = 0
    for (let i = 0, j = height.length - 1; i < j;){
        const minheight = height[i] < height[j] ? height[i++] : height[j--]
        const area = (j - i + 1) * minheight
        res = Math.max(res, area)
    }
    return res
}
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const result = maxArea(height)
console.log(result)