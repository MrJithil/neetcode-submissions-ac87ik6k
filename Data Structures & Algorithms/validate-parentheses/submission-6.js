class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const openings = new Set(['{', '[', '(']);
        const matchMap = {'}': '{', ']': '[',')': '('}

        for(const c of s){
            if(openings.has(c)){
                stack.push(c);
            }
            else{
                if(stack.pop() !== matchMap[c]){
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
