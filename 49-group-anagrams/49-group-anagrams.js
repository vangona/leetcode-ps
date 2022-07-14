/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const indexMap = new Map();
    let indexCount = 0;
    
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join();
        
        if (indexMap.has(sortedStr)) {
            result[indexMap.get(sortedStr)].push(strs[i]);
        } else {
            indexMap.set(sortedStr, indexCount);
            indexCount++;
            
            result.push([strs[i]]);
        }
    }
    
    return result;
};