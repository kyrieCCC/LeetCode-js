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
//击败98%,腾讯春招练习题
//本题使用的是贪心算法
// 在得到每个字母最后一次出现的下标位置之后，可以使用贪心的方法将字符串划分为尽可能多的片段，具体做法如下。
// 从左到右遍历字符串，遍历的同时维护当前片段的开始下标 start\textit{start}start 和结束下标 end\textit{end}end，初始时 start=end=0\textit{start}=\textit{end}=0start=end=0。
// 对于每个访问到的字母 ccc，得到当前字母的最后一次出现的下标位置 endc\textit{end}_cend c
//  ，则当前片段的结束下标一定不会小于 endc\textit{end}_cendc
//  ，因此令 end=max⁡(end,endc)\textit{end}=\max(\textit{end},\textit{end}_c)end=max(end,endc​)。
// 当访问到下标 end\textit{end}end 时，当前片段访问结束，当前片段的下标范围是 [start,end][\textit{start},\textit{end}][start,end]，长度为 end−start+1\textit{end}-\textit{start}+1end−start+1，将当前片段的长度添加到返回值，然后令 start=end+1\textit{start}=\textit{end}+1start=end+1，继续寻找下一个片段。
// 重复上述过程，直到遍历完字符串

const s = "ababcbacadefegdehijhklij"
console.log(partitionLabels(s));