class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        if (!wordList.includes(endWord)) return 0;
        const adjList = new Map();
        for (const word of [...wordList, beginWord]) {
            for (let i = 0; i < word.length; i++) {
                const pattern = word.substring(0, i) + "*" + word.substring(i + 1);
                if (!adjList.has(pattern)) {
                    adjList.set(pattern, []);
                }
                adjList.get(pattern).push(word);
            }
        }

        const visit = new Set([beginWord]);
        let res = 1;
        const q = [beginWord];

        while (q.length) {
            const length = q.length;
            for (let i = 0; i < length; i++) {
                const word = q.shift();
                if (word === endWord) return res;
                for (let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                    for (const neighbor of (adjList.get(pattern) || [])) {
                        if (!visit.has(neighbor)) {
                            visit.add(neighbor);
                            q.push(neighbor);
                        }
                    }
                }
            }
            res++;
        }

        return 0;
    }
}