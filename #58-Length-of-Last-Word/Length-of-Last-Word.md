#### Given a string s consisting of some words separated by some number of spaces, return the length of the __last__ word in the string.

#### A __word__ is a maximal substring consisting of non-space characters only.

 
__Example 1:__
```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

__Example 2:__
```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

__Example 3:__
```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

__Constraints:__

* `1 <= s.length <= 104`
* `s` consists of only English letters and spaces `' '`.
* There will be at least one word in `s`.