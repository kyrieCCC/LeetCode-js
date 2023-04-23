// 231. 2 的幂
// 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。
// 如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。
// 输入：n = 1
// 输出：true
// 解释：20 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) { 
    if (n == 1) {
        return true
    }
    let val = 2
    while (n >= val) {
        if (val == n) {
            return true
        }
        val = val*2
    }
    return false
}

const n = 1
const n1 = 16
const n2 = 5
console.log(isPowerOfTwo(n));
console.log(isPowerOfTwo(n1));
console.log(isPowerOfTwo(n2));