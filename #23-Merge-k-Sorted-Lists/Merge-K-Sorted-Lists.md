### You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

#### Merge all the linked-lists into one sorted linked-list and return it.


__Example 1:__
```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

__Example 2:__
```
Input: lists = []
Output: []
```

__Example 3:__
```
Input: lists = [[]]
Output: []
``` 

__Constraints:__

* k == lists.length
* 0 <= k <= 104
* 0 <= lists[i].length <= 500
* -104 <= lists[i][j] <= 104
* lists[i] is sorted in ascending order.
* The sum of lists[i].length will not exceed 104.