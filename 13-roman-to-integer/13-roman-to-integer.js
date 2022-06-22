/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let prevNum = 0;
    const N = s.length;
    const numbers = {
        M : 1000,
        D : 500,
        C : 100,
        L : 50,
        X : 10,
        V : 5,
        I : 1,
    }
    
    for (let i = 0; i < N; i++) {
        answer += numbers[s[i]];
        if (numbers[s[i]] > prevNum) answer -= 2 * prevNum;
        prevNum = numbers[s[i]];
    }
    
    return answer;
};