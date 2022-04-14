/**
 * @param {string} s
 * @return {string}
 */

 const reverseWords = function(s) {
    return s
        .split(" ")
        .filter(w => w.length > 0)
        .reverse()
        .join(" ");
};