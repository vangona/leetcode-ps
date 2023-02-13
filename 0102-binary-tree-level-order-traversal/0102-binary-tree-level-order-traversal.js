const levelOrder = (root) => {
  if (!root) return [];
  const result = [[root.val]];
 
  const bfs = (depth, currNode) => {
    if (!currNode) return;
    if (!currNode.left && !currNode.right) return;
    if (!result[depth + 1]) result[depth + 1] = [];

    currNode.left && result[depth + 1].push(currNode.left.val);
    currNode.right && result[depth + 1].push(currNode.right.val);

    bfs(depth + 1, currNode.left);
    bfs(depth + 1, currNode.right);
  };
  
  bfs(0, root)
    
  return result;
};