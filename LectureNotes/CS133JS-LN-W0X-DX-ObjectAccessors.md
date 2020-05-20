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

Accessors are special methods named `get` and `set` which are used to get or set the values of object properties.

## Encapsulation

One of the principles of working with objects is *encapsulation*. The idea is that the properties inside an object should not be directly accessed by code outside the object. Instead, object properties should be accessed through the `get` and `set` methods.

## Defining Accessor Methods

When creating an object literal, you define an accessor method in almost the same way as any other method except:

- The keywords `get` or `set` will be used
- Instead of the `function` keyword the name of the accessor property is used.

### `get`

Let's work with an object named *pigeon* :

```javascript
const pigeon = {
	name: "Agatha",
  breed: "Egyptian Swift",
  health: 7,    // number from 1 to 10
}
```

If we wanted to update Agatha's health score, we could do it directly like this:

```javascript
pigeon.health = 10;  // she's 100% healthy!
```

But, there is nothing to prevent code outside the object from setting the health to some invalid value. So we can add a special function to manage this.

```javascript
const pigeon = {
	name: "Agatha",
  breed: "Egyptian Swift",
  health: 7,    // number from 1 to 10
  set: 
}
```









# References

[Working With Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) - MDN Guide

[JavaScript Object Accessors](https://www.w3schools.com/js/js_object_accessors.asp) - W3Schools

[JavaScript Object Constructors](https://www.w3schools.com/js/js_object_constructors.asp) - W3Schools



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 