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
const isValidBST = (root, min = -Math.pow(2, 31) - 1, max = Math.pow(2, 31)) => {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;  
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};