class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const left = [];
        const bracesMap = {
            "]": "[",
            "}": "{",
            ")": "(",
        };
        for (const ch of s) {
            switch (ch) {
                case "]":
                case "}":
                case ")":
                    if (left.at(-1) !== bracesMap[ch]) return false;
                    left.pop();
                    break;
                default:
                    left.push(ch);
            }
        }

        return left.length === 0;
    }
}
