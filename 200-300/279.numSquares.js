// 279. 完全平方数
// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
// 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4
// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
var numSquares = function (n) { 
    const res = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++){
        let minVal = Number.MAX_VALUE
        for (let j = 1; j * j <= i; j++){
            minVal = Math.min(minVal, res[i - j * j])
        }
        res[i] = minVal + 1
    } 
    return res[n]
}

const n = 12
console.log(numSquares(n))