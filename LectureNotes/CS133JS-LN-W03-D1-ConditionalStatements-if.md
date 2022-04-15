---
title: if statements
description: Learn how to implement the selection control structure using if statements.
keywords: selection, if, conditional expression, ternary oeprator
material: Lecture Notes
generator: Typora
author: Brian Bird
---

<h1>Selection Using <code>if</code> statements</h1>

**CS133JS Beginning Programming: JavaScript**

| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. Functions, Operators and Expressions | 7. Objects |
| 3. <mark>Selection Statements:</mark> <mark>if</mark> and switch | 8. Methods  |
| 4. Loops                                             | 9. DOM       |
| 5. Midterm                                           | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

------

## Introduction

### Q and A

- How is last week's lab assignment going?
  - Are there any issues with code reviews?
    - Remember that the beta version is like a draft. It doesn't need to be complete or completely working. 70% done is good enough for a beta version.
  - I've finished grading the lab 1 production version. 
- How is the reading going?
  - The reading quiz is due tomorrow.
  - We'll review the answers on Wednesday.
- Does anyone have any general questions about anything?
  - This afternoon, I'll answer questions posted to the forum or e-mailed to me over the weekend.
  - I frequently answer questions over the weekend, but not always.
  - I have an office again! Room 152.




## Review

### Scope

- What is scope? 
- What is meant by the terms: “local variable”, and “global variable”?
- Why are global variables dangerous?
- Why shouldn't we use a variable without declaring it with `var` or `let`[^1]? Why is `let` better?
- Identify the scope of each of the variables below:

```javascript
let extraVariable = 0;
function total(n1, n2, n3)  {
    var t = n1 + n2 + n3; 
    extraVariable = t;
    n1 = 0;
    return t;
}

let n1 = 2, n2 = 3, n3 = 6;
let sum = total(n1, n2, n3);
console.log(sum);
console.log(n1);
console.log(extraVariable);
```



### Comparison Operators

| Symbol | Condition for truth                                         | Examples of true expressions<br />where: a = 7, b = 8; |
| ------ | ----------------------------------------------------------- | ------------------------------------------------------ |
| ==     | Operands are equal to each other                            | `b == b`                                               |
| !=     | Operands are not equal to each  other                       | `a  != b`                                              |
| >      | Left operand is greater than  the right operand             | `b  > a`                                               |
| <      | Left operand is less than the  right operand                | `a  < b`                                               |
| >=     | Left operand is greater than or  equal to the right operand | `b  >= b`, or `b >= a`                                 |
| <=     | Left operand is less than or  equal to the right operand    | `b  <= ` b, or `a <= b`                                |



### Logical Operators

#### Logical operators and expressions

| Symbol | Name | Condition for truth    | Examples of true expressions where:  a = true, b = false; |
| ------ | ---- | ---------------------- | --------------------------------------------------------- |
| &&     | and  | Both operands are true | `a  && a`                                                 |
| \|\|   | or   | Either operand is true | `a  || b, b || a`                                         |
| !      | not  | The operand is false   | `!b`                                                      |



#### Truth tables

| **AND** |       |       |
| ------- | ----- | ----- |
| **A**   | **B** | **Q** |
| F       | F     | F     |
| F       | T     | F     |
| T       | F     | F     |
| T       | T     | T     |



| **OR** |       |       |
| ------ | ----- | ----- |
| **A**  | **B** | **Q** |
| F      | F     | F     |
| F      | T     | T     |
| T      | F     | T     |
| T      | T     | T     |



| **NOT** |       |
| ------- | ----- |
| **A**   | **Q** |
| F       | T     |
| T       | F     |

### Control Structures

What are the three control structures? These are things in the programming language that control the flow of execution in a program.

*End of the review. This was a long review!*

------

## Selection Using `if` and the Ternary Operator

There are three ways to do selection in JavaScript:

1. *ternary* expressions using `? : `
2. `if` statements
3. `switch` statements

In this session we will learn to use the ternary oprator and `if` statements. Next time we will learn to use `switch` statements.

### Ternary Operator

- The ternary operator is the question mark, `?`

- Syntax:

  condition ? expression : expression
           &uarr;       &uarr;          &uarr;         &uarr;          &uarr; 
           1       2          3         4          5

  	1. Logical condition, like: a === b
  	1. The ternary operator.
  	1. Expression returned if the condition is true.
  	1. Colon separates the two expressions.
  	1. Expression that is returned if the condition is false.

- The ternary operator is used to form a conditional *expression*. An expression evaluates to a value. For example:
  ```javascript
  let age = prompt("How old are you?");
  let legalStatus = age >= 18 ? "adult" : "child";
  ```

- Another example:

  ```javascript
  let temperature = prompt("What is the temperature?");
  alert(temperature < 50 ? "Wear a coat" : "Enjoy the warm day");
  ```

### `if` Statements

An if statement is used to conditionally determine whether or not one or more other statements are executed. Note that it does not form an expression&mdash;it doesn't evaluate to a value.

