/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  const k = lists.length;
  const resultHead = new ListNode(0, null);
  let currNode = resultHead;
  
  ListNode.size = (node) => {
    let result = 0;
    while (node) {
      node = node.next;
      result++;
    }
    return result;
  };
  
  let leftNum = lists.reduce((acc, curr) => acc + ListNode.size(curr), 0);

  while (leftNum) {
    let minVal = 10001;
    let headIndex = 0;
    
    for (let i = 0; i < k; i++) {
      if (!lists[i]) continue;
      
      if (minVal > lists[i].val) {
        headIndex = i;
        minVal = lists[i].val;
      }
    }
    
    if (!lists[headIndex]) break;
    
    currNode.next = lists[headIndex];
    currNode = currNode.next;
    lists[headIndex] = lists[headIndex].next;
    leftNum--;
  }
  
  return resultHead.next;
};