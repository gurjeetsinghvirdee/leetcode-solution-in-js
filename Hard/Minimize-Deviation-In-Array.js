/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeviation = function(nums) {
    
    var pq = new MaxPriorityQueue({priority: x => x})
    for (var n of nums) {
        if (n % 2) n *= 2
        pq.enqueue(n)
    }
    
    var ans = pq.front().element - pq.back().element
    while (pq.front().element % 2 === 0) {
        pq.enqueue(pq.dequeue().element / 2)
        ans = Math.min(ans, pq.front().element - pq.back().element)
    }
    
    return ans
    
};
