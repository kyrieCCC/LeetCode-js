//无重复字符的最长子串
//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
//输入: s = "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var lengthOfLongestSubstring = function(s) {
    let ans = 0
    let minIndex = 0
    for (let i = 0; i < s.length; i++){
        if (s.indexOf(s[i], minIndex) < i) {
            minIndex = s.indexOf(s[i], minIndex) + 1
        }
        else {
            ans = Math.max(ans, i - minIndex + 1)
        }
    }
    return ans
};  



const s = "abcabcbb"
const result = lengthOfLongestSubstring()
console.log(result)