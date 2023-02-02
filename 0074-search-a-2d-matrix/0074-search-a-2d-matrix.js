const binarySearchRecursive = (arr, target, low, high) => {  
  let mid = Math.floor((low + high) / 2);
  
  if (low > high || arr[mid] === target) return mid;
  if (arr[mid] > target) {
    if (mid === 0) return mid;
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
}

const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;
  const rowArr = Array.from({length : m}, (_, index) => matrix[index][0]);
 
  const rowResult = binarySearchRecursive(rowArr, target, 0, m - 1);
  const columnResult = binarySearchRecursive(matrix[rowResult], target, 0, n - 1);
  
  if (matrix[rowResult][columnResult] === target) return true;
  return false;
};