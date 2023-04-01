// 67. 二进制求和
// 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
// 输入:a = "11", b = "1"
// 输出："100"

//失败方法
//无法解决大数字的二进制，这是parseInt的缺陷问题导致的
var addBinary_fail = function (a, b) { 
    let res = 0
    res = parseInt(a, 2) + parseInt(b, 2)
    return res.toString(2)
}


//解决方法一，直接使用循环进行相加
var addBinary = function (a, b) { 
    let res = ""
    let cur = 0
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--){
        const item1 = i >= 0 ? parseInt(a[i]) : 0
        const item2 = j >= 0 ? parseInt(b[j]) : 0
        let sum = item1 + item2 + cur
        res += sum % 2
        cur = Math.floor(sum / 2)
    }
    res += cur ? cur : ""
    return res.split("").reverse().join("")
}

const a = '11'
const b = '1'
const result = addBinary(a, b)
console.log(result)