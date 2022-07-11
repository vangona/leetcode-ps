/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const visited = new Array(nums.length).fill(false);
    const answer = [];
    
    const dfs = (depth, permutation) => {
        if (depth === nums.length) {
            answer.push([...permutation]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            
            permutation.push(nums[i]);
            visited[i] = true;
            dfs(depth + 1, permutation);
            permutation.pop();
            visited[i] = false;
        }
    };
    
    dfs(0, []);
    
    return answer;
};