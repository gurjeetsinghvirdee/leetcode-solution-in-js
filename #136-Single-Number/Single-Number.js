/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function(nums) {
    let single;
    for (let i = 0, l = nums.length; i < l; i++) {
        single ^= nums[i];
    }
    return single;
};