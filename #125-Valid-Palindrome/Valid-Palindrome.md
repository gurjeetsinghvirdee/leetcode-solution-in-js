A phrase is a __palindrome__ if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` *if it is a __palindrome__, or `false` otherwise*.

 
__Example 1:__
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

__Example 2:__
```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

__Example 3:__
```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
``` 

__Constraints:__

* `1 <= s.length <= 2 * 105`
* `s` consists only of printable ASCII characters.