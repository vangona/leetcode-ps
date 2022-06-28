/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const N = nums.length;
    const dpArr = Array.from({length: N}, (_, i) => nums[i]);
    
    for (let i = 1; i < N; i++) {
        dpArr[i] = Math.max(dpArr[i], dpArr[i] + dpArr[i - 1]);
    }
    
    return Math.max(...dpArr);
};