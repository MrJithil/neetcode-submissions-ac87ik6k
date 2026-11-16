class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const left = [];
        const bracesMap = new Map();
        bracesMap.set("]", "[")
        bracesMap.set("}", "{")
        bracesMap.set(")", "(")

        for (const ch of s) {
                if(!bracesMap.has(ch)) left.push(ch); 
                else if(left.at(-1) !== bracesMap.get(ch)) return false;
                else left.pop()
            }
        return left.length === 0;
    }
}
