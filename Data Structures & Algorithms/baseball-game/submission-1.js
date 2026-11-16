class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const res = [];
        let sum = 0;
        for (const op of operations) {
            switch (op) {
                case "C":
                    sum -= res.pop();
                    break;
                case "D":
                    res.push(res.at(-1) * 2);
                    sum += res.at(-1);
                    break;
                case "+":
                    res.push(res.at(-1) + res.at(-2));
                    sum += res.at(-1);
                    break;
                default:
                    res.push(Number(op));
                    sum += res.at(-1);
            }
        }

        return sum;
    }
}
