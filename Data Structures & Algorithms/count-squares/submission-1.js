class CountSquares {
    constructor() {
        this.points = [];
        this.pointMap = new Map();
    }

    /**
     * @param {number[]} point
     * @return {void}
     */
    add(point) {
        const [x, y] = point;
        const key = `${x}_${y}`;
        this.pointMap.set(key, (this.pointMap.get(key) || 0) + 1);
        this.points.push(point);
    }

    /**
     * @param {number[]} point
     * @return {number}
     */
    count(point) {
        const [p, q] = point;
        let res = 0;

        for (const [x, y] of this.points) {
            if (x === p || y === q || Math.abs(p - x) !== Math.abs(q - y)) continue;

            res += (this.pointMap.get(`${p}_${y}`) || 0) * (this.pointMap.get(`${x}_${q}`) || 0);
        }
        return res;
    }
}
