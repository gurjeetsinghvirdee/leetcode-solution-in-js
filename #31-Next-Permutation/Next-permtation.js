/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
    if (nums.length <= 1) return;

    let leftHandSwap;

    for (let i = nums.length - 2; i >= 0; i--) {
        
        if (nums[i] < nums[i + 1]) {
            leftHandSwap = i;
            break;
        }
    }

    for (let i = nums.length - 1; i > leftHandSwap; i--) {
        
        if (nums[i] > nums[leftHandSwap]) {
            
            [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

            let chopped = nums.splice(leftHandSwap + 1);
            chopped.sort((a, b) => a - b);
            nums.push(...chopped);
            return;
        }
    }

    nums.sort((a, b) => a - b);
};