/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  if (head === null) return head;
  
  let newHead;  
  let prev = null;
  let currNode = head;
  while (currNode) {
    const next = currNode.next;
    if (next === null) newHead = currNode;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }
  
  return newHead;
};