---
title: Objects
description: An introduction to JavaScript objects.
keywords: Object, object literal, object constructor, object property, object method, this keyword, for...in, Object.keys, delete property
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CS133JS Beginning Programming: JavaScript**

<h1>Intro to Objects</h1>


| Topics by Week                                       |            |
| ---------------------------------------------------- | ---------- |
| 1. Intro to JavaScript programming                   | 6. Arrays  |
| 2. Functions, Operators and Expressions              | 7. <mark>Objects</mark> and Object Constructors |
| 3. Conditional Statements: if and switch             | 8. Web Site I/O |
| 4. Repetition: while, do while, and for | 9. Review |
| 5. Midterm Check-Point                               | 10. Final  |


<h2>Table of Contents</h2>

[TOC]

## Introduction

### Q and A

- Did anyone look at the [additional loop practice problems](../Labs/Lab04/PracticeProblems-Loops.html) I posted? 
  - Were they helpful? 
  - If you want more, I can post some for other topics; like arrays.

- Lab 5, Part 2, any questions?
- Does anyone have any questions about anything?



### Review of Array Methods

These examples use the array declared and initialized below:

```javascript
let continents = ["Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"];
```



#### `length`

```javascript
console.log(continents.length);
```

#### `indexOf()`

```javascript
console.log(continents.indexOf("Antarctica"));
```

#### `splice`

```javascript
continents.splice(3, 0, "Atlantis"); // Insert Atlantis at index 3
continents.splice(3, 1);   // remove Atlantis
continents.splice(2, 2, "Americas"); // Remove N. and S. America, replace with Americas
```

#### `concat`

```javascript
let tooks = ["Merry", "Pippin"];
let bagginses = ["Bilbo", "Frodo"];
let hobbits = tooks.concat(bagginses);
```

Copy an array. 

```javascript
let hobbitsCopy = [].concat(hobbits);
```

#### `pop`

```javascript
let continent = continents.pop(); // removes Austrailia
```

#### `shift`

```javascript
let continent = continents.shift(); // removes the first element, Asia
```

#### `push`

```javascript
let arrayLength = continents.push("Austrailia"); // adds Austrailia at index = length
```

#### `unshift`

```javascript
let arrayLength = continents.unshift("Asia"); // adds Asia at index 0
```



------

## Overview of objects

Objects in JS are like objects in the real world. They have properties--for example a book has: title, author, publication date, genre, etc. They can also have methods--for example a book could have a `countWords` method that counts all the words in the book.

Objects can contain:

- Properties
- Methods

### Creating Objects

There are two ways to create an object:

- Object constructor 

  ```javascript
  const fili = new Object();
  ```

  We'll cover this in the next class.
  
- Object literal

  We'll focus on this approach today.

  

  Create an object literal without adding any properties or methods:
  
  ```javascript
  const thorin = {};
  ```
  
  Create an object with properties and methods:
  
  ```javascript
  const fili = 
  {
      name: "Fili",
      race: "dwarf",
      brother: "Kili",
      greet: function() {
          return this.name + " at your service!";
      }
  };
  ```



## Properties and Methods

Think of a properties as a nouns, and a methods as a verbs.

### Properties

Each property consists of a *key : value* pair. In the example above, `name` is a *key* and `"Fili"` is a *value*.

### Methods

A method is essentially a function. It is also the value of an object property. It is a task that an object can perform. In the example above, `greet` is a *key*, and is the name of the *method*. The function is a *value*.

## Accessing Properties and Methods

### Accessing an Object Property

Here are two ways to access an object’s properties.

- Dot notation: `.`

  ```javascript
  fili.race;
  ```

- Bracket notation: `[]`

  ```javascript
  fili["race"];
  ```


Bracket notation must be used if an object’s property name is a number.

  ```javascript
// Create a new object containing numeric properties
const elves = 
{ 
  home:"Rivendell",
	0:"Elrond",
	1:"Arwen",
	2:"Gildor"
};
// Access a numeric property
console.log(elves[1]);
  ```

What do objects with numeric properties look like?

#### The `this` keyword

Inside a method, the `this` keyword references the object that contains the method so you can access an object property.

```javascript
const fili = 
{
    name: "Fili",
    greet: function() { 
        return this.name + " at your service!";
    },
};
```



### Calling a Method on an Object

You call a method just as you would call a regular function, but you do it through the object.

```javascript
fili.greet();
```

## Adding and Removing Properties and Methods

### Adding Properties to an Object

Add new properties to an object with the assignment operator, `=`

```javascript
fili.age = 82;
fili.weapon = "hammer";
```

### Adding Methods to an Object

Adding a method to an object is similar to adding a property, but in place of the property value you provide a function definition.

```javascript
fili.fight = function() 
{
    return "Fili attacks with a " + this.weapon;
}
```

### Removing Properties from an  Object

utilize the `delete` keyword. Evaluates to true if successfull.

```javascript
delete fili.weapon;
delete elves[1];
```

## Using Loops with Object Properties

### `for...in` Loop&mdash;Just for Objects

The JavaScript language has a special, predefined loop,  `for`...`in`,  that is specifically designed for iterating over the properties of an object. This loop only iterates over property keys (aka names). Note that you need to use bracket notation.

```javascript
for (let item in fili) 
{
  console.log(fili[item]);
}
```

### All the Other Loops

#### Get an Array with `Object.keys()`

JavaScript objects have a pre-defined method for getting an array of property keys, the `Object.keys()` method. This makes it easy to use all the other loops with object properties.

```javascript
let filiArray = Object.keys(fili);
```

####`for...of` Loop&mdash;Just for Arrays

The  `for`...`of` loop is specifically designed to operate on arrays.

```javascript
let filiArray = Object.keys(fili);
for (const key of filiArray)
{
   console.log(key, fili[key]);
}
```

#### `for` Loop

The `for` loop has a built-in loop counter that works great for indexing an array.

```javascript
let filiArray = Object.keys(fili);
for (let i = 0; i < filiArray.length; i++)
{
  let key = filiArray[i];
   console.log(key, fili[key]);
}
```

#### `while` and `do...while`  Loops

We can use these loops on arrays of object properties too, but they aren't as convenient to use as the three types of `for` loops. 

```javascript
let filiArray = Object.keys(fili);
let i = 0;
while (i < filiArray.length)
{
  let key = filiArray[i];
  console.log(key, fili[key]);
  i++;
}
```

#### 

## Mutability of Objects

Objects declared with `const` are *mutable*, that means they can have their properties changed or removed and can have new properties added. But the *binding* is *immutable*, the object variable can't be assigned to a new object.

```javascript
const bomber = {name:"Bomber"};
const boffer = {name:"Boffer"};
bomber = boffer; // this will cause an error
let balin = {name:"Balin"};
balin = boffer;  // this works!
```



# References

[JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) - MDN Guide

[Understanding Objects in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript) - Tania Rascia, 2021, Digital Ocean

"[Data Structures: Objects and Arrays](https://eloquentjavascript.net/04_data.html)", Ch. 4 in Eloquent JavaScript, 3rd Ed., Marijn Haverbeke, 2018, No Starch Press.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) written in 2020 and revised in <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------