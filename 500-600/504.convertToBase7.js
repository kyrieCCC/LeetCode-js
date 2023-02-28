// 504. 七进制数
// 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。
// 输入: num = 100
// 输出: "202"

//1. 暴力解决方法
var convertToBase7_1 = function (num) { 
    return num.toString(7)
}

//2. 常规方法，正常解决7进制问题，通过math.floor方法不断进行计算7进制数
//最后再返回的时候需要将res进行翻转
var convertToBase7 = function (num) { 
    if (num === 0) {
        return '0'
    }
    let isTrue = num < 0
    num = Math.abs(num)
    const res = []
    while (num > 0) {
        res.push(num % 7)
        num = Math.floor(num / 7)
    }
    if (isTrue) {
        res.push("-")
    }
    return res.reverse().join('')
}
//第一个方法可以击败98%， 此题为腾讯春招

const num = 100
console.log(convertToBase7(num));