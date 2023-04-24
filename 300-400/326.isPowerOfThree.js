// 326. 3 的幂
// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。
// 整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3 ^ x
// 输入：n = 27
// 输出：true

var isPowerOfThree = function (n) { 
    if (n === 1) {
        return true
    }
    let val = 3
    while (n >= val) {
        if (n == val) {
            return true
        }
        val = val * 3 
    }
    return false
}
//直接暴力循环解决，通过while不停累计val的值
//val的值始终是3的倍数
//最后判断val与n是否相等


const isPowerOfThree1 = (n) => {
    if (n == 1) {
        return true
    }
    if (n < 3 && n != 1) {
        return false
    }
    return isPowerOfThree1(n / 3)
}
//与循环类似，使用递归的方法进行计算
//递归的方法首先需要确定终止条件与下一个值的判断
//两个if语句判断目标值是否符合3的幂的条件

const a1 = 5, a2 = 9, a3 = 27
console.log(isPowerOfThree(a1));
console.log(isPowerOfThree(a2));
console.log(isPowerOfThree(a3));
console.log('----------------------------------');
console.log(isPowerOfThree1(a1));
console.log(isPowerOfThree1(a2));
console.log(isPowerOfThree1(a3));
