/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    if (nums[0] > 0) return [];
    
    let answer = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) answer.push([nums[i], nums[j], nums[k]]);
            
            if (sum < 0) {
                do {
                    j++;
                }
                while (nums[j] === nums[j - 1]) ;
            } else {
                do {
                    k--;
                }
                while (nums[k] === nums[k + 1]) ;
            }
        }
    }
    
    return answer;
};