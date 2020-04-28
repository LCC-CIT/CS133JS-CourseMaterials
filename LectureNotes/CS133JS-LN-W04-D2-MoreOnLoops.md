**CS133JS Beginning Programming: JavaScript**

<h1>Loops using <code>while, do while,</code> and <code>for</code></h1>



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

- Lab 4, part 2 is ready. We'll look at that after the lecture.
- Next week is the midterm quiz.
  - We'll do review on Monday/Tuesday
  - The quiz will be on Wednesday/Thursday

## Q and A

- How was lab 4, part 1? Any questions?
- Does anyone have any general questions about anything?



------

# Review

## Repetition Using `while` 

This is a *pretest* loop

```javascript
// Number guessing game
let guess = 0;
while(guess != 6)   // 6 is the number to guess
{
   degrees = prompt("Enter your guess.");
}
alert("You got it!");
```

## Repetition Using `do while` 

This is a *post-test* loop

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
       degrees = prompt("Enter your guess.");
    }
    alert("You got it!");
 		playAgain = prompt("Do you want to play again?");
} (while playAgain == "yes");
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



# Tips for Coding and Debugging

## Coding

- In the .js file, write "stubs" for the function(s) you think you will need.

- In the .html file, write the code that will do the I/O.

  - Put a script element in the head of the page that links to the .js file.
  - Put one or more script elements in the body of the page where you will execute the I/O code.
  - Write the I/O code and call the stub function(s) in the .js file.
    - The function won't do anything yet, but you can check to see if there are any bugs in the skeleton of your app.
    - Open the console in the browser (F12) to see if there are any errors.
  - Go back to your .js file and finish writing your functions. You can test them at each step of the way using your .html page.

## Debugging

- Check console error messages.

- Use the debugger.

  - Breakpoints
  - Stepping line-by-line.
  - Checking values of variables.

- Use alerts.

- Remove suspect code by "commenting it out".

- Test snippets of code in the console.



------

# Reference

**Mozilla Developer Network**

[Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```