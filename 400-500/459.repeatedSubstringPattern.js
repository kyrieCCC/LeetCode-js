// 459. 重复的子字符串
// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
// 输入: s = "abab"
// 输出: true
// 解释: 可由子串 "ab" 重复两次构成
// 输入: s = "aba"
// 输出: false

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) { 
    let tag = 0
    for(let i = 1; i < s.length; i++) {
        const item = s.slice(0, i + 1)
        const len = i + 1
        let j = i + 1
        tag = 0
        while (j < s.length){
            const other_item = s.slice(j, j + len)
            j = j + len
            if(other_item != item) {
                tag = 1
            }
            if (tag) {
                break
            }
        }
        if(!tag && len != s.length) {
            return true
        }
    }
    return false
}

const repeatedSubstringPattern_ans = (s) => {
    const str = s + s
    return str.substring(1, str.length - 1).includes(s)
}
// 官方的解答
// 组合两个字符串s
// 随后使用substring和includes判断是否是重复组成的
// 直接返回结果

const s1 = 'bb'
const s2 = 'aba'
const s3 = "abcabcabcabc"

console.log(repeatedSubstringPattern_ans(s1));
console.log(repeatedSubstringPattern_ans(s2));
console.log(repeatedSubstringPattern_ans(s3));