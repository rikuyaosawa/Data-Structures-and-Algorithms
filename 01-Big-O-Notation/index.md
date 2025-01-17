# Big O Notation

> A mathematical concept used in computer science to describe the performance of algorithms in terms of <font color="pink">**time and space**</font> complexity

<small>More on [time and space complexity](./time-and-space-complexity.md)</small>

Image: [Big O Notation Visualized](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)

A few key points to explain Big O notation clearly:

## Performance Comparison

Big O notation allows developers to compare the efficiency of different algorithms. It helps determine which algorithm performs better for larger data sets.

## Focus on Growth Rate

Instead of focusing on actual execution time, Big O notation focuses on how the execution time grows <ins>relative to the input size</ins>. For example, O(n) signifies that if the input size doubles, the processing time also approximately doubles.

## Common Complexities:

-   `O(1)`: **Constant time** - the algorithm takes the same amount of time regardless of input size.
    ```js
    function addUpToSecond(n) {
        return n \* (n + 1) / 2;
    }
    ```
-   `O(n)`: **Linear time - the** algorithm's time grows linearly with the input size.

    ```js
    function addUpToFirst(n) {
        var total = 0;
        for (var i = 0; i <= n; i++) {
            total += i;
        }
        return total;
    }
    ```

-   `O(n^2)`: **Quadratic time** - the time grows quadratically, like with nested loops.
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

<small>More on [Logarithm](./logarithm.md)</small>

---

END
