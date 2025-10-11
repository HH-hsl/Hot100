// 题目：给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。
// 如果是，返回 true ；否则，返回 false 。

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // 空数组接收链表节点的元素
    let vals = []
    // 遍历链表，把节点的元素复制到vals中
    while (head !== null) {
        vals.push(head.val)
        head = head.next
    }
    // 双指针遍历，头尾元素不相等 就不是回文链表
    for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
        if (vals[i] !== vals[j]) {
            return false;
        }
    }
    return true;
};