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
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    
    if (root) checkDepth(root, 1);
    return max;
    
    function checkDepth(root, depth) {
        if (!root.left && !root.right) {
            if (max < depth) max = depth;
            return;
        };
        
        if (root.left) checkDepth(root.left, depth + 1);
        if (root.right) checkDepth(root.right, depth + 1);
    }
};