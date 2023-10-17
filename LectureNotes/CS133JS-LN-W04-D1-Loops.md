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
| 5. Midterm                                           | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

------

# Introduction

## Announcements

Fall 2023

- Alternative for code review for lab 3. 
  If your lab partner didn't post a beta version for you to review, you can review this instead.
- Midterm next Thursday. 
  - Review lecture notes
  - Practice midterm.
  - You can take the quiz in the classroom at class time, or you can take it in the testing center. 
    - **Classroom** from 10:00 to 11:50 on Wednesday, 10/26/2023. 
      You will be allowed to refer to your textbook, lecture notes, and your lab assignments during the quiz in the classroom.
    - **[Testing center](https://www.lanecc.edu/get-support/academic-support/instructional-testing-services)** 
      - Thursday, 10/26 10:30am&ndash;1:30pm, 4:30pm&ndash;7 pm
      - Friday and Saturday 10/27 and 28 10:00am to 2:00pm.
      - The testing center is located in the Center Building, Room 311 (upstairs and across from the library). You will be allowed to refer to a 3 x 5 card with notes on it
    - In both locations: help from others, internet searches, ChatGPT, and any other outside sources are not allowed.


## Q and A

- Does anyone have any general questions about anything?
  - Lab 3 (on selection)?




------

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
        break;
}
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
   degrees = ParseFloat(prompt("Enter the temperature"));
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

## Examples

Show everyone how to download the example .html and .js files from a browser.

These are the examples on Moodle:

- This is similar to part 1 of the lab assignment:

  - [Loop Practice](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/CS133JS_Lab04_Part1_Example.html)
    - [Starter .js file](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week04/CS133JS_Lab04_Part1_Example_Starter.js)

- These are similar to part 2 of the lab assignment.

  - Rainfall table - for loop 

  - Car Seat - with input validation

  - Actors and Movies - with validation and do-again

- [Additional loop practice problems, with solutions](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/PracticeProblems-Loops.html).




------

## Reference

### Mozilla Developer Network

[Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

### JavaScript Tutorial

[JavaScript while Loop](https://www.javascripttutorial.net/javascript-while-loop/)

[JavaScript do...while Loop](https://www.javascripttutorial.net/javascript-do-while/)

[JavaScript for Loop](https://www.javascripttutorial.net/javascript-for-loop/)

### *Eloquent JavaScript*

[Ch. 2, Program Structure](https://eloquentjavascript.net/02_program_structure.html)&mdash;The sections on loops.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```

