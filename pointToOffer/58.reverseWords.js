// 剑指 Offer 58 - I. 翻转单词顺序
// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。
// 例如输入字符串"I am a student. "，则输出"student. a am I"。
// 输入: "the sky is blue"
// 输出: "blue is sky the"
// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}
 
const s1 = "the sky is blue";
const s2 = "  hello world!  ";
const s3 = "a good   example";
console.log(reverseWords(s1));
console.log(reverseWords(s2));
console.log(reverseWords(s3));