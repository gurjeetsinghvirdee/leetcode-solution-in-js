Given a binary array `nums`, return *the maximum length of a contiguous subarray with an equal number of `0` and `1`*.

 
__Example 1:__
```
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
```

__Example 2:__
```
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
``` 

__Constraints:__

* `1 <= nums.length <= 105`
* `nums[i]` is either `0` or `1`.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxLength = nums => {

  var map = new Map([[0, -1]]);

  var result = 0;
  var sum = 0;

  for (var i = 0; i < nums.length; i++) {
    sum += nums[i] === 1 ? 1 : -1;

    if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return result;
  
};
```