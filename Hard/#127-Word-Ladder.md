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


```javascript
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
    
  var wordSet = new Set(wordList);
  var queue = [];
  var step = 0;
  var word = '';
  var len = 0;
  var i = 0;

  pushNextWord(beginWord, queue, wordSet);
  step = 2;

  while (len = queue.length) {
    for (i = 0; i < len; i++) {
      word = queue.shift();
      if (word === endWord) return step;
      pushNextWord(word, queue, wordSet);
    }
    step++;
  }

  return 0;
};

var pushNextWord = function (word, queue, wordSet) {
  var start = 'a'.charCodeAt(0);
  var len = word.length;
  var str = '';

  wordSet.delete(word);

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < 26; j++) {
      str = word.substr(0, i) + String.fromCharCode(j + start) + word.substr(i + 1);

      if (wordSet.has(str)) {
        queue.push(str);
        wordSet.delete(str);
      }
    }
  }
};
```