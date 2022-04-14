You are given an array `people` where `people[i]` is the weight of the `ith` person, and an __infinite number of boats__ where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

 

Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

__Example 3:__

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
 

__Constraints:__

* `1 <= people.length <= 5 * 104`
* `1 <= people[i] <= limit <= 3 * 104`

```javascript
var numRescueBoats = function(P, L) {
    let weights = new Uint16Array(L), pairs = 0
    for (let wt of P) weights[wt]++                          // Make a frequency map of people's weights
    for (let i = 0, j = L; i <= j;) {                        // Initiate the sliding window
        while (!weights[j] && j > i) j--                     // Until you find a non-zero, slide j back
        while (!weights[i] && i < j) i++                     // Until you find a non-zero, slide i forward
        let x = weights[i], y = weights[j]
        if (i + j > L) j--                                   // If they're not a match, move on to the next j
        else if (i === j) pairs += ~~(x / 2), j = 0          // If they're the same, add half and force a break
        else if (x <= y) weights[j] -= x, pairs += x, i++    // Otherwise, take the lower amount and remove it
        else weights[i] -= y, pairs += y, j--                //    from the higher amount before moving onward
    }
    return P.length - pairs                                  // Each pair means one less trip than the max
};
```
