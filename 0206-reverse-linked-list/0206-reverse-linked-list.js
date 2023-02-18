const reverseList = (head) => { 
  if (head === null) return head;
  let newHead;
  const connectRecursive = (currNode, prevNode) => {
    if (currNode === null) return;
    if (currNode.next === null) newHead = currNode;
    
    connectRecursive(currNode.next, currNode);
    currNode.next = prevNode;
  }
  connectRecursive(head, null);
  
  return newHead;
};