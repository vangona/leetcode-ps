const majorityElement = (nums) => {
  let n = nums.length;
  let candidate = nums[0];
  let count = 0;
  
  nums.forEach(num => {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else {
      count += num === candidate ? 1 : -1;
    }
  });

  return candidate;
};