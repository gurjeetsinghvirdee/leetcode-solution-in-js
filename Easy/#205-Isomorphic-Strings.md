Given two strings `s` and `t`, *determine if they are isomorphic*.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 
__Example 1:__
```
Input: s = "egg", t = "add"
Output: true
```

__Example 2:__
```
Input: s = "foo", t = "bar"
Output: false
```

__Example 3:__
```
Input: s = "paper", t = "title"
Output: true
``` 

__Constraints:__

* `1 <= s.length <= 5 * 104`
* `t.length == s.length`
* `s` and `t` consist of any valid ascii character.

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = function(s, t) {

    if (s.length !== t.length) return false;
    let sDict = new Map();
    let tDict = new Map();
    let (let i = 0; i < s.length; i++ ) {
        let sc = s[i];
        let tc = t[i];

        if (!sDict.has(sc) && !tDict.has(tc)) {
            sDict.set(sc,tc);
            tDict.set(tc,sc);    
        }
 
        if (sDict.get(sc) !== tc || tDict.get(tc) !== sc) {
            return false;
        }

    }

    return true;
    
};
```