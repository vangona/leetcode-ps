nums.forEach((_, index, arr) => {
if(index < countArr[0]) {
arr[index] = 0;
return;
}
if(index < countArr[0] + countArr[1]) {
arr[index] = 1;
return;
}
arr[index] = 2;
});
};
```
​
- 첫 풀이는 위와 같았다.
- 다만 Runtime이나 Memory Usage로 보아서 최적의 풀이 같지는 않았다.
- 또한 one-pass 알고리즘이 아닌 two-pass 알고리즘이기 때문에 개선이 가능하다고 판단했다.
​
## 두번째 풀이
​
- red 갯수와 blue 갯수의 Two Pointer로 접근할 수 있다고 생각했다.
- 그렇게 생각하고 Two Pointer를 찾다보니, 숫자 변경을 위한 Slow runner와 탐색을 위한 Fast runner를 사용하는 것이 더 적합한 방법이라는 생각이 들었다.
- Fast runner가 0, 1, 2를 계수하고 0이 나올때마다 이동하고,