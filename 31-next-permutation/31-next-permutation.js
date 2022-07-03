/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let targetIndex = -1;
    
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            targetIndex = i - 1;
            break;
        }
    }
    
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[targetIndex]) {
            let tmp = nums[targetIndex];
            nums[targetIndex] = nums[i];
            nums[i] = tmp;
            break;
        }
    }
    
    let splicedArr = nums.splice(targetIndex + 1);
    splicedArr.sort((a, b) => a - b);
    splicedArr.forEach(ele => {
       nums.push(ele); 
    });
};