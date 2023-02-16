# 118. Pascal's Triangle
## 문제 분석
- 열의 개수를 받으면 거기에 맞는 파스칼 삼각형을 반환하는 함수를 만드렁라
## 문제 풀이
- 단순히 반복문을 돌면서 이전 층의 수를 더하면 풀 수 있는 문제였다.
- 최적화를 고민해봤는데, 파스칼의 삼각형은 좌우가 대칭이기 때문에 반복문을 반으로 줄일 수 있었다.