//一个对象数组，根据对象中的age属性进行排序
// [
//     {name:'a',age:4},
//     {name:'b',age:6},
//     {name:'c',age:3},
//     {name:'d',age:2},
//     {name:'e',age:9},
//     {name:'f',age:8},
//   ]
// 例如上面这个数组，根据其age重新排序

//冒泡排序
const myFun = (arr) => {
    const res = []
    for (let i = 0; i < arr.length; i++){
        for (let j = 1; j < arr.length - i; j++){
            if (arr[j].age < arr[j - 1].age) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
        }
    }
    return arr
}

//使用冒泡排序的思想，实质上就是根据age的小大，来判断元素摆放的位置
//冒泡排序时间复杂度nlogm
//另外还可以使用快速排序的方式


//快速排序
const quickly = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    const midIndex = Math.floor(arr.length / 2)
    const midItem = arr.splice(midIndex, 1)[0]
    const left = [], right = []
    for (let i = 0; i < arr.length; i++){
        arr[i].age > midItem.age ? right.push(arr[i]) : left.push(arr[i])
    }
    return quickly(left).concat(midItem, quickly(right))
}
//快速排序的思想
//结合分治算法中的递归进行解决


const arr = [
        {name:'a',age:4},
        {name:'b',age:6},
        {name:'c',age:3},
        {name:'d',age:2},
        {name:'e',age:9},
        {name:'f',age:8},
]

console.log(myFun(arr));
console.log(quickly(arr))