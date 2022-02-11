### Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

### An input string is valid if:

#### Open brackets must be closed by the same type of brackets.
#### Open brackets must be closed in the correct order.
 

__Example 1:__
```
Input: s = "()"
Output: true
```

__Example 2:__
```
Input: s = "()[]{}"
Output: true
```

__Example 3:__
```
Input: s = "(]"
Output: false
```

__Constraints:__
  
* 1 <= s.length <= 104  
* s consists of parentheses only '()[]{}'.


```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  let stack = [];
  let len = s.length;
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < len; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length == 0;
};
```