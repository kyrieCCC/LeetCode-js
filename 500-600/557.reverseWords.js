// 557. 反转字符串中的单词 III
// 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 输入：s = "Let's take LeetCode contest"
// 输出："s'teL ekat edoCteeL tsetnoc"
// 输入： s = "God Ding"
// 输出："doG gniD"

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(" ")
    const res = []
    while (arr.length) {
        const val = arr.shift()
        const val_reverse = val.split("").reverse().join('')
        res.push(val_reverse)
    }
    return res.join(' ')
};
//首先使用split区分出每一个单词
//抽出每一个单词进行reverse反转
//最后push进res结果数组当中并返回

const s1 = "Let's take LeetCode contest"
const s2 = "God Ding"
console.log(reverseWords(s1));
console.log(reverseWords(s2))