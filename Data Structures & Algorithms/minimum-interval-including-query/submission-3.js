class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        intervals.sort((a, b) => a[0] - b[0]);
        const indexMap = new Map();
        const sortedQueries = queries.map((val, idx) => [val, idx])
        sortedQueries.sort((a, b) => a[0] - b[0]);

        const minQueue = new MinPriorityQueue((item) => item[0]);
        let intervalIdx = 0;
        const output = Array(queries.length).fill(-1);
        for (const [q, idx] of sortedQueries) {
            while (intervalIdx < intervals.length && intervals[intervalIdx][0] <= q) {
                const [left, right] = intervals[intervalIdx++];
                const dist = right - left + 1;
                minQueue.enqueue([dist, right]);
            }
            while (!minQueue.isEmpty() && minQueue.front()[1] < q) {
                minQueue.dequeue();
            }

            if (!minQueue.isEmpty()) {
                output[idx] = minQueue.front()[0];
            }
        }

        return output;
    }
}
