# Searching Algorithms

Table of Contents

- [Searching Algorithms](#searching-algorithms)
  - [Overview](#overview)
  - [Linear Search](#linear-search)
  - [Binary Search](#binary-search)
  - [Native String Search](#native-string-search)

## Overview

**Searching algorithms** are methods used to find specific elements within a data structure (such as an array, list, or tree). They help locate data efficiently based on a given key or condition.

- **Linear Search** – Checks each element one by one until it finds the target. (O(n) time complexity)
- **Binary Search** – Divides a sorted array in half repeatedly until the target is found. (O(log n) time complexity)
- **KMP String Search** - Searches for a pattern in a text by using a precomputed LPS array to avoid redundant comparisons after mismatches. (O(n) time complexity)

## Linear Search

**Linear search** or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.

This is the most straightforward one, and many JavaScript methods use this algorithm such as `indexOf`, `includes`, `find`, and `findIndex`.

**Big O of Linear Search**

| **Scenario**     | **Time Complexity** | **Description**                                      |
| ---------------- | ------------------- | ---------------------------------------------------- |
| **Best Case**    | O(1)                | The target element is found at the first position.   |
| **Average Case** | O(n)                | The target element is in the middle of the list.     |
| **Worst Case**   | O(n)                | The target is at the end or not present in the list. |

## Binary Search

**Binary search** is an efficient algorithm for finding a target value within a **sorted array** or list.

It works by repeatedly dividing the search interval in half. Initially, the search examines the middle element of the array; if the target value is equal to the middle element, the search is complete. If the target value is smaller, the search continues in the left half, and if the target is larger, the search continues in the right half. This process repeats until the target is found or the interval is empty.

Binary Search Pseudo Code

```js
function binarySearch(sortedArray, target):
    left = 0
    right = length of sortedArray - 1

    while left <= right:
        middle = (left + right) / 2

        if sortedArray[middle] == target:
            return middle

        if sortedArray[middle] < target:
            left = middle + 1

        else:
            right = middle - 1

    return -1
```

**Big O of Binary Search**

| Scenario     | Time Complexity | Description                                                                                                                                                                                     |
| ------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Best Case    | O(1)            | The target element is the middle element of the sorted array. The search finds the element in the first comparison.                                                                             |
| Average Case | O(log n)        | The target element is found somewhere within the sorted array. The search space is halved with each comparison, leading to a logarithmic number of comparisons on average.                      |
| Worst Case   | O(log n)        | The target element is either the smallest or largest element in the array, or the element is not present in the array. Even in the worst case, the search space is halved with each comparison. |

## Native String Search

Native string search isn't a formally defined algorithmic term like "binary search" or "Dijkstra's algorithm." **It generally refers to the most straightforward, basic approach to searching for a substring (or pattern) within a larger string (the text).** This is often also called "brute-force string search" or "naive string search."

**The Idea**

The native string search algorithm works by sliding the pattern one character at a time along the text. At each position, it compares the pattern character by character with the corresponding characters in the text.

**Naive Solution**

```Js
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")
```

**Overlapping vs Non-overlapping**

A non-overlapping match means that once you find a match, you don't consider any characters within that match for further matches.

```js
if (match) {
  count++;
  i += target.length - 1; // <--- Key for non-overlapping
}
```

An overlapping match means that even if a character is part of a match, it can still be part of another match.

```js
if (match) {
  count++;
  // i stays the same, or increment by 1 outside the if statement
}
```

The difference is subtle. For non-overlapping, you have to carefully control `i` to jump past the current match. For overlapping, the default behavior of the loop incrementing `i` by 1 is exactly what you need.
