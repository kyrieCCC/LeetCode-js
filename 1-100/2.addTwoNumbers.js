// 2. 两数相加
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，
// 并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.


//直接使用循环迭代的方式
var addTwoNumbers = function(l1, l2) {
    return dfs(l1, l2, 0)
};

const dfs = (l1, l2, cur) => {
    if (!l1 && !l2 && cur === 0) {
        return null
    }
    const item1 = l1 ? l1.val : 0
    const item2 = l2 ? l2.val : 0
    const sum = item1 + item2 + cur
    const t = new ListNode(sum % 10)
    cur = Math.floor(sum / 10)
    t.next = dfs(l1? l1.next : null, l2 ? l2.next  : null, cur)
    return t
}
//本题使用的是递归的方式
//美团实习二面算法题
//可以直接使用循环的方法，依次遍历每一个链表的节点
//使用sum来记录每一次加法得出的值，以及cur来记录进位
//最后每次next的时候判断是否存在下一个值