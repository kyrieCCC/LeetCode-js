// 151. 反转字符串中的单词
// 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
// 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串
// 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。
// 返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

// 输入：s = "the sky is blue"
// 输出："blue is sky the"
// 输入：s = "a good   example"
// 输出："example good a"
// 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
// 输入：s = "  hello world  "
// 输出："world hello"
// 解释：反转后的字符串中不能存在前导空格和尾随空格。

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim()
    const arr = s.split(" ").filter(item => item !== '')
    arr.reverse()
    const res = arr.join(" ")
    return res
};
//使用trim来去除首尾的空格
//然后根据空格来划分单词
//去除当中的非字符部分
//反转后输出为字符串

//很感慨这是一个轻松搞定的题目

const s1 = "the sky is blue"
const s2 = "a good   example"
const s3 = "  hello world  "
console.log(reverseWords(s1));
console.log(reverseWords(s2));
console.log(reverseWords(s3));