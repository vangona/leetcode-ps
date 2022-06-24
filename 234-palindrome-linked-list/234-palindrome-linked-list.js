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
    let currNode = head;
    const list = [];
    
    while (currNode) {
        list.push(currNode.val);
        currNode = currNode.next;
    }
    
    const N = list.length;
    const reversedList = [...list].reverse();
    for (let i = 0; i < N; i++) {
        if (list[i] !== reversedList[i]) return false;
    }
    
    return true;
};