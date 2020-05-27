**CS133JS Beginning Programming: JavaScript**

<h1>The Document Object Model</h1>


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



## Review of Object Constructors

Here's an *object constructor*. Notice that the first letter is capitalized.

```javascript
function Pigeon(name, breed, speed){
	this.name = name;
  this.breed = breed;
  this.speed = speed;
  this.fly = function(){
    return this.name + " is flying at " + this.speed + " MPH.";
  };
}
```

Now we can make some *pigeon* objects:

```javascript
const agatha = new Pigeon("Agatha", "Egyptian Swift", 50);
const elizabeth = new Pigeon("Elizabeth", "Egyptian Swift", 60);
```

### An Object Inside an Object

```javascript
const loft = {
  water: 100,  // percent full water
  food: 100,    // percent full food
  pigeon: new Pigeon("Agatha", "Egyptian Swift", 50)
}
```

We access the pigeon in the loft like this:

```javascript
loft.pigeon.fly();
```

### An Array of Objects Inside an Object

A loft object that has an array of pigeon objects:

```javascript
const loft = {
  water: 100,   // percent full water
  food: 100,    // percent full food
  pigeons: [new Pigeon("Agatha", "Egyptian Swift", 50),
			new Pigeon("Elizabeth", "Egyptian Swift", 60),
			new Pigeon("Jutta", "Utility", 45)]
}
```

We can access a pigeon in the loft like this:

```
loft.pigeons[2].fly(); // Rosalind will fly
```



# The Document Object Model

**A brief introduction**

## What is the DOM?

The browser has a set of built-in JavaScript objects that represent the web page and all its HTML elements. The objects are arranged in a hierarchy:

![img](file:////Users/admin/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image001.gif)

from: https://www.w3schools.com/js/js_htmldom.asp 

## Referencing HTML Elements

For the examples below, assume we have this in our web page:

```HTML
<h1 class="blue">Greetings</h1>
<p id="eugene">Hello Eugene!</p>
<p id="lcc" class="blue">Hello LCC!</p>
<p id="cit" class="blue">Hello CIT!</p>
<p>Hello JavaScript class!</p>
```

### By id attribute

```javascript
document.getElementById("lcc").innerHTML = "Hello Lane Community College!";
```

### By class name:

This will return a collection of HTML elements. It isn't actually an array, but we access the individual objects using an index&mdash;as if it were an array:

```javascript
document.getElementByclass("blue")[1].innerHTML = "Hi LCC";
```

### By CSS selector

- This will return a reference to a single element:

  ```javascript
  document.querySelector("#lcc").innerHTML = "Greetings CIT!";
  ```

- This will return a collection:

  ```javascript
  document.querySelectorAll("p.blue")[1].innerHTML = "Hey CIT!";
  ```

### By tag name

This will return a collection:

```javascript
document.getElementByTagName("p")[2].innerHTML = "Hello Computer Info Tech!";
```




## Accessing Element Attributes

### `innerHTML`

This object property represents the text content of html elements that have content between the tags. The section above has examples.

### `value`

This object property is useful for getting or setting the value in an HTML input element. 

```html
<input id="firstName">
<script>
  alert(document.getElementById("firstName").value);
</script>
```



## Web Page I/O

How to get input and display output on a web page without using `prompt` and `alert`.

### Getting Input

- In HTML: 

  ```html
  <input type = “text" id="name">
  ```

- Get a reference to the input element in JavaScript: 

  ```javascript
  let nameTextBox = document.getElementById(“name”);
  ```

- Read the value:

  ```javascript
  let theName = nameTextBox.value;
  ```

  ### Displaying output

- Assume we have a paragraph in our web page:

  ```html
   <p id="studentName"></p>
  ```

- Access HTML elements in JavaScript using *getElementById*: 

  ```javascript
  let nameParagraph = document.getElementById(“studentName”);
  ```

- Set the value of an element:

  ```javascript
  nameParagraph.innerHTML = “Susan”;
  ```

  

  

# References

- [JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp) - W3Schools

- [JavaScript HTML DOM Document](https://www.w3schools.com/js/js_htmldom_document.asp) - W3Schools
- [JavaScript HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp) - W3Schools



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 