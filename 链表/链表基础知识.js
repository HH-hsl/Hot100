// 链表知识点
class ListNode {
  val; //节点存储的元素
  next = null;   //指向下一个节点的指针
  constructor(value) {  //节点的构造函数
    this.val = value;
    this.next = null;
  }
}

// 链表的构造函数
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// 生成哨兵节点 0-节点元素 head - 下一节点
const dummy = new ListNode(0, head)




