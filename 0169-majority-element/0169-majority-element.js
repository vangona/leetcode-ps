/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const criteria = Math.floor(nums.length / 2);
  const countArr = new Array(Math.max(...nums) + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    countArr[nums[i]] += 1;
    if (countArr[nums[i]] > criteria) return nums[i];
  }
};