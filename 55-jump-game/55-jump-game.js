/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthestJump = 0;
    let jumpForce = 0;
    
    for (let i = 0; i < nums.length; i++) {
        farthestJump = Math.max(farthestJump, i + nums[i]);
        
        // 점프가 끝났다면, 점프할 수 있는지 확인해준다.
        if (jumpForce === i) {
            if (farthestJump === i && i !== nums.length - 1) return false;
            
            jumpForce = farthestJump;
        }
    }
    
    return true;
};