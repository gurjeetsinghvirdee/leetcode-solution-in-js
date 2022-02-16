You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a __single day__ to buy one stock and choosing a __different day in the future__ to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

 
__Example 1:__
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

__Example 2:__
```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
``` 

__Constraints:__

* `1 <= prices.length <= 105`
* `0 <= prices[i] <= 104`

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {

  let n = prices.length;
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (let i = 0; i < n; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }

  return maxProfit;
  
};
```