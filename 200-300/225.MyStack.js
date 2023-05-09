// 225. 用队列实现栈
// 请你仅使用两个队列实现一个后入先出（LIFO）的栈，
// 并支持普通栈的全部四种操作（push、top、pop 和 empty）

// 实现 MyStack 类：
// void push(int x) 将元素 x 压入栈顶。
// int pop() 移除并返回栈顶元素。
// int top() 返回栈顶元素。
// boolean empty() 如果栈是空的，返回 true ；否则，返回 false

// 输入：
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// 输出：
// [null, null, null, 2, 2, false]

//创建一个主队列与一个辅助队列
var MyStack = function() {
    this.queue = []
    this._queue = []
};

/** 
 * push操作
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    //正常的push操作
    this.queue.push(x)
};

/**
 * pop操作
 * @return {number}
 */
MyStack.prototype.pop = function () {
    //将主队列中的全部非首位元素都放到辅助队列当中
    while(this.queue.length > 1) {
        this._queue.push(this.queue.shift())
    }
    //取出首位元素
    const ans = this.queue.shift()
    //将其他元素放回主队列
    while(this._queue.length) {
        this.queue.push(this._queue.shift())
    }
    //返回首位元素
    return ans
};

/**
 * 取出首位元素
 * @return {number}
 */
MyStack.prototype.top = function () {
    //取出第一个元素
    return this.queue.slice(-1)[0]
};

/**
 * 判断是否为空
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    //通过长度判断是否为空
    return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */