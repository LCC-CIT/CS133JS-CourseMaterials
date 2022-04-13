---
title: switch case statements
description: Learn how to do selection with switch case statements.
keywords: selection, conditional expression, switch, switch case
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CS133JS Beginning Programming: JavaScript**

<h1>Selection Using <code>switch case</code> statements</h1>



| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. Functions, Operators and Expressions | 7. Objects |
| 3. <mark>Conditional Statements:</mark> if and <mark>switch</mark> | 8. Methods  |
| 4. Loops                                             | 9. DOM       |
| 5. Midterm                                           | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

------

# Introduction

## Q and A

- How is part 1 of this week's lab assignment going?
- Does anyone have any general questions about anything?

## Quiz Review

Go over the answers to the quiz questions.



# Review

## Selection Using `if` Statements

Parts of an if statement:

```javascript
 if(degrees < 45)        // keyword and condition
  alert("wear a coat");  // statement to be executed if the *condition* is true
```

### Types of if statements

- Single branch 

  ```javascript
  if(degrees < 45) 
    alert("wear a coat"); 
  ```

- Multiple branches

  ```javascript
  if(degrees < 32)   
    alert("wear a warm coat");
  else if (degrees < 45)
    alert("wear a jacket");
  else
    alert("enjoy the warm weather! ");
  ```

- Nested

  ```javascript
  if(degrees < 60) 
    if(wind > 10)
      alert("wear a jacket");
  ```

   

Braces (optional unless there is more than one line to execute, but recommended.)

```javascript
// convert fractions in the form 1/x to decimals
let quotient = 0; divisor = 0;
divisor = prompt("To calculate 1/x, enter x");
if (divisor > 0)
{
   quotient = 1 / parseInt(divisor);
   alert("decimal value: " + quotient);
}
else
{
   alert("Please enter a number greater than zero");
}
```

###  Exercise

There are three prices for a book titled *The Joy of JavaScript*:

- $34.99 for the hardback.
- $24.99 for the paperback.
- $14.99 for the e-book, or free for students.

Write the code and run it in the console so you can simply assign values to variables for input.

------

# Selection using `switch case` statements

- The third type of conditional statement we are learning in this course

- Can be replaced with a multi-branching *if, else if, else* statement.

- Can only be used to test for equality, not `>` or `<`
   (So a switch can’t do everything that an *if, else if, else* statement can.)

### Parts of a switch statement

   ```javascript
   let color = prompt("What is a common color for a mouse?");
   let response = "";
   switch (color)               // keyword switch and variable used by cases
   { 
       case "grey":             // keyword case and condition
           response = "Yes! ";  // statement to execute
           break;               // marks the end of the case
       case "gray": 
           response = "Yes!"; 
           break;
       case "brown": 
           response = "OK, sometimes"; 
           break;
       case "white": 
           response = "Just for lab mice"; 
           break;
       default:                   // like an else
           response = "I don’t think so"; 
           break;
   }
   ```

   

### Multiple cases can be used to execute one statement

```javascript
 let color = prompt("What is a common color for a mouse?");
 let response = "";

 switch (color) 
 { 
   case "grey": 
   case "gray": 
     response = "Yes!"; 
     break;
   case "brown": 
   case "white": 
     response = "OK, sometimes";
     break;
   default: 
     response = "I don’t think so"; 
     break;
 }
```

### Multiple statements can be executed in each case

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



# Reference

## W3Schools
[Switch Statement](https://www.w3schools.com/js/js_switch.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2022</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```