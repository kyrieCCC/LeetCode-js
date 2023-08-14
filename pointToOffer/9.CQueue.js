// 剑指 Offer 09. 用两个栈实现队列
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 - 1 )
// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
// [[],[3],[],[],[]]
// 输出：[null,null,3,-1,-1]

var CQueue = function () {
  this.stack = [];
  this.outStack = [];
};
/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.outStack.length) {
    if (!this.stack.length) {
      return -1;
    }
    this.in2out();
  }
  return this.outStack.pop();
};
CQueue.prototype.in2out = function () {
  while (this.stack.length) {
    this.outStack.push(this.stack.pop());
  }
};
// 将一个栈当作输入栈，用于压入 appendTail 传入的数据；
// 另一个栈当作输出栈，用于 deleteHead 操作。


const newStack = new CQueue()