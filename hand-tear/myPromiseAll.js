//手撕promiseall方法
const p1 = new Promise(resolve => {
    resolve('ph')
})
const p2 = new Promise(resolve => {
    resolve('zy')
})
const p3 = new Promise(resolve => {
    resolve('zcr')
})

const myPromiseAll = ((promiseTask) => {
    const result = []
    return new Promise((resolve, reject) => { //promiseall方法返回的是一个新的promise
        promiseTask.forEach(promise => { //遍历参数数组中的每一个promise，执行每个promise的then方法
            promise.then(res => {
                result.push(res)//将拿到的then中的值传入进result数组中
                if (result.length === promiseTask.length) { //当数组长度与我们的传入的参数的长度一致
                    resolve(result) //执行resolve方法
                }
            }).catch(reject)//捕获异常
        });
    })
})
const promiseTask = [p1, p2, p3]
Promise.all(promiseTask).then(res => console.log(res))
myPromiseAll(promiseTask).then(res => console.log(res))