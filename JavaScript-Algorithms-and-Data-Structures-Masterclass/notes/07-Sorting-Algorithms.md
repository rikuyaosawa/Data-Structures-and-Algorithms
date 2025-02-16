# Sorting Algorithms

Table of Contents

- [Sorting Algorithms](#sorting-algorithms)
  - [Overview](#overview)
  - [Bubble Sort](#bubble-sort)
  - [Selection Sort](#selection-sort)

## Overview

**Why Learn Sorting Algorithms?**

1. **Sorting is Fundamental in Programming**
   Sorting is one of the most common operations in programming. Whether you're working with arrays, lists, or databases, you'll frequently encounter the need to organize data.

2. **Understanding Built-in Sorting Methods**
   Even if you're using built-in sorting functions in languages like JavaScript (`Array.prototype.sort()`), Python (`sorted()`), or Ruby (`Array#sort`), it's essential to understand the algorithms behind these methods. Knowing how they work will help you:

   - Identify their strengths and weaknesses.
   - Predict performance in different scenarios.

3. **Different Algorithms for Different Situations**
   There are many ways to sort data, and each algorithm has **pros and cons**. Some are faster in general, but specific algorithms excel under certain conditions. For example:

   - **Nearly Sorted Data:** Some algorithms that are typically slower can be very efficient when the data is almost sorted.
   - **Uniform Data:** If your dataset is mostly uniform with just a few discrepancies, selecting the right algorithm can drastically improve performance.

4. **Custom Sorting for Performance Optimization**
   In certain cases, the built-in sort methods might not be the most efficient for your specific data structure. If you understand how different sorting algorithms perform, you can implement a custom sorting solution that optimizes performance for your use case.

## Bubble Sort

**Bubble sort**, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed.

<img src="https://www.computersciencebytes.com/wp-content/uploads/2016/10/bubble_sort.png" alt="bubble sort steps" width="400" />

**Pseudo code**

1. Start looping with a variable called `i` at the end of the array towards the beginning.
2. Start an inner loop with a variable called `j` from the beginning until `i -1`.
3. If `arr[j]` is greater than `arr[j + 1]`, swap those two values.
4. Return the sorted array.

**Time Complexity**

| **Scenario**     | **Time Complexity** | **Explanation**                                                                              |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| **Best Case**    | O(n)                | If the array is already sorted, no swaps are needed, and the loop exits early.               |
| **Average Case** | O(n²)               | On average, it will perform n²/2 comparisons and swaps.                                      |
| **Worst Case**   | O(n²)               | If the array is in reverse order, the algorithm will need to compare and swap every element. |

## Selection Sort

**Selection Sort** is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.

- First we find the smallest element and swap it with the first element. This way we get the smallest element at its correct position.
- Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.
- We keep doing this until we get all elements moved to correct position.

---

![Selection sort visualized](https://www.programiz.com/sites/tutorial2program/files/Selection-sort-0-comparision.png)

---
