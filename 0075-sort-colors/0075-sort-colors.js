/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let redCount = 0;
  let whiteCount = 0;
  let blueCount = 0;
  
  nums.forEach(num => {
    if(num === 0) redCount++;
    if(num === 1) whiteCount++;
    if(num === 2) blueCount++;
  });
    
  nums.forEach((_, index) => {
    if (redCount-- > 0) {
      nums[index] = 0;
      return;
    }
    
    if (whiteCount-- > 0) {
      nums[index] = 1;
      return;
    }
    
    if (blueCount-- > 0) nums[index] = 2;
  });
};