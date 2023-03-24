//数组去重
const myFun = (arr) => {
    const set = new Set(arr)
    return set
}
const arr = [1, 2, 2, 2, 3, 4, 4, 5]
console.log(myFun(arr))