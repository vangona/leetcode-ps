/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  const solution = (node, min, max) => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;  
    return solution(node.left, min, node.val) && solution(node.right, node.val, max);
  }
  
  return solution(root, -Infinity, Infinity);
};