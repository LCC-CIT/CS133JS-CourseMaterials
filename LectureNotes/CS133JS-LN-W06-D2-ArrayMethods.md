---
title: Array Methods
description: Learn what arrays methods are and how to use them.
keywords: array, pop, shift, push, unshift, length, indexOf, splice, concat
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

- I'm still working on grading the lab 4 production version. 

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



### 2D Arrays

Arrays can contain other arrays (nested arrays).

```javascript
// Declare a 2D array with three nested arrays
let myArray = [
  [], [], []
];
```

```javascript
// Initialize a 3 X 3 array
let grid = [ [" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

// Put an X in the top-left, then center, then bottom-right squares
grid[0][0] = "X";
grid[1][1] = "X";
grid[2][2] = "X";
```



------

# Array Methods

## Get Array Information

In the examples below, assume we have defined the array `continents` as shown below.

```javascript
let continents = ["Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"];
```



### `length`

A property that contains the length of an array.

```javascript
console.log(continents.length);
```

Use this property when you don't know how many elements are in an array, but need to do some operation that requires knowing that. For example:

```javascript
// Exchange the value stored at the end of the array with the one stored at the beginning. (Move Asia to the end of the array and Austrailia to the beginning).
let firstValue = continents[0];
let lastIndex = continents.length -1;
let lastValue = continents[lastIndex];
continents[0] = lastValue;
continents[lastIndex] = firstValue;
```



### `indexOf(...)`

A method that returns the index of the element containing a specified value.
If the value isn't found, indexOf will return -1.

```javascript
// This will print 4 to the console
console.log(continents.indexOf("Antarctica"));
```

Use this method when you need to do an operation on a specific element of the array, but only know the value stored in that element and not its index. For example:

```javascript
// Change the name of South America to américa del Sur
let index = continents.indexOf("South America");
continents[index] = "américa del Sur";
```



## Modify Array Elements
### `splice(...)`

The splice() method can be used to <u>insert</u>, <u>remove</u>, or <u>replace</u> elements anywhere in an array. It returns the removed elements.

- When a new element is inserted, all the elements at higher indices are shifted even higher and the array grows.
- When an element is removed, the elements at higher indices are shifted to lower indices and the array shrinks.
- When an element is replaced it is essentially the same as assigning a new value to the element and the array stays the same size.

#### Syntax

*array*.splice(*index*, *numberToDelete*, *newValue1*, ....., *newValueN*)

#### Examples

```javascript
continents.splice(3, 0, "Atlantis"); // Insert Atlantis at index 3
continents.splice(3, 1);   // remove Atlantis
continents.splice(2, 2, "Americas"); // Remove N. and S. America, replace with Americas
```



### `concat(...)`

Join two arrays.

```javascript
let tooks = ["Merry", "Pippin"];
let bagginses = ["Bilbo", "Frodo"];
let hobbits = tooks.concat(bagginses);
```

Copy an array. This kind of copy is called a *deep copy*. because it copies all the elements in the array instead of just copying references.

```javascript
let hobbitsCopy = [].concat(hobbits);
```





## Remove Array Elements

### `pop()`

Removes the last element from an array and returns it.

```javascript
let continent = continents.pop(); // removes Austrailia
```



### `shift()`

Removes the first element from an array and returns it.

```javascript
let continent = continents.shift(); // removes the first element, Asia
```



## Add Array Elements

### `push(...)`

Adds an element to the end of an array and returns the length of the new array.

```
let arrayLength = continents.push("Austrailia"); // adds Austrailia at index = length
```



### `unshift(...)`

Adds an element to the beginning of an array and returns the length of the new array.

```
let arrayLength = continents.unshift("Asia"); // adds Asia at index 0
```



## Reference

[JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp) on W3Schools

[JavaScript Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on MDN

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) 2018, revised <time>2022</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------