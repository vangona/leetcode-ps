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
- 이를 위해서는 반씩 타노스 시켜야했다