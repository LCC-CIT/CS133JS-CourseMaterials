---
title: Strings and Arrays
description: Compare strings and arrays to look at the similarities.
keywords: array, string
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

# Introduction

## Announcements

- I'm still working on grading the lab 3 production version&mdash;just a few left.

## Q and A

- Lab 5, Part 1, Array Exercises
  - Have you started it? Any questions?
- Does anyone have any questions about anything?

## Reading Quiz

Review the quiz together



## Review

### Array Declaration and Initialization

```javascript
let myArray = [];  // Declaration
```

```javascript
let starWars = ["Rey", "Finn", "Han Solo"];  // Declaration and Initialization
```

Arrays can contain mixed data types.

### Array Operations

```javascript
console.log(starWars[0]);  // Getting a value
```

```javascript
starWars[1] = "Poe";    // Setting a value
```

```javascript
console.log(starWars.length);   // Getting the array length
```

```javascript
starWars[starWars.length] = "Yoda";   // Adding a new element and value
```

Arrays are not copied by the assignment operator.  Only a *reference* is copied.

```javascript
starWarsAgain = starWars;  // starWarsAgain is like an alias for starWars
```



### Arrays and Loops

The for loop is especially suited to working with arrays and the for...of loop is only used with arrays.

#### `for` loop

```javascript
for (let i = 0; i < starWars.length; i++)
{
   console.log(starWars[i]);    // The loop counter is used to index the array
}
```

#### `for`...`of` loop

```javascript
for (let character of starWars) {
   console.log(character);             // No array index is needed
}
```



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

### Array and String Operations

```javascript
console.log(starWars[0]);  // Getting the value at an array index location
console.log(prolog[0]);  // Getting the value at a string at index location
console.log(prolog.charAt(0));  // Getting the value at a string at index location
```

```javascript
console.log(starWars.length);   // Getting the array length
console.log(prolog.length);   // Getting the string length
```

```javascript
starWars[starWars.length] = "Yoda";   // Adding a new element and value
```



## Reference

[JavaScript Strings](https://www.w3schools.com/js/js_strings.asp) on W3Schools

[String](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/string#character_access) on Mozilla Developer Network

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) 2018, revised <time>2022</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------