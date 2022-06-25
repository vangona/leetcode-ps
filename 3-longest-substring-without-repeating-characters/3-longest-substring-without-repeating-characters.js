/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const N = s.length;
    let max = '';
    let substring = '';
    
    for (let i = 0; i < N; i++) {
        if (substring.includes(s[i])) {
            substring = substring.slice(substring.indexOf(s[i]) + 1) + s[i];
        } else {
            substring += s[i];
        }
        
        if (substring.length > max.length) max = substring;
    }
    
    return max.length;
};