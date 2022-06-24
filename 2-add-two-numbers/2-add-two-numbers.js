/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let answerNode = new ListNode(0);
    let calculatedNum = 0;
    const answerHead = answerNode;

    while (l1 || l2) {
        calculatedNum = answerNode.val + (l1 && l1.val) + (l2 && l2.val);
        if (calculatedNum < 10) {
            if ((l1 && l1.next) || (l2 && l2.next)) answerNode.next = new ListNode(0);         
            answerNode.val = calculatedNum;
        } else {
            answerNode.next = new ListNode(1);            
            answerNode.val = calculatedNum - 10;
        }
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        answerNode = answerNode.next;
    }
    
    return answerHead;
};