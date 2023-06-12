// 709. 转换成小写字母
// 给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。
// 输入：s = "Hello"
// 输出："hello"
// 输入：s = "here"
// 输出："here"
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) { 
    const arr = []
    for (let i = 0; i < s.length; i++){
        arr.push(s[i].toLowerCase())
    }
    return arr.join('')
}
// 浪费空间版本
// 首先创建了一个新的数组，来记录每一个s的值
// 将每一个s的值都改为小写后
// 返回join的结果

const toLowerCase_plus = (s) => {
    const reg = /[A-Z]/
    const arr = []
    for (let i = 0; i < s.length; i++){
        if (reg.test(s[i])) {
            arr.push(s[i].toLowerCase())
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('')
}
// 第一个方法的稍微优化算法
// 在这里我们添加了一个判断，判断其是否为大写
// 如果大写就改为小写，反之改为直接push
// 最后返回join

const toLowerCase_ans = (s) => { }

const s1 = 'Hello'
const s2 = 'LOVEPH'
console.log(toLowerCase(s1));
console.log(toLowerCase(s2));
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log(toLowerCase_plus(s1));
console.log(toLowerCase_plus(s2));