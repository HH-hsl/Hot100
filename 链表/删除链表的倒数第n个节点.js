// 题目：给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 注意是删除 倒数 第n个节点
var removeNthFromEnd = function (head, n) {
    // 哨兵节点-虚拟节点 确保起点一致
    const dummy = new ListNode(0, head)
    let slow = dummy;
    let fast = dummy;
    // 倒数n次 使用while(n) 有指针现有n+1步
    while (n--) {
        fast = fast.next
    }
    // 右指针不为空时，左右指针同时移动1步，直到有指针指向null
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    // 删除倒数第n个节点，让左指针的下一节点指向下下节点
    slow.next = slow.next.next

    return dummy.next
}