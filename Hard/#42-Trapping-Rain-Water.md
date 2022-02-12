Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

 

__Example 1:__

<img src="../src/Asset/rainwatertrap.png" height="170" width="450">

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

__Example 2:__

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

__Constraints:__

* `n == height.length`
* `1 <= n <= 2 * 104`
* `0 <= height[i] <= 105`

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = (number) => {
  var len = number.length;
  if(!len) return 0; 
  var result = 0;
  var left = 0, right = len - 1;
  var maxLeft = 0, maxRight = 0;
  
  while(left<=right){
    if(number[left] <= number[right]){
      if(number[left] >=maxLeft) maxLeft = number[left];
      else result += maxLeft-number[left];
      left++;
    }
    else{
      if(number[right] >= maxRight) maxRight = number[right];
      else result += maxRight-number[right];
      right--;
    }        
  }
  return result;
};
```