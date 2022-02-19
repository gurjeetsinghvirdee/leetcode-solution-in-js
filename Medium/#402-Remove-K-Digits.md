Given string `num` representing a non-negative integer `num`, and an integer `k`, return *the smallest possible integer after removing k digits from num*.

 
__Example 1:__
```
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
```

__Example 2:__
```
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
```

__Example 3:__
```
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
``` 

__Constraints:__

* `1 <= k <= num.length <= 105`
* `num` consists of only digits.
* `num` does not have any leading zeros except for the zero itself.

```javascript
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

const removeKdigits = function(num, k) {

    let len = num.length;
    if(len==k){
        return "0";
    }

    let stack = [];
    let nums = num.split("");
    nums.forEach(function(item){
        item = parseInt(item);
    });

    let left = len - k;
    for(let i=0;i<left;i++){
        stack.push(nums[i]);
    }

    margin = 0;
    for(i=1;i<len;i++){
        cur = nums[i];
        range = len-i;
        if(range>=left){
            thestart = 0;

        }else{
            thestart = left-range;
        }

        let end = Math.min(i-margin,left);
        for(let j=thestart;j<end;j++){
            if(cur<stack[j]){
                stack[j] = cur;
                margin = i-j;
                break;
            }
        }

        for(var n=j+1,m=1;n<left;n++,m++){
            stack[n] = nums[i+m];
        }
    }

    var ret = stack.join("").replace(/^0{1,}/,"");
    return ret===""?"0":ret;

};
```