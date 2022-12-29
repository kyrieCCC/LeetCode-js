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