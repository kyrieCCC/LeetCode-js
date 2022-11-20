// 67. 二进制求和
// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
// 输入:a = "11", b = "1"
// 输出："100"
var addBinary = function (a, b) { 
    let res = 0
    res = parseInt(a, 2) + parseInt(b, 2)
    return res.toString(2)
}
const a = '11'
const b = '1'
const result = addBinary(a, b)
console.log(result)