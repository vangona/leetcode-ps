/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const answer = [];
    const dfs = (depth, opened, closed, parenthesis) => {
        if (closed > opened) return;
        if (depth === n * 2) {
            if (opened === closed) answer.push(parenthesis);
            return;
        }

        if (opened < n) {
            dfs(depth + 1, opened + 1, closed, parenthesis + '(');
        }
        
        if (opened > 0) {
            dfs(depth + 1, opened, closed + 1, parenthesis + ')');
        };
    }
    
    dfs(0, 0, 0, '');
    
    return answer;
};