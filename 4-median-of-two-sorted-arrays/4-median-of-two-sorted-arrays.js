/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = nums1.concat(...nums2);
    const halfIndex = Math.floor(merged.length / 2);
    merged.sort((a, b) => a - b);
    if (merged.length % 2 === 0) {
        return (merged[halfIndex] + merged[halfIndex - 1]) / 2;
    } else {
        return merged[halfIndex];
    }; 
};