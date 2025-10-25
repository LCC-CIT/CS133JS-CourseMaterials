---
title: Loops
description: Learn how to implement the repetition control structure using while, do while, and for loops.
keywords: repetition, loop, while, do while, for
material: Lecture Notes
generator: Typora
author: Brian Bird
---

<h1>Loops using <code>while, do while,</code> and <code>for</code></h1>

**CS133JS Beginning Programming: JavaScript**

| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. Functions, Operators and Expressions | 7. Objects |
| 3. Conditional Statements: if and switch | 8. Methods  |
| 4. <mark>Repetition</mark> | 9. DOM       |
| 5. Midterm                                           | 10. Review |
| 11. Final |  |



<h2>Table of Contents</h2>

[TOC]

# Review

## Selection Using `switch` Statements

```javascript
let color = prompt("What is a common color for a mouse?");
let response = "";   // comment on answer
let score = 0; // socre for answer

switch (color) 
{ 
    case "grey": 
    case "gray": 
        response = "Yes!"; 
        score = 10;
        break;
    case "brown": 
    case "white": 
        score = 5;
        response = "OK, sometimes";
        break;
    default: 
        score = 0;
        response = "I don’t think so"; 
}

console.log("score: " + score + ", comment: " + response);
```

## Control Structures

There are three control structures in programming:

1. *Sequence*
2. *Selection*
3. *Repetition*, which is also called *looping*.



------

# This week's topic: Loops (Repetition)

Loop statements execute a block of code multiple times. There are several types of loops in JavaScript. This week we'll learn how to use:

- `while`
- `do while`
- `for`

And some more we'll learn aobut about later:

- `for in` (we'll learn about this one after we've learned about arrays).
- `for of` (we'll learn about this one after we've learned about objects.)



## `while` Loops

The *while* loop *iterates* (repeats the code inside it) as long as a condition is true. 
It checks the loop condition expression at the beginning of the loop, so it called a *pretest* loop.

**Parts of a `while` loop**

Assume we have initialized a variable: 
`let age = 0;`

key word     &emsp;conditional expression

<pre>   &darr;               &darr;</pre>

```javascript
while (age <= 0 || age > 125)   // loop header
{                                                 // loop body
   age = parseInt(prompt("Enter a valid age."));
}
```

**Example: input validation**

```javascript
// Re-prompt for input until the user enters it correctly
let degrees = 0;
degrees = parseFloat(prompt("Enter the temperature"));
while(degrees < -100 || degrees > 150)  // invalid temperatures
{
   alert("Please enter a temperature between -100 and 150");
   degrees = parseFloat(prompt("Enter the temperature"));
}
// Do something with the user's input
```

**Example: a loop with a counter**

```javascript
// Count to 10
let count = 1;
while(count <= 10) 
{
   console.log(count);
   count += 1;
}
```

If we run this in the console, is there some value we could set `count` to that would prevent the loop from ever iterating, not even once?

### Scope of variables in `while` loops

Any variable (or variables) used in the loop test condition must be declared outside the loop. In the example above, degrees, is declared outside the loop, so its scope is greater than the body of the loop.

In next example, we add a variable which has a scope of just the loop body.

**Example: a loop with a local variable**

```javascript
// Count to 10 by ones and to 100 by tens
let count = 1;
while(count <= 10) 
{
   let timesTen = count * 10;
   console.log(count + ", " + timesTen);
   count += 1;
}
```

If we run this in the console, how can we show that `count` is global and `timesTen` is local to the loop body?



## `do while` Loops

The same as the *while* loop, but it checks the condition at the end of the loop, so it is a *post-test* loop.

Note the semicolon at the end of the loop condition&mdash;this is a syntactic detail that's easy to miss!

**Example: a loop with a counter**

```javascript
// Count to 10
let count = 1;
do
{
   console.log(count);
   count += 1;
} while(count <= 10);
```

Is there any value of `count` that would prevent this loop from iterating at least once?

### Input Validation with a `do while` Loop

**Example: input validation**

```javascript
// Enter input until the user enters it correctly
do
{
   alert("Please enter a temperature between -100 and 150")
   degrees = prompt("Enter the temperature");
} while(degrees < -100 || degrees > 150);  // invalid temperatures
// Do something with the user's input
```

Is there any way this loop would not iterate at least once?

This example we validated the range of input. What could it make sense to validate?

## `for` Loops

The *for* loop is used when you know how many times you want to *iterate* (go around the loop).

