class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        let repeat = 0;

        while (repeat < 2) {
            for (const num of nums) {
                ans.push(num);
            }
            repeat++;
        }

        return ans;
    }
}
