- 내가 사용한 방법을 개선하는 방법으로 우선순위 큐를 사용하는 것을 찾을 수 있었다.
- 우선순위 큐를 활용하면 비교 과정을 최적화할 수 있다.
- 힙이나 배열로 우선순위 큐를 만들어서 비교하는 연산을 최소화하는 것이다.
- 현재 주어진 원소들은 연결리스트이며 val과 node를 모두 저장해야하기 때문에 배열로 만드는 것보다는 최소 힙이 나았다.
### 병합정렬의 병합
- 답이 나오지 않아서 찾아보고 깨달았는데, 병합 정렬로 접근했지만 실제로 병합하는 과정에서는 병합 정렬의 병합을 사용하지 않고 있었다.
- 이미 쪼갠 뒤, 정렬이 된 연결리스트이기 때문에 둘 씩 병합시키는 과정만 있으면 되는 간단한 문제였다.
- 한 번에 모두 병합하려는 생각이 만든 참사였다.
- 병합은 문제없이 할 수 있었는데, 이제 중요한 것은 어떻게 둘 씩 병합을 시키느냐였다.
​
```js
const mergeKLists = (lists) => {
const merge = (left, right) => {
const resultHead = new ListNode(0);
let currHead = resultHead;
while (left && right) {
if (left.val < right.val) {
currHead.next = left;
left = left.next;
} else {
currHead.next = right;
right = right.next;
}
currHead = currHead.next;
}
​
currHead.next = left ? left : right;
return resultHead.next;
};
return lists.reduce((acc, curr) => merge(acc, curr), new ListNode(-10002)).next;
};
```
​
- 처음 선택한 방법은 하나씩 병합하는 것이었다.
- 이를 통해 실행시간을 40%까지 올렸지만, 이는 분할정복을 제대로 사용하지 못하는 방법이었다.
- 둘씩 병합하는 방법을 고안해내는 것이 필요했다.
​
- 개선 결과 : 600ms => 260ms
​
### 세번째 성능개선
- 이제 둘 씩 병합해야했다.
- 이를 위해서는 반씩 타노스 시켜야했다.