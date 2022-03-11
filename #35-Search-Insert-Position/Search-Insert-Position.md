Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

 
__Example 1:__
```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

__Example 2:__
```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

__Example 3:__
```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

__Constraints:__

* `1 <= nums.length <= 104`
* `-104 <= nums[i] <= 104`
* `nums` contains __distinct__ values sorted in __ascending__ order.
* `-104 <= target <= 104`