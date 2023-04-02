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


const s = 'this-is-string'
console.log(myFun(s));