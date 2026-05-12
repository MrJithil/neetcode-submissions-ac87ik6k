class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
       let seperation  = 0;
       let prev = nums[0];

       for(let i = 0; i< nums.length; i++){
        if(prev > nums[i]){
            seperation = i;
            break;
        }
        prev =  nums[i];
       }

       const binarySearch = (left, right) => {
            while(left <= right){
                const mid = Math.floor((left + right)/2);
                if(nums[mid] < target){
                    left = mid + 1;
                }
                else if(nums[mid] > target){
                    right = mid - 1;
                }
                else{
                    return mid;
                }
            }
        return -1;
       }

       console.log(seperation);
       return Math.max(binarySearch(0, seperation - 1),
       binarySearch(seperation, nums.length - 1))
    }
}
