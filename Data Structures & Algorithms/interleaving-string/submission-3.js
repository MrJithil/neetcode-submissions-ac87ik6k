class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        const rows = s1.length, cols = s2.length;
        if(rows + cols !== s3.length) return false;

        const dp = Array(rows + 1).fill(0).map(() => Array(cols + 1).fill(false));
        dp[0][0] = true
        for(let r = 1; r <= rows; r++){
            dp[r][0] = dp[ r- 1][0] && s3[r - 1] === s1[r-1];
        }
        for(let c = 1; c <= cols; c++){
            dp[0][c] = dp[0][c -1 ] && s3[c - 1] === s2[c-1];
        }

        for(let r = 1; r <= rows; r++){
            for(let c = 1; c <= cols; c++){
                const j = r + c;
                dp[r][c] = (dp[r - 1][c] && s1[r -1] === s3[j -1]) ||
                    dp[r][c - 1] && s2[c - 1] === s3[j - 1];
            }
        }
        return dp[rows][cols];
    }
}
