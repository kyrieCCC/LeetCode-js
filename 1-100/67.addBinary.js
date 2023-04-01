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
//正常的使用加法的方式，计算每一个数字相加大的结果
//并且使用cur来记录这个时候的进位
//最后得到的结果是逆序的，需要reverse来反转顺序

//解法二，既然parseInt解决不了大数字的问题，直接引入bigInt
const addBinary_plus = (a, b) => {
    return (BigInt('0b' + a) + BigInt("0b" + b)).toString(2)
}
//使用bigInt来记录很长的数值
//0b前缀代表二进制，使用bigInt转为十进制
//最后将结果转为二进制即可

const a = '11'
const b = '1'
const result = addBinary(a, b)
const res2 = addBinary_plus(a, b)
console.log(result)
console.log(res2)