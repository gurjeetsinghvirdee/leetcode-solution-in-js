/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = function (nums, target) {

    for (var index = 0; index < nums.length; index++) {
      if (target <= nums[index]) {
        return index;
      }
    }
    return nums.length;
  }; 