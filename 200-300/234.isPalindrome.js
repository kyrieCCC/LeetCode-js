// 234. 回文链表
// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
// 输入：head = [1,2,2,1]
// 输出：true
var isPalindrome = function (head) { 
    const values = []
    while (head !== null) { //拿到链表中所有元素
        values.push(head.val)
        head = head.next
    }
    for (let i = 0, j = values.length - 1; i < j; i++, j--){ //遍历左右两端的元素，判断是否相等
        if (values[i] !== values[j]) {
            return false //不相等则返回false
        }
    }
    return true//相等返回true
}