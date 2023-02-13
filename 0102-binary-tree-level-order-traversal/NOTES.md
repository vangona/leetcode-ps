# 102. Binary Tree Level Order Tarversal
## 문제 접근
- BFS로 간단히 풀 수 있다고 생각하고 접근했다.
​
```js
const levelOrder = (root) => {
const result = [];
const bfs = (depth, queue) => {
while(queue.length > 0) {
const currNode = queue.shift();
if (!currNode) continue;
​
if (result[depth]) {
result[depth].push(currNode.val)
} else {
result[depth] = [currNode.val];
};
​
bfs(depth + 1, [currNode.left, currNode.right]);
}
};
bfs(0, [root]);
return result;
};
```
​
- 위와 같은 식으로 정답을 만들 수 있었다.
- 메모리 사용량이 높았다.
​
## 성능 개선
​
- queue가 매 함수 호출마다 새로 만들어지고 있다는 부분에 집중했다.
- 굳이 그럴 필요 없이 상위 스코프에 queue를 하나 만들어줘도 같은 동작을 수행할 수 있었다.