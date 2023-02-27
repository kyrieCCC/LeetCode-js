// 1249. 移除无效的括号
// 给你一个由 '('、')' 和小写字母组成的字符串 s。
// 你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
// 请返回任意一个合法字符串。
// 输入：s = "lee(t(c)o)de)"
// 输出："lee(t(c)o)de"
// 解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。

//1. 失败版本
var minRemoveToMakeValidFailure = function (s) { 
    const map = new Map()
    if (s = '))((') {
        return ""
    }
    for(let i = 0; i < s.length; i++){
        if (s[i] === '(') {
            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1)
            }
            else {
                map.set('(', 1)
            }
        }
        if (s[i] === ')') {
            // if (s.indexOf('(') > i) {
            //     s = s.slice(0, i) + s.slice(i + 1, s.length + 1)
            // }
            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1)
            }
            else {
                map.set(s[i], 1)
            }
        }
    }
    let count = 0
    let num = 0
    if (map.get('(') !== map.get(')')) {
        if (map.get('(') < map.get(')')) {
            count = map.get(')') - map.get('(')
            while (count) {
                if (s[num] === ')') {
                    s = s.slice(0, num) + s.slice(num + 1, s.length + 1)
                    num++
                    count--
                }
                else {
                    num++
                }
            }
        }
        else { 
            count = map.get('(') - map.get(')')
            while (count) {
                if (s[num] === '(') {
                    s = s.slice(0, num) + s.slice(num + 1, s.length + 1)
                    num++
                    count--
                }
                else {
                    num++
                }
            }
        }
    }
    else {
        return s
    }
    return s
}

//2. 使用栈解决问题
const minRemoveToMakeValid = (s) => {
    const res = [...s]
    const stack = []
    for (let i = 0; i < s.length; i++){
        if (s[i] === "(") {
            stack.push(i)
        }
        else if (s[i] === ")") {
            if (stack.length > 0) {
                stack.pop()
            }
            else {
                delete(res[i])
            }
        }
    }
    while (stack.length) {
        delete(res[stack.pop()])
    }
    return res.join('')
}

//击败90%的js
//使用栈的思想进行开发，首先找到出现的左括号
// 再把左括号放到栈中，若后续遇到右括号，则将最后一个栈元素pop出
// 若栈空，则代表前面没有左括号，可以直接删除右括号
// 返回res再把其字符串化

const s = "lee(t(co)de)"
console.log(minRemoveToMakeValid(s))