/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let index = 0;
  const countArr = [0, 0, 0];
  
  nums.forEach(num => {
    countArr[num]++;
  });
    
  for (let i = 0; i < 3; i++) {
    while(countArr[i]-- > 0) {
      nums[index] = i;
      index++;
    }
  }
};