​
- 위와 같이 변경해주니 시간과 메모리 사용량이 모두 개선되었다.
- 다만 메모리 사용량이 여전히 높다는 단점이 있었다.
​
## 리팩토링
​
```js
const levelOrder = (root) => {
const result = [];
const dfs = (depth, currNode) => {
if (!currNode) return;
if (!result[depth]) result[depth] = [];
result[depth].push(currNode.val);
​
dfs(depth + 1, currNode.left);
dfs(depth + 1, currNode.right);
};
dfs(0, root)
return result;
};
```
​
- 불필요한 코드를 제거해서 간단히 만들어서 성능을 높일 수 있었다.