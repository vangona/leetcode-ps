/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let first = 1;
    let second = 2;
    for (let i = 0; i < n - 2; i++) {
        let tmp = second;
        second += first;
        first = tmp;
    }
    
    if (n === 1) return 1;
    return second;
};