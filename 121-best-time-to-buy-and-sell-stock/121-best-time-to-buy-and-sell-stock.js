/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;
    let lowerLimit = prices[0];
    let profit = 0;
    
    for (let i = 1; i < N; i++) {
        if (profit < prices[i] - lowerLimit) {
            profit = prices[i] - lowerLimit;
        } else if (prices[i] < lowerLimit) {
            lowerLimit = prices[i];
        }
    }
    
    return profit;
};