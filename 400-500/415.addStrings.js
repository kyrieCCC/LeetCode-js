// 415. 字符串相加
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
// 输入：num1 = "11", num2 = "123"
// 输出："134"

//1. 解法一，但不适用于大整数相加
var addStrings = function(num1, num2) {
    return String(parseInt(num1) + parseInt(num2))
};

//2. 数学解法，利用竖式相加的特性进行计算
const addStringsPlus = (num1, num2) => {
    let i = num1.length - 1, j = num2.length - 1, add = 0
    const ans = []
    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? num1.charAt(i) - "0" : 0
        const y = j >= 0 ? num2.charAt(j) - "0" : 0
        const res = x + y + add
        ans.push(res % 10)
        add = Math.floor(res / 10)
        j -= 1
        i -= 1
    }
    return ans.reverse().join('')
}

// 其中nums1.charAt(i) - "0" 代表将字符串转换为数字
// 因为ans是push进去的，所以最后输出的时候需要reverse


//BigInt解法，但是不让用，最简单的方法
const addStrings_big = (num1, num2) => {
    return  String(BigInt(num1) + BigInt(num2))
}

const num1 = '11', num2 = '123'
console.log(addStrings_big(num1, num2));