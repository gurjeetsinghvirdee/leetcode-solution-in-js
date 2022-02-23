Given an integer array `nums`, return *the maximum result of* `nums[i] XOR nums[j]`, where `0 <= i <= j < n`.

 
__Example 1:__
```
Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
```

__Example 2:__
```
Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
``` 

__Constraints:__

* `1 <= nums.length <= 2 * 105`
* `0 <= nums[i] <= 231 - 1`

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaximumXOR = function(nums) {

  let set = [...new Set(nums)]
if(set.length === 1) return 0
let max = set[0]^set[1]

for(let i = 0;i<set.length;i++){
	for(let j=i+1;j<set.length;j++){
	   max = Math.max(set[i]^set[j], max)
	}   
}

return max  
};
```