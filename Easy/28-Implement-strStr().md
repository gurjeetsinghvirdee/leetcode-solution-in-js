### Implement strStr().

#### Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

### Clarification:

#### What should we return when needle is an empty string? This is a great question to ask during an interview.

#### For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 
__Example 1:__
```
Input: haystack = "hello", needle = "ll"
Output: 2
```

__Example 2:__
```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

__Example 3:__
```
Input: haystack = "", needle = ""
Output: 0
``` 

__Constraints:__

* 0 <= haystack.length, needle.length <= 5 * 104
* haystack and needle consist of only lower-case English characters.

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    
    if (haystack == null || needle == null) {
        return -1;
    }
    
    if (haystack === needle) {
        return 0;
    }
    
    const needleLength = needle.length;

    for (let i = 0; i < haystack.length - needleLength + 1; i++) {

        if (haystack.substring(i, i + needleLength) === needle) {

            return i;
        }
    }
    return -1;
};
```