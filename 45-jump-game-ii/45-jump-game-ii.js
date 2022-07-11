/**
 * @param {number[]} nums
 * @return {number}
 */
// Greedy 접근법
const jump = (nums) => {
    const N = nums.length;
    // maxDistance : 현재까지의 점프 중 가장 멀리 나갈 수 있는 길이
    // prevJumpLast : 현재 점프 횟수에서 가장 멀리 나간 길이
    let maxDistance = 0, prevJumpLast = 0, jumps = 0;
    
    for (let i = 0; i < N; i++) {
        // 이전 점프의 길이가 목적지를 넘었다면, 현재까지 점프 수를 반환해준다.
        if (prevJumpLast >= nums.length - 1) return jumps;        
        
        // 이전 점프 중 최대는
        // 현재 위치에서 최대 점프 길이(i + nums[i])와 이전 최대 길이를 비교해서 정한다.
        maxDistance = Math.max(i + nums[i], maxDistance);
        
        // 이전 최대 점프가 현재 위치에서 끝난다면
        // 현재 위치에서의 최대 점프 길이로 갱신해주고, 점프 수에 1을 더해준다.
        if (prevJumpLast === i) {
            prevJumpLast = maxDistance;
            jumps++;
        }
    }
};