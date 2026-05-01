class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);
    let left = 1, right = max, res = 0;

    while(left <= right){
        const speed  = Math.floor((left + right)/2);
        let totalTimeForNextHour = 0;
        for(let p of piles){
            totalTimeForNextHour += Math.ceil(p/speed);
        }
        if(totalTimeForNextHour <= h){
            res = speed;
            right = speed - 1;
        }
        else{
            left = speed + 1;
        }
    }

    return res;
    }
}
