## Given a string s, find the length of the longest substring without repeating characters.
 
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


```
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0;
    }
    
    var start = 0;
    
    var end = 0;
    
    var maxLength = 0;
    
    var uniqueCharacters = new Set();
    
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};
```