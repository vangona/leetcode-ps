/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    let mid = Math.floor(nums.length / 2);
    
    if (nums[0] >= target) return 0;
    if (nums[nums.length - 1] < target) return nums.length;
    while (low <= high) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1
        } else if (nums[mid] > target) {
            high = mid - 1;
        }
        mid = Math.floor((high + low) / 2);
    }
    
    return high + 1
};