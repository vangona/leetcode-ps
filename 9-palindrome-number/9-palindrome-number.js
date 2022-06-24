/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversedX = x.toString().split('').reverse().join('') * 1;
    if (x === reversedX) return true;
    return false;
};