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
  const visited = [];
  let result = false;
  
  while (head && !result) {
    if (visited.includes(head)) result = true;
    visited.push(head);
    head = head.next;
  }
  
  return result;
};