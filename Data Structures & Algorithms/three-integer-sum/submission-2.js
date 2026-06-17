class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        this.twoSum(nums, i + 1, nums[i], triplets);
    }

    return triplets;   
    }

    twoSum(nums, left, target, triplets){
        const seen = new Set();
    for (let i = left; i < nums.length; i++) {
        const complement = -target - nums[i];
        if (seen.has(complement)) {
            triplets.push([target, nums[i], complement]);
            while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
                i++;
            }
        }

        seen.add(nums[i]);
    }
}}
