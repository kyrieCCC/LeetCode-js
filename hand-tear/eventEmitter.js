//手撕发布订阅模式
class eventEmitter {
    constructor() {
        this.event = {

        }
    }
    //订阅事件
    on(type, callback) {
        if (!this.event[type]) {
            this.event[type] = [callback]
        }
        else {
            this.event[type].push(callback)
        }
    }
    //发送事件
    emit(type, ...args) {
        if (!this.event[type]) {
            return
        }
        else {
            this.event[type].forEach(item => {
                item(...args)
            });
        }
    }
    //取消订阅
    off(type, callback) {
        if (!this.event[type]) {
            return
        }
        else {
            this.event[type] = this.event[type].filter(item => item !== callback)
        }
    }
    //只执行一次事件
    once(type, callback) {
        let func = () =>{
            callback()
            this.off(type, func)
        }
        this.on(type, func)
    }
}

let evt = new eventEmitter()

const callback = (params) => {
    console.log(params);
}


evt.on('say', callback);
// console.log(evt.once('say', callback));
console.log(evt.emit('say', 'hello world'));
// console.log(evt.off('say', callback));