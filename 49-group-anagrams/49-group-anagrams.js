/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = [];
    const indexHash = {};
    let index = 0;
    
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort();
        let currPosition = indexHash;
        
        for (let j = 0; j < sortedStr.length - 1; j++) {
            if (!currPosition[sortedStr[j]]) {
                currPosition[sortedStr[j]] = {
                    index: undefined, 
                    hash: {},
                };
            }
            
            currPosition = currPosition[sortedStr[j]].hash;
        }
        
        if (currPosition[sortedStr[sortedStr.length - 1]]) {
            if (typeof currPosition[sortedStr[sortedStr.length - 1]]["index"] === 'number') {
                index = currPosition[sortedStr[sortedStr.length - 1]]["index"]; 
            } else {
                currPosition[sortedStr[sortedStr.length - 1]].index = result.length;  
                index = result.length;
                result.push([]);
            }
        } else {
            currPosition[sortedStr[sortedStr.length - 1]] = {
                index: result.length,
                hash: {},
            }
            
            index = result.length;
            result.push([]);
        }
        
        result[index].push(strs[i]);
    }
    
    return result;
};