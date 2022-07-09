/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const checkArr = [];
    const startNumVisited = new Array(201);

    const _backtrack = (left, combination, from) => {
        if (left === 0) {
            result.push([...combination]);
            return;
        }
        
        for (let i = from; i < candidates.length; i++) {
            const newLeft = left - candidates[i];
            if (newLeft < 0 || startNumVisited[candidates[i]]) continue;
            
            combination.push(candidates[i]);
            _backtrack(newLeft, combination, i);
            combination.pop();
            
            if (!combination.length) startNumVisited[candidates[i]] = true;
        }
    }
    
    _backtrack(target, [], 0);
    
    return result;
};