/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  const ways = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const visited = Array.from({length : m}, () => new Array(n).fill(false));
  let answer = false;
  
  const _isValidPos = (x, y) => {
    if (x < 0 || y < 0 || x >= n || y >= m) return false;
    return true;
  };
  
  const _backtrack = (myWord, x, y) => {
    if (answer) return;
    if (myWord.length > 15 || myWord.length > word.length) return;
    if (word === myWord) {
      answer = true;
      return;
    }
    
    for(let i = 0; i < 4; i++) {
      const dx = x + ways[i][0];
      const dy = y + ways[i][1];
      if (!_isValidPos(dx, dy)) continue;
      if (visited[dy][dx]) continue;
      
      visited[dy][dx] = true;
      _backtrack(myWord + board[dy][dx], dx, dy);
      visited[dy][dx] = false;
    }
  };
  
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      visited[i][j] = true;
      _backtrack(board[i][j], j, i);
      visited[i][j] = false;
      if (answer) return answer;
    }
  }
  
  return answer;
};