// 6. N 字形变换
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
// 请你实现这个将字符串进行指定行数变换的函数：
// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"

//1. 二维矩阵
var convert = function (s, numRows) { 
    const n = s.length, r = numRows
    if (r === 1 || n <= r) {
        return s
    }
    //每次N排列的周期
    const time = 2 * r - 2
    //排列需要的列数
    const cycle = Math.floor((n + time - 1) / time) * (r - 1)
    //构建二维数组
    const mat = new Array(r).fill(0).map(() => new Array(cycle).fill(0))
    for (let i = 0, x = 0, y = 0; i < n; i++){
        mat[x][y] = s[i]
        if (i % time < r - 1) {
            x++
        }
        else {
            x--
            y++
        }
    }

    const res = []
    for (const row of mat) {
        for (const item of row) {
            if (item !== 0) {
                res.push(item)
            }
        }
    }
    return res.join('')
}
//mihoyo春招
//首先记录下每次N变换的周期，随后在计算出这个周期需要用到的列数
//构建一个二维数组，这个数组是按N字排列好的
//最后遍历这个二维数组，拿出除了0之外的数值即可


const s = "PAYPALISHIRING", numRows = 3
console.log(convert(s));