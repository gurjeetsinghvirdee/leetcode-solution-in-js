Given an integer array `nums` of __unique__ elements, return *all possible subsets (the power set)*.

The solution set __must not__ contain duplicate subsets. Return the solution in __any order__.

 
__Example 1:__
```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

__Example 2:__
```
Input: nums = [0]
Output: [[],[0]]
```

__Constraints:__

* `1 <= nums.length <= 10`
* `-10 <= nums[i] <= 10`
* All the numbers of `nums` are __unique__.

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
  var res = [];
  helper(nums, res, [], 0);
  return res;
};

var helper = function (nums, res, arr, start) {
  var len = nums.length;

  res.push(Array.from(arr));

  if (start === len) return;

  for (var i = start; i < len; i++) {
    arr.push(nums[i]);
    helper(nums, res, arr, i + 1);
    arr.pop();
  }
};
```