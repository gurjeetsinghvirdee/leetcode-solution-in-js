Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 
__Example 1:__

<img src="../src/Asset/swap_ex1.jpg" width="400" height="200">

```
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

__Example 2:__
```
Input: head = []
Output: []
```

__Example 3:__
```
Input: head = [1]
Output: [1]
``` 

__Constraints:__

* The number of nodes in the list is in the range `[0, 100]`.
* `0 <= Node.val <= 100`

```javascript
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
```