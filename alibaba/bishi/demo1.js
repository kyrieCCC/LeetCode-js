//一个数组中存在多个元素
//找出最多重复的元素，以及第一个出现的下标，出现的次数

const findItem = (arr) => {
    const map = new Map()
    for (let i = 0; i < arr.length; i++){
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
        else {
            map.set(arr[i], 1)
        }
    }
    let targetItem = arr[0], targetNum = 1, targetIndex = 0
    for (let i = 0; i < arr.length; i++){
        if (map.get(arr[i]) > targetNum) {
            targetItem = arr[i]
            targetNum = map.get(arr[i])
            targetIndex = i
        }
    }
    return [targetItem, targetNum, targetIndex]
}
//非常常见的一道题目，只需要将每一个元素出现的次数使用map进行记录
//再使用遍历将我们的需要的内容提取出来即可

const arr = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6]
const ans = findItem(arr)
console.log(...ans)