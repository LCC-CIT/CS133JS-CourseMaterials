---
title: if statements
description: Learn how to implement the selection control structure using if statements.
keywords: selection, if, else...if, else if, conditional expression, ternary operator
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

### Q and A (Fall 2023)

- Lab 1, I still need to grade this. I'm teaching an extra section of CIS 195 this term and there is just a lot of grading to do!
- Lab 2, last week's lab assignment&mdash; how is it going?
  - Beta versions of part 2 were due at the end of last week. I see quite a few posts in the forum&mdash;which is good, but there should be a few more.
    - Remember that the beta version is like a draft. It doesn't need to be complete or completely working. 70% done is good enough for a beta version.
    - Are there questions on how to do it?
    - See me or a tutor if you'd like some help.
    - The production (final) version is due Thursday
- Get started on the reading. The quiz is due before the next class.
  
- Does anyone have any general questions about anything?




## Review

### Scope

- What is *scope*? 
- What is meant by the terms: *local variable*, and *global variable*?
- Why are global variables dangerous[^1]?
- Why shouldn't we use a variable without declaring it with `var` or `let`[^2]? Why is `let` better?
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

*This is the end of the review. This was a long review!*

------

## Selection Expressions

There are three ways to do selection in JavaScript:

1. *ternary* expressions using `?` and `: `
2. `if` statements
3. `switch` statements

In this session we will learn to use the ternary oprator and `if` statements. Next time we will learn to use `switch` statements.

### Ternary Operator

The ternary operator is the question mark, `?`

- Syntax

  Example: `let result = a === b ? "Strictly equal" : "Not equal";`

  | a === b           | ?                    | "Strictly equal"                             | :                                   | "Not equal"                                           |
  | ----------------- | -------------------- | -------------------------------------------- | ----------------------------------- | ----------------------------------------------------- |
  | Logical condition | The ternary operator | Expression returned if the condition is true | Colon separates the two expressions | Expression that is returned if the condition is false |

  The ternary operator is used to form a conditional *expression*. An expression evaluates to a value. For example:

  ```javascript
  let age = prompt("How old are you?");
  let legalStatus = age >= 18 ? "adult" : "child";
  ```

- Another example:

  ```javascript
  let temperature = prompt("What is the temperature?");
  alert(temperature < 50 ? "Wear a coat" : "Enjoy the warm day");
  ```

#### Try this:

> Write an expression using a ternary operator that determines whether a person is old enough to get a driver's license in Oregon[^3].



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

### Designing a Selection Algorithm

Let's take a break from talking about coding and talk about designing an algorithm so that we know what it is we need to code.

- Algorithms: Earlier this term we talked about algorithms and we wrote some algorithms in English.

- IPO: We also talked about how every function has Input, Processing, and Output. We even put that into a table.

- Selection IPO table: We can make a table that shows each combination of inputs that will produce a particular output. For the Multiple branches code above, we could make a table like this:  

  | Input | Processing                | Output                 |
  | ----- | ------------------------- | ---------------------- |
  | 31    | temp less than 32 degrees | Wear a warm coat       |
  | 32    |                           | Wear a jacket          |
  | 44    |                           | Wear a jacket          |
  | 45    | temp 45 degrees or higher | Enjoy the nice weather |

  In the next section we'll go back to coding.

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

Take a look at Part 1 of the lab assignment now. You know enough to do the first 7 problems which use `if` statements. The last two problems use `switch` statements which we will cover in the next class session.

We'll do a few of these in class and we'll start by writing algorithms and/or making IPO tables.



## Examples

An `if` statement can be used to check the validity of an argument passed to a function and return a status value:

```javascript
function inchesToCentemeters(inches) {
	centemeters = -1; // This value indicates inches was invalid
	if(inches >= 0) {
		centemeters = inches * 2.54;
	}
	return centemeters;
}
```

Note that it is best practice to <u>not</u> put a `return` statement inside an `if...else` statement.

### More Examples/Exercises

There are three examples posted on Moodle. The first two use `if else` statements. Lets do one of them together.



## Reference

### W3Schools
[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

[JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)

[JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), 2018, revised <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

[^1]: Their values can be re-assigned from anywhere in the program, in any function, and it's easy for the dev to loose track of what should be stored in it.
[^2]: JavaScript will treat an undeclared variable as a global variable even if you first assign a value to it in a local scope.
[^3]: To get a driver's license in Oregon you must be: 18 years of age or older. Or at least 16 year's of age, have had a permit for 6 months, have had a driver's ed class and 50 hours of supervised driving time, or no driver driver's ed and 100 hours of supervised driving time.

