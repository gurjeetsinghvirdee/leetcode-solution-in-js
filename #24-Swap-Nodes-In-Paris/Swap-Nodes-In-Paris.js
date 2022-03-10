/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var swapPairs = function (head) {

    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next !== null && current.next !== undefined && current.next.next !== null) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }

    return dummy.next;
};