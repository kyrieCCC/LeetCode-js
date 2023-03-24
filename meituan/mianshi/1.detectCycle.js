//判断链表是否有环,如果有环，返回入口节点
//快慢指针
const myFun = (head) => {
    let slow = head, fast = head
    while (fast) {
        slow = slow.next
        if (fast.next) {
            fast = fast.next.next
        }
        else {
            return null
        }
        if (fast === slow) {
            let node = head
            while (node !== slow) {
                node = node.next
                slow = slow.next
            }
            return node
        }
    }
    return null
}
