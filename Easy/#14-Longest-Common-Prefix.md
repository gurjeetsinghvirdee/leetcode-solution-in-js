### Write a function to find the longest common prefix string amongst an array of strings.

#### If there is no common prefix, return an empty string "".

 
Example 1:
```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:
```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

Constraints:
<ul>
    <li>1 <= strs.length <= 200</li>
    <li>0 <= strs[i].length <= 200
        strs[i] consists of only lower-case English letters.
    </li>
</ul>

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {

    if (strs.length === 0) {return ""}
    if (strs.length === 1) {return strs[0]}

    var prefix = ""

    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < strs.length; j++) {

            if (strs[j][i] === strs[0][i]) {
                continue
            } else {
                return prefix
            }
        }

        prefix += strs[0][i]
    }
    
    return prefix
};
```