**Structure**

&emsp;&emsp;initial value &emsp;condition &emsp;increment

<pre>        &darr;         &darr;       &darr;</pre>

```javascript
for (let i = 1;  i <= 10;  i++)   // loop header
{                                  // loop body
   console.log(i);
}
```



**Example: a loop that shows squares of numbers**

```javascript
// Display squares of a series of numbers
for (let i = 0; i < 5; i++)
{
    let result = i * i;
    console.log(i + " squared = " + result);
}
```

- How many times will the loop execute?

- What is the scope of `i`?

- What is the scope of `result`?

- What will the final value of `i` be?

  

### Omitting parts of the `for` loop header

**Example: declare the variable outside the loop**

```javascript
// Display squares of a number
let i = 0;
for (; i < 5; i++)
{
    let result = i * i;
    console.log(i + " squared = " + result);
}
```

Note: you need to leave the semicolon there as a placeholder.

- What is the scope of `i`now?
- What is the scope of `result`?

While you can do this, it's not recommended unless you really need your loop counter to be visible in the scope outside your loop.



**Example: increment the loop counter in the body of the loop**

```javascript
// Display squares of a series of numbers
let i = 0;
for (; i < 5;)
{
    let result = i * i;
    console.log(i + " squared = " + result);
    i++;
}
```

- What would happen if you moved the code that increments `i` to the beginning of the loop body?

Again, moving the increment expression is something you can do, but it's not recommended since it makes your code more difficult to understand. You would only do this if you really needed to.



## Solving Problems that Involve Loops

We have looked at several problem solving approaches in the past: 

- Writing algorithms in English (or pseudo-code)  
  We will do this again for problems involving loops
- Making IPO charts  
  This is especially helpful for problems involving selection, but not so much for problems involving loops.

**Practice problem:**  
Assume a person is registering a new password for an account. Write code that prompts the user to enter a password, and keeps  prompting until the user enters a password that is at least 8 characters  long. When they enter one that is long enough, display a success message.

### Writing the Algorithm

You can often come up with an algorithm by thinking about how you would do something without using a computer. For example, if you were checking a person's password yourself,  the person would tell you their password and you would keep telling them to try another one until it was long enough.

1. Give the user instructions for registering a password.
2. Get a password as input.
3. Check the length, go to 1 if it's less than 8 characters long.
4. Display  "New password accepted"

### The Solution

```javascript
let password = "";
do {
  password = prompt("Please enter a string with at least 5 characters:");
} while (password.length < 8);
console.log("New password accepted");
```



## Practice Exercises and Examples

Show everyone how to download the example .html and .js files from a browser by right-clicking on the link in the instructions and selecting "Save as".

These are the same examples that are on Moodle:

- Loop Practice. These problems are similar to part 1 of the lab assignment:

  [CS133JS_Lab04_Part1_Example.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/CS133JS_Lab04_Part1_Example.html)&mdash;use this html file with the practice problems or with the solution.  After downloading, uncomment the `<script>` element linking the .js file you want.

  - [CS133JS_Lab04_Part1_Example_Starter.js](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/CS133JS_Lab04_Part1_Example_Starter.js) &mdash;practice problems. 
  - [CS133JS_Lab04_Part1_Example.js](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/CS133JS_Lab04_Part1_Example.js) &mdash; solution to the practice problems. 

- These examples are similar to part 2 of the lab assignment:

  - [Rainfall table](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/RainFall.html) - uses a for loop.

  - [Car Seat](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/CarSeat2.html) - uses a while loop for input validation.

  - [Actors and Movies](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/MoviesAndActors.html) - uses a while loop for validation and a do-while loop to re-run the program.

- [Additional loop practice problems](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/PracticeProblems-Loops.html)&mdash;Fifteen loop problems, with solutions, that are similar to those in part 1 of the lab assignment.


------

# Reference

**Mozilla Developer Network**

[Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

**JavaScript Tutorial**

[JavaScript while Loop](https://www.javascripttutorial.net/javascript-while-loop/)

[JavaScript do...while Loop](https://www.javascripttutorial.net/javascript-do-while/)

[JavaScript for Loop](https://www.javascripttutorial.net/javascript-for-loop/)

***Eloquent JavaScript***

[Ch. 2, Program Structure](https://eloquentjavascript.net/02_program_structure.html)&mdash;The sections on loops.



[^1]: Other things to validate besides rang:  a) data type, length of string, not an empty string.



[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2024</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

