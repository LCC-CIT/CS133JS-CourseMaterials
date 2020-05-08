

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
  var myArray = [];
  ```

- With initialization

  ```javascript
  var myArray = [“Rey”, “Finn”, “Han Solo”, “C-3PO”, “Chewbacca”];
  ```



## Performing Operations on an Array

- Changing values in an array

  ```javascript
  myArray[1] = “Poe”;
  ```

- Adding new values to an array

  ```javascript
  myArray[5] = “Yoda”;
  ```

- You can also use `push`  

  ```javascript
  myArray.push(“Leia”);
  
  ```

  - You could do this in a loop to add multiple values to an array.

- Retrieving values from an array

  ```javascript
  alert(myArray[0]);
  ```

- Arrays have a length property

  ```javascript
  var numElements = myArray.length;
  ```


### Exercise

- Write a function to put names in an array.

- Write another one to write the names to a page.



## Use Arrays in Loops

```javascript
// Use a loop to display the contents of an array
// Number of iterations? Final value of i?
// i is for “index”
for (i = 0; i < length; i++)
{
   alert(myArray[i]);
}
alert(“done”);

```



The *while* loop below iterates as long as the user keeps entering names.

```javascript
// Enter values in an array until the user enters “done”
var name = “”;
var names = [];
while (name != done)
{
   name = prompt(“Enter a name”);
   names.push(name);
}

```



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------