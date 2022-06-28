/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dpArr = new Array(n + 1);
    dpArr[1] = 1;
    dpArr[2] = 2;
    
    for (let i = 3; i < n + 1; i++) {
        dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
    }
    
    return dpArr[n];
};