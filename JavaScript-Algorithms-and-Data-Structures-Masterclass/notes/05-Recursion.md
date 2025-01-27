# Recursion

Table of Contents

- [Recursion](#recursion)
  - [Overview](#overview)
  - [Why Learn Recursion?](#why-learn-recursion)
  - [The Call Stack](#the-call-stack)
  - [Common Pitfalls](#common-pitfalls)
  - [Using Recursion as Helper Method](#using-recursion-as-helper-method)

## Overview

**Recursion**: A process where a function calls itself. In programming, recursion refers to a function that repeatedly invokes itself until a specific condition is met.

Key Characteristics:

- **Function Calls Itself**:

  - Unlike typical functions that call other functions, recursive functions invoke themselves.
  - Example:

    ```javascript
    function countDown(n) {
      if (n <= 0) {
        return;
      }
      console.log(n);
      countDown(n - 1);
    }

    countDown(5);
    ```

- **Requires a Base Case**:
  - A stopping condition to prevent infinite recursion.
  - Without a base case, the recursion would continue indefinitely, causing a stack overflow (similar to an infinite loop).

## Why Learn Recursion?

- **Widely Used in Programming**:

  - Many algorithms and solutions rely on recursion.
  - Recursion is a foundational concept for problems like:
    - Tree traversals
    - Searching and sorting algorithms (e.g., quicksort, merge sort)
    - Graph problems

- **Common in JavaScript**:
  - Examples of built-in recursive functions:
    - `JSON.parse()` and `JSON.stringify()`:
      - Handle nested structures (e.g., objects and arrays) recursively.
    - AJAX calls processing JSON responses:
      - Recursive functions are often used under the hood for parsing and converting nested data.

## The Call Stack

**The call stack** is a data structure that manages function calls in programming languages, including JavaScript, which:

- Ensures that function calls are executed in the correct order.
- Operates in a **Last In, First Out (LIFO)** manner:
  - The most recent function call is placed on top of the stack.
  - When a function completes, it is removed from the top of the stack.

When a **function is invoked**, it is added to the **top of the stack**. The function waits for any other functions it calls to return. When the function completes or encounters a `return` keyword:

- It is **removed from the stack**.
- The next function below it resumes execution.

<br />

> Understanding the call stack is crucial when learning recursion because recursion relies on function calls that are added to the stack. Each recursive call is placed on top of the stack, and only when the base case is reached do these calls begin to resolve in reverse order (LIFO).

## Common Pitfalls

Below are the key pitfalls to watch out for when writing recursive solutions:

#### Missing or Incorrect Base Case

The **base case** is essential for recursion to stop. Without it, the function keeps calling itself indefinitely.

```js
function factorial(num) {
  // no base!
  return num * factorial(num - 1);
}
```

If the base case is missing, calling `factorial of 2` would result in **Maximum Call Stack Size Exceeded** error as the function adds calls to the stack without stopping. The base case should define a condition to terminate recursion, such as "if the number is equal to 0, return 1."

#### Forgetting to Return a Value

Recursion relies on each call returning a value to the previous call. So if a function doesn’t return, the recursion chain is broken, and the stack doesn’t resolve This creates an infinite loop, eventually causing the **Maximum Call Stack Size Exceeded** error.

#### Returning the Wrong Value

Even with a correct base case, returning an incorrect value causes recursion to fail. This leads to infinite calls or incorrect results.

Recursion relies on the call stack, where each function call is dependent on the previous one. Each call must **return a value** to resolve the chain. Without proper returns, the recursion fails, resulting in stack overflows or incorrect results.

#### Console Logging Instead of Returning

If a recursive function logs values instead of returning them, the stack doesn’t resolve, and recursion continues indefinitely. This eventually causes the **Maximum Call Stack Size Exceeded** error.

```js
function factorial(num) {
  if (num === 1) console.log(num);
  return num * factorial(num - 1);
}
```

## Using Recursion as Helper Method

When working with recursion, variables like `result` can be reset every time the function is called. This makes it challenging to **persist state** across recursive calls.

And this is where we can use recursion as a helper method.

**Helper method recursion** involves two functions:

1. **Outer Function**: The main function that is called by the developer.
2. **Inner Recursive Function**: A function defined inside the outer function that handles the recursive logic.

The **outer function** sets up the initial state (e.g., initializing variables like an empty array), and the **inner function** performs the recursive calls and manipulates the state.

> This pattern is especially useful when collecting data or working with a data structure like an array.

```js
function collectOddValues(nums) {
  let result = []; // result persists

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(nums);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
```

---

End
