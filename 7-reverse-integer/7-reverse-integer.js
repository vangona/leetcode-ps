/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = Math.abs(x).toString().split('');
    if (str[str.length - 1] === '0') str.pop();
    const reversed = str.reverse().join('');
    
    if (x < 0) {
        if (reversed * -1 < -Math.pow(2, 31)) return 0;
        return reversed * -1;
    } else {
        if (reversed * 1 > Math.pow(2, 31) - 1) return 0;
        return reversed * 1;
    }
};