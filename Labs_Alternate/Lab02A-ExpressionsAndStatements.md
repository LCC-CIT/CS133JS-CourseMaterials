<h1>Lab 2A: Expressions and Statements</h1>

[TOC]

## Instructions

The concept of expressions is crucial to understanding how to write JavaScript code. I created this extra set of exercises to help you check your understanding of the difference between expressions and statements. Be sure you fully grasp this. If it's unclear ask for further explanation.

Here is an explanation and some problems to help you understand expressions and statements.

### Expressions and Statements

**Concept:**

The simplest way to understand what expressions and statements are is:

- An *Expression* is any piece of code that *evaluates to* or *resolves to* a single value.
- A *Statement* is a complete instruction or "action."

A "litmus test" is that an expression can be put on the right side of an assignment (`=`) or inside a `console.log()`. A statement cannot.

For example, let myVariable = 5 + 10; is a complete statement. It's a set of actions (declaring a variable, adding two numbers and assigning the sum to the variable).

Inside that statement, 5 + 10 is an expression (it evaluates to 15). 5 is an expression. 10 is an expression. 

**Examples:**

Almost everything that produces a value is an expression.

```JavaScript
// 1. Literal Value: The value itself is an expression.
console.log(100);       // '100' is an expression
console.log("Hello");   // '"Hello"' is an expression

// 2. Arithmetic: A math operation is an expression.
console.log(5 * 2);    // '5 * 2' is an expression (evaluates to 10)

// 4. Variable: A variable is an expression.
let x = 10;
console.log(x);         // 'x' is an expression (evaluates to 10)

// 3. Comparison: A comparison is an expression.
console.log(5 == x);    // '5 == x' is an expression (evaluates to false)

// 5. Function Call: A function that returns a value is an expression.
console.log(parseInt("50")); // 'parseInt("50")' is an expression

// 6. Complex: Expressions can be made of other expressions.
// 'x + (5 * 2)' is an expression.
console.log(x + (5 * 2)); // (evaluates to 20)
```

**Problems:**

1. First, declare two variables: `let price = 10;` and `let quantity = 5;`. On a new line, use `console.log()` and, inside the parentheses, write *only* the expression that calculates the total cost (price times quantity).
2. First, declare a variable: `let age = 30;`. On a new line, use `console.log()` and, inside the parentheses, write *only* the expression that checks if `age` is less than `50`. (This should print `true` or `false`).
3. First, declare two variables: `let firstName = "Jane";` and `let lastName = "Doe";`. On a new line, use `console.log()` and, inside the parentheses, write *only* the expression that joins `firstName` and `lastName` with a space in between (e.g., `"Jane Doe"`).
4. Consider the complete statement: `let userScore = 100 + 10;`. On a new line, use `console.log()` and pass in *only* the part of that statement that is the expression. (Your console should print `110`).
5. Consider the `prompt()` function. The function call `prompt("What is your name?")` is an expression because it *evaluates to* the value you type in. Prove this by creating a new variable `userName` and assigning the result of that expression to it (e.g., `let userName = ...`). Then, print `userName` to the console.



These lab instructions were written by Brian Bird using Gemini 2.5 Pro, 10/29/2025.

