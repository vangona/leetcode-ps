/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [];
    const N = nums1.length + nums2.length;
    const halfLength = Math.floor(N / 2);
    let firstPointer = 0;
    let secondPointer = 0;
    
    let evenFlag = false;
    if (N % 2 === 0) evenFlag = true;
    
    while (firstPointer < nums1.length && secondPointer < nums2.length) {
        if (nums1[firstPointer] <= nums2[secondPointer]) {
            merged.push(nums1[firstPointer]);
            firstPointer++;
        } else {
            merged.push(nums2[secondPointer]);
            secondPointer++;            
        }
    }
    
    merged = merged.concat(nums1.slice(firstPointer), nums2.slice(secondPointer));
    
    if (evenFlag) {
        return (merged[halfLength] + merged[halfLength - 1]) / 2;
    } else {
        return merged[halfLength];
    }
};