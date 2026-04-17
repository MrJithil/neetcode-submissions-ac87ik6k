class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let leftMax = nums[0];
        let res = nums[0];

        for(let i = 1; i< nums.length; i++){
            leftMax = Math.max(nums[i] +leftMax, nums[i]);
            res = Math.max(res, leftMax);
        }
        return res;
    }
}
