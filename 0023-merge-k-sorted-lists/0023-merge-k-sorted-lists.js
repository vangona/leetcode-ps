/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  const merge = (left, right) => {
    const resultHead = new ListNode(0);
    let currHead = resultHead;
    while (left && right) {
      if (left.val < right.val) {
        currHead.next = left;
        left = left.next;
      } else {
        currHead.next = right;
        right = right.next;
      }
      
      currHead = currHead.next;
    }

    currHead.next = left ? left : right;
    return resultHead.next;
  };
  
  return lists.reduce((acc, curr) => merge(acc, curr), new ListNode(-10002)).next;
};