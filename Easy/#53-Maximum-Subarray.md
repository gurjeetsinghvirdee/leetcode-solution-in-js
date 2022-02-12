Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A __subarray__ is a __contiguous__ part of an array.

 
__Example 1:__
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

__Example 2:__
```
Input: nums = [1]
Output: 1
```

__Example 3:__
```
Input: nums = [5,4,-1,7,8]
Output: 23
``` 

__Constraints:__

* `1 <= nums.length <= 105`
* `-104 <= nums[i] <= 104` 

__Follow up:__ If you have figured out the `O(n)` solution, try coding another solution using the `divide and conquer` approach, which is more subtle.


```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = (nums) => {
    var maxSum = -Infinity
    var currentSum = 0
    for(var i = 0; i < nums.length; i++){ 
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}
```