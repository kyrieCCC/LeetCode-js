// 第六届青训营笔试题目1
// promise的并发控制

class PromiseCtrl {
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.running = 0;
    }

    add(task) {
        this.queue.push(task);
        this.run();
    }

    run() {
        while (this.running < this.limit && this.queue.length) {
            const taskItem = this.queue.shift();
            this.running++
            taskItem().finally(() => {
                this.running--
                this.run()
            })
        }
    }
}

const promiseTest = new PromiseCtrl(1)
const tasks = [
    () => { console.log('promise1'); return new Promise(resolve => setTimeout(() => resolve('1'), 1000)) },
    () => { console.log('promise2'); return new Promise(resolve => setTimeout(() => resolve('2'), 1000)) },
    () => { console.log('promise3'); return new Promise(resolve => setTimeout(() => resolve('3'), 1000)) },
    () => { console.log('promise4'); return new Promise(resolve => setTimeout(() => resolve('4'), 1000)) },
    () => { console.log('promise5'); return new Promise(resolve => setTimeout(() => resolve('fn'), 1000)) },
]
const res = tasks.map((item) => promiseTest.add(item))
