**CS133JS Beginning Programming: JavaScript**

<h1>Events and Event Handlers</h1>


| Topics by Week                           |                                        |
| ---------------------------------------- | -------------------------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays                              |
| 2. Functions, Operators and Expressions  | 7. Objects and Object Constructors     |
| 3. Conditional Statements: if and switch | 8. <mark>DOM and Event Handlers</mark> |
| 4. Repetition: while, do while, and for  | 9. Putting it all together             |
| 5. Midterm Check-Point                   | 10. Final                              |


<h2>Table of Contents</h2>

[TOC]

# Introduction

## Announcements

- I'm still working on grading the lab 4 production version, will start grading lab 5 this week.

## Q and A

- Lab 6, any questions?
- Does anyone have any questions about anything?



## Review of the Browser DOM

The browser has a set of built-in objects that represent the web page and all its HTML elements. 

### Referencing HTML Elements

- By id: `document.getElementById("lcc").innerHTML = "Hello Lane Community College!";`

- By class: `document.getElementByclass("blue")[1].innerHTML = "Hi LCC";`

- By CSS selector

    - For a single element: `document.querySelector("#lcc").innerHTML = "Greetings CIT!";`

    - For a collection: `document.querySelectorAll("p.blue")[1].innerHTML = "Hey CIT!";`
    
- By tag: `document.getElementByTagName("p")[2].innerHTML = "Hello Computer Info Tech!";`

### Accessing Element Attributes

- innerHTML: ``alert(document.getElementById("lcc").innerHTML);`

- value: `alert(document.getElementById("firstName").value);`




# Events

JavaScript can respond to various things that happen in the browser. These things are called *events*.

## Common events

- onchange: 	      An HTML element has been changed.

- onclick:                The user clicks an HTML element.

- onmouseover     The mouse pointer moves over an HTML element.

- onmouseout       The mouse pointer leaves an HTML element.

- onkeydown          The user pushes a keyboard key.

- onload                   The browser has finished loading the page.

## Event Handlers

Event handlers are JavaScript functions that are called when events occur. 

- The event handler must be specified for a particular HTML element.

  This can be done by adding an HTML attribute to an element like this:

  ```html
  <p onmouseout="doSomething()"> This paragraph has an onmouseout event</p>
  ```


-  An event handler is just an ordinary function:

  ```javascript
  function doSomething() {
     document.write("something");
  }
  ```

- Event handlers that write something to the document (web page) need to have a target element. 

  ```javascript
  function doSomething() {
     document.getElementByTagName("p")[0].innerHTML = "Something";
  }
  ```

- Some events are intended to be associated with the whole page, like: onload, and onkeydown. Here’s an example:

  ```html
   <body onload="alert('Welcome!')">
  ```

### Event Listeners

-  Add an event handler to a control with

   ```javascript
   addEventListener(“someEvent”, someFunction)
   ```

   

### How to run your code when the page loads

- The browser reads the page from top to bottom- JS code that starts running at the top won’t see HTML that is below it.

- Solution 1: put the link to the script at the bottom of the page

- Solution 2: use a button to launch the script’s “main” function (or whatever you called it).

- Solution 3: use 

  ```html
  <body onload="someFunction()">
  ```

# References

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) - W3Schools

  




------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 