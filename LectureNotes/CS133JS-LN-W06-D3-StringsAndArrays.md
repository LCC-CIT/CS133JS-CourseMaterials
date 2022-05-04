---
title: Strings and Arrays
description: Compare strings and arrays to look at the similarities.
keywords: array, string, charAt, indexOf, index, element, character, length
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CS133JS Beginning Programming: JavaScript**

<h1>Arrays: Array Methods</h1>


| Topics by Week                                       |            |
| ---------------------------------------------------- | ---------- |
| 1. Intro to JavaScript programming                   | 6. <mark> Arrays</mark>  |
| 2. Functions, Operators and Expressions              | 7.Objects and Object Constructors |
| 3. Conditional Statements: if and switch             | 8. Web Page I/O |
| 4. Repetition: while, do while, and for | 9. Review |
| 5. Midterm Check-Point                               | 10. Final  |


<h2>Table of Contents</h2>

[TOC]

------

## Ways in Which Strings are Like Arrays

### Declaration and Initialization

```javascript
let myArray = [];  // Declaration of an empty array
let myString = "";  // Declaration of an empty string
```

```javascript
let starWars = ["Rey", "Finn", "Han Solo"];  // Declaration and Initialization
let prolog = "A long time ago in a galaxy far, far away..."
```

### Array and String Index Operations

#### Get a value or element at an index location

```javascript
console.log(starWars[0]);  // Getting the value stored at an array index location
console.log(prolog[0]);  // Getting a character from a string at an index location
console.log(prolog.charAt(0));  // Another way to do the same thing as above
```

#### Get the length
```javascript
console.log(starWars.length);   // Getting the array length
console.log(prolog.length);   // Getting the string length
```

#### Add a value or element to the end
```javascript
starWars[starWars.length] = "Yoda";   // Adding a new element and value
prolog[prolog.length] = "A New Hope"; // Adding another string (more characters)
```



####Get the index location of a value

```javascript
console.log(continents.indexOf("Finn"));  // Gets the index of the elmeent containing "Finn"
console.log(prolog.indexOf("g"));  // Gets the index of the character "g"
```

#### 

## Reference

[JavaScript Strings](https://www.w3schools.com/js/js_strings.asp) on W3Schools

[String](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string#character_access) on Mozilla Developer Network

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) 2018, revised <time>2022</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------