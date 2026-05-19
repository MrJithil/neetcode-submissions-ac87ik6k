class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const dfs = (i, curr = [], total = 0)=>{
            if(total === target){
               res.push([...curr]);
               return; 
            }
            if(i >= nums.length || total > target){
                return;
            }

            curr.push(nums[i]);
            total += nums[i];
            dfs(i, curr, total);
            curr.pop();
            total -= nums[i]
            dfs(i + 1, curr, total);
        }

        dfs(0);
        return res;
    }
}
