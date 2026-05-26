class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length,
            cols = board[0].length,
            uncaptured = new Set();

        const capture = (r, c) => {
            const key = `${r}_${c}`;
            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols ||
                board[r][c] !== "O" ||
                uncaptured.has(key)
            )
                return;
            uncaptured.add(key);
            capture(r + 1, c);
            capture(r - 1, c);
            capture(r, c + 1);
            capture(r, c - 1);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if ((r == 0 || c === 0 || r === rows - 1 || c === cols - 1) && board[r][c] === "O")
                    capture(r, c);
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key = `${r}_${c}`;
                if (!uncaptured.has(key)) {
                    board[r][c] = 'X';
                }
            }
        }
    }
}
