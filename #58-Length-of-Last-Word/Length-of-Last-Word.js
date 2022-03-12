/**
 * @param {string} s
 * @return {number}
 */

 const lengthOfLastWord = function(s) {
    var wordArray = s.trim().split(/(\s+)/)
    var last = wordArray.length - 1
    if (wordArray[last] === ''){
       return 0 
     }else {
     return wordArray[last].length
     }
 }