// 题目：给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
// 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let dummy = new ListNode(0, head);
    let node0 = dummy;
    let node1 = head
    // 终止条件: 只剩一个或没有元素时 -> node1 和 node1.next 都为空时候
    while (node1 != null && node1.next != null) {
        const node2 = node1.next
        const node3 = node2.next
        // 0 -> 2, 2 -> 1, 1 -> 3
        node0.next = node2
        node2.next = node1
        node1.next = node3
        // 更新 node0 为node1，node1 为node3
        node0 = node1
        node1 = node3
    }

    return dummy.next
};