// 题目
// 给你两个 非空 的链表，表示两个非负的整数。
// 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Math.floor(sum / 10); 计算进位 满10进1
var addTwoNumbers = function (l1, l2) {
    let carry = 0;  // 进位
    let dumnmy = new ListNode(0)  // 新链表节点
    let curr = dumnmy

    if (l1 === null && l2 === null && carry === 0) return null;
    // 循环条件不要忘记carry
    while (l1 || l2 || carry) {
        // 可能存在一个链表为空的情况，链表为空则视为一串0
        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0
        let s = v1 + v2 + carry
        // 进位
        carry = Math.floor(s / 10);
        // 将余数作为下一节点的元素
        curr.next = new ListNode(s % 10);
        // 当前节点只想下一节点，进行下一轮操作
        curr = curr.next

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dumnmy.next;
}; 