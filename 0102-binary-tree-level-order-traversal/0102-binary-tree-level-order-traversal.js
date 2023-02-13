const levelOrder = (root) => {
  const result = [];
 
  const dfs = (depth, currNode) => {
    if (!currNode) return;
    if (!result[depth]) result[depth] = [];
    result[depth].push(currNode.val);

    dfs(depth + 1, currNode.left);
    dfs(depth + 1, currNode.right);
  };
  
  dfs(0, root)
    
  return result;
};