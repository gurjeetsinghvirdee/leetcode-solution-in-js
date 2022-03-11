/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = (number) => {
    var len = number.length;
    if(!len) return 0; 
    var result = 0;
    var left = 0, right = len - 1;
    var maxLeft = 0, maxRight = 0;
    
    while(left<=right){
      if(number[left] <= number[right]){
        if(number[left] >=maxLeft) maxLeft = number[left];
        else result += maxLeft-number[left];
        left++;
      }
      else{
        if(number[right] >= maxRight) maxRight = number[right];
        else result += maxRight-number[right];
        right--;
      }        
    }
    return result;
  };