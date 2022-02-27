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