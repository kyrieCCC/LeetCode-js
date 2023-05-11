// 509. 斐波那契数
// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，
// 后面的每一项数字都是前面两项数字的和。也就是：
// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。
// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) { 
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

const n1 = 2
const n2 = 4
console.log(fib(n1));
console.log(fib(n2));