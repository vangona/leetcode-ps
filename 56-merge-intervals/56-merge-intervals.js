/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    let currIntervalEnd = -1;
    let currIntervalStart = -1;
         
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > currIntervalEnd) {
            if (i > 0) result.push([currIntervalStart, currIntervalEnd]);
            currIntervalStart = intervals[i][0];
        }
        
        currIntervalEnd = Math.max(intervals[i][1], currIntervalEnd);
    }
    
    result.push([currIntervalStart, currIntervalEnd]);
    
    return result;
};