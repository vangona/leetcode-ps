/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array.from({length: m}, () => Array.from({length: n}, () => 0));
    
    dp[0][0] = grid[0][0];
    
    for (let i = 1; i < m; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }
    
    for (let i = 1; i < n; i++) {
        dp[0][i] = grid[0][i] + dp[0][i - 1];
    }
 
    // x 좌표 방문
    for (let i = 1; i < n; i++) {
        // y 좌표 방문
        for (let j = 1; j < m; j++) {
            if (j > 0 && i > 0) {
                dp[j][i] = Math.min(dp[j - 1][i], dp[j][i - 1]) + grid[j][i]; 
            }
        } 
    }
    
    console.log(dp);
    
    return dp[m - 1][n - 1];
};