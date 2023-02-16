/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const result = new Array(numRows);
  result[0] = [1];
  
  for (let i = 1; i < numRows; i++) {
    result[i] = new Array(i + 1).fill(1);
    result[i] = result[i].map((_, index) => {
      if (index === 0) return 1;
      if (index === i) return 1;
      return result[i - 1][index - 1] + result[i - 1][index];
    });
  }
  
  return result;
};