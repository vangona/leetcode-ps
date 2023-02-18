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
  const connectRecursive = (currNode, prevNode) => {
    if (currNode.next === null) {
      newHead = currNode;
      currNode.next = prevNode;
      return;
    }
    
    connectRecursive(currNode.next, currNode);
    currNode.next = prevNode;
  }
  connectRecursive(head, null);
  
  return newHead;
};