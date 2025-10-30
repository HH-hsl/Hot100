// 题目：给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
// 输入：head = [-1,5,3,4,0]
// 输出：[-1,0,3,4,5]

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 用到 额外的函数- 1.链表的中间节点 2.合并两个有序列表
// 利用 分治法
var sortList = function (head) {
    if (!head || !head.next) return head;
    let pre = null;
    let slow = fast = head;
    while (fast && fast.next) {
        pre = slow;   //记录slow的前一个节点
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;

    const leftSorted = sortList(head);
    const rightSorted = sortList(slow);
    return mergeTwoLists(leftSorted, rightSorted);
};

// 链表的中间节点
function middleNode(head) {
    let pre = slow = fast = head;
    while (fast && fast.next) {
        pre = slow;   //记录slow的前一个节点
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;  //断开slow和slow前一个节点的链接
    return slow;
}

// 合并有序链表
function merge(l1, l2) {
    const dummy = new ListNode(0);
    let prev = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    if (l1) prev.next = l1;
    if (l2) prev.next = l2;
    return dummy.next;
}
