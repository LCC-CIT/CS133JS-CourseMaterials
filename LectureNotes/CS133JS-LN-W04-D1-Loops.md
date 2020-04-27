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

Loop statements execute a block of code multiple times. There are several types of loops in JavaScript: 

- `while`
- `do while`
- `for`
- `for in` (we'll learn about this one after we've learned about arrays).



## `while` Loops

The *while* loop iterates as long as a condition is true. 
It tests the condition at the beginning of the loop, so it called a *pretest* loop.

**Example: input validation**

```javascript
// Re-prompt for input until the user enters it correctly
let degrees = 0;
degrees = prompt("Enter the temperature");
while(degrees < -100 || degrees > 150)  // invalid temperatures
{
   alert("Please enter a temperature between -100 and 150")
   degrees = prompt("Enter the temperature");
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

The same as the *while* loop, but it tests the condition at the end of the loop, so it is a *post-test* loop.

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
         initial value     condition      increment
                     &darr;                    &darr;                &darr;

```javascript
for (let i = 1;  i <= 10;  i++)   // loop header
{                                  // loop body
   console.log(i);
}
```



**Example: a loop that shows squares of numbers**

```javascript
// Display squares of a number
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
- 

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
// Display squares of a number
let i = 0;
for (; i < 5;)
{
    let result = i * i;
    console.log(i + " squared = " + result);
    i++;
}
```

- What would happen if you moved the code that increments `i` to the beginning of the loop body?
- What would happen if you put changed the first `i` in the loop body to   `++i` ?

Again, moving the increment expression is something you can do, but it's not recommended since it makes your code more difficult to understand. You would only do this if you really needed to.



------



# Reference

**Mozilla Developer Network**

[Loops and Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```