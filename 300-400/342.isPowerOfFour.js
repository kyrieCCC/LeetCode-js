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