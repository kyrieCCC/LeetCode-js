// 160. 相交链表
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
// 如果两个链表不存在相交节点，返回 null 。
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// 输出：Intersected at '8'
var getIntersectionNode = function (headA, headB) { 
    const map = new Map()
    let temp = headA
    while (temp) { //遍历链表A，将值存入hash表
        map.set(temp, temp)
        temp = temp.next
    }
    temp = headB
    while (temp) { //遍历链表B，使用has方法查找有没有跟A一样的值
        if (map.has(temp)) return temp
        temp = temp.next
    }
    return null
}
//使用hash表记录链表A的值，然后去B中查找是否有跟A一样的值，有就返回值，否则返回null