//尝试算法实现深拷贝
//深拷贝现在是前端方向的热门考题之一，几乎每一场面试都会或多或少的提到深拷贝
//深拷贝的方法有很多，如何选择正确高效的方法是最重要de

//1. JSON 这是最简单的实现深度拷贝的方法之一
const obj = {
    a: 10,
    b: 43,
    c: 66
}

const obj2 = JSON.parse(JSON.stringify(obj))
console.log(obj2)

//JSON是最简单的方法之一，但是其中也会存在一些bug使得我们的克隆没有那么顺利
//最大的bug就是JSON无法实现循环引用的对象 的深拷贝，会直接报错
//例如
const objCycle = {
    a: 10,
    b: 43,
    c: obj
}
const objCycle2 = JSON.parse(JSON.stringify(obj))
console.log(obj2)
//这个时候的编译就会出错，显示的错误是JSON不支持拷贝循环引用的对象
//除了JSON还有许多实现深拷贝的方法
