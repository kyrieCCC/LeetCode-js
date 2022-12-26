// 139. 单词拆分
// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 0; i <= s.length; i++){
        for (let j = 0; j < wordDict.length; j++){
            if (i >= wordDict[j].length) {
                if (s.slice(i - wordDict[j].length, i) === wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true
                }
            }
        }
    }
    return dp[s.length]
};
//这是使用动态规划的方法，击败94.10%
//当我们切割的是我们拿到的切割出来的子串以后我们拿到字典里面进行查找是否存在
//如果存在我们就会将这一字串的前后都打上true标识，这样当我们的最后一个字符没有为true就会失败
const s = "leetcode", wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict))