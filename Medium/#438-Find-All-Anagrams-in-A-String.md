Given two strings `s` and `p`, return *an array of all the start indices of `p`'s anagrams in* `s`. You may return the answer in __any order__.

An __Anagram__ is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
__Example 1:__
```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

__Example 2:__
```
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
``` 

__Constraints:__

* `1 <= s.length, p.length <= 3 * 104`
* `s` and `p` consist of lowercase English letters.

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

const findAnagrams = function(s, p) {

    var res = [];
    if (p.length > s.length) {
        return res;
    }

    var map = new Map();
    for (let c of p) {
        map.set(c, (map.get(c) | 0) + 1);
    }

    var begin = 0,
        end = 0,
        counter = map.size;
    while (end < s.length) {
        var c = s.charAt(end);
        if (map.has(c)) {
            map.set(c, map.get(c) - 1);
            if (map.get(c) === 0) {
                counter--;
            }
        }

        end++;
        while (counter === 0) {
            let d = s.charAt(begin);
            if (map.has(d)) {
                map.set(d, map.get(d) + 1);
                if (map.get(d) > 0) {
                    counter++;
                }
            }

            if (end - begin == p.length) {
                res.push(begin);
            }

            begin++;

        }
    }

    return res;
    
};
```