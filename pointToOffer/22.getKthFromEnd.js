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

//解法二 快慢指针
const getKthFromEndPlus = (head, k) => {
    let fast = head, slow = head
    while (fast && k > 0) {
        fast = fast.next
        k = k - 1
    }

    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}
//击败 50% 腾讯春招练习
//本解法的时间复杂度与上一个解法类似
//首先定义快慢两个指针，随后快指针首先开始走动，走出k个距离
//这样slow指针由于还在出发点，于是两个指针之间距离为k
//随后让fast与slow两个指针同时移动，当fast指针到达最后一个点的时候，即slow为倒数k
//返回slow即可