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
//本题的做法略微有点难度
// 对链表自顶向下归并排序的过程如下。

// 1. 找到链表的中点，以中点为分界，将链表拆分成两个子链表。寻找链表的中点可以使用快慢指针的做法，快指针每次移动 2 步，慢指针每次移动 1 步，
// 当快指针到达链表末尾时，慢指针指向的链表节点即为链表的中点。
// 2. 对两个子链表分别排序。
// 3. 将两个排序后的子链表合并，得到完整的排序后的链表。
// 可以使用「21. 合并两个有序链表」的做法，将两个有序的子链表进行合并。
// 上述过程可以通过递归实现。递归的终止条件是链表的节点个数小于或等于 1 1 个节点时，不需要对链表进行拆分和排序。