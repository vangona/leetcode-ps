/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let farthestJump = 0;
    let jumpForce = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // 현 지점까지 제일 멀리 나갈 수 있는 점프를 갱신해준다.
        farthestJump = Math.max(farthestJump, i + nums[i]);
        
        // if 점프가 끝났다면,
        // if 최대길이 점프가 현 지점을 넘는지 확인해준다.
        // 현 지점을 넘는다면 점프력을 최대 길이 점프로 갱신해준다.
        // 현 지점을 넘지 못한다면, 현 지점이 마지막 지점인지 확인한다.
        // 마지막 지점이 아니라면, false를 반환한다.
        if (jumpForce === i) {
            if (farthestJump === i && i !== nums.length - 1) return false;
            
            jumpForce = farthestJump;
        }
    }
    
    // 반복문이 종료되었다면, true를 반환한다.
    return true;
};