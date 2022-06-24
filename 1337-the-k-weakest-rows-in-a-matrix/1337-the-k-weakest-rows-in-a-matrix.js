/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const N = mat.length;
    const answer = Array.from({length:N}, (_, index) => index);
    mat = mat.map(row => row.reduce((acc, curr) => acc + curr));
    
    let tmpMat = 0;
    let tmpAnswer = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (mat[i] > mat[j]) {
                tmpMat = mat[i];
                mat[i] = mat[j];
                mat[j] = tmpMat;
                
                tmpAnswer = answer[i];
                answer[i] = answer[j];
                answer[j] = tmpAnswer;
            } else if (mat[i] === mat[j]) {
                if (answer[i] > answer[j]) {
                    tmpAnswer = answer[i];
                    answer[i] = answer[j];
                    answer[j] = tmpAnswer;
                }
            }
        }
    }
    
    return answer.slice(0, k);
};