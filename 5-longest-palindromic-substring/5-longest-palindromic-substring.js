/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let max = '';
    
    for (let i = 0; i < s.length - 1; i++) {
        const odd = checkPalindrom(s, i, i);
        const even = checkPalindrom(s, i, i + 1);
        const localMax = odd.length > even.length ? odd : even;
        
        max = max.length > localMax.length ? max : localMax;
    }
    
    return max;
};
    
function checkPalindrom(s, start, end) {
    while (start >= 0 && end <= s.length -1 && s[start] === s[end]) {
        start--;
        end++;
    }
    
    return s.slice(start + 1, end);
}