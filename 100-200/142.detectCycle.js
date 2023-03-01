// 142. 环形链表 II
// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。
var detectCycle = function (head) { 
    const map = new Map()
    while (head) {
        if (map.has(head)) return head
        map.set(head, head)
        head = head.next
    }
    return null
}
 //使用map的方式，把每一个元素的值进行存储，当我们每次到下一个节点的时候就去查找是否有此值
 //如果有值说明有环，我们返回head，反之返回null
var detectCycle1 = function (head) { 
    const set = new Set()
    while (head) {
        if (set.has(head)) return head
        set.add(head)
        head = head.next
    }
    return null
}
//这是对map的优化，本质上都是使用了哈希表的方式，用set的方式更简单

var detectCycle2 = function (head) { 
    if (!head) {
        return null
    }
    let slow = head, fast = head
    while (fast !== null) {
        slow = slow.next
        if (fast.next !== null) {
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
//这个方法使用的是快慢指针，在第一圈的时候我们的快指针会首先进入到环中
//然后在环中“追逐”慢指针，在slow第一圈的时候肯定能找到慢指针，随后慢指针进入到环
//跟我们的node碰了个正着，于是循环结束，node就是我们的环的节点

const detectCycleTag = (head) => {
    while (head) {
        if (head.tag) {
            return head
        }
        else {
            head.tag = 1
            head = head.next
        }
    }
    return null
}

const detectCycleFast = (head) => {
    if (!head) {
        return null
    }
    let slow = head, fast = head
    while (fast != null) {
        slow = slow.next
        if (fast.next != null) {
            fast = fast.next.next
        }
        else {
            return null
        }
        if (fast === slow) {
            let node = head
            if (node !== slow) {
                node = node.next
                slow = slow.next
            }
            return node
        }
    }
    return null
}

//更新了两个做法，tag和快慢指针法
//其中tag法可以击败90%+, 字节跳动春招练习