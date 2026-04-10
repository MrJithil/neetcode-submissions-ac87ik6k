class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastIndexMap = new Map();
        for (let i = 0; i < S.length; i++) {
            lastIndexMap.set(S[i], i);
        }

        const output = [];
        let end = 0;
        let size = 0;

        for (let i = 0; i < S.length; i++) {
            size++;

            if (end < lastIndexMap.get(S[i])) {
                end = lastIndexMap.get(S[i]);
            }

            if (end === i) {
                output.push(size);
                size = 0;
            }
        }

        return output;
    }
}
