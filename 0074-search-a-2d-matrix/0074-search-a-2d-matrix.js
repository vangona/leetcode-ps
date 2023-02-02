/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;
  
  let rowLeft = 0;
  let rowRight = m - 1;
  let rowMid = Math.floor((rowLeft + rowRight) / 2);
  
  while(rowLeft < rowRight) {
    if (matrix[rowMid][0] === target) return true;
    
    if (matrix[rowMid][0] > target) {
      if (rowMid === 0) break;
      rowRight = rowMid - 1;
    } else {
      if (matrix[rowMid + 1][0] > target) break;
      rowLeft = rowMid + 1;
    }
    
    rowMid = Math.floor((rowLeft + rowRight) / 2);
  }
  
  let columnLeft = 0;
  let columnRight = n - 1;
  let columnMid = Math.floor((columnLeft + columnRight) / 2);

  while(columnLeft <= columnRight) {
    if (matrix[rowMid][columnMid] === target) return true;
    
    if (matrix[rowMid][columnMid] > target) {
      columnRight = columnMid - 1;
    } else {
      columnLeft = columnMid + 1;
    }
    
    columnMid = Math.floor((columnLeft + columnRight) / 2);
  }
  
  return false;
};