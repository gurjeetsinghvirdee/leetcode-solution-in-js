/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 const removeElement = function (nums, val) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};