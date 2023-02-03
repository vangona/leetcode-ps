/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
  let redPointer = 0;
  let bluePointer = nums.length - 1;
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