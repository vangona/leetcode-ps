/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */ 
const getIntersectionNode = (headA, headB)=> {
  const visited = [];
  
  const listTraversal = (head) => {
    while (head) {
      if (visited.includes(head)) return head;
      visited.push(head);
      head = head.next;
    }
    
    return null;
  }
  
  return listTraversal(headA) || listTraversal(headB);
};