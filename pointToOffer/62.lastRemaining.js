// 剑指 Offer 62. 圆圈中最后剩下的数字
// 0, 1,···, n - 1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
// 求出这个圆圈里剩下的最后一个数字。
// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，
// 则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
// 输入: n = 5, m = 3
// 输出: 3

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) { 
    let ans = 0;
    for (let i = 1; i <= n; i++){
        ans = (ans + m) % i
    }
    return ans
}
// 反推法
// 从第一个数开始往前推
// 直到i满足元素的个数
// 代表此时位置上的元素即为最后一个出现的
const n = 5, m = 3
console.log(lastRemaining(n, m));