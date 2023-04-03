//将一段字符串中的'-'连接符后的字母转换为大写
// 例如 s = 'this-is-string'
// 转换后 s = 'thisIsString'

const myFun = (s) => {
    const arr = s.split("")
    const res = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == '-') {
            arr[i + 1] = arr[i + 1].toUpperCase()
        }
        else {
            res.push(arr[i])
        }
    }
    return res.join("")
}
//暴力遍历每一个值，当遇到连字符的时候，将下一个数值变为大写

//正则表达式
const myFun2 = (s) => {
    const reg = /-(\w)/g
    return s.replace(reg, ($0, $1) => {
        return $1.toUpperCase()
    })
}
//使用正则表达式针对字符串进行匹配
//每次匹配到链子符的时候，就针对后面的字母为一组进行替换

const s = 'this-is-string'
const s1 = '-webkit-border-image'


console.log(sChange);