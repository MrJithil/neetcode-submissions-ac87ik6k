class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, right = 0, res = 0, maxFreq = 0;
        const charCount = new Map();

        while(left <= right && right < s.length){
            let count = charCount.get(s[right]) || 0;
            charCount.set(s[right], ++count);
            maxFreq = Math.max(maxFreq,count);
            let windowLen = right - left + 1;
            if((windowLen - maxFreq) > k){
                charCount.set(s[left], charCount.get(s[left]) - 1);
                left++;
                windowLen--;
            }
            res = Math.max(res, windowLen);
            right++;
        }

        return res;
    }
}
