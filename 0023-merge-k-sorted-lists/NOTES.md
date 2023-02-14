```js
const mergeKLists = (lists) => {
const k = lists.length;
const resultHead = new ListNode(0, null);
let currNode = resultHead;
​
while (true) {
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
}
return resultHead.next;
};
```