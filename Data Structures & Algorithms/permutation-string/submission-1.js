class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const charsOfS1 = Array(26).fill(0);
        for(const ch of s1){
            charsOfS1[ch.charCodeAt(0) - 97]++;
        }

        const s1CharsCountStr = charsOfS1.join(',');

        let left = 0;
        let right = 0;
        const charsOfS2 = Array(26).fill(0);
        while(right < s1.length){
            charsOfS2[s2.charCodeAt(right++) - 97]++;
        }

        while(right < s2.length && charsOfS2.join(',') !== s1CharsCountStr){
            charsOfS2[s2.charCodeAt(left++) - 97]--;
            charsOfS2[s2.charCodeAt(right++) - 97]++;
        }

        return s1CharsCountStr === charsOfS2.join(',');
    }
}
