// 202. 快乐数
// 编写一个算法来判断一个数 n 是不是快乐数。
// 「快乐数」 定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
// 输入：n = 19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) { 
    let slow = n
    let fast = getNext(n) 

    while (fast !== slow && fast !== 1) {
        fast = getNext(getNext(fast))
        slow = getNext(slow)
    }
    return fast == 1
}
//使用快慢指针的解法
//当快慢指针相遇的时候，说明存在环
//这样表明当前数字并非快乐数
//反之当快指针为1的时候就是找到了答案，此数为快乐数


//辅助函数
//用于判断下一个数
const getNext = (n) => {
    return n.toString().split("").map(item => item ** 2).reduce((a, b) => a + b)
}