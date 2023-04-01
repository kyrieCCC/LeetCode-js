// 题目
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略空格、字母的大小写。
// 示例
// 输入："A man, a plan, a canal: Panama"，输出：true
// 限定语言：C、 C++、Java、Python、JavaScript V8
const myPalindrome = (str) => {
    str = str.toLowerCase()
    const arr = []
    const reg2 = /[a-z]/, reg3 = /[0-9]/
    for (let i = 0; i < str.length; i++){
        if (reg2.test(str[i])) {
            arr.push(str[i])
        }
        else if (reg3.test(str[i])) {
            arr.push(str[i])
        }
    } 
    let j = 0, k = arr.length - 1
    while (j <= k) {
        if (arr[j] === arr[k]) {
            j++
            k--
        }
        else {
            return false
        }
    }
    return true
}
const str = "A man, a plan, a canal: Panama"
console.log(myPalindrome(str))