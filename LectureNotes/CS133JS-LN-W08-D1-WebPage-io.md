**CS133JS Beginning Programming: JavaScript**

<h1>The Document Object Model</h1>


| Topics by Week                           |                                    |
| ---------------------------------------- | ---------------------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays                          |
| 2. Functions, Operators and Expressions  | 7. Objects and Object Constructors |
| 3. Conditional Statements: if and switch | 8. <mark>Web Page I/O</mark>       |
| 4. Repetition: while, do while, and for  | 9. Review                          |
| 5. Midterm Check-Point                   | 10. Assessment                     |


<h2>Table of Contents</h2>

[TOC]

# Introduction

## Announcements

- I'm still working on grading the lab 4 production version, will start grading lab 5 this week.
- This week's lab, lab 7, will be the last lab.
  - There will be no code review.
  - The production version will be due next Friday, June 5th
- I will make an alternative version of the array lab assignment for those who would like that.
- FYI, I drop the lowest lab grade and lowest quiz grade
- The final will be on June 8th and 9th.

## Q and A

- Lab 6, any questions?
- Does anyone have any questions about anything?



# Web Page Input and Output

**A brief introduction**

## What is the DOM?

The browser has a set of built-in JavaScript objects that represent the web page and all its HTML elements. The objects are arranged in a hierarchy:

![DOM-model](../Images/DOM-model.svg)

By <a href="//commons.wikimedia.org/w/index.php?title=User:Eib&amp;action=edit&amp;redlink=1" class="new" title="User:Eib (page does not exist)">Birger Eriksson</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Link</a>



## Referencing HTML Elements

For the examples below, assume we have this in our web page:

```HTML
<h1>Greetings</h1>
<p id="eugene">Hello Eugene!</p>
<p id="lcc">Hello LCC!</p>
<p id="cit">Hello CIT!</p>
```

### By id attribute

```javascript
document.getElementById("lcc").innerHTML = "Hello Lane Community College!";
```

### By CSS selector

- The selector can be any valid CSS selector such as:

  - id
  - class
  - element name (tag name)
  
- This will return a reference to the first matching element it finds on the page. It will return a single element:

  ```javascript
  document.querySelector("#cit").innerHTML = "Greetings CIT!";
  ```




## Accessing Element Attributes

### `innerHTML`

This object property represents the text content of html elements that have content between the tags. The section above has examples.

### `value`

This object property is useful for getting or setting the value in an HTML input element. 

```html
<input id="name" placeholder="Your name">
<script>
  alert(document.getElementById("name").value);
</script>
```

## Events

JavaScript can respond to various things that happen in the browser. These things are called *events*.

### Common events

- onclick                 The user clicks an HTML element.
- onmouseover     The mouse pointer moves over an HTML element.
- onkeydown         The user presses a keyboard key.
- onload                 The browser has finished loading the page.

### Event Handlers

Event handlers are JavaScript functions that are called when events occur. 

- The event handler must be specified for a particular HTML element.

  One way to do this is with an HTML attribute:

  ```html
  <p onmouseover="doSomething()">This paragraph has an onmouseover event</p>
  ```


- An event handler is just an ordinary function:

  ```javascript
  function doSomething() {
     document.write("something");
  }
  ```

- Event handlers that write something to the document (web page) need to have a target element. 

  ```javascript
  function doSomething() {
     document.querySelector("p").innerHTML = "Something";
  }
  ```

## User Input and Output

This is how to get input and display output on a web page without using `prompt` and `alert`.

### Using a Button to Get Input

We can use a button with an onclick event handler to get user input. Here's an example:

```html
Enter your name:<input>
<button onclick="inputName()">Enter</button>
<p>Hello: <span id="name"></span></p>
<script>
  function inputName() {
    let name = document.querySelector("input").value;
    document.querySelector("#name").innerHTML = name;
  }
</script>
```

- The onclick event can be used with any element, but we frequently use it with a button. 

### Displaying output

- Assume we have a paragraph in our web page:

  ```html
   <p id="studentName">Student's name: </p>
  ```

- Access HTML elements in JavaScript using *getElementById*: 

  ```javascript
  let nameParagraph = document.getElementById("studentName");
  ```

- Set the value of an element:

  ```javascript
  nameParagraph.innerHTML += "Susan";
  ```

# References

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) - W3Schools

- [JavaScript HTML DOM Document](https://www.w3schools.com/js/js_htmldom_document.asp) - W3Schools
- [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp) - W3Schools



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 