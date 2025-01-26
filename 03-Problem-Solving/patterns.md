# Problem Solving Patters

Table of Contents

- [Problem Solving Patters](#problem-solving-patters)
  - [Frequency Counter Pattern](#frequency-counter-pattern)
    - [Example: Finding the same frequency squared](#example-finding-the-same-frequency-squared)
  - [Multiple Pointers Pattern](#multiple-pointers-pattern)
    - [Example: Finding the first pair that sums to zero](#example-finding-the-first-pair-that-sums-to-zero)
  - [Sliding Window Pattern](#sliding-window-pattern)
    - [Example: Finding the maximum sum of a subarray](#example-finding-the-maximum-sum-of-a-subarray)
  - [Divide and Conquer](#divide-and-conquer)
    - [Example: Binary Search](#example-binary-search)

There are several well-known problem-solving patterns in programming and algorithm design. These patterns often serve as blueprints or strategies to tackle specific types of problems efficiently.

Some of the most recognized ones are:

- Frequency Counters
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Greedy Algorithms
- Backtracking

## Frequency Counter Pattern

**Frequency counter** pattern is used to solve problems involving the comparison of values and their frequencies across datasets, typically using objects to count occurrences. It's useful when you need to check if datasets share common values or match certain criteria, such as squaring values or finding anagrams.

### Example: Finding the same frequency squared

**Problem Statement**: You are given two arrays and need to check if every value in the first array has a corresponding squared value in the second array.

#### Naive Solution

- **Time Complexity**: `O(n^2)` (Quadratic)
- Involves nested loops and checks each squared value using indexOf.

#### Optimized Solution

- **Time Complexity**: `O(n)` (Linear)
- Uses a frequency counter for both arrays, counting occurrences of values and comparing frequencies.

#### Code Implementation

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]); // false
```

## Multiple Pointers Pattern

The **Multiple Pointers** pattern is a problem-solving technique that involves creating two pointers or variables to track positions in a data structure (e.g., an array or string). The pointers move in a defined manner (e.g., towards each other, towards the beginning, or towards the end) to meet certain conditions. This technique is useful for optimizing problems involving pairs or specific conditions in sorted data.

![Multiple pointers](https://algomonster.s3.us-east-2.amazonaws.com/longest_substring_without_repeating_characters/longest_substring_without_repeating_characters.003.png)

Key Points

- Requires a **linear structure** (e.g., arrays, strings, linked lists).
- Often used to find pairs or specific conditions within the data.
- Typically involves **two pointers**:
  - One starts at one end of the structure (e.g., beginning).
  - The other starts at the opposite end or a different position.
  - The pointers move based on comparisons or conditions.

### Example: Finding the first pair that sums to zero

**Problem Statement**: Write a function `sumZero` that accepts a sorted array of integers and finds the first pair where the sum equals zero. If no such pair exists, return `undefined`.

#### Naive Solution

- **Time Complexity**: `O(n^2)` (Quadratic)
- Uses **nested loops**:
  1. Iterate through each element in the array.
  2. Compare it with every other element to check if their sum equals zero.
- **Drawback**: Inefficient for large datasets.

#### Refactored Solution Using Multiple Pointers

- **Time Complexity**: `O(n)` (Linear)
- Steps:
  1. Start two pointers:
     - **Left pointer**: At the beginning of the array.
     - **Right pointer**: At the end of the array.
  2. Calculate the sum of values at the two pointers:
     - If the sum is **0**, return the pair.
     - If the sum is **greater than 0**, move the **right pointer** left.
     - If the sum is **less than 0**, move the **left pointer** right.
  3. Repeat until:
     - A pair is found.
     - The pointers cross each other (no pair exists).

#### Code Implementation

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}
```

## Sliding Window Pattern

The **sliding window pattern** is a technique used to solve problems involving subsets of data (e.g., arrays or strings) that are **continuous**. It helps optimize solutions by avoiding redundant calculations.

![Sliding Window Technique](https://miro.medium.com/v2/resize:fit:1000/0*dc5qMH00R5MqYRg_.png)

Use Cases:

- **Finding the longest sequence of unique characters in a string**

  - String: `"l0ther"`
  - Longest sequence: `"l0ther"` (6 unique characters in a row)
  - When a repeating character is encountered, reset the window or adjust it to exclude duplicates.

- **Finding the maximum sum of a subarray**: Given an array and a number, find the **maximum sum** of `n` consecutive elements.

  - Array: `[8, 2, 3, 4]`
  - `n = 2` → Maximum sum is `10` (`8 + 2`).

Steps:

1. **Initialize the window**:

   - Define the starting and ending points of the window.
   - Keep track of the current sum or state within the window.

2. **Expand the window**:

   - Add the next element to the window.

3. **Slide the window**:

   - Remove the first element from the window when it grows beyond the required size.

4. **Update the result**:
   - Compare the current window's state (e.g., sum, length, etc.) to the desired result and update it if necessary.

### Example: Finding the maximum sum of a subarray

#### Code Implementation

Finding the maximum sum of a subarray

```js
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
```

## Divide and Conquer

The **divide and conquer** pattern is used to solve complex problems by breaking them into smaller, more manageable sub-problems. This pattern is commonly applied in searching, sorting, and data structure operations.

Key Concept

- Take a **larger dataset** (e.g., an array, string, linked list, or tree) and:
  1. **Divide** it into smaller pieces.
  2. Perform operations on these pieces.
  3. Use the results of these operations to solve the original problem.

Applications

**Sorting Algorithms**

- **Quicksort**: Divides the array based on a pivot and recursively sorts the subarrays.
- **Merge Sort**: Splits the array into halves, sorts each half, and then merges them.

**Searching Algorithms**

- **Binary Search**:
  - Used on sorted datasets.
  - Divides the dataset into halves and eliminates half the possibilities at each step.
  - Example: Searching for a value in a sorted array.

**Binary Search Trees**

- Utilizes divide and conquer logic to navigate and manipulate tree structures efficiently.

Benefits

- **Efficiency**: Significantly reduces the problem size at each step, leading to faster solutions.
- **Scalability**: Handles large datasets effectively by focusing only on the relevant parts.

### Example: Binary Search

1. **Input**: A sorted array and a target value.

   - Array: `[1, 3, 5, 7, 9, 11]`
   - Target: `7`

2. **Steps**:

   - Divide the array into two halves.
   - Compare the middle element with the target:
     - If it matches, return the index.
     - If the target is smaller, search in the left half.
     - If the target is larger, search in the right half.

3. **Output**: Index of the target (`3` in this case).

---

End
