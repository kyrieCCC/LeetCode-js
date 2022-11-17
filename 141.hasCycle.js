// 141. 环形链表
// 给你一个链表的头节点 head ，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
// 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。
var hasCycle = function (head) {
    while(head){
        if(head.tag) return true
        head.tag = true
        head = head.next
    }
    return false
};
//该方法使用标记法，将没出现过的节点进行一个标记，如果链表中存在环，并且环指向之前出现过的值
//则返回true，表示当前有环，反之返回false

//奇奇怪怪法
var hasCycle = function (head) {
    try {
        JSON.stringify(head)
    } catch  {
        return true
    }
    return false
};