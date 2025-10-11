// 题目
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
// 如果两个链表不存在相交节点，返回 null 。

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function (headA, headB) {

    let p = headA;
    let q = headB;
    // 走到头后没相遇就把对方的路再走一遍 - 双方都走完后 路程相等 有交点就会相遇
    // headA 长度为m，headb 长度为n，c是相交后的长度，a b是不相交的部分
    // a+c=m b+c=n  -> (a+c)+b = (b+c)+a
    while (p !== q) {
        p = p == null ? headB : p.next
        q = q == null ? headA : q.next
    }
    return p;
};