// 203. 移除链表元素
// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点
// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]

var removeElements = function (head, val) { 
    let newNode = new ListNode(0)
    newNode.next = head
    let node = newNode
    while (node.next) {
        if (node.next.val == val) {
            node.next = node.next.next
        }
        else {
            node = node.next
        }
    }
    return newNode.next
}
//击败96%
//使用了循环的思想
//首先进行循环遍历每一个元素，每当找到一个指定的元素的时候，就跳过
//即将next指向next.next
//最后返回操作完整的链表