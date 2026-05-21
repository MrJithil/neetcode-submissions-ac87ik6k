class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0, right = nums.length - 1, res = Infinity;
        while(left <= right){
            const mid = Math.floor((left + right) / 2);
            res = Math.min(res, nums[mid]);

            if(nums[left] <= nums[mid]){
                // ans is in right
                res = Math.min(res, nums[left]);
                left = mid + 1;
            }
            else{
                // and is in left
                right = mid - 1 ;
            }
        }

        return res;
    }
}
