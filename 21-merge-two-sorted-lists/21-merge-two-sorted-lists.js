/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) return list1;
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    let answerHead;
    if (list1.val < list2.val) {
        answerHead = list1;
        list1 = list1.next;
    } else {
        answerHead = list2;
        list2 = list2.next;
    }
    
    let answerList = answerHead;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            answerList.next = list1;
            list1 = list1.next;
        } else {
            answerList.next = list2;
            list2 = list2.next;
        }
        
        answerList = answerList.next;
    }
    
    if (list1 === null) answerList.next = list2;
    if (list2 === null) answerList.next = list1;
    
    return answerHead;
};