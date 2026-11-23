class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.memo = {};
    }

    climbStairs(n) {
        if (this.memo[n]) return this.memo[n];

        if (n <= 2) {
            return n;
        }

        this.memo[n] = this.climbStairs(n - 1) + this.climbStairs(n - 2);

        return this.memo[n];
    }
}
