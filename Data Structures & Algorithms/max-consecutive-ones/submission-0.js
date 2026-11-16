class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let curr = 0;
        let res = 0;

        for (let num of nums) {
            if (num === 1) {
                curr++;
            } else {
                curr = 0;
            }
            res = Math.max(curr, res);
        }

        return res;
    }
}
