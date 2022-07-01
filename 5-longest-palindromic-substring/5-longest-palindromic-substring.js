/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const N = s.length;
    const dp = Array.from({length: N}, (_, index) => s[index]);
    
    for (let i = 1; i < N; i++) {
        for (let j = i - dp[i - 1].length + 1; j >= 0 ; j--) {
            const substring = s.slice(j, i + 1);
            if (isPalindrom(substring) && substring.length > dp[i - 1].length) {
                // palindrom이고, max 값이라면 dp 값을 갱신
                dp[i] = substring;    
                break;
            } else {
                // palindrom이 아니거나 max 값보다 작다면 dp 값을 유지함.
                dp[i] = dp[i - 1];
            }
        }
    }
    
    return dp[N - 1];
};
    
function isPalindrom(string) {
    let start = 0;
    let end = string.length - 1;
    
    while (start < end) {
        if (string[start] !== string[end]) return false;
        start++;
        end--;
    }
    
    return true;
}