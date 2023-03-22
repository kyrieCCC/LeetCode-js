//手撕call代码
function test(a, b) { //设置一个用于测试的函数
    console.log('a', a) //其中测试传入的参数是否能打印出来
    console.log('b', b)
    console.log('this', this) //打印this的指向
}

Function.prototype.myCall = function(...arg){ //...arg代表解构参数
    const obj = arg.slice(0, 1)  //分割出传入参数的第一项，第一个参数即是我们传入的需要绑定的对象
    const arr = arg.slice(1) //分割出传入参数的后面几项，代表传入的实参
    const cur = this //保存this的值
    obj.fn = cur //将调用myCall函数的函数指向我们的新函数obj.fn，这一步改变了this的指向
    const res = obj.fn(...arr) //将我们的参数传入函数
    delete obj.fn //删除掉该函数
    return res//返回结果
}



test.newCall({ x: 10 }, 10, 43) //将this指向{x:10}，同时传入参数10，43