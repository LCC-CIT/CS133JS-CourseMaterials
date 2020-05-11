

CS133JS Beginning Programming: JavaScript**

<h1>Arrays</h1>


| Topics by Week                                       |            |
| ---------------------------------------------------- | ---------- |
| 1. Intro to JavaScript programming                   | 6. <mark> Arrays</mark>  |
| 2. Functions, Operators and Expressions              | 7. Objects |
| 3. Conditional Statements: if and switch             | 8. Methods |
| 4. Repetition: while, do while, and for | 9. DOM     |
| 5. Midterm Check-Point                               | 10. Final  |


<h2>Table of Contents</h2>

[TOC]

# Overview

This week we will be learning to use arrays. Here is what we will learn

**Session 1: Basic arrays**

- What is an array?
- How to work with arrays.
- How to work with arrays in loops.
- Nested arrays (aka 2D arrays).

**Session 2: Using array methods**

- Concept of objects and methods.
- push and pop 
  Used to add and remove elements at the end of an array.
- shift and unshift
  Used to  add and remove elements at the beginning of an array.
- splice
  Used to remove or modify elements in an array

## What are Arrays?

- Review: 
   We can think of a *variable* as a storage place in memory. It has a name and can hold one value and that value has a data type.
- An *array* is like a variable (we call it an *object*), but it can store more than one value.
- An array has an *index* that lets us access a particular *element* (storage spot) in the array.
- One way to think of an array is as a table where each row is an element:

| *index* | *value*   |
| ------- | --------- |
| 0       | Rey       |
| 1       | Finn      |
| 2       | Han Solo  |
| 3       | C-3PO     |
| 4       | Chewbacca |



## Creating an Array

- Without initialization

  ```javascript
  let myArray = [];
  ```

- With initialization

  ```javascript
  let starWars = ["Rey", "Finn", "Han Solo", "C-3PO", "Chewbacca"];
  ```



## Performing Operations on an Array

- Get the length of an array:

  ```javascript
  console.log(starWars.length);
  ```

- Changing values in an array:

  ```javascript
  starWars[1] = "Poe";
  ```

- Adding new values to an array.

  - When you know what the index of the last element is:

  ```javascript
  starWars[5] = "Yoda";
  ```

  - When you don't know the index of the last element:

  ```javascript
  starWars[starWars.length - 1] = "Yoda";
  ```

- Retrieving values from an array:

  ```javascript
  console.log(starWars[0]);
  ```

- Removing an element from an array.

  - Setting an element to null doesn't remove it. For example, assume our starWars array has the original 5 elements.

  ```javascript
  starWars[3] = null;   // Doesn't remove Han Solo
  ```

  - You can only remove elements using special array methods. (A topic for next time.) 



### Practice

1. Create an array of planets

2. Write a function that returns a planet by it's number (1 = Mercury, 9 = Pluto).

3. Write a function that lets you change the name of a planet.

   

## Use Arrays in Loops

### for loop

We can use a for loop  to display the contents of an array.
In the loop below, what is:

- The number of iterations? 
- The final value of i?

```javascript
// Output the elements of the array to the console
for (let i = 0; i < length; i++)
{
   console.log(starWars[i]);
}
```

### for-of loop

```javascript
for (let character of starWars) {
   console.log(character);
}
```



### while loop

The *while* loop below iterates as long as the user keeps entering names.

```javascript
// Enter values in an array until the user enters "done"
let name = "";
let names = [];
while (name != done)
{
   name = prompt("Enter a name");
   names[names.length] = name;
}
```



### Practice

1. Write a function to copy one array into another.

2. Write a function to check to see if an element is in an array.

   

## Nested Arrays

These are also known as 2D arrays.

Example:

```javascript
// Declare and initialize a 2D array
let certificates = [
["Mobile App Development", "Front End Web Devevlopment", "Database Specialist"],
["Computer Network Monitoring and Mangement"]
];

// Output the third elemnet of the first array
console.log(certificates[0][2]);
```

Example, a grid for a tic-tac-toe game:

```javascript
let grid = [ ["", "", ""], ["", "", ""], ["", "", ""]];

// Put an X in the top-left, then center, then bottom-right squares
grid[0][0] = "X";
grid[1][1] = "X";
grid[2][2] = "X";
```



### Practice

1. Write a function to let you put an X or O into a particular location in the grid
2.  Write a function to output the grid to the console.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------