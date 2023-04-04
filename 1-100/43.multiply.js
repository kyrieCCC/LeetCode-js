// 43. 字符串相乘
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，
// 它们的乘积也表示为字符串形式。
// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 输入: num1 = "123", num2 = "456"
// 输出: "56088"

//使用 数学竖式
var multiply = function (num1, num2) {
    const len1 = num1.length, len2 = num2.length
    const res = new Array(len1 + len2).fill(0)
    for (let i = len1 - 1; i >= 0; i--){
        for (let j = len2 - 1; j >= 0; j--){
            const cur = num1[i] * num2[j]
            const p1 = i + j, p2 = i + j + 1
            const sum = cur + res[p2]
            res[p1] += Math.floor(sum / 10)
            res[p2] = sum % 10
        }
    }
    if (res[0] == 0) res.shift()
    return res.join('')
};

const num1 = '5', num2 = '6'
console.log(multiply(num1, num2));