// 441. 排列硬币
// 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，
// 其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。
// 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。
// 输入：n = 5
// 输出：2
// 解释：因为第三行不完整，所以返回 2 。
// 输入：n = 8
// 输出：3
// 解释：因为第四行不完整，所以返回 3 。

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) { 
    if(n == 0) {
        return 0
    }
    let res = 1, i = 1
    n = n - 1
    while(i < n) {
        n = n - (i + 1)
        i = i + 1
        res++
    }
    return res
}
// 首先使用res来记录此时的层数，i记录每一层需要的个数
// 每次到下一层的时候都动态的计算i和n的值
// 当不满足层数的情况的时候就跳出循环
// 直接返回res

const arrangeCoins_ans = (n) => {
    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
}
// 这里使用的是数学的方法
// 直接通过求解方程来计算 n 枚硬币可形成的完整阶梯行
// 除此之外又可以有求和公式的方法来解决
// 同样也是数学方法

const n1 = 5
const n2 = 8
console.log(arrangeCoins(n1));
console.log(arrangeCoins(n2));
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log(arrangeCoins_ans(n1));
console.log(arrangeCoins_ans(n2));