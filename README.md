# leetcode-ps
leetcode 문제 풀이 기록

![](https://tokei.rs/b1/github/vangona/leetcode-ps)
![](https://tokei.rs/b1/github/vangona/leetcode-ps?category=files)  

# 최근 풀이

## 문제

### 74. Search a 2D Matrix[Medium]

You are given an m x n integer matrix matrix with the following two properties:  

Each row is sorted in non-decreasing order.  
The first integer of each row is greater than the last integer of the previous row.  
Given an integer target, return true if target is in matrix or false otherwise.  

You must write a solution in O(log(m * n)) time complexity.  

### Example 1:
![image](https://user-images.githubusercontent.com/69471032/216325929-8a42a460-9b9c-47b7-bc98-e8a120f1b93c.png)

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3  
Output: true  

### Example 2:
![image](https://user-images.githubusercontent.com/69471032/216325948-21e6dba9-b3d9-457c-9f82-fac0788b40e6.png)

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13  
Output: false  

### Constraints:

m == matrix.length  
n == matrix[i].length  
1 <= m, n <= 100  
-104 <= matrix[i][j], target <= 104  

## 풀이 방법

- 이진탐색 2회로 풀이한다.

### 풀이 결과

- Runtime : 72ms (47.67%)
- Memory Usage : 42.7mb (15.07%)
- 3회 평균 Runtime 75ms, Memory Usage 42.7mb

```js
const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;
  
  let rowLeft = 0;
  let rowRight = m - 1;
  let rowMid = Math.floor((rowLeft + rowRight) / 2);
  
  while(rowLeft < rowRight) {
    if (matrix[rowMid][0] === target) return true;
    
    if (matrix[rowMid][0] > target) {
      if (rowMid === 0) break;
      rowRight = rowMid - 1;
    } else {
      if (matrix[rowMid + 1][0] > target) break;
      rowLeft = rowMid + 1;
    }
    
    rowMid = Math.floor((rowLeft + rowRight) / 2);
  }
  
  let columnLeft = 0;
  let columnRight = n - 1;
  let columnMid = Math.floor((columnLeft + columnRight) / 2);

  while(columnLeft <= columnRight) {
    if (matrix[rowMid][columnMid] === target) return true;
    
    if (matrix[rowMid][columnMid] > target) {
      columnRight = columnMid - 1;
    } else {
      columnLeft = columnMid + 1;
    }
    
    columnMid = Math.floor((columnLeft + columnRight) / 2);
  }
  
  return false;
};
```

## 리팩토링

### Memory Usage와 코드 반복을 줄이자.

= 처음에는 반복문으로 만든 이진탐색을 두 번 사용하여 풀이하여 했다.
- 이 때 Memory Usage가 하위 20% 이상으로 올라갈 수가 없었다.
- 이진탐색을 두 번 반복한다는 것을 줄이면 메모리 사용량을 줄일 수 있을거라고 생각했다.
- 또한 같은 이진탐색 코드를 단순히 두 번 사용한다는 것이 코드적인 완성도가 떨어진다고 생각했다.

### 이진탐색을 재귀로 분리하자.

- 반복문으로 이진탐색을 처리하려고 하니 도중에 탐색중인 배열을 바꾸기가 어려워서, 열에서 찾을 때와 행에서 찾을 때 분기를 태워 처리하려고 하니 코드가 복잡해졌다.
- 이진탐색을 재귀함수로 구현하고 배열을 함수로 만들면 풀이가 쉬워질 수 있다는 생각이 들었다.

### 리팩토링 결과

- 따라서 아래와 같은 코드로 코드 반복을 줄이고 메모리 사용량을 하위 20%에서 상위 20%까지 향상시킬 수 있었다.

- Runtime : 50ms (99.59%)
- Memory Usage : 41.7mb (92.09%)
- 3회 평균 Runtime 59ms, Memory Usage 42.05mb

```js
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

const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowArr = Array.from({length : m}, (_, index) => matrix[index][0]);
 
  const rowResult = binarySearchRecursive(rowArr, target, 0, m - 1);
  const columnResult = binarySearchRecursive(matrix[rowResult], target, 0, n - 1);
  
  if (matrix[rowResult][columnResult] === target) return true;
  return false;
};
```
