class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length,
            cols = board[0].length;

        const helper = (r, c) => {
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O") return;
            board[r][c] = "T";
            helper(r + 1, c);
            helper(r - 1, c);
            helper(r, c + 1);
            helper(r, c - 1);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "O" && (r === 0 || c === 0 || r === rows - 1 || c === cols - 1)) {
                   helper(r,c);
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === "T") {
                    board[r][c] = "O";
                } else {
                    board[r][c] = "X";
                }
            }
        }
    }
}
