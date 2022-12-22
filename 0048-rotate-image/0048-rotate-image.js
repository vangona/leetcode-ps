/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    const visited = Array.from({length : matrix.length}, () => new Array(matrix.length).fill(false));

    const _recursiveRotate = (posX, posY, initPosX, initPosY, initValue) => {
        // 재귀로 시작위치까지 왔다면 재귀를 종료하여 회전을 반영시킨다.
        if (matrix.length - 1 - posY === initPosX && posX === initPosY) {
            matrix[initPosY][initPosX] = matrix[posY][posX];
            visited[initPosY][initPosX] = true;
            return;
        }
        _recursiveRotate(matrix.length - 1 - posY, posX, initPosX, initPosY, initValue);

        let newValue;
        if (posX === initPosX && posY === initPosY) {
            newValue = initValue; // 이동 발생지점이라면, 이미 값이 변경되었기 때문에 인자로 받은 초기값을 사용한다.
        } else {
            newValue = matrix[posY][posX];
        }
        matrix[posX][matrix.length - 1 - posY] = newValue;
        visited[posX][matrix.length - 1 - posY] = true;
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (visited[i][j]) continue;
            _recursiveRotate(j, i, j, i, matrix[i][j]);
        }
    }
};