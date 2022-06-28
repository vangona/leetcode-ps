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
var isSymmetric = function(root) {
    let answerFlag = true;
    
    checkSymmetric(root.left, root.right);
    return answerFlag;
    
    function checkSymmetric(leftCurr, rightCurr) {
        if (!leftCurr && !rightCurr) return;
        if ((leftCurr && leftCurr.val) !== (rightCurr && rightCurr.val)) {
            answerFlag = false;
        };
        if (!answerFlag) return;
        
        checkSymmetric(leftCurr.left, rightCurr.right);
        if (!answerFlag) return;
        checkSymmetric(leftCurr.right, rightCurr.left);
        if (!answerFlag) return;
    }
};