//在不调用第三个变量的情况下交换两个变量的值

let a = 1
let b = 2

a = a + b
b = a - b
a = a - b

console.log(a, b);