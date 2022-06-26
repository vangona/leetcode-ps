/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let MIN_LENGTH = 201
    strs.forEach(str => {
        if (str.length < MIN_LENGTH) MIN_LENGTH = str.length;
    });
    
    let prefix = '';
    let currChar = '';
    for (let i = 0; i < MIN_LENGTH; i++) {
        currChar = strs[0][i];
        
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currChar) return prefix; 
        }
        
        prefix += currChar;
    }
    
    return prefix;
};