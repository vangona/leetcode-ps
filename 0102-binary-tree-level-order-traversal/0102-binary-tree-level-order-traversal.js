const levelOrder = (root) => {
  const result = [];
 
  const bfs = (depth, queue) => {
    while(queue.length > 0) {
      const currNode = queue.shift();
      if (!currNode) continue;

      if (result[depth]) {
        result[depth].push(currNode.val)
      } else {
        result[depth] = [currNode.val];
      };

     bfs(depth + 1, [currNode.left, currNode.right]);
    }    
  };
  
  bfs(0, [root])
    
  return result;
};