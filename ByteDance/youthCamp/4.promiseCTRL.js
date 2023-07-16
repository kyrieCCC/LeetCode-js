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

