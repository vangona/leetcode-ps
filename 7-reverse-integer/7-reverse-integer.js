/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const MAX = Math.pow(2, 31) - 1;
    const MIN = -Math.pow(2, 31);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    if (x < 0) {
        if (reversed * -1 < -Math.pow(2, 31)) return 0;
        return reversed * -1;
    } else {
        if (reversed * 1 > Math.pow(2, 31) - 1) return 0;
        return reversed * 1;
    }
};