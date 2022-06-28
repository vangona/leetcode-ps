/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowerLimit = prices[0];
    let profit = 0;
    
    prices.forEach(price => {
        if (profit < price - lowerLimit) profit = price - lowerLimit;
        if (lowerLimit > price) lowerLimit = price;
    });
    
    return profit;
};