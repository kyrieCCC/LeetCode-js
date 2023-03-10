
var hammingDistance = function (x, y) { 
    x = x.toString(2)
    y = y.toString(2)
    maxLen = Math.max(x.length, y.length)
    x = x.padStart(maxLen, 0)
    y = y.padStart(maxLen, 0)
    let ans = 0
    for (let i = 0; i < maxLen; i++){
        if(x[i] !== y[i]) ans++
    }
    return ans
}

//2023-3-10update,美团笔试练习

const x = 4, y = 1
const res = hammingDistance(x, y)
console.log(res)