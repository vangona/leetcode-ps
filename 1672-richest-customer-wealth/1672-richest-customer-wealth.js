/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealthList = [];
    accounts.forEach(customer => {
        wealthList.push(customer.reduce((acc, curr) => acc + curr));
    })
    
    return Math.max(...wealthList);
};