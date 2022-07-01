/**
 * @param {string} digits
 * @return {string[]}
 */
const letterMap = {
    "2" : ["a", "b", "c"],
    "3" : ["d", "e", "f"],
    "4" : ["g", "h", "i"],
    "5" : ["j", "k", "l"],
    "6" : ["m", "n", "o"],
    "7" : ["p", "q", "r", "s"],
    "8" : ["t", "u", "v"],
    "9" : ["w", "x", "y", "z"]
}

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    
    let answer = [];
    function dfs(depth, string) {
        if (depth === digits.length) {
            answer.push(string);
            return;
        }
        
        for (let i = 0; i < letterMap[digits[depth]].length; i++) {
            dfs(depth + 1, string + letterMap[digits[depth]][i]);
        }
     } 

    dfs(0, '');
    
    return answer;
};