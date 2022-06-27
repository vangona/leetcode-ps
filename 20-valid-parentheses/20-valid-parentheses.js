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
                if (parenthesis[parenthesis.length - 1] !== '(') return false;
                parenthesis.pop();
                break;
            case '}' :
                if (parenthesis[parenthesis.length - 1] !== '{') return false;
                parenthesis.pop();
                break;
            case ']' :
                if (parenthesis[parenthesis.length - 1] !== '[') return false;
                parenthesis.pop();
                break;
            default :
                parenthesis.push(s[i]);
        }
    }
    
    if (parenthesis.length) {
        return false
    } else {
        return true;
    };
};