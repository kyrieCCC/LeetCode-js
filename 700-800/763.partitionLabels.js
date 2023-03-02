// 763. 划分字母区间
// 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
// 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
// 返回一个表示每个字符串片段的长度的列表。
// 输入：s = "ababcbacadefegdehijhklij"
// 输出：[9,7,8]
// 解释：
// 划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
// 每个字母最多出现在一个片段中。
// 像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。


var partitionLabels = function(s) {
    const last = []
    const codePoint = 'a'.codePointAt(0)
    const len = s.length
    for (let i = 0; i < len; i++){
        last[s.codePointAt(i) - codePoint] = i
    }
    const res = []
    let left = 0, right = 0
    for (let i = 0; i < len; i++){
        right = Math.max(right, last[s.codePointAt(i) - codePoint])
        if (i == right) {
            res.push(right - left + 1)
            left = right + 1
        }
    }
    return res
};
//击败98%

const s = "ababcbacadefegdehijhklij"
console.log(partitionLabels(s));