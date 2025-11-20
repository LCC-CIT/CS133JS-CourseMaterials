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

## Review

### The DOM

The DOM is a set of JavaScript objects that represent the web page and all its HTML elements. 

![DOM-model](../Images/DOM-model.svg)

By <a href="//commons.wikimedia.org/w/index.php?title=User:Eib&amp;action=edit&amp;redlink=1" class="new" title="User:Eib (page does not exist)">Birger Eriksson</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18034500">Link</a>

#### Accessing DOM Objects

##### Directly accessing elements

Each object in the diagram above has an array of children. We don't normally access these directly, but we can. For example, the code below will change the text in the `<h1>` element: 

```javascript
document.children[0].children[1].children[0].innerHTML = "New Heading";
```

If you want to explore the hierarchy of DOM objects, you can do it fairly easily in the console.

##### Accessing elements using `getElementById`

Given this HTML code:

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



In the JavaScript code below, `getElementById` gets[^2] the HTML `li` element with `id="s1"`.

```javascript
let lccElement = document.getElementById("s1");
```

#####  Accessing elements using `querySelector` 

The `querySelector` method can select an HTML element using its:

- Element name
- id attribute
- class attribute
- Any combination of selectors that is legal in a CSS rule selector.

Given the HTML code in the preceding example, these lines of JavaScript will each return the first matching HTML element. 

```javascript
let lccElement = document.querySelector("#s2");  // second li
let degreeElement = document.querySelector("#s2 p span");  // fourth span
```



### I/O Using HTML Elements

#### `innerHTML`

A property used to get or set the text as well as any HTML tags between the tags of an element.

```javascript
document.getElementById("ex").innerHTML = "<u>This</u> text contains <em>tags</em>."
```

#### `textContent`

A property used to get or set just the text between the tags of an element.

```javascript
document.getElementById("ex").textContent = "This is just plain text."
```

#### `value`

This property used to get or set the value of an HTML input element. 

```javascript
let person = document.getElementById("name").value;
```

#### Get User Input with a `<button>` and `onclick` Event Handler

Use a button with an `onclick` *event handler* to get user input.

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



## More on Web Page I/O

Here are some additional tips and techniques for accessing HTML elements using the DOM.

### Accessing HTML Element Attributes

Once we have gotten an HTML element object, we can not only change the `innerHTML`, `textContent` or `value`, we can also change the value of its attributes (if it has any).

> **Review**: An *attribute* defines some characteristic of an HTML element and is coded as a key-value pair. In the example below, `href` and `target` are attributes.

```html
<a href="https://profbird.dev" target="_self">Your instructor's web site</a>
```

Here is the JavaScript code to change each attribute:

```javascript
let a = document.querySelector("a");
a.href = "https://birdsbits.wordpress.com/";
a.target = "_blank";
```

#### Accessing and changing the HTML `class` attribute

To access the class attribute of an HTML element, you use the `className` property[^1]. To do this a class has to have already been defined. For example:

```css
/* CSS Rules */
.lightGreyBackground {
    background-color: #d3d3d3;
}

.greenText {
    color: green;
}
```

##### The `className` property

Then in the JavaScript code you can assign that class name to the class attribute of an element. (Using the same `a` element as above.)

`a.className="lightGreyBackground";`

##### The `classList` property

If an element's `class` attribute has already has been assigned a CSS rule, you can add additional ones using the `classList` property. For example:

`a.classList.add("greenText");`

#### Accessing and changing the HTML `style` attribute

There are two ways to get or set the inline style on an HTML element

- By accessing the style property directly. For example:

  `a.style = "fontweight: bold";`

- By accessing sub-properties on the style attribute:

  `a.style.fontWeight = "bold"`

### Getting Collections of Elements

There are four DOM methods you can use to get an array containing multiple HTML element objects. Each of these are listed below along with an example based on the HTML below.

In the head:

```css
<style>
  .highlight {
    background-color: yellow;
}
</style>
```

In the body:

```html
<ul>
	<li name="fruit" class="highlight">Apple</li>
	<li name="fruit">Peach</li>
	<li name="vegetable">Pepper</li>   
</ul>
<ol>
	<li name="fruit" class="highlight">Pear</li>
  <li name="vegetable" class="highlight">Onion</li>
	<li name="vegetable">Pepper</li>
</ol>
```

#### `getElementsByName`

This method selects all elements with the matching value for the `name` attribute.

```javascript
let vegetables = document.getElementsByName("vegetable");  // an array of vegies
```

#### `getElementsByClassName`

This method selects all elements with the matching value for the `class` attribute.

```javascript
let topProduce = document.getElementsByClassName("highlight");  // array of highlighted items
```

#### `getElementsByTagName`

This method selects all elements with the matching element name.

