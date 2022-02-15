Given two binary strings `a` and `b`, return *their sum as a binary string*.

 
__Example 1:__
```
Input: a = "11", b = "1"
Output: "100"
```

__Example 2:__
```
Input: a = "1010", b = "1011"
Output: "10101"
``` 

__Constraints:__

* `1 <= a.length, b.length <= 104`
* `a` and `b` consist only of `'0'` or `'1'` characters.
* Each string does not contain leading zeros except for the zero itself.

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = function(a, b) {

  let len1 = a.length;
  let len2 = b.length;
  let max = Math.max(len1, len2);
  let res = '';
  let carry = 0;
  let val = 0;

  for (let i = 0; i < max; i++) {
      
    val = Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;
    carry = Math.floor(val / 2);
    res = (val % 2) + res;
  }

  if (carry) res = 1 + res;

  return res;
};
```