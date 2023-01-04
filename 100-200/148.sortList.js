// 148. 排序链表
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]

const merge = (head1, head2) => {
    const mergeHead = new ListNode(0)
    let temp = mergeHead, temp1 = head1, temp2 = head2
    while (temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1
            temp1 = temp1.next
        }
        else {
            temp.next = temp2 
            temp2 = temp2.next
        }
        temp = temp.next
    }
    if (temp1 !== null) {
        temp.next = temp1
    }
    else if (temp2 !== null) {
        temp.next = temp2
    }
    return mergeHead.next
}

const subList = (head, tail) => {
    if (head === null) {
        return head
    }
    if (head === tail) {
        head.next = null
        return head
    }
    let slow = head, fast = head
    while (fast !== tail) {
        slow = slow.next
        fast = fast.next
        if (fast !== tail) {
            fast = fast.next
        }
    }
    const mid = slow
    return merge(subList(head, mid), subList(mid, tail))
}

var sortList = function(head) {
    return subList(head, null)
};