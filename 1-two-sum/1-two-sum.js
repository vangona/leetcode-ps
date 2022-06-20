/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer = [];
    const N = nums.length;
    
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if ((nums[i] + nums[j]) === target) {
                answer = [i, j];
                break;
            }
        }
    }
    
    return answer;
};