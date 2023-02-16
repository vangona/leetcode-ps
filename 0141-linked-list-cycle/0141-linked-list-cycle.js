/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let result = false;
  
  while (head && !result) {
    if (head.visited) result = true;
    head.visited = true;
    head = head.next;
  }
  
  return result;
};