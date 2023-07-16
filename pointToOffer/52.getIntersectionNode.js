// 剑指 Offer 52. 两个链表的第一个公共节点
// 输入两个链表，找出它们的第一个公共节点。

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) { 
    const map = new Map();
    let nodeA = headA;
    while (nodeA) {
        map.set(nodeA, nodeA);
        nodeA = nodeA.next
    }
    let nodeB = headB;
    while (nodeB) {
        if (map.has(nodeB)) {
            return nodeB
        }
        nodeB = nodeB.next
    }
}