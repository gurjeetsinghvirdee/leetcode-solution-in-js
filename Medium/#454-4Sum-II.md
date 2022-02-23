Given four integer arrays `nums1,` `nums2,` `nums3,` and `nums4` all of length `n`, return the number of tuples `(i, j, k, l)` such that:

* `0 <= i, j, k, l < n`
* `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`
 

__Example 1:__
```
Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
```

__Example 2:__
```
Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
``` 

__Constraints:__

* `n == nums1.length`
* `n == nums2.length`
* `n == nums3.length`
* `n == nums4.length`
* `1 <= n <= 200`
* `-228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228`

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

const fourSumCount = function(A, B, C, D) {

    if(!A || !B || !C || !D){
        return 0
    }

    var res = 0
    var sum1 = twoSum(A,B)
    var sum2 = twoSum(C,D)

function twoSum(A,B){

    var sum = new Map();
    for(var i = 0; i < A.length; i++){
        for(var j = 0; j < B.length; j++){
            var total = A[i] + B[j]
            sum.set(total,sum.get(total)+1 || 1)
        }
    }

    return sum

}
    
sum1.forEach((value,key) =>{

    var offset = 0 - key
    if(sum2.has(offset)){
        res += sum1.get(key)*sum2.get(offset)
    }
})

    return res
    
};
```