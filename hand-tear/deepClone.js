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


//2. MessageChannel
//我们使用一个叫做“信息隧道”的方法也可以完成深度克隆
const deepCloneMsg = (obj) => {
    return Promise((resolve) => {
        const { port1, port2 } = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (msg) => {
            resolve(msg.data)
        }
    })
}

deepCloneMsg(obj).then(item => console.log(obj))
//这个方法惊天地泣鬼神，惊呆面试官哈哈哈
//我们需要了解MessageChannel函数，以下内容包含外部文档
//Channel Messaging API 的 MessageChannel 接口允许我们创建一个新的消息通道，并通过它的两个 MessagePort 属性发送数据。
//这个方法我们解构出两个端口对象port1 与 port2
//port1通过postMessage方法传递一个内容
//port2通过onmessage通过回调函数来接收一个内容



// 手动递归实现深度克隆
// 1. 简易版
// 此版本为简易版深度克隆，针对循环嵌套，函数以及map或者set对象在克隆时会出现错误
