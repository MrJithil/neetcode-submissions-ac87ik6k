class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const results = [];
        const board = Array(n)
            .fill(0)
            .map(() => Array(n).fill('.'));
        const colsSet = new Set();
        const posDiag = new Set();
        const negDiag = new Set();

        const helper = (r) => {
            if (r === n) {
                results.push(board.slice().map((row) => row.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (colsSet.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

                colsSet.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                board[r][c] = "Q";
                helper(r + 1);
                colsSet.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
                board[r][c] = ".";
            }
        };
        helper(0);
        return results;
    }
}
