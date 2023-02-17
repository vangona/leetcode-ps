const getIntersectionNode = (headA, headB)=> { 
  if (!headA || !headB) return null;
  let listA = headA;
  let listB = headB;
  
  while (listA !== listB) {
    listA = listA ? listA.next : headB;
    listB = listB ? listB.next : headA;
  }
    
  return listA;
};