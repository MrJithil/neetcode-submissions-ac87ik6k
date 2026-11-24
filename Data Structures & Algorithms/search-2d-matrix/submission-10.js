class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length ,
            cols = matrix[0].length;

        let top = 0,
            bot = rows - 1;

        while (top <= bot) {
            const mid = Math.floor((top + bot) / 2);

            if (matrix[mid][0] > target) {
                bot = mid - 1;
            } else if (matrix[mid].at(-1) < target) {
                top = mid + 1;
            } else break;
        }

        if (top > bot) return false;

        const row = matrix[Math.floor((top + bot) / 2)];

        let left = 0,
            right = cols - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (row[mid] === target) return true;
            else if (row[mid] > target) right = mid - 1;
            else left = mid + 1;
        }

        return false;
    }
}
