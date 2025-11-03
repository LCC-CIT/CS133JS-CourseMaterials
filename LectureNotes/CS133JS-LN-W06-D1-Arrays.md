---
title: Arrays
description: Learn what arrays are and how to use them in loops.
keywords: array, while, for, for...of, for of, for-of, index, element
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CS133JS Beginning Programming: JavaScript**


<h1>Arrays</h1>


| Topics by Week                                       |            |
| ---------------------------------------------------- | ---------- |
| 1. Intro to JavaScript programming                   | 6. <mark> Arrays</mark>  |
| 2. Functions, Operators and Expressions              | 7. Objects and Object Constructors |
| 3. Conditional Statements: if and switch             | 8. Web Page I/O |
| 4. Repetition: while, do while, and for | 9. Review |
| 5. Midterm Check-Point                               | 10. Term Project |
| 11. Final |  |


<h2>Table of Contents</h2>

[TOC]

## What are Arrays?

- Review of variables:  We can think of a *variable* as a storage place in memory. It has a name and can hold <u>only one *value*</u> and that value has a *data type*.
- An *array* is like a variable (it's also one of the things we call an *object*), but it can hold <u>more than one value</u>.
- An analogy for an array is a set of post office boxes. Each one has an address and something can be stored in it.  
   <img src="Images/PersonOpeningPOBox.jpeg" alt="PersonOpeningPOBox" style="zoom:75%;" />

- An array has an *index*, it's like an address that lets us access a particular *element* (storage spot) in the array.
   - Question: do you remember doing a loop exercise that involved checking sequential characters in a string? 
   - A string is very similar to an array. It's a special kind of array that contains characters (letters, numbers and symbols).

- One way to think of an array is as a table with two columns where each row is an element of the array.  

   **An array represented as a table. **  
   Each row represents an *element*.  
   This array contains *string values*.  

| *index* | *value*s  |
| ------- | --------- |
| 0       | Rey       |
| 1       | Finn      |
| 2       | Han Solo  |
| 3       | C-3PO     |
| 4       | Chewbacca |



## Creating an Array

An array can be created by declaring it and it can optionally be initialized. *Initialization* means putting some values into elements of the array. When these values are put into the array, the elements are created in memory.

- Declaration without initialization:

  ```javascript
  let starWars = [];
  ```

- Declaration with initialization:

  ```javascript
  let starWars = ["Rey", "Finn", "Han Solo", "C-3PO", "Chewbacca"];
  ```

- Best practice, is to declare an array as a constant:

  ```javascript
  const starTrek = ["Kirk", "Hulu", "McCoy", "Spok", "Scott"];
  ```

  - This doesn't mean you can't change the values stored in it. You just can't replace the array as a whole. (More about this later.)

- Arrays can contain multiple data types:  
  ```javascript
  const mixedStuff = [false, true, "one", 2];
  ```

  

## Accessing Array Elements

The code shown below will access the array element with an index of 2  and assign the value stored there, "Han Solo", to the constant `character`.

<pre>const character = starWars[2];
                    &uarr;      &uarr;  
             array name   index 
</pre>



This next line of code will change the value stored at index 3 to "Leia".

`starwars[3] = "Leia";`

Question: Which name got replaced?

## Performing Operations on an Array

- Get the length of an array:

  ```javascript
  console.log(starWars.length);
  ```

- Changing values in an array:

  ```javascript
  starWars[1] = "Poe";
  ```

- Adding a new element to an array.

  - When you know what the index of the last element is (4 in this case):

  ```javascript
  starWars[5] = "Yoda";
  ```

  - When you don't know the index of the last element:  
    (Note that the length is one more than the last index.)

  ```javascript
  starWars[starWars.length] = "Yoda";
  ```

- Retrieving values from an array:

  ```javascript
  console.log(starWars[0]);
  ```

- Removing (or not) an element from an array.

  - Setting an element to null doesn't remove the element. For example, assume our starWars array has the original 5 elements, after setting one to null, there will still be 5 elements.

  ```javascript
  starWars[2] = null;   // Doesn't remove Han Solo
  ```

  - You can only remove elements using special array methods. (A topic for next time.) 



### Practice

1. Create an array of planets[^1].  
   (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto.)

2. Write a function that returns a planet by its number (1 for Mercury, 9 for Pluto).

3. Write a function that lets you change the name of a planet.

   

## Use Arrays in Loops

### for loop

We can use a for loop  to display the contents of an array.
Look at the loop below, assuming we have defined the original starWars array above.

- How many times will it iterate? 
- What is the final value of i?

```javascript
// Output the elements of the array to the console
for (let i = 0; i < starWars.length; i++)
{
   console.log(starWars[i]);
}
```

### for...of loop

The `for...of`[^2] loop has a hidden, "behind the scenes", index variable that starts at zero and is automatically incremented and used to sequentially get all the values in the array.

```javascript
for (const character of starWars) {
   console.log(character);
}
```

In a `for...of` loop, it's best to get the values from the elements into a variable declared with `const` rather than `let`. 

What do you think is the reason?

### while loop

The *while* loop below iterates as long as the user keeps entering names.

```javascript
// Enter values in an array until the user enters "done"
let name = "";
const names = [];
while (name != "done")
{
   name = prompt("Enter a name");
   names[names.length] = name;
}
```



### Practice

For each of the practice problems below:

- First write a description of the input and output.
- Write an algorithm in pseudo-code.

Practice problems:

1. Write a function to copy one array into another.

2. Write a function to check to see if an element is in an array.

    

## Nested Arrays, aka 2D Arrays

*Nested arrays* are arrays of arrays. These are also known as *2D arrays*.

**Example**  
Certificates in the Software Development and Network Operations degree programs:

```javascript
// Declare and initialize an array of two arrays (a 2D array)
const certificates = [
["Mobile App Development", "Front End Web Devevlopment", "Database Specialist"],
["Computer Network Monitoring and Mangement"]
];

// Output the third elemnet of the first array
console.log(certificates[0][2]);
```

You can visualize this 2D array as a table:

| 2nd index &rarr;<br />1st index &darr; | 0                                           | 1                            | 2                     |
| -------------------------------------- | ------------------------------------------- | ---------------------------- | --------------------- |
| **0**                                  | "Mobile App Development"                    | "Front End Web Devevlopment" | "Database Specialist" |
| **1**                                  | "Computer Network Monitoring and Mangement" |                              |                       |

**Example**  
grid for a tic-tac-toe game:

```javascript
const grid = [ ["", "", ""], ["", "", ""], ["", "", ""]];

// Put an X in the top-left, then center, then bottom-right squares
grid[0][0] = "X";
grid[1][1] = "X";
grid[2][2] = "X";
```

This can be visualized as a table:



| 2nd index &rarr;<br />1st index &darr; | 0    | 1    | 2    |
| -------------------------------------- | ---- | ---- | ---- |
| **0**                                  | "x"  | ""   | ""   |
| **1**                                  | ""   | "x"  | ""   |
| **2**                                  | ""   | ""   | "x"  |



### Practice

1. Write a function to let you put an X or O into a particular location in the grid
2. Write a function to output the grid to the console.



## Next class: Using array methods

- Concept of objects and methods.

- `push and pop`

  Used to add and remove elements at the end of an array.

- `shift` and `unshift`

  Used to add and remove elements at the beginning of an array.

- `splice`

  Used to remove or modify elements in an array



## Reference

[Understanding Arrays in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript) by Tania Rascia

[JavaScript Array Tutorial](https://www.w3schools.com/js/js_arrays.asp) on W3Schools

[JavaScript Array Tutorial](https://www.javascripttutorial.net/javascript-array/) on JavaScriptTutorial.net



[^1]: `const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]`
[^2]: The JavaScript `for...of` loop is similar to the `for...each` loop in other languages like C++, C#, Java or Python. JavaScript also has a `ForEach()` array method, but it has a different purpose.

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) 2018, revised fall <time>2024</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 
