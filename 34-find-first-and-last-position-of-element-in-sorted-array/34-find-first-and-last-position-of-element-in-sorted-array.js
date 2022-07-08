/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var searchRange = function(nums, target) {
    const N = nums.length;

    const _binarySearch = () => {
        let left = 0;
        let right = N - 1;
        let mid = Math.floor((left + right) / 2);

        while (left <= right) {            
            if (nums[mid] === target) {
                return mid;
            };

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            
            mid = Math.floor((left + right) / 2);
        }

        return false;
    };

    const _findMin = (targetIdx) => {
        let left = 0;
        let right = targetIdx;
        let mid = Math.floor((left + right) / 2);
        let min = targetIdx;
            
        while (left <= right) {
            if (nums[mid] === target) {
                if (min > mid) min = mid;
                right = mid - 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            
            mid = Math.floor((left + right) / 2);
        }
        
        return min;
    };

    const _findMax = (targetIdx) => {
        let left = targetIdx;
        let right = N - 1;
        let mid = Math.floor((left + right) / 2);
        let max = targetIdx;
            
        while (left <= right) {
            if (nums[mid] === target) {
                if (max < mid) max = mid;
                right = N - 1;
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            
            mid = Math.floor((left + right) / 2);
        }
        
        return max;
    };
    
    
    const targetIdx = _binarySearch();    
    if (typeof targetIdx === 'boolean') return [-1, -1];

    const min = _findMin(targetIdx);
    const max = _findMax(targetIdx);
    
    return [min, max];
};