# Algorithm and Problem Solving

Table of Contents

- [Algorithm and Problem Solving](#algorithm-and-problem-solving)
  - [Overview](#overview)
  - [Step 1: Understand the Problem](#step-1-understand-the-problem)
  - [Step 2: Explore Concrete Examples](#step-2-explore-concrete-examples)
  - [Step 3: Break Down the Problem](#step-3-break-down-the-problem)
    - [Importance of Breaking Down](#importance-of-breaking-down)
    - [Example Problem: Character Count Function](#example-problem-character-count-function)
    - [Benefits of This Approach](#benefits-of-this-approach)
  - [Step 4: Solve or Simplify](#step-4-solve-or-simplify)
      - [Why Simplify?](#why-simplify)
    - [Simplification Process](#simplification-process)
  - [Step 5: Look Back and Refactor](#step-5-look-back-and-refactor)
    - [Key Considerations for Refactoring](#key-considerations-for-refactoring)

## Overview

> Algorithm is a process or set of steps to accomplish certain task.

Problem solving may be broken down to the following five steps:

1. **Understand the problem**
2. **Explore concrete examples**
3. **Break down the problem**
4. **Solve / simplify**
5. **Look back and refactor**

We will go over each step.

<small>Reference: [How to Solve It by George Polya](https://en.wikipedia.org/wiki/How_to_Solve_It)</small>

## Step 1: Understand the Problem

The first step in this approach is to understand the problem thoroughly before attempting to solve it. <ins>You want to make sure to take a moment to clarify the problem before rushing into coding, especially under time constraints.</ins>

Key questions to ask when understanding a problem include:

-   Can you restate the problem in your own words?
-   What are the inputs and outputs of the problem?
-   Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
-   How should important pieces of data be labeled? What is the terminology I should use?

## Step 2: Explore Concrete Examples

After grasping the problem, it's crucial to generate specific examples that clarify your understanding and serve as sanity checks for your eventual solution.

When faced with a coding challenge, do the following steps:

1. **Start with simple examples**

    Write down two or three straightforward cases, detailing the inputs and expected outputs. This practice not only reinforces your understanding but also helps you identify potential edge cases and complexities.

2. **Progress to more complex examples, considering various scenarios, such as invalid inputs or empty strings**

    For example, if the input is an empty string, what should the function return? An empty object, null, or an error? Similarly, if a non-string input is provided, how should the function respond?

By exploring these examples, we gain deeper insights into the problem and can develop a more robust solution. This step is essential for building a comprehensive understanding of the problem before diving into coding, ensuring that we are well-prepared to tackle the challenge ahead.

## Step 3: Break Down the Problem

-   Before coding, break down the problem into steps.
-   Write down the steps; it doesn't need to be full pseudocode or valid syntax.
-   Use comments as a guide for the steps needed.

### Importance of Breaking Down

-   Communicates your thought process to the interviewer.
-   Avoids jumping straight into coding without a plan.
-   Helps identify lingering questions or uncertainties.

### Example Problem: Character Count Function

-   Problem: Write a function that takes a string and returns counts of each character.

1. **Function Skeleton**:
    - Name: `charCount`
    - Input: `str` (string)
2. **Return Value**:
    - Return an object with keys as lowercase alphanumeric characters.
3. **Basic Steps**:
    - Create an object to return.
    - Loop over each character in the string.
    - Return the object at the end.

-   **Looping Logic**:
    -   For each character:
        -   Check if it is alphanumeric.
        -   If it is, check if it exists in the object:
            -   If yes, increment the count.
            -   If no, add it with a count of one.
        -   If not alphanumeric, do nothing.
-   **Final Return**: Return the constructed object.

### Benefits of This Approach

-   Writing down steps helps clarify the solution.
-   Demonstrates to the interviewer that you have a structured approach.
-   Even if you run out of time, having a clear outline shows your understanding of the problem-solving process.

## Step 4: Solve or Simplify

-   If you feel ready, solve the problem directly.
-   If not, simplify the problem by focusing on parts you can handle.
-   **Important Note**: Simplifying does not mean changing the problem entirely.

#### Why Simplify?

-   In interviews, it's better to show progress than to get stuck on a difficult part.
-   Simplifying can lead to insights that help solve the more complex aspects of the problem.

### Simplification Process

1. Identify the core difficulty causing confusion.
2. Temporarily ignore that difficulty and write a simplified solution.
3. Incorporate the difficult part back into the solution later.

Even if the solution isn't perfect, getting 90% of the way there is valuable. In interviews, communicate your thought process and ask for suggestions if you hit a roadblock.

> Demonstrating problem-solving ability is more important than achieving a perfect solution.

## Step 5: Look Back and Refactor

-   After creating a workable solution, resist the temptation to stop.
-   Strive for improvement in code quality, efficiency, and readability.
-   Even if a solution works, it’s important to reflect on it and identify areas for enhancement.

### Key Considerations for Refactoring

1. **Check Results**: Ensure your code produces the correct output.
2. **Alternative Solutions**: Consider if there are different approaches to the problem.
3. **Intuitiveness**: Assess how easy it is to understand your solution at a glance.
4. **Reusability**: Determine if your solution can be applied to other problems.
5. **Performance Improvement**: Look for ways to enhance time and space complexity.
6. **Code Style**: Ensure your code adheres to style guides and conventions.
7. **Learn from Others**: Ask about other solutions to the same problem, especially in an interview setting.

The refactoring process is crucial for improving code quality and efficiency. Reflecting on your solution and considering alternative approaches can lead to better outcomes.

Engaging in this process not only enhances your code but also demonstrates your problem-solving skills in interviews.
