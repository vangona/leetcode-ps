/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const N = s.length;
    const parenthesis = [];
    
    for (let i = 0; i < N; i++) {
        switch (s[i]) {
            case ')' :
                if (parenthesis.pop() !== '(') return false;
                break;
            case '}' :
                if (parenthesis.pop() !== '{') return false;
                break;
            case ']' :
                if (parenthesis.pop() !== '[') return false;
                break;
            default :
                parenthesis.push(s[i]);
        }
    }
    
    return parenthesis.length ? false : true;
};