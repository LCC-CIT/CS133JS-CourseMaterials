**CS133JS Beginning Programming: JavaScript**

<h1>More About Functions</h1>



| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. <mark>Functions</mark>, Expressions and Operators | 7. Functions |
| 3. Conditional Statements                            | 8. Objects   |
| 4. Loops                                             | 9. DOM       |
| 5. Midterm                                           | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

------

# Introduction

## Q and A

- How is part 1 of week's lab assignment going?
- Does anyone have any general questions about anything?

## Quiz Review

Go over the answers to the quiz questions

## Announcements

- Part 2 of this week's lab assignment

  

------

# Review

- What is a function? 

- What is meant by “defining a function”? 
- What does it mean to "call" a function?
  How do you do it?
- Do you have to write all the functions you use? 
- What are the name of the parts of the function below? 
  How would you call it?

```javascript
 // This function returns the sum of three numbers
 function total(n1, n2, n3)
 {
  var t = n1 + n2 + n3;
  return t;
 }
```



------

# Variable Scope

*Scope* means the part of a program in which a variable is recognized by JavaScript. 

## Example

1. If you haven't already, put the function definition above into the console. Try using the variable `t` outside of the function. Is it valid there?

   ```
   console.log(t);
   ```

   Note that in the console it says the variable is "not defined", which is different from "undefined". Wow, don't you love this terminology?

   - *Not defined* means that JavaScript doesn't know about the variable in that scope.
   - *Undefined* means that no value has been assigned to the variable, but it is a valid variable in that scope.

2. Now try moving the definition of `t` outside the function.  Is the variable `t` valid both inside and outside the function now?

   ```javascript
    var t = 0;  // The variable is declared here.
    
    function total(n1, n2, n3)
    {
     t = n1 + n2 + n3;   // It is used here, but not declared--no var keyword is used.
     return t;
    }
   
   console.log(t);
   ```

## Local and Global Variables

- Variables declared inside a function (or any other block of code) are called *local variables*.
- Variables that are declared outside of any function or other block of code are called *global variables*.

### Exercise

```javascript
console.log(t);    // is t valid here?
var t = 0;

function total(n1, n2, n3)
{
    t = n1 + n2 + n3;   // is t valid here?
    return t;
}
console.log(t);      // is t valid here?
```



## Function Parameters and Scope

- Function parameters are local variables in the body of the function

   ```javascript
function total(n1, n2, n3)  
{
    var t = n1 + n2 + n3; 
    return t;
}
sum = total(2, 3, 6);
console.log(sum);
console.log(n1); // Are n1, n2 and n3 valid here?
   ```

- Variables defined outside the function, with the same name as the function parameters, are different variables. Below we have two sets of variables with the same names, but in different scopes:

   ```javascript
function total(n1, n2, n3)  {
     var t = n1 + n2 + n3; 
     return t;
  }
   var n1 = 2, n2 = 3, n3 = 6;  // These are new variables!
   sum = total(n1, n2, n3);
   console.log(sum);
  ```
  
  - How can we prove that n1, n2, and n3 defined outside the function are not the same variables as n1, n2, and n3 defined inside the function?
  
  ```javascript
  function total(n1, n2, n3)  
  {
       var t = n1 + n2 + n3; 
       n1 = 0;
       return t;
  }
  
  var n1 = 2, n2 = 3, n3 = 6;
  sum = total(n1, n2, n3);
  console.log(sum);
  console.log(n1);
  ```
  
  

## Bad Things

### Undeclared Variables

Variables used without declaring them become *global variables*. But this is a bad way to do things because it is not obvious that this is a global variable.  This can lead to making mistakes in your code.

```javascript
function total(n1, n2, n3) 
{
   t = n1 + n2 + n3;         // t is not declared. This is bad practice.
   return t;
}
sum = total(2, 3, 6);
console.log(sum);
console.log(t);           // t is a global variable.
```

#### Strict mode (a good thing)

You can set JavaScript to prevent you from using undeclared (not defined) variables by enabling strict mode with the statement, `"use strict"`. Here's an example:

```javascript
"use strict";
hobbit = "Frodo";   // This variable isn't declared, it will cause an error.
var home = "Bag End";
console.log(hobbit + " lives at " + home);
```

### Hoisting

Hoisting is a feature (quirk?) of JavaScript that lets you use a variable before you declare it with `var`. This is true whether your code is inside or outside a function. When you declare the variable anywhere in a given scope, it will be as if you had declared it at the top of the scope. Try this example:

```javascript
hobbit = "Frodo";
var home = "Bag End";
console.log(hobbit + " lives at " + home);
var hobbit;   // This variable declaration gets "hoisted" to the top of the code.
```

#### Declaring variables with `let` (another good thing)

You can use the keyword `let` to declare variables instead of `var`. This will prevent variable hoisting as well as do some other good thing we will discuss later. Try this example:

```javascript
hobbit = "Frodo";  // This will cause an error
let home = "Bag End";
console.log(hobbit + " lives at " + home);
let hobbit;   // The variable should have been declared before using  it.
```

#### 

------

# Reference

### W3Schools

[JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)

[JavaScript Hoisting](https://www.w3schools.com/js/js_hoisting.asp)

[JavaScript Strict Mode](https://www.w3schools.com/js/js_strict.asp)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```