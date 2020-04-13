**CS133JS Beginning Programming: JavaScript**

<h1>Functions</h1>



| Topics by Week                           |            |
| ---------------------------------------- | ---------- |
| 1. Intro to JavaScript programming       | 6. Arrays  |
| 2. Functions, Expressions, and Operators | 7. Objects |
| 3. Conditional Statements                | 8. Methods |
| 4. Loops                                 | 9. DOM     |
| 5. Midterm                               | 10. Final  |



<h2>Table of Contents</h2>

[TOC]

# Review

This review is selective. These are the concepts we need for todays new topics.

- What is a variable? 
  - How is it used? 
  - Do an example.
- What is a Data Type? 
  - What are the primitive data types
  - How does JavaScript determine the type of a variable?
  - Why does type matter?
  - Do an example

 # Writing Output into HTML Elements

Last week we learned to write html into a web page. Now we will learn to put our JavaScript output into existing HTML elements.

```html
<p id="answer"></p>

<script>
	var p = document.getElementById("answer");
    p.innerHTML = 2 * 3;
</script>
```

Combining statements:

```javascript
document.getElementById("answer").innerHTML = 2 * 3;
```



# JavaScript Functions

## Linking to an External JS File
 We often put all our functions in a separate file 
 In the <head> element:

<script src="functionPractice.js"></script>

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

This function has on inputs and put's its output in an alert. 

1. This is the function definition. We will put this into our FunctionPractice.js file.

```javascript
function helloWorld()
{
  alert("Hello world");
}
```

2. This is the function call. We put this in the script element of our HTML file.

   ```javascript
   helloWorld();
   ```

   

### A function with one parameter

1. Define a function with a single parameter and put it in functionPractice.js.

```javascript
function hello(name)
{
  alert("Hello " + name);
}
```

2. Call the function in functionPractice.js from within a script element.

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

2. Call it from a script element using document.write:
    
    ```javascript
    document.write("<p>Hello " + toPercent(0.25) + "!</p>");
```
    
3. Call it from a script element using the inner.HTML function:

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

   

### Summary: Parts of a function

- header
  - name
  - parameters (optional)
- Body
  - code that does operations
  - return statement (optional)

# Notes

## Vocabulary

- Expression: A combination of variables, operators, and functions that produce a value. In other words, a chunk of code that can put a value into a variable.
- DOM: Document Object Model. The DOM is the HTML API for JavaScript.
- API: Application Programming Interface. This is a set of functions (aka methods) that can be called by code in an application.
- Interface: A point of interaction between apiece of software and something or someone else. Interfaces are at boundaries.

## References

### W3Schools

[What is the HTML DOM?](https://www.w3schools.com/whatis/whatis_htmldom.asp)

[HTML DOM innerHTML Property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------