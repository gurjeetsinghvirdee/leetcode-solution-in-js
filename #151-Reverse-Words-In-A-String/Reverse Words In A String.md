Given an input string `s`, reverse the order of the __words__.

A __word__ is defined as a sequence of non-space characters. The __words__ in `s` will be separated by at least one space.

Return *a string of the words in reverse order concatenated by a single space*.

__Note__ that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 
__Example 1:__
```
Input: s = "the sky is blue"
Output: "blue is sky the"
```

__Example 2:__
```
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

__Example 3:__
```
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
``` 

__Constraints:__

* `1 <= s.length <= 104`
* `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.
* There is __at least one__ word in `s`.