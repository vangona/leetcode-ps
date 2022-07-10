/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
    const N = nums.length;
    const dp = new Array(N).fill(N + 1);
    dp[0] = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 1; j <= nums[i] && i + j < N; j++) {
            dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
        }
    }
    
    return dp[N - 1];
};