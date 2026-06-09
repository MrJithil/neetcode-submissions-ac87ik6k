class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a, b) => a - b);

        const dfs = (i, curr, currSum) => {
            if (currSum === target) {
                res.push([...curr]);
                return;
            }

            if (currSum > target || i >= candidates.length) {
                return;
            }

            curr.push(candidates[i]);
            dfs(i + 1, curr, currSum + candidates[i]);
            curr.pop();

            while (i + 1 < candidates.length &&
                candidates[i] === candidates[i + 1]) i++;
            dfs(i + 1, curr, currSum);
        }

        dfs(0, [], 0);
        return res;
        }
}
