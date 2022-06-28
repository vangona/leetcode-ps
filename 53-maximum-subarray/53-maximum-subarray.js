/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const N = nums.length;
    const dpArr = Array.from({length: N}, (_, i) => nums[i]);
    
    for (let i = 1; i < N; i++) {
        if (dpArr[i - 1] > 0) dpArr[i] += dpArr[i - 1];
    }
    
    return Math.max(...dpArr);
};