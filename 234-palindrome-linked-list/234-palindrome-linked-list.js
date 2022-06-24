/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let tmp;
    let fast = head;
    let slow = head;
    let reversedList = [];

    
    while (fast && fast.next) {
        fast = fast.next.next;
        
        reversedList.push(slow.val);
        slow = slow.next;
    }
    
    if (fast) slow = slow.next;
    
    while (slow) {
        if (slow.val !== reversedList.pop()) return false;
        slow = slow.next
    }
    
    return true;
};