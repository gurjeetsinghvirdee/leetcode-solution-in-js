/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = function(nums, k) {
    var pos = (k % nums.length)
    var n = nums.splice(nums.length - pos)
    nums.splice(0, 0, ...n)
};