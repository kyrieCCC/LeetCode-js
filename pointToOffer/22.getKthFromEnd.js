// 剑指 Offer 22. 链表中倒数第k个节点
// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。
// 这个链表的倒数第 3 个节点是值为 4 的节点。

// 给定一个链表: 1->2->3->4->5, 和 k = 2.
// 返回链表 4->5.

//1. 解法一 计算长度法
var getKthFromEnd = function (head, k) { 
    let len = 0, node = head
    while (node) {
        node = node.next
        len++
    }

    node = head
    for (let i = 0; i < len - k; i++){
        node = node.next
    }
    return node
}
//本解决方法非常简单，首先计算出这个链表的长度
//拿到列表长度后减去k即是我们需要的数值
//把头节点重置，计算出len-k的链表值即可