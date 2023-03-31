//美团二面算法题，逆序链表相加
// 定义两个链表例如
// 1 -> 2 -> 3(321)
// 4 -> 5 -> 6(654)
// 321 + 654 = 975
// 将链表中的数字相加并使用逆序链表的方式返回
// 返回5 -> 7 -> 9

const listSum = (head1, head2) => {
    let node = null, t = null
    let cur = 0
    while (head1 || head2) {
        const item1 = head1 ? head1.val : 0
        const item2 = head2 ? head2.val : 0
        const sum = item1 + item2 + cur
        if (!node) {
            node = t = new ListNode(sum % 10)
        }
        else {
            t.next = new ListNode(sum % 10)
            t = t.next
        }
        cur = Math.floor(sum / 10)
        if (head1) {
            head1 = head1.next
        }
        if (head2) {
            head2 = head2.next
        }
        if (cur > 0) {
            t.next = new ListNode(cur)
        }
    }
    return node
}
//使用了循环的解法
//每次都会取到当前链表的值，并且进行相加，使用cur来保存进位
//最后需要判断cur是否大于等于来判断是否需要多加一位