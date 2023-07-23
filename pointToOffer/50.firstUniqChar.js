// 剑指 Offer 50. 第一个只出现一次的字符
// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
// 输入：s = "abaccdeff"
// 输出：'b'
// 输入：s = ""
// 输出：' '

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) { 
    const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let pos = -1;
    for(const item of char) {
        // aabccdeff
        if(s.includes(item) && s.indexOf(item) == s.lastIndexOf(item)){
            pos = pos == -1 ? s.indexOf(item) : Math.min(s.indexOf(item), pos)
        }
    }
    return pos = pos == -1 ? ' ' : s.charAt(pos)
}
// 最快的方法
// 如果单词出现的次数为一个，计算出现的位置
// 判断最前面出现的单词即可
