- 메모리 사용량이 높았다.
​
## 성능 개선
​
- queue가 매 함수 호출마다 새로 만들어지고 있다는 부분에 집중했다.
- 굳이 그럴 필요 없이 상위 스코프에 queue를 하나 만들어줘도 같은 동작을 수행할 수 있었다.
​
```js
const levelOrder = (root) => {
if (!root) return [];
const result = [[root.val]];
const bfs = (depth, currNode) => {
if (!currNode) return;
if (!currNode.left && !currNode.right) return;
if (!result[depth + 1]) result[depth + 1] = [];
​
currNode.left && result[depth + 1].push(currNode.left.val);
currNode.right && result[depth + 1].push(currNode.right.val);
​
bfs(depth + 1, currNode.left);
bfs(depth + 1, currNode.right);
};
bfs(0, root)
return result;
};
```
​
- 위와 같이 변경해주니 시간과 메모리 사용량이 모두 개선되었다.
- 다만 메모리 사용량이 여전히 높다는 단점이 있었다.
- 재귀함수가 아니라, 반복문을 통해서 할 수 있는 방법이 있을까?