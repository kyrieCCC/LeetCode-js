// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
var removeNthFromEnd = function (head, n) { 
    let index = 0, temp = null, r = head
    while (head) {
        index++
        if (index === n) {
            temp = r
        }
        else if (index > n + 1) {
            temp = temp.next
        }
        head = head.next
    }
    if (index < n) {
        return r
    }
    else if (index === n) {
        return r.next
    }
    else {
        temp.next = temp.next.next
        return r
    }
}