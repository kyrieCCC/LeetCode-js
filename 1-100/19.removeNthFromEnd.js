// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
var removeNthFromEnd = function (head, n) { //temp是记录倒数第N+1个节点的指针
    let index = 0, temp = null,  r = head //保存最终结果的指针
    while (head) {
        index++
        if (index === n + 1) {//当循环到n+1个元素时，将头指针存储到temp中
            temp = r
        }
        else if (index > n + 1) {//之后每一次迭代都将temp后移一位
            temp = temp.next
        }
        head = head.next
    }
    if (index < n) {//如果整个链表都没有n个元素那么直接返回整个链表
        return r
    }
    else if (index === n) {//如果整个链表元素个数正好==n，那么删除头元素就可以了
        return r.next
    }
    else {//如果整个链表至少有n+1个元素，那么我们使用我们将前一个指针指向后一个指针的方式来删除倒数第n个元素
        temp.next = temp.next.next
        return r
    }
}