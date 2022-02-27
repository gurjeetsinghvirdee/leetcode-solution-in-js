/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const addTwoNumbers = function (l1, l2) {
    var head = null;
    var temp = null;
    var carry = 0;
    while (l1 !== null || l2 !== null) {
        var sum = carry;
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        var node = new ListNode(Math.floor(sum) % 10);
        carry = Math.floor(sum / 10);
        if (temp == null) {
            temp = head = node;
        }
        else {
            temp.next = node;
            temp = temp.next;
        }
    }
    if (carry > 0) {
        temp.next = new ListNode(carry);
    }
    return head;
};