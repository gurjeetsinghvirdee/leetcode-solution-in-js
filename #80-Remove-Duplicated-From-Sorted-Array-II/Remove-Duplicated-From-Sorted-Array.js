/**
 * @param {number[]} nums
 * @return {number}
 */

 const removeDuplicates = function(nums) {

    let len = nums.length;
    let index = 0;
    let last = NaN;
    let times = 0;
  
    for (let i = 0; i < len; i++) {
      if (nums[i] === last) {
        if (times < 2) times++;
        else continue;
  
      } else {
        times = 1;
      }
  
      last = nums[i];
      nums[index] = nums[i];
      index++;
    }
    
    return index;
  };