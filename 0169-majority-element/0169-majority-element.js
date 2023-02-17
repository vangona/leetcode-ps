const majorityElement = (nums) => {
  let n = nums.length;
  let candidate = nums[0];
  let count = 0;
  
  for (let i = 0; i < n; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
      continue;
    } 
    
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};