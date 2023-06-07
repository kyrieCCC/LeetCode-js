// 434. 字符串中的单词数
// 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
// 请注意，你可以假定字符串里不包括任何不可打印的字符。
// 输入: "Hello, my name is John"
// 输出: 5
// 解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) { 
    const arr = s.split(' ').filter(item => item != '')
    return arr.length
}
// 题目中要求不能是空格字符，于是我们使用空格区分好单词后需要重新去除空格字符
// 最后留在arr里面的就是单词的部分
// 直接返回arr的长度

const countSegments_2 = (s) => {
    return s.split(' ').filter(item => item != '').length
}
// 精简版，直接返回返回要求的长度即可
// 不使用额外的空间来定义一个数组

const countSegments_ans = (s) => {
    let count = 0
    for(let i = 0; i < s.length; i++){
        if((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') {
            count++
        }
    }
    return count
}

const s1 = "                "
const s2 = "Hello, my name is John"
const s3 = ""
console.log(countSegments(s1));
console.log(countSegments(s2));
console.log(countSegments(s3));
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log(countSegments_2(s1));
console.log(countSegments_2(s2));
console.log(countSegments_2(s3));