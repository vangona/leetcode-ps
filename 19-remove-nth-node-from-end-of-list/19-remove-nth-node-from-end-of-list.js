/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow_left = head;
    let slow_right = head ? head.next ? head.next.next : head.next : null;
    let count = 0;
    
    while (fast) {
        fast = fast.next;
        count++;
        
        if (count > n + 1) {
            slow_left = slow_left.next;
            slow_right = slow_right ? slow_right.next : null;
        }
    }
        
    if (count === n) {
        head = slow_left.next;
    } else {
        slow_left.next = slow_right;
    }
    return head;
};