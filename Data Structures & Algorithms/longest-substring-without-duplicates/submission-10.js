class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0, right = 0, maxLen = 0, charMap = new Set();

        while(left <= right && right < s.length){
            while(charMap.has(s[right])){
                charMap.delete(s[left++]);
            }
            charMap.add(s[right])
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }

        return maxLen;
    }
}