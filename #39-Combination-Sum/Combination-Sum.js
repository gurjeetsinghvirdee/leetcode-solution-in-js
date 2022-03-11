/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 const combinationSum = function (nums, target) {

    var combinations = [];
    nums.sort((a, b) => a - b);

    function backtrack(tempList, remaining, start) {

        for (var i = start; i < nums.length && nums[i] <= remaining; i++) {

            if (nums[i] === remaining) {
                combinations.push([...tempList, nums[i]]);

            } else {
                backtrack([...tempList, nums[i]], remaining - nums[i], i);
            }
        }
    }

    backtrack([], target, 0);
    return combinations;
    
};