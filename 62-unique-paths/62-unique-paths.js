/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
    const dp = Array.from({length: m}, () => Array.from({length: n}, () => 1));
 
    // x 좌표 방문
    for (let i = 0; i < n; i++) {
        // y 좌표 방문
        for (let j = 1; j < m; j++) {
            if (j > 0 && i > 0) {
                dp[j][i] = dp[j - 1][i] + dp[j][i - 1];            
            } else if (i === 0) {
                dp[j][i] = dp[j - 1][i];
            }
        } 
    }
  
    return dp[m - 1][n - 1];
};