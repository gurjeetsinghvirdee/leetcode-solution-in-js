/**
 * @param {string} s
 * @return {number}
 */
 const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

 const romanToInt = function(S) {

     var ans = 0

     for (var i = S.length-1; ~i; i--) {
         var num = roman[S.charAt(i)]
         if (4 * num < ans) ans -= num
         else ans += num
     }
     
     return ans
 };