```javascript
let produce = document.getElementsByTagName("li");  // array of all items
```

#### `querySelectorAll`

This method works like `querySelector`, but returns all the matching elements.

```javascript
let selectProduce = document.querySelectorAll("ol .highlight");  // array of highlighted items from the ol
```



## More on Event Handlers

### Event Handlers with Parameters

Remember that an *event handler* is a function and functions can have parameters. Use single quotes to pass an argument to an event handler function that has a parameter. In this example, one button's event handler is passed an `'A'`, the other a `'B'` :

```html
<button onclick="buttonPressed('A')">Button A</button>
<button onclick="buttonPressed('B')">Button B</button>
<p>Button <span></span> was pressed.</p>
<script>
  function buttonPressed(buttonParam) {
    document.querySelector("span").textContent = buttonParam;
  }
</script>
```

#### Exercise

Try changing the parameter passed to the event handler to:

- A word instead of a single letter
- A number, then do something with the number, like add it to a total.

### Adding an Event Handler to an Element Using JavaScript

You can add an event hander to an HTML element *dynamically* using JavaScript code rather than adding it as an attribute of the element. You do this by using the `addEventListener` method.

In the first line of the script element below, note that the first parameter passed to `addEventListener`  is the name of the event, `"click"`. In this context, events are named <u>without</u> the "on" prefix. For example, use the event name "<u>click</u>", not "onclick".

```html
<button>Click me</button>  <!-- The handler gets added to this button -->
<p><span></span></p>       <!-- The handler puts text into this span -->

<script>
  // Use addEventListener to add the handler named buttonPressed to the button
  document.querySelector("button").addEventListener("click", buttonPressed);
  
  // Event handler
	function buttonPressed() {
			document.querySelector("span").textContent = "Button pressed!";
  }
</script>
```



You can also define an *anonymous function* when adding the event listener:

```html
<button>Click me</button>
<p><span></span></p>

<script>
  // Use addEventListener to add a handler without a name
  document.querySelector("button").addEventListener("click", 
      function ()  // Anonymous event handler function definition
 			{
				document.querySelector("span").textContent = "Button pressed!";
  		}
		);
</script>
```



#### Dynamically Add an Event Handler to call a Function with Parameters

If you want to add an event handler that has parameters to an HTML element, you need to "wrap" that function in an anonymous function ("wrap", means call it from inside another function), like this:

```html
<button>Send Message</button>
<p><span></span></p>

<script>
  document.querySelector("button").addEventListener("click", 
  function ()  // Anonymous function that calls the target function
 {
			buttonPressed("You clicked the button!");
  });
                                                    
  // Target function
  function buttonPressed(message) {
    document.querySelector("span").textContent = message;
  }
</script>
```



If you want to pass values from HTML input elements to the dynamically added event handler, you can do that in the function that wraps the event handler.

Best practice is to put the web page i/o code in the event listener and not in the function that it calls. The function it calls, should just do processing.

```html
Enter your name:
<input id="name" placeholder="Your name"><br>
<button>Send Message</button>
<p><span></span></p>

<script>
  document.querySelector("button").addEventListener("click", 
  function ()  // Anonymous function that calls another function
 {
    	// Do the web page i/o here
    	let name = document.getElementById("name").value;
			let message = makeMessage(name, "clicked the button!");
    	document.querySelector("span").textContent = message;
  });
                                                    
  // Method that does the processing
  function makeMessage(name, message) {
		  return name + " " + message;
  }
</script>
```



### Running Code after the Page Loads with the `onload` Event

Sometimes we need to execute some code as soon as the page loads. The example below reads the contents of an array and puts it into a list on the web page. Note that the `listTrees()` function could alternatively be in a separate .js file.

```html
<body onload="listTrees()"> 
  <!-- This script won't execute until the page is fully loaded -->
  <script>
    let trees = ["Oak", "Pine", "Cedar", "Fir", "Birch"];
    function listTrees() {
      for (tree of trees) {
        document.querySelector("ol").innerHTML += "<li>" + tree + "</li>";
      }
    }
  </script>
  <!-- The list of trees will be put here -->
  <ol>
  </ol>
</body>


```



## Reference

[DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Glossary/DOM)&mdash;MDN

[Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)&mdash;MDN

[JavaScript HTML DOM Event Listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)&mdash;W3Schools



[^1]: The HTML `class` attribute is accessed through a JavaScript object property named `className` because in the ES6 release of JavaScript, the keyword `class` was added for creating object-oriented classes.
[^2]: The `document.getElementById` method doesn't actually "get" an HTML object, it gets a *reference* (aka *binding*) to the object. You can think of a *reference* as a connection to the object that allows your code to do things with, or to, the object. In the inner workings of JavaScript, a reference contains the memory address of the object. 

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written 2022, revised <time>2025</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 