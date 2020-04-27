**CS133JS Beginning Programming: JavaScript**

<h1>Loops using <code>while, do while,</code> and <code>for</code></h1>



| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. Functions, Operators and Expressions | 7. Objects |
| 3. Conditional Statements: if and switch | 8. Methods  |
| 4. Repetition | 9. DOM       |
| 5. Midterm                                           | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

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



# Loops

Loops execute a block of code multiple times. There are several types of loops in JavaScript: 

- while
- do while
- for
- for in (we'll learn about this one after we've learned about arrays).



## `while` Loops

The *while* loop iterates as long as a condition is true. 
It tests the condition at the beginning of the loop, so it is a pretest loop.

 Example:

```javascript
// Enter input until the user enters it correctly
degrees = prompt("Enter the temperature");
while(degrees < -100 || degrees > 150)  // invalid temperatures
{
   alert("Please enter a temperature between -100 and 150")
   degrees = prompt("Enter the temperature");
}
// Do something with the user's input
```



## `do while` Loops

The same as the *while* loop, but it tests the condition at the end of the loop, so it is a post-test loop.

 Example:

```javascript
// Enter input until the user enters it correctly
do
{
   alert("Please enter a temperature between -100 and 150")
   degrees = prompt("Enter the temperature");
} while(degrees < -100 || degrees > 150);  // invalid temperatures
// Do something with the user's input
```



## `for` Loops

The *for* loop is used when you know how many times you want to *iterate* (go around the loop).

### Structure
​         initial value     condition      increment
​                     &darr;                &darr;                  &darr;

```javascript
for (let i = 1;  i <= 10;  i++)
{                                  // body
   console.log(i);
}
```



### Example

```javascript
// Display powers of a number
let base = 2;
// how many times will the loop execute? Final value of i?
for (i = 0; i < 5; i++)
{
    result = Math.Pow(2, i);
    // the + operator is used for concatenation here
    answer = base + “ raised to the “ + i + “ = “ result;
    alert( answer);
}
alert(“done”);
```



------



# Reference

**Mozilla Developer Network**

[Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```