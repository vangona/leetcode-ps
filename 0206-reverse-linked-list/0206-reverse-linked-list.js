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

  let currNode = head;
  let next;  
  let prev = null;

  while (currNode) {
    next = currNode.next;
    currNode.next = prev;
    prev = currNode;
    currNode = next;
  }
  
  return prev;
};