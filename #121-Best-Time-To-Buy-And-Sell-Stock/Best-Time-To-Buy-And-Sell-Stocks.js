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