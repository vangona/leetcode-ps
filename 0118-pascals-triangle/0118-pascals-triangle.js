/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const result = Array.from({length: numRows}, (_, index) => new Array(index + 1).fill(1));
  
  for (let i = 2; i < numRows; i++) {
    const halfNums = Math.ceil((i + 1) / 2);
    for (let j = 1; j < halfNums; j++) {
      const pascalNum = result[i - 1][j - 1] + result[i - 1][j];
      result[i][j] = pascalNum;
      result[i][i - j] = pascalNum;
    }
  }
  
  return result;
};