class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (const row of matrix) {
            if (row.at(-1) < target) continue;
            const index = this.binarySearch(row, target);
            if (index > -1) {
                return true;
            }
        }

        return false;
    }

    binarySearch(row, target) {
        let left = 0,
            right = row.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (row[mid] === target) return mid;
            else if (row[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }
}
