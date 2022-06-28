/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const N = nums.length;
    const dpArr = new Array(N).fill(0);
    let max = nums[0];
    dpArr[0] = nums[0];
    
    for (let i = 1; i < N; i++) {
        dpArr[i] = Math.max(nums[i], dpArr[i - 1] + nums[i]);
        if (dpArr[i] > max) max = dpArr[i];
    }
    
    return max;
};