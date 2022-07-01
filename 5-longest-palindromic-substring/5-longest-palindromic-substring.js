/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let max = '';
    
    for (let i = 0; i < s.length - 1; i++) {
        const currOddMax = checkPalindrom(s, i, i);
        const currEvenMax = checkPalindrom(s, i, i + 1);
        const currMax = currOddMax.length > currEvenMax.length ? currOddMax : currEvenMax;
        
        max = max.length > currMax.length ? max : currMax;
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