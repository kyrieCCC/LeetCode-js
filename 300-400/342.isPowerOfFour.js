// 342. 4的幂
// 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。
// 整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x
// 输入：n = 16
// 输出：true

var isPowerOfFour = function (n) { 
    if (n == 1) {
        return true
    }
    let val = 4
    while (n >= val) {
        if (n == val) {
            return true
        }
        val = val * 4
    }
    return false
}
//暴力循环，但这并不是最优解法
//通过不断累计val的值来判断与n的关系，从而得出n是否为4的幂
//需要注意处理n=1的情况


const isPowerOfFour_deep = (n) => {
    if (n == 1) {
        return true
    }
    if (n < 4 && n != 1) {
        return false
    }
    return isPowerOfFour_deep(n / 4)
}
//递归的解法，与前面类似
//递归的解法代码更加简洁

const isPowerOfFour_plus = (n) => {
    return n > 0 && (n & (n - 1)) == 0 && n % 3 == 1
}
//直接通过取模运算
//计算n % 3 的模，只有4的幂计算出来的结果为1
//前面两个条件为去除特殊值

const a1 = 1
const a2 = 5
const a3 = 64

console.log(isPowerOfFour(a1));
console.log(isPowerOfFour(a2));
console.log(isPowerOfFour(a3));

console.log('------------------------------');
console.log(isPowerOfFour_deep(a1));
console.log(isPowerOfFour_deep(a2));
console.log(isPowerOfFour_deep(a3));


console.log('------------------------------');
console.log(isPowerOfFour_plus(a1));
console.log(isPowerOfFour_plus(a2));
console.log(isPowerOfFour_plus(a3));