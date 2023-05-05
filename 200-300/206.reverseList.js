// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 输入：head = [1,2,3,4,5]
// 输出：[5, 4, 3, 2, 1]

var reverseList = function (head) {
    let pre = null
    let cur = head
    while (cur) {
        const temp = cur.next //记录下来当前指针的next指向
        cur.next = pre //在这一步进行改变指针指向的操作
        pre = cur 
        cur = temp  //这两步是把当前的指针指向往后移动一位，使用滑动窗口，滑动来改变指针的指向
    }
    return pre
};
//双指针操作，滑动改变指针的指向
//2023-03-04更新，腾讯春招备战

const head = [1, 2, 3, 4, 5]
const result = reverseList()
console.log(result)