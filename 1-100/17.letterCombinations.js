// 17. 电话号码的字母组合
// 给定一个仅包含数字 2 - 9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
var letterCombinations = function (digits) { 
    if (digits.length === 0) return []
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    const res = ['']
    for (let i = 0; i < digits.length; i++){
        levalLen = res.length
        for (let j = 0; j < levalLen; j++){
            const cur = res.shift()
            const letter = map[digits[i]]

            for (item of letter) {
                res.push(cur + item)
            }
        }
    }
    return res
}

const digits = '23'
const result = letterCombinations(digits)
console.log(result)
