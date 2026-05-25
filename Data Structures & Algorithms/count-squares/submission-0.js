class CountSquares {
    constructor() {
        this.points = [];
        this.counts = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x, y] = point;
        const key = `${x}_${y}`;
        this.counts.set(key, (this.counts.get(key) || 0) + 1);
        this.points.push(point);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [px, py] = point;
        let res = 0;
        for (const [x, y] of this.points) {
            if (x === px || y === py || Math.abs(px - x) !== Math.abs(py - y)) continue;
            res += (this.counts.get(`${px}_${y}`) || 0) * (this.counts.get(`${x}_${py}`) || 0);
        }

        return res;
    }
}
