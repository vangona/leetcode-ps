# 문제 분석
- 연결리스트가 주어질 때, 반대로 연결하라.
- 순회와 재귀 두가지의 방법이 가능한데, 두 가지 모두 구현해보아라
​
# 문제 풀이
## 재귀 풀이
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
let newHead;
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