---
title: Web page i/o 2
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

## Introduction

### Announcements

- I've finished grading lab 4 (including late submissions) and will start grading lab 5 tomorrow.
- Lab 6 production version is due tomorrow.

### Q and A

- Any questions?



## Review with Additions 

In class yesterday, there were a number of questions about the DOM and events which I will answer along with some review.

### The DOM

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

#### Accessing DOM Objects

##### Directly accessing the objects

Each object in the diagram above has an array of children. We don't normally access these directly, but we can. For example, the code below will change the text in the `<h1>` element: 

```javascript
document.children[0].children[1].children[0].textContent = "New Heading";
```

If you want to explore the hierarchy of DOM objects, you can do it fairly easily in the console.

## More on Web Page I/O



### `textContent`

This is another way to access the content between tags. The difference between this property and `innerHTML` is that it just returns the text, not any HTML formatting that is in the text. For example:

There was an error in Monday's notes. I've fixed it now. (I put code to set the innerHTML of an element inside an alert&mdash;which makes no sense. I was a bit brain fogged on Monday.) Here's the corrected example:

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

### 

### Accessing HTML Element Attributes

Review: An *attribute* defines some characteristic of an HTML element and is coded as a key value pair. In the example below, `href` is an attribute.

```html
    <a href="https://profbird.dev">Your instructor's web site</a>
```



## Reference

[DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Glossary/DOM) - MDN

[Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) - MDN



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online), <time>2022</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 