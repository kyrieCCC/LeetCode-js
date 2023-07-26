//快速排序方法
const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
const quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr
    }
    const midIndex = Math.floor(arr.length / 2)
    const midItem = arr.splice(midIndex, 1)[0]
    const left = [], right = []
    for (let i = 0; i < arr.length; i++){
        const current = arr[i]
        current < midItem ? left.push(current) : right.push(current)
    }
    return quickSort(left).concat(midItem, quickSort(right))
}
//快速排序的思路就是分为左右两边进行递归
const result = quickSort(arr)
const arr2 = [3, 2, 1]
console.log(quickSort(arr2));
console.log(result)
