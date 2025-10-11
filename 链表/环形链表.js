// 题目：给你一个链表的头节点 head ，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
// 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
// 如果链表中存在环 ，则返回 true 。 否则，返回 false 。

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指针 -- 龟兔赛跑
// 慢指针走1步，快指针走2步
// 如果存在环，那么环内 慢指针会和快指针相遇

// 时间复杂度：O(n)，空间复杂度：O(1)

var hasCycle = function (head) {
    let slow = head, fast = head;
    // 只要在当下快指针和快指针的下一节点都存在的时候 才有可能发生相遇的情况
    // 如果其中有为null的，后续步骤会发生报错
    // 为什么不要求slow呢，因为如果fast和fast.next都存在，那么slow.next也存在
    // fast只是把 slow要走的路提前走了一遍
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
};