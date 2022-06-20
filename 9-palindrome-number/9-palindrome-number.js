/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversed = x.toString().split('');
    if (reversed.reverse().join('') === x.toString()) return true;
    return false;
};