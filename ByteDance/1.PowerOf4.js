// 题目
// 给定一个十进制整数字符串，判断它是否是 4 的幂。
// 示例 1
// 输入："16"，输出：true
// 示例 2
// 输入："101"，输出：false
// 示例 3
// 输入："70368744177664"，输出：true
// 限定语言：C、 C++、Java、Python、JavaScript V8
const myFun = (str) => {
    let num = parseInt(str)
    while (num >= 4) {
        num = num / 4
    }
    return num === 1 ? true : false
}

const str = "70368744177664"
console.log(myFun(str))