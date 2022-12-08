// 49. 字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
var groupAnagrams = function (strs) {
    const map = new Map()
    for (let i = 0; i < strs.length; i++){
        let arr = Array.from(strs[i]) //拿到第一个字符串，浅拷贝为一个数组 [e, a, t]
        arr.sort()//将数组进行排序，得到[a, e, t]
        let key = arr.toString()//将数组排序并设置为我们的key，a,e,t
        let res = map.get(key) ? map.get(key) : []//看看我们map中有没有这个key，有就push，没有就new Array        
        res.push(strs[i])//有就push
        map.set(key, res)//设置map值
    }
    return Array.from(map.values())
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
