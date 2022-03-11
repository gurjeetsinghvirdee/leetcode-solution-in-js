/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = (nums) => {
    var maxSum = -Infinity
    var currentSum = 0
    for(var i = 0; i < nums.length; i++){ 
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}