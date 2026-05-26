class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const adjList = new Map();
        const makeAdjList = (words) => {
            for (const word of words) {
                for (let i = 0; i < word.length; i++) {
                    const pattern = word.substring(0, i) + "*" + word.substring(i + 1);
                    if (!adjList.has(pattern)) {
                        adjList.set(pattern, []);
                    }

                    adjList.get(pattern).push(word);
                }
            }
        };

        makeAdjList(beginWord);
        makeAdjList(wordList);

        const visit = new Set([beginWord]);
        const q = new Deque([beginWord]);
        let res = 1;

        while (q.size()) {
            const len = q.size();
            for (let i = 0; i < len; i++) {
                const word = q.popFront();
                if (word === endWord) return res;

                for (let j = 0; j < word.length; j++) {
                    const pattern = word.substring(0, j) + "*" + word.substring(j + 1);
                    const neighbours = adjList.get(pattern) || [];
                    for (const neighbour of neighbours) {
                        if (visit.has(neighbour)) continue;
                        visit.add(neighbour);
                        q.pushBack(neighbour);
                    }
                }
            }
            res++;
        }

        return 0;
    }
}
