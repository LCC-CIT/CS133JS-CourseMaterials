---
title: Loops
description: Learn more about how to implement the repetition control structure using while, do while and for loops.
keywords: repetition, loop, while, do while, for, debugging
material: Lecture Notes
generator: Typora
author: Brian Bird
---

<h1>More on Loops using <code>while, do while,</code> and <code>for</code></h1>

**CS133JS Beginning Programming: JavaScript**

| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. Functions, Operators and Expressions | 7. Objects |
| 3. Conditional Statements: if and switch | 8. Methods  |
| 4.<mark> Repetition: while, do while, and for</mark> | 9. DOM       |
| 5. Midterm Check-Point                              | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

------

# Introduction

## Announcements

- Do a code review for a lab partner, if you haven't already.

- Lab 3 production version is due tomorrow (Thursday).

- Next wednesday is the midterm.


## Q and A

- How is lab 4, part 1 going?
- Does anyone have any general questions about anything?



------

# Review

## Repetition Using `while` 

This is a *pretest* loop
The variables used in the loop condition must be declared outside the loop.

```javascript
// Number guessing game
let guess = 0;
while(guess != 6)   // 6 is the number to guess
{
   guess = prompt("Enter your guess.");
}
alert("You got it!");
```

## Repetition Using `do while` 

This is a *post-test* loop
The variables used in the condition must be declared outside the loop in this one too.

```javascript
// Input validation
do
{
   alert("Please enter a temperature between -100 and 150")
   temperature = prompt("Enter the temperature");
} while(temperature < -100 || temperature > 150);
// Do something with temperature
```

## Repetition Using `for` 

This is a loop with a built-in counter
The loop counter's scope is local to the loop.

```javascript
// Count from 1 to 10
for (let i = 1;  i <= 10;  i++) 
{                               
   console.log(i);
}
```



------



# Interrupting Loop Iteration

We can interrupt the normal flow of execution in a loop using `break`, or `continue`, but these are rarely needed. You can almost always control the execution of your loop by choosing the right kind of loop and the right loop condition. These are only used as a lost resort, because they make your code more complex. 

## `break`

This causes execution to jump out of the loop.

**Example of a `for` loop that uses `break`**

```javascript
// Count from 1 to 10
for (let i = 1; ;  i++) 
{                               
   console.log(i);
   if(i > 10)             // Is there any advantage to doing it this way?
     break;
}
```



## `continue`

This "short-circuits" the execution so it jumps over the rest of the statements in the loop.

**Example of a `for` loop that uses `continue`**

```javascript
// Count from 2 to 10 by twos
for (let i = 1; i <= 10;  i++) 
{  
   if (i % 2 != 0)
     continue;           // could we change this to just an if without continue?
   console.log(i);
}
```



------

# Nested Loops

We can put one loop inside another. 

**Example: a `while` nested in a `do while` loop**

```javascript
// Number guessing game
let playAgain = "";
do
{
    let guess = 0;
    while(guess != 6)   // 6 is the number to guess
    {
       guess = prompt("Enter your guess.");
    }
    alert("You got it!");
 		playAgain = prompt("Do you want to play again?");
} while (playAgain == "yes");
```



**Example: nested `for` loops **

```javascript
// Create a multiplication table
for (let i = 1; i < 10;  i++)    // counts down the rows
{  
  	let row = "";
    for (let j = 1; j < 10; j++)   // counts across the rows
    {
      	row += i * j + "\t";    // put a tab between each number
    }
  	console.log(row);
}
```

Note: The console needs to be wide enough to show the rows without wrapping.

Q: What would you need to change to use this code in a web page[^1]?

- "\t" ?
- console.log(row) ?
- Add something to start a new line?



## Debugging

- Check console error messages.

- Use the debugger.

  - Breakpoints
  - Stepping line-by-line.
  - Checking values of variables.

- Use alerts.

- Remove suspect code by "commenting it out".

- Test snippets of code in the console.

- Watch out for <u>infinite loops</u>!

## Best Practices

- If a loop is inside a function, don't put a `return` statement inside the loop.
- Don't use an `if` statement inside a loop in order to control iterations.  
  But you can use an `if` statement inside a loop for other purposes.
- Don't change the value of a loop counter inside the body of a `for` loop.



------

# Reference

**Mozilla Developer Network**

[Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

[The Firefox JavaScript Debugger](https://developer.mozilla.org/en-US/docs/Tools/Debugger)



[^1]:You can't use a tab character in an HTML page (unless it's inside a `<pre>` element. But you can use a series of `&nbsp`. At the end of each row you need to use `<br>` In place of `console.log(), you will use document.write().

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

