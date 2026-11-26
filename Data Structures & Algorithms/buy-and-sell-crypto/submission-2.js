class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let profit  = 0;

        for(let i = 1; i < prices.length; i++){
            if(prices[i] < minBuy){
                minBuy = prices[i];
            }
            else{
                profit = Math.max(profit, prices[i] - minBuy);
            }
        }

        return profit;
    }
}
