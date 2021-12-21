/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 const findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    var m = nums1.length;
    var n = nums2.length;
    var start = 0;
    var end = m;

    while (start <= end) {
        const partitionNums1 = Math.floor((start + end) / 2);
        const partitionNums2 = Math.floor((m + n + 1) / 2) - partitionNums1;
        const maxLeftNums1 = partitionNums1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionNums1 - 1];
        const minRightNums1 = partitionNums1 == m ? Number.MAX_SAFE_INTEGER : nums1[partitionNums1];
        const maxLeftNums2 = partitionNums2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionNums2 - 1];
        const minRightNums2 = partitionNums2 == n ? Number.MAX_SAFE_INTEGER : nums2[partitionNums2];
        if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
            if ((m + n) % 2 == 0) {
                return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2.0;
            } else {
                return Math.max(maxLeftNums1, maxLeftNums2);
            }
        }
        else if (maxLeftNums1 > minRightNums2) {
            end = partitionNums1 - 1;
        }
        else {
            start = partitionNums1 + 1;
        }
    }
};