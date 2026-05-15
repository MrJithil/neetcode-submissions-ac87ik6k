class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let maxArea = 0;

        heights.forEach((height, idx) => {
            let start = idx;
            while (stack.length && stack[stack.length - 1][1] > height) {
                const [i, h] = stack.pop();
                const area = (idx - i) * h;
                maxArea = Math.max(area, maxArea);
                start = i;
            }
            stack.push([start, height]);
        });

        stack.forEach((item) => {
            const [ idx, height] = item;
            console.log(item);
            maxArea = Math.max(maxArea, height * (heights.length - idx));
        });

        return maxArea;
    }
}
