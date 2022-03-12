/**
 * @param {number[]} heights
 * @return {number}
 */
/**
 * @param {number[]} heights
 * @return {number}
 */

 const largestRectangleArea = function(heights) {

    const len = heights.length;
    const stack = [];
    let max = 0;
    let h = 0;
    let w = 0;
    
    for (let i = 0; i <= len; i++) {
        
      while (stack.length && (i === len || heights[i] <= heights[stack[stack.length - 1]])) {
        h = heights[stack.pop()];
        w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(max, h * w);
      }
      stack.push(i);
    }
    
    return max;
  };