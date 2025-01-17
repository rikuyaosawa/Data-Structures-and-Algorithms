# Time and Space Complexity

Time complexity is a way to measure how the runtime of an algorithm increases as the size of the input data grows. It provides insight into the efficiency of an algorithm, allowing a comparison between different approaches to solving a problem.

Space complexity refers to the amount of memory an algorithm uses in relation to the size of its input. It helps evaluate how an algorithm's memory requirements grow as the input size increases.

## Time Complexity

A few key concepts:

1. **Operations Counting**: Instead of measuring actual time in seconds, time complexity focuses on counting the number of simple operations an algorithm performs. This gives a more consistent metric, as it doesn't depend on the specific hardware or conditions.
2. **Big O Notation**: Time complexity is often expressed using Big O notation, which categorizes algorithms based on their growth rates relative to input size.
3. **Algorithm Comparison**: By analyzing time complexity, developers can choose the most appropriate algorithm for a given task, ensuring efficient use of resources and improved performance.

Big O Shorthands:

-   Arithmetic operations are constant
-   Variable assignment is constant
-   Accessing elements in an array (by index) or object (by key) is constant
-   In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity

A few key concepts:

1. **Big O Notation**: Just like time complexity, space complexity is often expressed using Big O notation.
2. **Memory Usage**: Basic data types (like numbers and booleans) generally consume constant space, meaning they do not increase in size based on input. However, complex types like strings or arrays use linear space, as their size directly correlates with the number of elements.
3. **Auxiliary Space**: When analyzing space complexity, we focus on the auxiliary space, which refers to temporary space allocated by the algorithm while executing, excluding the space used for inputs.

In JavaScript:

-   Most primitives are constant space
-   Strings require `O(n)` spcae (where `n` is the length of the string)
-   Reference types are generally `O(n)`, where `n` is the length (for arrays) or the number of keys (for objects)

---

END
