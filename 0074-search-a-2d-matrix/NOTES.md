## 풀이 방법
​
- 이진탐색 2회로 풀이한다.
​
## 리팩토링
​
### Memory Usage와 코드 반복을 줄이자.
​
- 처음에는 반복문으로 만든 이진탐색을 두 번 사용하여 풀이하여 했다.
- 이 때 Memory Usage가 하위 20% 이상으로 올라갈 수가 없었다.
- 이진탐색을 두 번 반복한다는 것을 줄이면 메모리 사용량을 줄일 수 있을거라고 생각했다.
- 또한 같은 이진탐색 코드를 단순히 두 번 사용한다는 것이 코드적인 완성도가 떨어진다고 생각했다.
​
### 이진탐색을 재귀로 분리하자.
​
- 반복문으로 이진탐색을 처리하려고 하니 도중에 탐색중인 배열을 바꾸기가 어려워서, 열에서 찾을 때와 행에서 찾을 때 분기를 태워 처리하려고 하니 코드가 복잡해졌다.
- 이진탐색을 재귀함수로 구현하고 배열을 함수로 만들면 풀이가 쉬워질 수 있다는 생각이 들었다.
​
### 결과물
​
- 따라서 아래와 같은 코드로 코드 반복을 줄이고 메모리 사용량을 하위 20%에서 상위 20%까지 향상시킬 수 있었다.
​
```
const binarySearchRecursive = (arr, target, low, high) => {
let mid = Math.floor((low + high) / 2);
if (low > high || arr[mid] === target) return mid;
if (arr[mid] > target) {
if (mid === 0) return mid;
return binarySearchRecursive(arr, target, low, mid - 1);
} else {
return binarySearchRecursive(arr, target, mid + 1, high);
}
}
​
const searchMatrix = (matrix, target) => {
const m = matrix.length;
const n = matrix[0].length;
const rowArr = Array.from({length : m}, (_, index) => matrix[index][0]);
const rowResult = binarySearchRecursive(rowArr, target, 0, m - 1);
const columnResult = binarySearchRecursive(matrix[rowResult], target, 0, n - 1);
if (matrix[rowResult][columnResult] === target) return true;