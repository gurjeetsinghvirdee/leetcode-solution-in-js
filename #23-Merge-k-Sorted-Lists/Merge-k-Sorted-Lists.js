/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 const mergeKLists = function(lists) {
    
    var head = new ListNode(null);
    var lsize = lists.length;
    
    if (lsize === 0) {
        return head.next;
    }
    if (lsize == 1) {
        return lists[0];
    }
    let current = head.next;
    for(let i = 0; i < lsize; i++) {
        current = mergeList(current,lists[i]);
    }
    return current;
};

var sortList = function(head) {
    
    if (head === null || head.next === null) {
        return head;
    }
    
    let prev = null;
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    
    prev.next = null;
    
    const l1 = sortList(head);
    const l2 = sortList(slow);
    
    return mergeList(l1, l2);
}

let mergeList = function(list1, list2) {
    
    var head = new ListNode(null);
    var current = head;
    
    while (list1 !== null && list2 !== null) {

        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        
        current = current.next;
    }
    
    current.next = (list1 === null) ? list2 : list1;
    
    return head.next;
}