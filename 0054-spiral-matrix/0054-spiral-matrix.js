/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const answer = [];
    const m = matrix.length;
    const n = matrix[0].length;
    const visited = Array.from({length : m}, () => new Array(n).fill(false));
    const moveDir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    const isValidNextPos = (newX, newY) => {
        if (newX < 0 || newX >= n) return false;
        if (newY < 0 || newY >= m) return false;
        if (visited[newY][newX]) return false;
        return true;
    }
    
    const changeMoveDir = (currDirNum) => {
        if (currDirNum === 3) return 0;
        return currDirNum + 1;
    }
    
    const getNextPos = (x, y, dirNum) => {
        return [x + moveDir[dirNum][0], y + moveDir[dirNum][1]];
    }
    
    const _spiralMove = (x, y, distance, dirNum) => {
        if (distance === m * n) return;
        
        answer.push(matrix[y][x]);
        visited[y][x] = true;
        const [tempNewX, tempNewY] = getNextPos(x, y, dirNum);
        
        if (isValidNextPos(tempNewX, tempNewY)) {
            _spiralMove(tempNewX, tempNewY, distance + 1, dirNum);
            return;
        }
        
        const newDirNum = changeMoveDir(dirNum);
        const [nextX, nextY] = getNextPos(x, y, newDirNum);
        _spiralMove(nextX, nextY, distance + 1, newDirNum)
    }
    
    _spiralMove(0, 0, 0 , 0);
    
    return answer;
};