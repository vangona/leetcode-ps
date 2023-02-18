const connectRecursive = (currNode, prevNode) => {
if (currNode.next === null) {
newHead = currNode;
currNode.next = prevNode;
return;
}
connectRecursive(currNode.next, currNode);
currNode.next = prevNode;
}
connectRecursive(head, null);
return newHead;
};
```
​
- 재귀적으로 풀이했다.
​
## 순회 풀이
```js
/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {ListNode}
*/
const reverseList = (head) => {
if (head === null) return head;
​
let currNode = head;
let next;
let prev = null;
​
while (currNode) {
next = currNode.next;
currNode.next = prev;
prev = currNode;
currNode = next;
}
return prev;
};
```