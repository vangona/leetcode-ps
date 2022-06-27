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
    if (!list1 && !list2) return list1;
    if (!list1) return list2;
    if (!list2) return list1;
    
    let answerHead;
    if (list1.val < list2.val) {
        answerHead = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        answerHead = new ListNode(list2.val);
        list2 = list2.next;
    }
    
    let answerList = answerHead;

    while (list1 || list2) {
        const firstListValue = list1 ? list1.val : 101;
        const secondListValue = list2 ? list2.val : 101;
        if (firstListValue < secondListValue) {
            answerList.next = list1;
            answerList = answerList.next;
            list1 = list1 && list1.next;
        } else {
            answerList.next = list2;
            answerList = answerList.next;
            list2 = list2 && list2.next;
        }
    }
    
    return answerHead;
};