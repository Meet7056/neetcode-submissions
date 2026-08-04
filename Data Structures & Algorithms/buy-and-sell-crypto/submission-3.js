class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        for (let i = 0; i < prices.length; i++) {
            const val = prices[i];

            let j = i + 1; 

            while (j < prices.length) {
                const result = prices[j] - val;
                if (maxProfit < result) {
                    maxProfit = result;
                }
                j++;
            }
        }

        return maxProfit;
    }
}
