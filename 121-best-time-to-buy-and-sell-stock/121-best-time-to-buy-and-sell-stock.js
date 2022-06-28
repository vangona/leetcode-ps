/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowerLimit = prices[0];
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - lowerLimit);
        lowerLimit = Math.min(lowerLimit, prices[i]);
    }
    
    return profit;
};