const levelOrder = (root) => {
  const result = [];
 
  const bfs = (depth, currNode) => {
    if (!currNode) return;
    if (!result[depth]) result[depth] = [];
    result[depth].push(currNode.val);

    bfs(depth + 1, currNode.left);
    bfs(depth + 1, currNode.right);
  };
  
  bfs(0, root)
    
  return result;
};