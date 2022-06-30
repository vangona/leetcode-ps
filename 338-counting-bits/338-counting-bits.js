/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answer = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n + 1; i++) {
        let number = i;
        while (number) {
            answer[i] += number % 2;
            number = Math.floor(number / 2);
        }
    }
    
    return answer;
};