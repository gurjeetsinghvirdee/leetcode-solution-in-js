Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be __unique__ and you may return the result in __any order__.

 
__Example 1:__
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

__Example 2:__
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
```

__Constraints:__

* `1 <= nums1.length, nums2.length <= 1000`
* `0 <= nums1[i], nums2[i] <= 1000`

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersection = function(nums1, nums2) {

    var nums1Map = new Set(nums1);
    var result = new Set();

    nums2.forEach(item => {
        if(nums1Map.has(item)){
            result.add(item)
        }

    })

    return [...result];
    
};
```