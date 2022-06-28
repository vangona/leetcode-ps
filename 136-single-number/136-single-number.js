/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer = 0;
    nums.forEach(num => {
        answer = answer ^ num;
    });
    
    return answer;
};