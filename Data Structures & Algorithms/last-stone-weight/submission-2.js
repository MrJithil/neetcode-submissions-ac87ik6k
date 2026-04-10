class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxPriorityQueue();
        for(const stone of stones){
            pq.enqueue(stone);
        }

        while(pq.size() > 1){
            const [first, second] = [pq.dequeue(),pq.dequeue()];
            if( first === second) continue;
            pq.enqueue(first - second);
        }

        return pq.isEmpty() ? 0: pq.front();
    }
}
