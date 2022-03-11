/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        nums[count] = nums[i];
        count++;
    }
    return count;
};