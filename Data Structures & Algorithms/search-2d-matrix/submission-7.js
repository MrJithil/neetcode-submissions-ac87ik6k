class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 0;
        for(; i <= matrix.length - 1; i++){
            const row = matrix[i];
            const lastIndex = row.length - 1;
            if(row[i]>=target || target <= row[lastIndex]){
                break;
            }
        }

        if(i > matrix.length - 1){
            return false;
        }

        const binarySearch = (nums) =>{
            let left = 0, right = nums.length - 1;

            while (left <= right){
                const mid = Math.floor((left + right) / 2);
                if(nums[mid] < target){
                    left = mid + 1;
                }
                else if (nums[mid] > target){
                    right = mid - 1;
                }
                else{
                    return true;
                }
            }

            return false;
        }

        return binarySearch(matrix[i]);
    }
}
