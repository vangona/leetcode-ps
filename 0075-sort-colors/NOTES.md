# 문제 풀이
​
## 문제 이해
​
- red, white, blue 색들의 배열을 받는다.
- in-place로 이들을 정렬해야한다.
- 인접한 색상들은 빨강, 하양, 파랑 순서로 같은 색상이어야한다.
- 각각의 색상은 빨강 : 0, 하양 : 1, 파랑 : 2이다.
- 라이브러리나 내장 정렬 메서드 없이 풀이해야한다.
- one-pass 알고리즘과 상수의 추가 공간 복잡도만을 사용하여 풀어보기.
​
## 문제 분석
​
- 0, 1, 2로 이루어진 숫자 배열을 정렬하는 것이다.
- 숫자의 범위가 제한되어있으므로 단순한 정렬 알고리즘보다 세련되게 할 수 있다고 생각된다.
- 계수 정렬로 풀이하면 0, 1, 2만을 사용한 추가 배열로 in-place하게 정렬할 수 있다.
​
## 문제 풀이
​
```js
const sortColors = (nums) => {
const countArr = [0, 0, 0];
nums.forEach(num => {
countArr[num]++;
});
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