//css的16进制，转换为RGB形式
//例如
//#fff(#ffffff) => rgb(255, 255, 255)

/**
 * 
 * @param {String} str 
 */
const toRGB = (str) => {
    let newStr = str.replace('#', "").toLowerCase()
    if (newStr.length !== 3 && newStr !== 6) {
        return "invaild"
    }
    if (newStr.length == 3) {
        let t = ''
        for (let i = 0; i < 3; i++){
            t = t + newStr.slice(i, i + 1).concat(newStr.slice(i + 1))
        }
        newStr =  t
    }

    const res = []
    if (newStr.length == 6) {
        for (let i = 0; i < 6; i+=2){
            let item = newStr.slice(i, i + 2)
            res.push(parseInt('0X' + item))
        }
    }
    return str + '  ==>  rbg(' + res.join(", ") + ")"
}

const str = '#fff'
console.log(toRGB(str));