#### Types of `if` statements

 In the examples below, assume this line of code was executed first:
```javascript
let degrees = 0; // Temperature in Fahrenheit
```

- Single branch 
  ```javascript
  if(degrees < 45) 
    alert("Wear a coat");
  ```
  Parts of this statement:
  
    - keyword: 	  `if`
    - condition:     `(degrees < 45)` 
    - conditionally executed statement:  `alert("wear a coat");`


- Two branches
  
   ```javascript
   if(degrees < 45) 
      alert("Wear a coat");             // executed if the condition is true
   else         
      alert("Enjoy the warm weather! "); // executed if the condition is false
   ```


- Multiple branches

  ```javascript
  if(degrees < 32)   
     alert("Wear a warm coat"); // executed only if the first condition is true
  else if (degrees < 45)
     alert("Wear a jacket");    // executed only if the second condition is true   
  else
    alert("Enjoy the warm weather! ");  // executed only if neither condition is true
  ```



### Conditional expressions using *logical operators*

For these examples, assume this additional variable has been declared and initialized :
```javascript
let wind = 0; // Wind speed in MPH
```

- AND, `&&`

   Both comparisons must evaluate to true for the entire conditional expression to be true.
   
   ```javascript
   degrees = prompt("Enter the temperature.");
   wind = prompt("Enter the wind speed.")
   if(degrees < 60 && wind > 10)
      alert("Wear a jacket");
   ```
   
   


- OR, `||`

   Either comparison can evaluate to true for the entire conditional expression to be true.
   
   ```javascript
   degrees = prompt("Enter the temperature.");
   wind = prompt("Enter the wind speed.")
   if(degrees < 45 || wind > 20)
    alert("Wear a warm coat");
   ```
   
   


- NOT, `!`

   Not inverts the Boolean value resulting from the comparison.
   
   ```javascript
   let name = "";  // Person wishing to fly the Millennium Falcon
   name = prompt("Enter your name");
   if( !(name == "Han Solo"))   // Only Han Solo can fly the Millennium Falcon!
      alert("This is not your spacecraft! ");
   ```
   
   


### Nested if statements

Another way to combine multiple conditional expressions is to nest the if statements. 

```javascript
if(degrees < 60) 
  if(wind > 10)
     alert("Wear a jacket");
```

Nesting that is equivalent to ANDing two conditions:

```javascript
if(degrees < 60 && wind > 10)
     alert("Wear a jacket");
```



### Conditionally Executing Multiple Statements

So far, we've only executed one statement based on the condition in our if statement. We can execute multiple statements by enclosing them in curly braces, `{ }`.

#### When to use curly braces

- By default, an if statement will execute only a single statement following the condition.
  - This is true even if the statement is another if statement (nesting).

- To execute more than one statement, put them in curly braces.

- Best practice: Use curly braces all the time so that you don't forget and so your code will be clearer. Example:

 This example checks an user's input and prompts for input again if it the input wasn't valid:

```javascript
degrees = prompt("Enter the temperature");
if(degrees < -100 || degrees > 150)  // check for temperatures unlikely to be valid
{
   alert("Please enter a temperature between -100 and 150")
   degrees = prompt("Enter the temperature");
}

if(degrees < 45)
{
   alert("Wear a coat");
}
```



#### Scope of variables inside curly braces

When we declare variables inside curly braces, they have local scope... well, `var` is an exception.

- Variables declared with `var` are in a separate scope only if they are declared inside a function.
- Variables declared with `let` are in a separate scope any time they are declared inside of curly braces&mdash;another reason `let` is better than `var`.

Example using `let`:

```javascript
let calculation = 0;
let radius = 0;
calculation = prompt("Do you want to find 1) the circumference, or 2) the area of a circle? (Enter 1 or 2)");
radius = prompt("Enter the radius of the circle.");
if (calculation == 1)
{
  let circumference = 2 * 3.141 * radius;  // a local variable
  console.log(circumference);
}
else if (calculation == 2)
{
  let area = 3.141 * radius * radius;       // another local variable
  console.log(area);
}
else
{
  console.log("Not a valid choice.")
}

```

## Lab Assignment

Take a look at Part 1 of the lab assignment now. You know enough to do the first 7 problems which use if statements. The last two problems use switch case statements which we will cover in the next class session.

### Console  vs Code Editor for Part 1

For part 1 of the lab assignment, the instructions say to write the code in a browser console. This is just so that you can write the code quickly and easily. If you find that it's easier for you to write the code in a code editor, like Visual Studio Code, you are welcome to do that, but then you will need to put the code in a .js file and then you will also need a way to run the code.

- Copy and past code snippets into the console.
- Write your code so everything is inside of functions, then create a web page that loads the files and call the functions from the console.



## Examples

There are three examples posted on Moodle. The first two use `if else` statements. Lets do one of them together.



------



## Reference

### W3Schools
[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

[JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)

[JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2022</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

[^1]: JavaScript will treat an undeclared variable as a global variable even if you first assign a value to it in a local scope.

