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
​
- 메모리 사용량이 상위 0.35%까지 갈 수 있었지만 실행시간이 여전히 하위 15%에 머물렀다.
- 완전탐색으로는 실행시간을 개선하기 어려워보였다.
​
## 성능시간 개선시키기
- 성능시간을 개선시키기 위해서는 완전탐색이라는 접근법에서 벗어나야한다는 생각이 들었다. (나중에 찾아보니 성능이 더 나쁜, 일단 다 추가하고 정렬하는 방법도 있었다.)
### 우선순위 큐 활용하기
- 내가 사용한 방법을 개선하는 방법으로 우선순위 큐를 사용하는 것을 찾을 수 있었다.
- 우선순위 큐를 활용하면 비교 과정을 최적화할 수 있다.
- 힙이나 배열로 우선순위 큐를 만들어서 비교하는 연산을 최소화하는 것이다.
- 현재 주어진 원소들은 연결리스트이며 val과 node를 모두 저장해야하기 때문에 배열로 만드는 것보다는 최소 힙이 나았다.
### 병합정렬의 병합
- 답이 나오지 않아서 찾아보고 깨달았는데, 병합 정렬로 접근했지만 실제로 병합하는 과정에서는 병합 정렬의 병합을 사용하지 않고 있었다.
- 이미 쪼갠 뒤, 정렬이 된 연결리스트이기 때문에 둘 씩 병합시키는 과정만 있으면 되는 간단한 문제였다.
- 한 번에 모두 병합하려는 생각이 만든 참사였다.
- 병합은 문제없이 할 수 있었는데, 이제 중요한 것은 어떻게 둘 씩 병합을 시키느냐였다.