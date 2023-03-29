//实现一个vue的eventbus
//实质上就是实现一个发布订阅模式

class EventBus{
    constructor() {
        this.event = {

        }
    }
    on(type, callback) {
        if (!this.event[type]) {
            this.event[type] = []
        }
        this.event[type].push(callback)
    }
    emit(type, ...args) {
        if (!this.event[type]) {
            return
        }
        this.event[type].forEach((item) => {
            item(...args)
        })
    }
    off(type, fn) {
        if (!this.event[type]) {
            return
        }
        this.event[type].filter((item) => item == fn)
    }
    once(type, fn) {
        const func = () => {
            fn()
            this.off(type, fn)
        }
        this.on(type, func)
    }
}

const eventbus = new EventBus()
const test = (param) => {
    console.log(param);
}

//测试用例
eventbus.on('print', test)
console.log(eventbus.emit('print', 'hello world')) //输出'hello world'

