/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const answer = [];
  
  const getSubset = (arr, selectNumber) => {
    const result = [];
    if (selectNumber === 0) return [[]];
    if (selectNumber === 1) return arr.map(el => [el]);
    
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const subset = getSubset(rest, selectNumber - 1);
      result.push(...subset.map(el => [fixed, ...el]));
    });
    
    return result;
  }
  
  for (let i = 0; i <= nums.length; i++) {
    answer.push(...getSubset(nums, i));
  }
  
  return answer;
};