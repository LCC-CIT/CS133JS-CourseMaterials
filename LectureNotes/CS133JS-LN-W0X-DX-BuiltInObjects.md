

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



# Review of Objects

### Creating an Object

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

### Accessing an Object Property

- Dot notation: `.`

  ```javascript
  fili.race;
  ```

- Bracket notation: `[]`

  ```javascript
  fili["race"];
  ```

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

```javascript
fili.greet();
```

### Adding Properties to an Object

```javascript
fili.age = 82;
fili.weapon = "hammer";
```

### Adding Methods to an Object

```javascript
gimli.fight = function() {
    return "Fili attacks with a " + this.weapon;
}
```

### Removing Properties from an  Object

```javascript
delete fili.weapon;
delete elves[1];
```

### Looping Through Properties on an Object 

```javascript
for (let item in fili) {
  console.log(fili[item]);
}
```



# Built-in Objects

Objects that are part of the JavaScript language.

## String



## Date

·    The Date object contains variables and functions related to time and date.

·    Creating an object: To work with a Date object, you need to use the new operator to create one:



```javascript
 let newYear = new Date();
```



Setting values 

in an object: After creating a Date object, we can set date and time values that will be stored in the object:

```javascript
newYear.setFullYear(2017, 0, 1);
```

·    

o  setSeconds

o  setMinutes

o  setHours

o  setDate - day of the month

o  setMonth

o  setFullYear

o  setTime


·    Retrieving values from an object: The methods below can be used to retrieve values:


o  getSeconds

o  getMinutes

o  getHours

o  getDate – day of the month

o  getDay

o  getMonth

o  getFullYear

getTime




# References

[JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) - MDN Guide

[Understanding Objects in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript) - Tania Rascia



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

