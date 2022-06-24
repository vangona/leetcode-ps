/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const answer = [];
    for (let i = 1; i < n + 1; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                answer.push("FizzBuzz");
            } else {
                answer.push("Fizz");
            }
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push((i).toString());        
        }
    }
    
    return answer;
};