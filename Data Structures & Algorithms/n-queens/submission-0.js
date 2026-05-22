class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const results = [];
        const colSet = new Set();
        const negDiagSet = new Set();
        const posDiagSet = new Set();
        const board = Array(n)
            .fill(0)
            .map(() => Array(n).fill("."));

        const helper = (r) => {
            if (r === n) {
                results.push(board.slice().map(row => row.join("")));
                return;
            }

            for (let c = 0; c < n; c++) {
                if (colSet.has(c) || negDiagSet.has(r - c) || posDiagSet.has(r + c)) {
                    continue;
                }

                colSet.add(c);
                negDiagSet.add(r - c);
                posDiagSet.add(r + c);
                board[r][c] = "Q";
                helper(r + 1);

                colSet.delete(c);
                negDiagSet.delete(r - c);
                posDiagSet.delete(r + c);
                board[r][c] = ".";
            }
        };

        helper(0);
        return results;
    }
}
