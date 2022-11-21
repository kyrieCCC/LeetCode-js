//冒泡排序
const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
const mySort = function (arr) {
    const len = arr.length
    for (let i = 0; i < len; i++){
        for (let j = 1; j < len - i; j++){
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    return arr
}
//使用的想法是双循环，每次都将数组中最大的元素放在数组的最后面
//这样完成i循环后就可以完成排序
//但是这个算法也有缺点，因为每次两两换位置的时候
//可能会出现这两个比较大小后不需要更换位置，但是我们的算法
//所以我们需要改进算法
const result = mySort(arr)
console.log(result)