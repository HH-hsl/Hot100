// 题目：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 旧链表 = 旧车厢， 新链表 = 新车厢

var reverseList = function (head) {
    let prev = null;  //反转后链表的头结点-初始为空
    let curr = head;
    while (curr) {
        // 把下一节点存储到 next ，防止断链后找不到
        const next = curr.next
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};