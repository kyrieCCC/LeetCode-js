// 389. 找不同
// 给定两个字符串 s 和 t ，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。
// 输入：s = "abcd", t = "abcde"
// 输出："e"
// 解释：'e' 是那个被添加的字母。

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) { 
    const map = new Map()

    for (let i = 0; i < s.length; i++){
        const val = map.get(s[i])

        map.set(s[i], val === undefined ? 1 : val + 1)
    }

    for (let i = 0; i < t.length; i++){
        const val = map.get(t[i])
        if (val == undefined || val == 0) {
            return t[i]
        }
        else {
            map.set(t[i], val - 1)
        }
    }
}


const s1 = "abcd", t1 = "abcde"
const s2 = "", t2 = "y"

console.log(findTheDifference(s1, t1));
console.log(findTheDifference(s2, t2));