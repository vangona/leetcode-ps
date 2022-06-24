/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    let diff = 0;
    const N = nums.length;
    
    for (let i = 0; i < N; i++) {
        diff = target - nums[i];
        if (numsMap.has(diff)) return [numsMap.get(diff), i];
        
        numsMap.set(nums[i], i);
    }
};