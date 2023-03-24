//数组去重
// 1. 直接使用set进行去重 
const myFun = (arr) => {
    const set = new Set(arr)
    return set
}


// 2. 既然可以使用set 那就可以使用map
const myFun2 = (arr) => {
    const res = []
    const map = new Map()
    for (let i = 0; i < arr.length; i++){
        if (map.has(arr[i])) {
            continue;
        }
        else {
            map.set(arr[i], 1)
            res.push(arr[i])
        }
    }
    return res
}
const arr = [1, 2, 2, 2, 3, 4, 4, 5]
console.log(myFun(arr))
console.log(myFun2(arr))