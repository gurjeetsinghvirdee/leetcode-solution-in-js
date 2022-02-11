## Given an array nums of size n, return the majority element.

### The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 
Example 1:
```
Input: nums = [3,2,3]
Output: 3
```
Example 2:
```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
``` 

Constraints:
<ul>
  <li>n == nums.length</li>
  <li>1 <= n <= 5 * 104</li>
  <li>-231 <= nums[i] <= 231 - 1</li>
</ul>

### Follow-up: Could you solve the problem in linear time and in O(1) space?

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let map = {};
  let max = 0;
  let majorNum = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (!map[nums[i]]) map[nums[i]] = 0;
    map[nums[i]]++;
    if (map[nums[i]] > max) {
      majorNum = nums[i];
      max = map[nums[i]];
    }
  }
  return majorNum;
};
```
