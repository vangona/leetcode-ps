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
  while (headA || headB) {
    if (headA) {
      if (headA.visited) return headA;
      headA.visited = true;
      headA = headA.next;      
    }
    
    if (headB) {
      if (headB.visited) return headB;
      headB.visited = true;
      headB = headB.next;
    }    
  }
    
  return null;
};