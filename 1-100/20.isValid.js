// 20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 输入：s = "()"
// 输出：true
// 输入：s = "()[]{}"
// 输出：true
// 输入：s = "(]"
// 输出：false

var isValid = function (s) { 
    const arr1 = [], arr2 = [], arr3 = []
    s = s.split("")
    for (let i = 0; i < s.length; i++){
        if (s[i] === '(') {
            arr1.push('(')
        }
        else if (s[i] === '[') {
            arr2.push('[')
        }
        else if (s[i] === '{') {
            arr3.push('{')
        }
        else if (s[i] === ')') {
            if (arr1.length) {
                arr1.pop()
            }
            else {
                return false
            }
        }
        else if (s[i] === '}') {
            if (arr3.length) {
                arr3.pop()
            }
            else {
                return false
            }
        }
        else if (s[i] === ']') {
            if (arr2.length) {
                arr2.pop()
            }
            else {
                return false
            }
        }
    }
    if (!arr1.length && !arr2.length && !arr3.length) {
        return true
    }
    else {
        return false
    }
}


//通过替换的解法，将S中的成对出现的括号找出并删除
const isValid_true = (s) => {
    if (s.length % 2 !== 0) {
        return false
    }
    const len = s.length / 2
    for (let i = 0; i < len; i++){
        s = s.replace("()", "")
        s = s.replace("[]", "")
        s = s.replace("{}", "")
    }
    return s.length === 0
}

const s = "()[]{}"
console.log(isValid_true(s));