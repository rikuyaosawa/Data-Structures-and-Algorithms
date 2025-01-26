# Big O Notation

Table of Contents

- [Big O Notation](#big-o-notation)
  - [Time Complexity](#time-complexity)
  - [Space Complexity](#space-complexity)
  - [Performance Comparison](#performance-comparison)
  - [Focus on Growth Rate](#focus-on-growth-rate)
  - [Common Complexities](#common-complexities)
  - [Ignoring Constants](#ignoring-constants)
  - [Logarithms](#logarithms)

---

> Big O notation is a mathematical concept used in computer science to describe the performance of algorithms in terms of <font color="pink">**time and space**</font> complexity

![Big O complexity chart](https://www.freecodecamp.org/news/content/images/2021/06/1_KfZYFUT2OKfjekJlCeYvuQ.jpeg)

**Time complexity** is a way to measure how the runtime of an algorithm increases as the size of the input data grows. It provides insight into the efficiency of an algorithm, allowing a comparison between different approaches to solving a problem.

**Space complexity** refers to the amount of memory an algorithm uses in relation to the size of its input. It helps evaluate how an algorithm's memory requirements grow as the input size increases.

## Time Complexity

A few key concepts:

1. **Operations Counting**: Instead of measuring actual time in seconds, time complexity focuses on counting the number of simple operations an algorithm performs. This gives a more consistent metric, as it doesn't depend on the specific hardware or conditions.
2. **Big O Notation**: Time complexity is often expressed using Big O notation, which categorizes algorithms based on their growth rates relative to input size.
3. **Algorithm Comparison**: By analyzing time complexity, developers can choose the most appropriate algorithm for a given task, ensuring efficient use of resources and improved performance.

Big O Shorthands:

- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity

A few key concepts:

1. **Big O Notation**: Just like time complexity, space complexity is often expressed using Big O notation.
2. **Memory Usage**: Basic data types (like numbers and booleans) generally consume constant space, meaning they do not increase in size based on input. However, complex types like strings or arrays use linear space, as their size directly correlates with the number of elements.
3. **Auxiliary Space**: When analyzing space complexity, we focus on the auxiliary space, which refers to temporary space allocated by the algorithm while executing, excluding the space used for inputs.

In JavaScript:

- Most primitives are constant space
- Strings require `O(n)` spcae (where `n` is the length of the string)
- Reference types are generally `O(n)`, where `n` is the length (for arrays) or the number of keys (for objects)

A few key points to explain Big O notation clearly:

## Performance Comparison

Big O notation allows developers to compare the efficiency of different algorithms. It helps determine which algorithm performs better for larger data sets.

## Focus on Growth Rate

Instead of focusing on actual execution time, Big O notation focuses on how the execution time grows <ins>relative to the input size</ins>. For example, O(n) signifies that if the input size doubles, the processing time also approximately doubles.

## Common Complexities

- `O(1)`: **Constant time** - the algorithm takes the same amount of time regardless of input size.
  ```js
  function addUpToSecond(n) {
      return n \* (n + 1) / 2;
  }
  ```
- `O(n)`: **Linear time - the** algorithm's time grows linearly with the input size.

  ```js
  function addUpToFirst(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
      total += i;
    }
    return total;
  }
  ```

- `O(n^2)`: **Quadratic time** - the time grows quadratically, like with nested loops.
  ```js
  function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        console.log(i, j);
      }
    }
  }
  ```

## Ignoring Constants

In Big O notation, we ignore constant factors and lower-order terms. For example, `3n^2 + 2n + 5` simplistically resolves to `O(n^2)`, as the quadratic term dominates for large `n`.

## Logarithms

A logarithm is a mathematical concept that serves as the inverse of exponentiation. In simpler terms, it answers the question: to what power must a specific base be raised to obtain a certain number?

For example, when we write log base two of eight `(log₂(8))`, we're asking "2 raised to what power equals 8?" The answer is 3, because `2^3 = 8`. Thus, `log₂(8) = 3`.

Logarithmic time complexity is great.

---

End
