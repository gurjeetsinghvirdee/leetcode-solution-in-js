### Given two integers dividend and divisor, divide two integers __without__ using multiplication, division, and mod operator.

#### The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

#### Return the __quotient__ after dividing dividend by divisor.

#### __Note:__ Assume we are dealing with an environment that could only store integers within the __32-bit__ signed integer range: [−231, 231 − 1]. For this problem, if the quotient is __strictly greater than__ 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

__Example 1:__
```
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
```

__Example 2:__
```
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
``` 

__Constraints:__

* -231 <= dividend, divisor <= 231 - 1
* divisor != 0

```javascript
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    
    if (divisor === 0 || (dividend === MIN && divisor === -1)) {
        return MAX;
    }
    if (divisor === dividend) {
        return 1;
    }
    
    const sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
    
    let quotient = 0;
    
    let absoluteDividend = Math.abs(dividend);
    let absoluteDivisor = Math.abs(divisor);
    
    while (absoluteDividend >= absoluteDivisor) {
        
        let shift = 0;
        let shiftedDivisor = absoluteDivisor;
        while (absoluteDividend >= shiftedDivisor) {
            shift++;
            shiftedDivisor = absoluteDivisor << shift;
            
            if (shiftedDivisor < 0) {
                break;
            }
        }
        
        quotient += (1 << (shift - 1));
        
        absoluteDividend -= absoluteDivisor << (shift - 1);
    }
    return sign === -1 ? -quotient : quotient;
};
```