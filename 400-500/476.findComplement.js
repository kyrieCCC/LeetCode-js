// 476. 数字的补数
// 对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。
// 例如，整数 5 的二进制表示是 "101" ，取反后得到 "010" ，再转回十进制表示得到补数 2 。
// 给你一个整数 num ，输出它的补数。
// 输入：num = 5
// 输出：2
// 解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
// 输入：num = 1
// 输出：0
// 解释：1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const arr = num.toString(2).split('')
    const res = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == '1') {
            res.push(0)
        } else {
            res.push(1)
        }
    }
    const ans = parseInt(res.join(''), 2)
    return ans
};
// 首先使用tostring将num转为2进制数
// 再遍历num的二进制结果，并取反
// 最后把结果由2进制转换为10进制并输出

const findComplement_plus = (num) => {
    const arr = num.toString(2)
    const res = []
    for (let i = 0; i < arr.length; i++){
        res.push(arr[i] ^ 1)
    }
    return parseInt(res.join(''), 2)
}
// 第一个方法的优化版本
// 引入了异或的思想，如果异或1是1就返回0，反之返回0

const num1 = 5
const num2 = 1
console.log(findComplement(num1));
console.log(findComplement(num2));
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log(findComplement_plus(num1));
console.log(findComplement_plus(num2));