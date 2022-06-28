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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const answer = [];
    traversal(root);
    function traversal(root) {
        if (root) {
            traversal(root.left);
            answer.push(root.val);
            traversal(root.right);
        }
    }
    
    return answer;
};