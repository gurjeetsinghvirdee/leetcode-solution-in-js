Given two version numbers, `version1` and `version2`, compare them.

Version numbers consist of __one or more revisions__ joined by a dot `'.'`. Each revision consists of __digits__ and may contain leading __zeros__. Every revision contains __at least one character__. Revisions are __0-indexed from left to right__, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example `2.5.33` and `0.1` are valid version numbers.

To compare version numbers, compare their revisions in __left-to-right__ order. Revisions are compared using their __integer value ignoring any leading zeros__. This means that revisions `1` and `001` are considered __equal__. If a version number does not specify a revision at an index, then __treat the revision__ as `0`. For example, version `1.0` is less than version `1.1` because their revision 0s are the same, but their revision 1s are `0` and `1` respectively, and `0 < 1`.

*Return the following:*

* If `version1` < `version2`, return `-1`.
* If `version1` > `version2`, return `1`.
* Otherwise, return `0`.
 

__Example 1:__
```
Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
```

__Example 2:__
```
Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".
```

__Example 3:__
```
Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
``` 

__Constraints:__

* `1 <= version1.length, version2.length <= 500`
* `version1` and `version2` only contain digits and `'.'`.
* `version1` and `version2` __are valid version numbers__.
* All the given revisions in `version1` and `version2` can be stored in a __32-bit integer__.

```javascript
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

const compareVersion = function(version1, version2) {

  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let len = Math.max(v1.length, v2.length);

  let t1 = 0;
  let t2 = 0;

  for (let i = 0; i < len; i++) {

    t1 = parseInt(v1[i] || 0);
    t2 = parseInt(v2[i] || 0);
    if (t1 > t2) return 1;
    if (t1 < t2) return -1;

  }

  return 0;

};
```