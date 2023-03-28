//给定一个字符串，解析为千位分离的金额数，并且在末尾补齐0
//例如 s = '12345.0'
//输出 12,345.00

/**
 * 
 * @param {String} str 
 */
const change = (str) => {
    const arr = str.split(".")

    const leftArr = arr[0]
    const res = []
    let count = 0
    for (let i = leftArr.length - 1; i >= 0; i--){
        if (count != 0 && count % 3 == 0) {
            res.push(",")
        }
        res.push(leftArr[i])
        count++
    }
    
    const rightArr = arr[1]
    const resLeft = []
    if (arr[1].length >= 2) {
        resLeft.push(rightArr[0])
        resLeft.push(rightArr[1])
    }
    if (arr[1].length < 2) {
        if (arr[1].length == 1) {
            resLeft.push(rightArr[0])
            resLeft.push('0')
        }
        else {
            resLeft.push('0')
            resLeft.push('0')
        }
    }
    
    const ans = res.reverse().concat(".", resLeft)
    return ans.join("")
}

const s = '12345.43'
const s1 = '12345.1'
const s2 = '12345'
console.log(change(s1));