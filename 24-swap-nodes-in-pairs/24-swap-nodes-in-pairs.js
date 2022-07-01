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
var swapPairs = function(head) {
    if (head === null) return head;
    let fast = head.next;
    let slow = head;
    let tmp = fast ? fast.next : null;
    
    while(fast) {
        if (slow === head) {
            // swap head with next
            head = fast;
            // head.next = old slow
            head.next = slow;
            // slow.next = old fast.next
            slow.next = tmp;
        } else {
            // slow.next = fast.next;
            slow.next = fast.next;
            // slow = fast
            tmp.next = fast;
            // fast.next = slow
            fast.next = slow;
        } 
        
        // tmp = old fast
        tmp = slow;
        // slow = old fast.next
        slow = slow.next;
        // fast = old fast.next.next
        fast = slow ? slow.next : null;
    }
    
    return head;
};