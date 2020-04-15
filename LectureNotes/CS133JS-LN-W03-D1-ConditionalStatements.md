**CS133JS Beginning Programming: JavaScript**

<h1>Selection Using <code>if</code> statements</h1>



| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. Functions, Operators and Expressions | 7. Objects |
| 3. <mark>Conditional Statements</mark>   | 8. Methods  |
| 4. Loops                                             | 9. DOM       |
| 5. Midterm                                           | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

------

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
|         |       |
|         |       |

## Ternary Operator

- What is the *ternary conditional operator*?

- How are *conditional expressions* used in *a ternary conditional statement*?

- What value does a *ternary conditional statement* evaluate to?

- Example:

  ```javascript
  var temperature = 60;
  alert(temperature < 50 ? "Wear a coat" : "Enjoy the warm day");
  ```

  

------

# Selection using `if` statements

There are three types of selection statements:

1. *ternary* statements using `? : `
2. `if` statements
3. `switch` statements

## Types of `if` statements

 In the examples below, assume this line of code was executed first:
 `var degrees = prompt("Enter the temperature");`

- Single branch 
   *keyword*   *conditional expression (“condition”)*
   |            |
   if(degrees < 45) 
    alert("wear a coat"); --- statement to be executed if the condition is true


- Two branches
   if(degrees < 45) 
    alert("wear a coat"); --- statement to be executed if the condition is true
   else           --- keyword
    alert("enjoy the warm weather! "); --- executed if the condition is false


- Multiple branches

  ​        *first condition*
  ​            |
   if(degrees < 32)   
    alert("wear a warm coat"); --- executed only if the first condition is true

  ​           *second condition*
  ​                 |
   else if (degrees < 45)
    alert("wear a jacket");   --- executed only if the second condition is true   
   else
    alert("enjoy the warm weather! ");  --- executed only neither condition is true


## Conditional expressions using *logical operators*

 Assume an additional line of code has been added :
 `var wind = prompt("Enter the wind speed");`

- AND, &&

   if(degrees < 60 && wind > 10)
    alert("wear a jacket");


- OR, ||

   if(degrees < 45 || wind > 20)
    alert("wear a warm coat");


- NOT, !

   var name = prompt("Enter your name");
   if( !(name == "Han Solo"))
    alert("This is not your spacecraft! ");


## Nested if statements

- Another way to combine multiple conditional expressions is to nest the if statements. 

- Nesting has the same effect as using the AND logical operator. Here’s an example: 

- Nesting that is equivalent to ANDing two conditions:
   if(degrees < 60) 
    if(wind > 10)
      alert("wear a jacket");



 

## When to use curly braces

- By default, an if statement will execute the one statement following the condition
  - This is true even if the statement is another if statement (nesting)

- To execute more than one statement, put them in curly braces.

- Rule of thumb: if you use curly braces around one branch in an if statement, use it around both. Example:

 // calculate average scores for scores greater than 0

var count = 0, total = 0, average = 0, score = "0";

while (score != "")

{

  var score = prompt("Enter your score, or enter nothing to quit");

  if(score > 0)

  {

​    count++;

​    total += parseInt(score);

​     average = total / count;

  }
   else
   {
     alert("Please enter a score greater than zero");
   }

}

alert("average: " + average);



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