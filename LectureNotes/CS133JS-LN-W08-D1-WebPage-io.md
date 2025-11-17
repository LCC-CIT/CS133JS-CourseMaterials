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

## Web Page Input and Output

**A brief introduction**

### What is the DOM?

The browser has a set of built-in JavaScript objects that represent the web page and all its HTML elements. The objects are arranged in a hierarchy:

![DOM-model](../Images/DOM-model.svg)

*By <a href="//commons.wikimedia.org/w/index.php?title=User:Eib&amp;action=edit&amp;redlink=1" class="new" title="User:Eib (page does not exist)">Birger Eriksson</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Link</a>*



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

**Exercise**: Open this web page in a browser and explore the objects in the console.

### Referencing HTML Elements

We could reference elements directly through the DOM tree, like this:

```javascript
document.body.children[0].innerHTML = "Dom Demo"; // Change the h1 element
```

But usually, we use a special method to search for an element by id, selector or some other identifying feature.

For the examples below, assume we have this in our web page:

```HTML
<h1>Greetings</h1>
<p id="eugene">Hello Eugene!</p>
<p id="lcc">Hello LCC!</p>
<p id="cit" class="cit">Hello CIT!</p>
```

#### By id attribute

```javascript
document.getElementById("lcc").innerHTML = "Hello Lane Community College!";
```

#### By CSS selector

#### Using `querySelector` with a single selector

**Review of CSS**

 in a CSS rule, the first part is the selector. For example, in the rule below, `.cit` is the class selector:

```css
.cit {
	background-color: green;
}
```

**Back to the `querySelector`**

In JavaScript, we can use `document.querySelector` to get a reference to an HTML element.

- The selector can be any valid CSS selector such as:

  - id
  - class
  - element name (tag name)
  - or a combination of the selectors above
  
- The `querySelector` method will return a single reference to the first matching element it finds on the page. In the example below, it will find an element with the attribute `class="cit"`.

  ```javascript
  document.querySelector(".cit").innerHTML = "Greetings CIT!";
  ```

##### Using `querySelector` with multiple selectors

For the html below,

```html
<h1>Students and Their Degree Programs</h1>
<ul>
        <li id="s1">
            Student: <span></span>
            <p>Degree: <span></span></p>  
        </li>
        <li id="s2">
            Student: <span></span>
            <p>Degree: <span></span></p>  
       </li>
</ul>
```

In the JavaScript example below, we are using the selectors being passed to the `querySelector` method to put text into the spans.

```javascript
document.querySelector("#s1 span").innerHTML = "Susan Lee";
document.querySelector("#s1 p span").innerHTML = "Computer Programming";

document.querySelector("#s2 span").innerHTML = "David Johnson";
document.querySelector("#s2 p span").innerHTML = "Computer Network Operations";
```



### I/O Using HTML Elements

In previous examples and lab assignments you've used the `prompt` function to get input `document.write`, or `getElementById` with `innerHTML` to put output on a web page.

Now we'll look at a couple new ways to do input and output (I/O).

#### `textContent`

This is another way to access the content between tags. The difference between this property and `innerHTML` is that `textContent` just gets or set text, no HTML tags will be processed and no formatting done on the web page.  Here's an example showing the differences: 

[Demo of innerHTML vs. textConent](../Examples/Week08/Demo-innerHtmlVsTextContent.html)

The `textContent` property is the best one to use when you just need to output text (without HTML tags) to a web page.

#### `value`

This object property is useful for getting or setting the value in an HTML `<input>` element. The input element would normally be in an HTML form.

```html
<input id="name" placeholder="Your name">
<script>
  alert(document.getElementById("name").value);
  // The alert will display "Your name"
</script>
```



### JavaScript Events

JavaScript can respond to various actions a user preforms when interacting with a web page in a browser. These user actions are called *events*.

#### Common events

These events are HTML attributes.

- `onclick`                 The user clicks an HTML element.
- `onmouseover`     The mouse pointer moves over an HTML element.
- `onkeydown`         The user presses a keyboard key.
- `onload`                 The browser has finished loading the page.

#### Event Handlers

Event handlers are JavaScript functions that are called when events occur. 

- The event handler must be specified for a particular HTML element.

  <u>One way</u> to do this is with an HTML attribute:

  ```html
  <p onmouseover="doSomething()">This paragraph has an onmouseover event</p>
  ```

  > In our next session, you'll learn the more common way to add an event handler, which is by using JavaScript to assign a handler to an HTML element (or elements). 


- An event handler is just an ordinary function:

  ```javascript
  function doSomething() {
     document.write("something");
  }
  ```

- Event handlers that write something to the document (web page) need to have a target element.  In this example, it's the paragraph, "p".

  ```javascript
  function doSomething() {
     document.querySelector("p").innerHTML = "Something";
  }
  ```

#### Using a Button to Get Input

We can use a button with an onclick event handler to get user input. Here's an example:

```html
Enter your name:<input>
<button onclick="getName()">Enter</button>

<p>Hello: <span id="name"></span></p>
<script>
  function getName() {
    let name = document.querySelector("input").value;
    document.querySelector("#name").innerHTML = name;
  }
</script>
```

Note: The `onclick` event can be used with any element, but we frequently use it with a button. 

### When to Use an HTML `<form>`

The purpose of a `<form>` is to <u>send the information to a program running on a server</u>. Only use a form if that is what you want to do. If you are just using input elements with JavaScript running in the browser, don't put the input elements in a form.

When you click a button on a form, the information entered on the form will be sent in an HTTP request either to a program at a URL specified in the form's *action* attribute or back to the URL of the web page the form is in&mdash;this is called a *postback*. A postback will reset the web page to its original state and any information entered on the form will be lost.



## Further Reading

### Tutorials

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) - W3Schools
- [JavaScript HTML DOM Document](https://www.w3schools.com/js/js_htmldom_document.asp) - W3Schools
- [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp) - W3Schools
- [JavaScript Events](https://www.w3schools.com/js/js_events.asp) - W3Schools

### Reference

[DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Glossary/DOM) - MDN

[Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) - MDN

[CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) - MDN



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), 2020, revised <time>2025</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 