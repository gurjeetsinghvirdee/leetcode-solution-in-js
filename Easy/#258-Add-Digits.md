Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

 

__Example 1:__
```
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
```

__Example 2:__
```
Input: num = 0
Output: 0
``` 

__Constraints:__

* `0 <= num <= 231 - 1`
 

__Follow up:__ Could you do it without any loop/recursion in `O(1)` runtime?

```javascript
/**
 * @param {number} num
 * @return {number}
 * @desc trival solution including recursion.
 */

const addDigits = function (num) {

    let quotient = num,
        remainder = 0,
        sum = 0;

    while (quotient >= 10) {
        remainder = quotient % 10;
        sum = sum + remainder;
        quotient = parseInt(quotient / 10);
    }

    sum = sum + quotient;

    if (sum >= 10) {
        return addDigits(sum);
    } else {

        return sum;
        
    }
};
```