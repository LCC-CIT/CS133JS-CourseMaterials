

**CS133JS Beginning Programming: JavaScript**

<h1>More on Functions, More Operators</h1>



| Topics by Week                          |              |
| --------------------------------------- | ------------ |
| 1. Intro to JavaScript programming      | 6. Arrays    |
| 2. Functions, Expressions and Operators | 7. Functions |
| 3. Conditional Statements               | 8. Objects   |
| 4. Loops                                | 9. DOM       |
| 5. Midterm                              | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

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

1. If you haven't already, put the function definition console. Try using the variable t outside of the function. Is it defined there?

   ```
   console.log(t);
   ```

   

2. Now try moving the definition of t outside the function.  Is the variable t valid both inside and outside the function now?

   ```javascript
    var t = 0;
    
    function total(n1, n2, n3)
    {
     t = n1 + n2 + n3;   // no var keyword used here!
     return t;
    }
   
   console.log(t);
   ```

## Local and Global Variables

- Variables declared inside a function (or any other block of code) are called *local variables*.
- Variables that are declared outside of any function or other block of code are called *global variables*.
- Variables declared in a “wider” scope are valid anywhere in that scope below the point where they were defined.

### Exercise

```javascript
document.writeln(t);    // is t valid here?
var t = 0;

function total(n1, n2, n3)
{
    t = n1 + n2 + n3;   // is t valid here?
    return t;
}
document.writeln(t);      // is t valid here?
```









·     Variables defined without the var keyword are *global variables*. Let’s revise our previous example and define a the variable t as a global variable:

```javascript
 function total(n1, n2, n3) {
  t = n1 + n2 + n3;
  return t;
 }
 sum = total(2, 3, 6);
 console.log(sum);
 console.log(t);
```






The variable t is still defined inside the function, is its scope still just inside the function?

# Notes

## Vocabulary

- Expression: A combination of variables, operators, and functions that produce a value. In other words, a chunk of code that can put a value into a variable.
- DOM: Document Object Model. The DOM is the HTML API for JavaScript.
- API: Application Programming Interface. This is a set of functions (aka methods) that can be called by code in an application.
- Interface: A point of interaction between apiece of software and something or someone else. Interfaces are at boundaries.

## References

### W3Schools

[JS Functions](https://www.w3schools.com/js/js_functions.asp)

[What is the HTML DOM?](https://www.w3schools.com/whatis/whatis_htmldom.asp)

[HTML DOM innerHTML Property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)





------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------