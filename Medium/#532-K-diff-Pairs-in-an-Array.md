Given an array of integers `nums` and an integer `k`, return *the number of __unique__ k-diff pairs in the array*.

A __k-diff__ pair is an integer pair `(nums[i], nums[j])`, where the following are true:

* `0 <= i, j < nums.length`
* `i != j`
* `nums[i] - nums[j] == k`


__Notice__ that `|val|` denotes the absolute value of `val`.

 
__Example 1:__
```
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

__Example 2:__
```
Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

__Example 3:__
```
Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
``` 

__Constraints:__

* `1 <= nums.length <= 104`
* `-107 <= nums[i] <= 107`
* `0 <= k <= 107`

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findPairs = function(nums, k) {
    let uniqueNumbers = {};
    let numberOfPairs = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(uniqueNumbers[nums[i]]){
            uniqueNumbers[nums[i]]++;
        } else {
            uniqueNumbers[nums[i]] = 1;
        }
    }
    
    for(let x in uniqueNumbers){
        if((uniqueNumbers[parseInt(x)+k] && parseInt(x)+k !== parseInt(x)) || (parseInt(x)+k === parseInt(x) && uniqueNumbers[parseInt(x)] > 1)) { 
                numberOfPairs++;
        }
    }
    
    return numberOfPairs;
    
}
```