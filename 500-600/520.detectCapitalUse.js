// 520. 检测大写字母
// 我们定义，在以下情况时，单词的大写用法是正确的：
// 全部字母都是大写，比如 "USA" 。
// 单词中所有字母都不是大写，比如 "leetcode" 。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
// 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。
// 输入：word = "USA"
// 输出：true
// 输入：word = "FlaG"
// 输出：false


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const exp1 = /[A-Z]/, exp2 = /[a-z]/
    const arr = []
    const arr2 = []
    for (let i = 0; i < word.length; i++) {
        if (exp1.test(word[i])) {
            arr.push(word[i])
        }
        if (exp2.test(word[i])) {
            arr2.push(word[i])
        }
    }
    if (arr.length == word.length || arr2.length == word.length) {
        return true
    }
    else if (arr.length == 1 && arr[0] == word[0]) {
        return true
    }
    return false
};
//ph
//最简单最朴素的方法
//首先通过正则表达式过滤出大写的和小写的单词字母
//随后比较单词的长度是否全是小写或者是大写
//如果不是就判断是否只有首字母大写
//都不是就返回flase，有一项符合要求就返回true


const detectCapitalUse_ans = (word) => {
    if (word.length >= 2 && word[0] === word[0].toLowerCase() && word[1] === word[1].toUpperCase()) {
        return false;
    }
    
    // 无论第 1 个字母是否大写，其他字母必须与第 2 个字母的大小写相同
    for (let i = 2; i < word.length; ++i) {
        if (word[i] === word[i].toLowerCase() ^ word[1] === word[1].toLowerCase()) {
            return false;
        }
    }
    return true;
}

const word1 = 'USA'
const word2 = 'FlaG'
const word3 = 'Google'
console.log(detectCapitalUse(word1));
console.log(detectCapitalUse(word2));
console.log(detectCapitalUse(word3));