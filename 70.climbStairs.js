// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

//我的解法
// var climbStairs = function (n) {
//     let arr = []
//     arr[1] = 1, arr[2] = 2
//     for(let i = 3; i <= n; i++){
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr[n]
// };
// 利用数组进行循环

//官方解法
var climbStairs = function (n) {
    let p = 0, q = 0, r = 1
    for (let i = 1; i <= n; i++){
        p = q
        q = r
        r = p + q
    }
    return r
};
//官方解法利用了滑动窗口的思想，
// 首先前三项为0，0，1
// 然后将第一个数字去掉，将最后一位数置为前两位相加
const n = 5
const result = climbStairs(n)
console.log(result)