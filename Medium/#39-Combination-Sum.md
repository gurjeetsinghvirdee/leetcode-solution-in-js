Given an array of __distinct__ integers `candidates` and a target integer `target`, return *a list of all `unique combinations` of __candidates__ where the chosen numbers sum to `target`*. You may return the combinations in __any order__.

The __same__ number may be chosen from `candidates` an __unlimited number of times__. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is __guaranteed__ that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

 
__Example 1:__
```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

__Example 2:__
```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

__Example 3:__
```
Input: candidates = [2], target = 1
Output: []
```

__Constraints:__

* `1 <= candidates.length <= 30`
* `1 <= candidates[i] <= 200`
* All elements of `candidates` are __distinct__.
* `1 <= target <= 500`

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const combinationSum = function (nums, target) {

    var combinations = [];
    nums.sort((a, b) => a - b);

    function backtrack(tempList, remaining, start) {

        for (var i = start; i < nums.length && nums[i] <= remaining; i++) {

            if (nums[i] === remaining) {
                combinations.push([...tempList, nums[i]]);

            } else {
                backtrack([...tempList, nums[i]], remaining - nums[i], i);
            }
        }
    }

    backtrack([], target, 0);
    return combinations;
    
};
```