// 题目：将两个升序链表合并为一个新的 升序 链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。 

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    // 递归：直接把较小的头结点作为新链表头，剩下的交给下一层继续
    // mergeTwoLists():递归写法，函数内部再次调用自己
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1
    } else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
};