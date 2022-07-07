/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
    const N = nums.length;
    let maxIdx = Math.floor(nums.length / 2);
    let left = 0;
    let right = N - 1;
    maxIdx = nums.indexOf(Math.max(...nums));
    
    left = 0;
    right = N - 1;
    let mid = maxIdx;
    
    if (target === nums[maxIdx]) return maxIdx;
    
    if (maxIdx === nums.length - 1) {
        left = 0;
        right - N - 1;
        mid = Math.floor((left + right) / 2);
        while(left <= right) {
            if (target === nums[mid]) {
                return mid;
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            mid = Math.floor((left + right) / 2);
        }
    } else {    
        if (target === nums[0]) {
            return 0;
        } else if (target < nums[0]) {
            left = mid + 1;
        } else if (target > nums[0]) {
            right = mid;
        }
        console.log(left, right, mid, maxIdx);
        mid = Math.floor((left + right) / 2);

        while(left <= right) {
            if (target === nums[mid]) {
                return mid;
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            mid = Math.floor((left + right) / 2);
        }
    }
    
    return -1;
};