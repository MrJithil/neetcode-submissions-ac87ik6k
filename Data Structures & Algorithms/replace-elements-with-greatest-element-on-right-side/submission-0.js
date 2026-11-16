class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let currRightMax = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const curr = arr[i];
            arr[i] = currRightMax;
            currRightMax = Math.max(curr, currRightMax);
        }

        return arr;
    }
}
