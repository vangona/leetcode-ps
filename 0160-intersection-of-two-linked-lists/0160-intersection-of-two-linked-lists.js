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
  const listTraversal = (head) => {
    while (head) {
      if (head.visited) return head;
      head.visited = true
      head = head.next;
    }
    
    return null;
  }
  
  return listTraversal(headA) || listTraversal(headB);
};