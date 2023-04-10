---
title: Functions
description: How to write and call JavaScript functions and put code into a separate .js file that is linked to an HTML web page.
keywords: function, parameter, argument, return value, expression, DOM, API, interface, function header, function body, getElementById, innerHtml
material: Lecture Notes
generator: Typora
author: Brian Bird
---

<h1>Functions</h1>

**CS133JS Beginning Programming: JavaScript**

| Topics by Week                                               |            |
| ------------------------------------------------------------ | ---------- |
| 1. Intro to JavaScript programming                           | 6. Arrays  |
| 2. <mark>Functions</mark>, Variable scope, Operators and Expressions | 7. Objects |
| 3. Conditional Statements                                    | 8. Methods |
| 4. Loops                                                     | 9. DOM     |
| 5. Midterm                                                   | 10. Final  |



<h2>Table of Contents</h2>

[TOC]

# Introduction

## Q and A

- How is last week's lab assignment going?
  - You should have posted a beta version of part 2 for your lab partner to review.
  - Code reveiws are due tomrrow.
  - Production version is due Thursday.

- This week's reading quiz
  - 4 people didn't take the quiz, so I'm reopening it.
  - I won't normally do this :-)

- Does anyone have any general questions about anything?

# Review

This review is selective. These are the concepts we need for todays new topics.

- What is a variable? 
  - How is it used? 
  - 
    Example:
  
    ```javascript
    var count = 1;
    count++;
    console.log(count);
    ```
- What is a Data Type? 
  - What are the primitive data types[^1]?
  - How does JavaScript determine the type of a variable?
  - Why does type matter?
  - Example:
  
      ```javascript
      var score = 0;
      var name = "Allison";
      var submitted = true;
      console.log(typeof score);
      console.log(typeof name);
      console.log(typeof submitted);
      ```



 # Writing Output into HTML Elements

Last week we learned to write html into a web page using `document.write`. Now we will learn to put our JavaScript output into existing HTML elements.

## Using getElementById and innerHTML

```html
<p id="answer"></p>

<script>
	var p = document.getElementById("answer");
    p.innerHTML = 2 * 3;
</script>
```

The `getElementById` function finds the HTML elemet with the id that is passed to the function (in the paraethesis) and returns a *reference* to that element. In this example, the referenced to the paragraph element is stored in the variable `p`.  Think of the reference as an address for the element--a way to access the element later.

The `innerHTML` property represents the text that goes between the tags. In this case, when we assign a value to `p.InnerHTML` it will go between the  `<p>` and `</p>` tags. 

## Combining statements

We can get the element and assign a value to it's innerHTML all in one statement:

```javascript
document.getElementById("answer").innerHTML = 2 * 3;
```



# JavaScript Functions

## Linking to an External JS File
 We often put all our functions in a separate file. The file that holds the functions should have .js as the file extension.

To use the .js file in your HTML file, add this  the `<head>` element:

```html
<script src="functionPractice.js"></script>
```

We will use this for the JavaScript code in the examples below. (We won't use it to write output in an HTML element... yet).

## What a Function is

### Definition of a function in math

In math, a function has: input, operation(s), output
 *f(x) = 2x*
 **Example:** Coffee grinder

### Functions we’ve already seen

- document.write
- prompt
- alert

## Writing  a Function
 We can use pre-written functions, or write our own. We call this *defining* a function.

### A simple function

This function has no inputs and put's its output in an alert. 

1. This is the function definition. 

```javascript
function helloWorld()
{
  alert("Hello world");
}
```

2. This is the function call. 

   ```javascript
   helloWorld();
   ```

3. Try this in the console.

4. Now put the code into our files:

   - Put the function definition in *FunctionPractice.js*.
   - Put the function call inside a script element in an HTML file.

### A function with one parameter

1. Define a function with a single parameter and put it in FunctionPractice.js.

    ```javascript
    function hello(name)
    {
      alert("Hello " + name);
    }
    ```

2. Call the function in FunctionPractice.js from within a script element.

   ```javascript
     hello("Brian");
   ```

   

### A function with a parameter and a return value

Example:

1. Put the function definition into practice.js

    ```javascript
     function toPercent(decimal)
     {
      return decimal * 100 + "%";
     }
    ```

2. Call it from the console:
    We see the value returned from this function in the console. If we try the same thing with the previous function, do we see a value that was returned to the console? Explain.

    ```javascript
    toPercent(0.25);
    ```

3. Call it from a script element using *document.write*:

    ```javascript
    document.write("<p>Percentage: " + toPercent(0.25) + "!</p>");
    ```

4. Call it from a script element using the *inner.HTML* function:

    ```javascript
       document.getElementById("answer").innerHTML = toPercent(0.25);
    ```




### A function can have more than one parameter

1. A function definition:
    ```javascript
    function fullName(firstName, lastName)
    {
        return firstName + " " + lastName;
    }
    ```

2. The function call:

   ```javascript
   document.getElementById("name").innerHTML = fullName("Tony", "Stark");
   ```

### Practice: a function with all the combinations

Let's write a function is for a math quiz. It will do the following:

- Takes two numbers as parameters and then shows them to the user in a prompt asking for the sum.
- The user answers, the function checks the answer[^2].
- The function returns true or false.

Think about how you would write this function, and then let's write it together.

We can test this function in the console, and then in a web page.


### Summary: Parts of a function

- header
  - name
  - parameters (optional)
- Body
  - code that does operations
  - return statement (optional)

## Coming up...

- Lab 2
  - Take a look at part 1.
  - Do the first problem together.
  - Beta due Friday.



# Notes

## Vocabulary

- Expression: A combination of variables, operators, and functions that produce a value. In other words, a chunk of code that can put a value into a variable.
- DOM: Document Object Model. The DOM is the HTML API for JavaScript.
- API: Application Programming Interface. This is a set of functions (aka methods) that can be called by code in an application.
- Interface: A point of interaction between a piece of software and something or someone else. Interfaces are at boundaries.

## References

### W3Schools

[What is the HTML DOM?](https://www.w3schools.com/whatis/whatis_htmldom.asp)

[HTML DOM innerHTML Property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

[Functions](https://www.w3schools.com/js/js_functions.asp)




------



[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written in 2018, revised in <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

[^1]: Primitive data types: number, string, boolean, undefined
[^2]: We haven't learned about boolean operators yet, but we'll use one anyway: `==` is a boolean comparison operator. We can use it to compare two values, if they are equal the result will be *true*, otherwise the result will be *false*. For example: `var isCorrect = sum == answer` assuming `sum` is the actual sum of two numbers and answer is the `answer` given by the user.

