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
  const arrayA = [];
  while (headA) {
    arrayA.push(headA);
    headA = headA.next;
  }
  
  while (headB) {
    if (arrayA.includes(headB)) return headB;
    headB = headB.next;
  }
    
  return null;
};