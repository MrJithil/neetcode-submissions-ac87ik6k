class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let resMin  = nums[0];
        let resMax  = nums[0];
        let currMax = 0;
        let currMin = 0;
        let total = 0;

        for(let i = 0; i< nums.length; i++){
            currMax = Math.max(nums[i], currMax + nums[i]);
            currMin = Math.min(nums[i], currMin + nums[i]);
            total += nums[i];
            resMin = Math.min(resMin, currMin);
            resMax = Math.max(resMax, currMax);
        }

        return resMax > 0 ? Math.max(resMax, total - resMin) : resMax;
    }
}
