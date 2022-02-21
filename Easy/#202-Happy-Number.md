Write an algorithm to determine if a number `n` is happy.

A __happy number__ is a number defined by the following process:

* Starting with any positive integer, replace the number by the sum of the squares of its digits.
* Repeat the process until the number equals 1 (where it will stay), or it __loops endlessly in a cycle__ which does not include 1.
* Those numbers for which this process __ends in 1__ are happy.

Return *`true` if `n` is a happy number, and `false` if not*.

 
__Example 1:__
```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

__Example 2:__
```
Input: n = 2
Output: false
```

__Constraints:__

* `1 <= n <= 231 - 1`

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = function(n, happy = {}) {

    if (n !== 1) {
        if (happy[n]) {
            return false
        }

        happy[n] = 1
        const i = n.toString().split("");
        const j = i.map(x => parseInt(x))
        const sum = j.reduce((total, x) => total + x**2, 0)

        return isHappy(sum, happy)
        
    }
    return true
};
```