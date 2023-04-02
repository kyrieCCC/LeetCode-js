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

const arr = [
        {name:'a',age:4},
        {name:'b',age:6},
        {name:'c',age:3},
        {name:'d',age:2},
        {name:'e',age:9},
        {name:'f',age:8},
]

console.log(myFun(arr));