

**CS133JS Beginning Programming: JavaScript**

<h1>Objects</h1>


| Topics by Week                                       |            |
| ---------------------------------------------------- | ---------- |
| 1. Intro to JavaScript programming                   | 6. Arrays  |
| 2. Functions, Operators and Expressions              | 7. <mark>Objects</mark> |
| 3. Conditional Statements: if and switch             | 8. Methods |
| 4. Repetition: while, do while, and for | 9. DOM     |
| 5. Midterm Check-Point                               | 10. Final  |


<h2>Table of Contents</h2>

[TOC]

# Introduction

## Announcements

- I'm still working on grading the lab 4 production version. 

## Q and A

- Lab 5, Part 2, any questions?
- Does anyone have any questions about anything?



## Review of Array Methods

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

```
let arrayLength = continents.push("Austrailia"); // adds Austrailia at index = length
```

#### `unshift`

```
let arrayLength = continents.unshift("Asia"); // adds Asia at index 0
```



------

# Objects

Objects in JS are like objects in the real world. They have properties--for example a book has: title, author, publication date, genre, etc. They can also have methods--for example a book could have a countWords method that counts all the words in the book.

Two ways to create an object:

- Object literal

  We will focus on this approach today.

  Create an object without adding any properties or methods:

  ```javascript
  const thorin = {};
  ```
  
  Create an object with properties and methods:
  
  ```javascript
  const fili = {
      name: "Fili",
      race: "dwarf",
      brother: "Kili",
      greet: function() {
          return this.name + " at your service!";
      },
  };
  ```


- Object constructor

  ```javascript
  const fili = new Object();
  ```



## Properties and Methods

Each property consists of a *key:value* pair.

A method is a function that is the value of an object property, and therefore a task that an object can perform.

think of a property as a noun, and a method as a verb.

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
const elves = { 
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
const fili = {
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

### Adding Properties to an Object

Add new properties to an object with the assignment operator, `=`

```javascript
fili.age = 82;
fili.weapon = "hammer";
```

### Adding Methods to an Object

Adding a method to an object is similar to adding a property, but in place of the property value you provide a function definition.

```javascript
gimli.fight = function() {
    return "Fili attacks with a " + this.weapon;
}
```

### Removing Properties from an  Object

utilize the `delete` keyword. Evaluates to true if successfull.

```javascript
delete fili.weapon;
delete elves[1];
```



### Looping Through Properties on an Object 

JavaScript has a built-in loop,  `for`-`in`,  that is specifically designed for iterating over the properties of an object. This loop only iterates over property keys (aka names). Note that you need to use bracket notation.

```javascript
for (let item in fili) {
  console.log(fili[item]);
}
```

How does this compare to the `for`-`of` loop?

The `Object.keys()` method, which will return an array of the object’s keys.

```javascript
Object.keys(fili);
```



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

[Understanding Objects in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript) - Tania Rascia



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------