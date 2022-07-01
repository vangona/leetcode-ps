/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = (right - left) * Math.min(height[left], height[right]);
    
    while (left < right) {
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    }
    
    return max;
};