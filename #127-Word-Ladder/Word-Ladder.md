A __transformation sequence__ from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:

* Every adjacent pair of words differs by a single letter.
* Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`.
* `sk == endWord`


Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return *the __number of words__ in the __shortest transformation sequence__ from `beginWord to endWord`, or `0` if no such sequence exists*.


__Example 1:__
```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
```

__Example 2:__
```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```
 
__Constraints:__

* `1 <= beginWord.length <= 10`
* `endWord.length == beginWord.length`
* `1 <= wordList.length <= 5000`
* `wordList[i].length == beginWord.length`
* `beginWord, endWord,` and `wordList[i]` consist of lowercase English letters.
* `beginWord != endWord`
* All the words in `wordList` are __unique__.