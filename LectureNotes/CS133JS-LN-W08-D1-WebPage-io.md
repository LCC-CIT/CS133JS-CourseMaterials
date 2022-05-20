---
title: Web page i/o
description: Accessing web page DOM elements and using events.
keywords: DOM, innerHTML, getEelmentById, textContent, event, event handler
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CS133JS Beginning Programming: JavaScript**

<h1>The Document Object Model</h1>


| Topics by Week                           |                                    |
| ---------------------------------------- | ---------------------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays                          |
| 2. Functions, Operators and Expressions  | 7. Objects and Object Constructors |
| 3. Conditional Statements: if and switch | 8. <mark>Web Page I/O</mark>       |
| 4. Repetition: while, do while, and for  | 9. Dynamic Web Pages               |
| 5. Midterm Check-Point                   | 10. Review for final quiz          |


<h2>Table of Contents</h2>

[TOC]

# Introduction

## Announcements

- I've finished grading lab 4 and will start grading lab 5 tomorrow.
- Don't forget the reading quiz that closes tomorrow.
  - The tutorial you are reading has examples that use *arrow functions*. You will learn about those next term. I've translated those example to use "normal" functions.

- Lab 6 (objects) code reviews are due tomorrow.

## Q and A

- Any questions?



# Web Page Input and Output

**A brief introduction**

## What is the DOM?

The browser has a set of built-in JavaScript objects that represent the web page and all its HTML elements. The objects are arranged in a hierarchy:

![DOM-model](../Images/DOM-model.svg)

By <a href="//commons.wikimedia.org/w/index.php?title=User:Eib&amp;action=edit&amp;redlink=1" class="new" title="User:Eib (page does not exist)">Birger Eriksson</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Link</a>



**HTML for the web page in the DOM diagram above**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My title</title>
  </head>
  <body>
    <h1>A heading</h1>
    <a href="https://example.com">Link text</a>
  </body>  
</html>
```



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

Review: in a CSS rule, the first part is the selector. For example, in the rule below, `#cit` is the selector:

```css
#cit {
	background-color: green;
}
```

In JavaScript, we can use `document.querySelector` to get a reference to an HTML element.

- The selector can be any valid CSS selector such as:

  - id
  - class
  - element name (tag name)
  
- The `querySelector` method will return a single reference to the first matching element it finds on the page. 

  ```javascript
  document.querySelector("#cit").innerHTML = "Greetings CIT!";
  ```



## I/O Using HTML Elements

In previous examples and lab assignments you've used the `prompt` function to get input `document.write`, or `getElementById` with `innerHTML` to put output on a web page.

Now we'll look at a couple new ways to do input and output (I/O).

### `textContent`

This is another way to access the content between tags. The difference between this property and `innerHTML` is that it just returns the text, not any HTML formatting that is in the text. For example:

```html
<p id="voles"><em>Voles</em> are burrowing rodents that are <strong>descrictive</strong> to gardens.</p>
<script>
  document.getElementById("voles").innerHTML;
  // This will be put on the web page:
  // <em>Voles</em> are burrowing rodents that are <strong>descrictive</strong> to gardens.
  document.getElementById("voles").textContent;
  // This will be put on the web page:
  // Voles are burrowing rodents that are descrictive to gardens.
</script>
```

### `value`

This object property is useful for getting or setting the value in an HTML input element. The input element would normally be in an HTML form.

```html
<input id="name" placeholder="Your name">
<script>
  alert(document.getElementById("name").value);
  // The alert will display "Your name"
</script>
```



## JavaScript Events

JavaScript can respond to various things that happen in a browser. These things are called *events*.

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



# Further Reading

## Tutorials

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) - W3Schools
- [JavaScript HTML DOM Document](https://www.w3schools.com/js/js_htmldom_document.asp) - W3Schools
- [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp) - W3Schools
- [JavaScript Events](https://www.w3schools.com/js/js_events.asp) - W3Schools

## Reference

[DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Glossary/DOM) - MDN

[Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) - MDN



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online), 2020, revised <time>2022</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 