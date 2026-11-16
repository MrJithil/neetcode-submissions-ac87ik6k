class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const res = [];
        for (const op of operations) {
            switch (op) {
                case "C":
                    res.pop();
                    break;
                case "D":
                    const prod = (Number(res[res.length - 1]) || 0) * 2;
                    res.push(prod);
                    break;
                case "+":
                    const sum =
                        (Number(res[res.length - 1]) || 0) + (Number(res[res.length - 2]) || 0);
                    res.push(sum);
                    break;
                default:
                    res.push(Number(op));
            }
        }

        return res.reduce((a, b) => a + b, 0);
    }
}
