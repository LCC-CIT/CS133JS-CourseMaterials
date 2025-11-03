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
| 5. Midterm Check-Point                               | 10. Term Project |
| 11. Final |  |


<h2>Table of Contents</h2>

[TOC]

# Introduction

## Announcements

Registration is open. These are the spring term classes reccomended for Software Dev majors:

- CS 233JS Intermediate JavaScript
- WR 227 Technical Writing 
- CS 161N Computer Science 1: C# (.NET)
- CS 235IM Mobile App Development with JavaScript

## Q and A

- Lab 5: Have you started it? Any questions?
- Does anyone have any questions about anything?

## What's Due this Week

- Term project proposal: Thursday
- Reading quiz: Thursday
- Lab 5 beta version: Sunday



## Review

### Array Declaration and Initialization

```javascript
const myArray = [];  // Declaration
```

```javascript
const starWars = ["Rey", "Finn", "Han Solo"];  // Declaration and Initialization
```

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
const myArray = [
  [], [], []
];
```

```javascript
// Initialize a 3 X 3 array
const grid = [ [" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

// Put an X in the top-left, then center, then bottom-right squares
grid[0][0] = "X";
grid[1][1] = "X";
grid[2][2] = "X";
```



------

# Array Methods (and a Property)

## Get Array Information

In the examples below, assume we have defined the array `continents` as shown below.

```javascript
const continents = ["Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"];
```



### `length`

A property that contains the length of an array.

```javascript
console.log(continents.length);
```

Use this property when you don't know how many elements are in an array, but need to do some operation that requires knowing that. 

**Example**, swapping values in an array

```javascript
// Exchange the value stored at the end of the array with the one stored at the beginning. (Move Asia to the end of the array and Austrailia to the beginning).
const firstValue = continents[0];
const lastIndex = continents.length -1;
const lastValue = continents[lastIndex];
continents[0] = lastValue;
continents[lastIndex] = firstValue;
```
The continents array is shown as a table below with the operations that swap the values in the first and last elements shown to the right of the array.

<table>
  <tr><th colspan="2">continents<br>index &nbsp; value</th><th>operations</th></tr>
  <tr>
    <td>0</td>
    <td>"Asia"</td>
    <td>
      &rarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; firstValue<br>
    	&larr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;
    </td>
  </tr>
  	<td>1</td>
    <td>"Africa"</td>
  	<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&uarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</td>
  </tr>
		<td>2</td>
    <td>"North America"</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&uarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</td>
  </tr>
		<td>3</td>
    <td>"South America"</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&uarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</td>
  </tr>
		<td>4</td>
    <td>"Antarctica"</td>
		<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&uarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</td>
  </tr>
		<td>5</td>
    <td>"Europe"</td>
		<td>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&uarr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;
	</td>
  </tr>
		<td>6</td>
    <td>Australia"</td>
		<td>
      &rarr; lastValue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;<br>
      &larr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&larr;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&larr;
	</td>
</table>




### `indexOf(...)`

A method that returns the index of the element containing a specified value.
If the value isn't found, `indexOf` will return -1.

```javascript
// This will print 4 to the console
console.log(continents.indexOf("Antarctica"));
```

Use this method when you need to do an operation on a specific element of the array, but only know the value stored in the element and not the index of the element. For example:

```javascript
// Change the name of South America to américa del Sur
const index = continents.indexOf("South America");
continents[index] = "américa del Sur";
```



## Modify Array Elements
### `splice(...)`

The splice() method can be used to <u>insert</u>, <u>remove</u>, or <u>replace</u> elements anywhere in an array. It returns the removed elements.

- **Insertion:** When a new element is inserted, all the elements at higher numbered indices are shifted even higher and the array grows.
- **Removal:** When an element is removed, the elements at higher indices are shifted to lower indices and the array shrinks.
- **Replacement:** When an element is replaced it is essentially the same as assigning a new value to the element and the array stays the same size.

#### Syntax

*array*.`splice`(*index*, *numberToDelete*, *newValue1*, ....., *newValueN*)

#### Examples

```javascript
continents.splice(3, 0, "Atlantis"); // Insert Atlantis at index 3
continents.splice(3, 1);   // remove Atlantis
continents.splice(2, 2, "Americas"); // Remove N. and S. America, replace with Americas
```



### `concat(...)`

Join two arrays.

```javascript
const tooks = ["Merry", "Pippin"];
const bagginses = ["Bilbo", "Frodo"];
const hobbits = tooks.concat(bagginses);
```

Copy an array. This kind of copy is called a *deep copy*. because it copies all the elements in the array instead of just copying references.

```javascript
const hobbitsCopy = [].concat(hobbits);
```



## Remove Array Elements

### `pop()`

Removes the last element from an array and returns it.

```javascript
const continent = continents.pop(); // removes Austrailia
```



### `shift()`

Removes the first element from an array and returns it.

```javascript
const continent = continents.shift(); // removes the first element, Asia
```



## Add Array Elements

### `push(...)`

Adds an element to the end of an array and returns the length of the new array.

```javascript
const arrayLength = continents.push("Austrailia"); // adds Austrailia at index = length
```



### `unshift(...)`

Adds an element to the beginning of an array and returns the length of the new array.

```javascript
const arrayLength = continents.unshift("Asia"); // adds Asia at index 0
```



## Reference

[JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp) on W3Schools

[JavaScript Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) on MDN

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev) 2018, revised <time>2024</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------