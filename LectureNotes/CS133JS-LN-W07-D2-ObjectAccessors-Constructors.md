**CS133JS Beginning Programming: JavaScript**

<h1>Object Accessors and Constructors</h1>


| Topics by Week                           |                         |
| ---------------------------------------- | ----------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays               |
| 2. Functions, Operators and Expressions  | 7. <mark>Objects</mark> |
| 3. Conditional Statements: if and switch | 8. Methods              |
| 4. Repetition: while, do while, and for  | 9. DOM                  |
| 5. Midterm Check-Point                   | 10. Final               |


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



# Object Accessors

## Get

## Set



# Object Constructors



# References

[Working With Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) - MDN Guide

[JavaScript Object Accessors](https://www.w3schools.com/js/js_object_accessors.asp) - W3Schools

[JavaScript Object Constructors](https://www.w3schools.com/js/js_object_constructors.asp) - W3Schools



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 