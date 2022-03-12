/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 var isValidBST = function(root) {
    return helper(root, null, null);
}

function helper(node, low, high) {
    if (node === null) return true;
    const val = node.val;
    if ((low !== null && val <= low) || (high !== null && val >= high)) 
        return false;
    return helper(node.right, val, high) && helper(node.left, low, val);
}