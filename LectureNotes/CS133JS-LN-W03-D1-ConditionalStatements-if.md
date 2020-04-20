**CS133JS Beginning Programming: JavaScript**

<h1>Selection Using <code>if</code> statements</h1>



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

# Introduction

## Q and A

- How is last week's lab assignment going?
  - Are there any issues with code reviews?
  - I've finished grading the lab 1 production version. A few people had some things missing and have uploaded those--I'll regrade those today.
- How is the reading going?
  - The reading quiz is due tomorrow.
  - We'll review the answers on Wednesday/Thursday.
- Does anyone have any general questions about anything?

## Announcements

Reminders about virtual tutoring and getting help.

- Tutoring available 9:00 to 5:00 M&mdash;F.
  - Fill out the request form as well as going to the Zoom meeting.
- Use the Q and A forum on our Moodle page too.
- My office hours: 11:00 to 12:00 M&mdash;Th.
  - You can sit in on extra lectures if you like as well.



# Review

## Scope

- What is scope? 
- What is meant by the terms: “local variable”, and “global variable”?
- Why are global variables dangerous?
- Why shouldn't we use a variable without declaring it (with var or let)?
- Identify the scope of each of the variables below:

```javascript
var extraVariable = 0;
function total(n1, n2, n3)  {
    var t = n1 + n2 + n3; 
    extraVariable = t;
    n1 = 0;
    return t;
}

var n1 = 2, n2 = 3, n3 = 6;
sum = total(n1, n2, n3);
console.log(sum);
console.log(n1);
console.log(extraVariable);
```



## Comparison Operators

| Symbol | Condition for truth                                         | Examples of true expressions where: a = 7, b = 8; |
| ------ | ----------------------------------------------------------- | ------------------------------------------------- |
| ==     | Operands are equal to each other                            | `b == b`                                          |
| !=     | Operands are not equal to each  other                       | `a  != b`                                         |
| >      | Left operand is greater than  the right operand             | `b  > a`                                          |
| <      | Left operand is less than the  right operand                | `a  < b`                                          |
| >=     | Left operand is greater than or  equal to the right operand | `b  >= b` or `b >= a`                             |
| <=     | Left operand is less than or  equal to the right operand    | `b  <= ` or `a <= b`                              |



## Logical Operators



### Logical operators and expressions

| Symbol | Name | Condition for truth    | Examples of true expressions where:  a = true, b = false; |
| ------ | ---- | ---------------------- | --------------------------------------------------------- |
| &&     | and  | Both operands are true | `a  && a`                                                 |
| \|\|   | or   | Either operand is true | `a  || b, b || a`                                         |
| !      | not  | The operand is false   | `!b`                                                      |



### Truth tables

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



## Ternary Operator

- What is the *ternary conditional operator*?

- How are *conditional expressions* used in *a ternary conditional statement*?

- What value does a *ternary conditional statement* evaluate to?

- Example:

  ```javascript
  var temperature = 60;
  alert(temperature < 50 ? "Wear a coat" : "Enjoy the warm day");
  ```




*End of the review. This was a long review!*



------

# Selection using `if` statements

There are three types of selection statements:

1. *ternary* statements using `? : `
2. `if` statements
3. `switch` statements

## Types of `if` statements

 In the examples below, assume this line of code was executed first:
```javascript
let degrees = prompt("Enter the temperature");
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



## Conditional expressions using *logical operators*

 For these examples, assume both of these lines of code have already been executed :
```javascript
let wind = prompt("Enter the wind speed");
let degrees = prompt("Enter the temperature");
```

- AND, `&&`

   ```javascript
   if(degrees < 60 && wind > 10)
      alert("Wear a jacket");
   ```
   
   


- OR, `||`

   ```javascript
   if(degrees < 45 || wind > 20)
    alert("Wear a warm coat");
   ```
   
   


- NOT, `!`

   ```javascript
   let name = prompt("Enter your name");
   if( !(name == "Han Solo"))
      alert("This is not your spacecraft! ");
   ```
   
   


## Nested if statements

- Another way to combine multiple conditional expressions is to nest the if statements. 

- Nesting has the same effect as using the AND logical operator. Here’s an example: 

- Nesting that is equivalent to ANDing two conditions:
  
   ```javascript
   if(degrees < 60) 
     if(wind > 10)
        alert("Wear a jacket");
   ```
   
   

## When to use curly braces

- By default, an if statement will execute only the one statement following the condition.
  - This is true even if the statement is another if statement (nesting)

- To execute more than one statement, put them in curly braces.

- Best practice: Use curly braces all the time so that you don't forget and so your code will be clearer. Example:

 This example checks an user's input and asks again if it isn't valid input

```javascript
let temperature = prompt("Enter the temperature");
if(temperature < -100 || temperature < 150)
{
   alert("Please enter a temperature between -100 and 150")
   temperature = prompt("Enter the temperature");
}

if(degrees < 45)
{
   alert("Wear a coat");
}
```





------



# Reference

## W3Schools
[JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

[JavaScript if else and else if](https://www.w3schools.com/js/js_if_else.asp)

[JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```