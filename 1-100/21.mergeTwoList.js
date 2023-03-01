// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

var mergeTwoLists = function (list1, list2) { 
    const resList = ListNode() //创造一个新的链表
    let pre = resList //定义pre指向这个列表
    let isTrue = true //循环终止的条件
    while (isTrue) {
        if (list1 === null) { //list1如果为空，则将pre的下一个节点指向list2
            pre.next = list2
            isTrue = false
        }
        else if (list2 === null) { //list2如果为空，则将pre的下一个节点指向list1
            pre.next = list1
            isTrue = false
        }
        else if (list1.val <= list2.val) { //比较list1与list2的值，找出小的一个，并且next下一个节点
            pre.next = list1
            list1 = list1.next
        }
        else { //比较list1与list2的值，找出小的一个，并且next下一个节点
            pre.next = list2
            list2 = list2.next
        }
        pre = pre.next //每次新的链表加上值后都要next一个新的节点
    }
    return resList.next //返回一个新的链表
}

const mergeTwoListsPlus = (list1, list2) => {
    const node = new ListNode(-1)
    let pre = node
    while (list1 && list2) {
        if (list1.val < list2.val) {
            pre.next = list1
            list1 = list1.next
        }
        else {
            pre.next = list2
            list2 = list2.next
        }
        pre = pre.next
    }
    list1 === null ? pre.next = list2 : pre.next = list1
    return node.next
}

//比上一题相对优化了一些，击败80%+，腾讯春招练习
//使用的是循环判断的方式，判断next的大小，比较后放入新的链表 
//最后剩下的一个节点一个判断语句解决
