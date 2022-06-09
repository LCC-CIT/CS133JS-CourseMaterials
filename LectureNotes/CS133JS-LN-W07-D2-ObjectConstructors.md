---
title: Object Constructors
description: Creating JavaScript objects with object constructors.
keywords: object constructor, complex object, this keyword, method
material: Lecture Notes
generator: Typora
author: Brian Bird

---

**CS133JS Beginning Programming: JavaScript**

<h1>Object Constructors and Complex Objects</h1>


| Topics by Week                           |                                                 |
| ---------------------------------------- | ----------------------------------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays                                       |
| 2. Functions, Operators and Expressions  | 7. Objects and <mark>Object Constructors</mark> |
| 3. Conditional Statements: if and switch | 8. Web Page I/O                                 |
| 4. Repetition: while, do while, and for  | 9. Review                                       |
| 5. Midterm Check-Point                   | 10. Final                                       |


<h2>Table of Contents</h2>

[TOC]

# Introduction

## Announcements 

- I'm still working on grading lab 4.

## Q and A

- Lab 5 any questions?
- Does anyone have any questions about anything?



## Review of Objects

### Creating an Object Literal

```javascript
const fili = {
    name: "Fili",
    race: "dwarf",
    brother: "Kili",
    greet: function() {
        return this.name + " at your service!";
    }
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



------



# Object Constructors

Sometimes we will want to make multiple objects that are nearly the same. For example, we might want to make a "template" for creating a flock of pigeons. Here is one pigeon object:

```javascript
// Object literal
const pigeon = {
	name: "Agatha",
  breed: "Egyptian Swift",
  speed: 50,
  fly: function(){
    return this.name + " is flying at " + this.speed + " MPH.";
  }
}
```

Now we want more pigeon objects, but with different property values. Is there a way we can make a template that we can use to make others? Yes! We can make an *object constructor*.

Here's a special function that's an *object constructor*. 

Notice that the first letter is capitalized (style, not syntax).

```javascript
// Object constructor
function Pigeon(name, breed, speed){
	this.name = name;
  this.breed = breed;
  this.speed = speed;
  this.fly = function(){
    return this.name + " is flying at " + this.speed + " MPH.";
  };
}
```

Now we can make some *pigeon* objects and pass in property values:

```javascript
const agatha = new Pigeon("Agatha", "Egyptian Swift", 50);
const elizabeth = new Pigeon("Elizabeth", "Egyptian Swift", 60);
```

We can use these objects just like we would any other object:

```javascript
agatha.speed = 55;
agatha.fly();
elizabeth.fly();
```

## The `this` Keyword

Now that we have multiple objects that use the same object definition, we can see the importance of using *this* inside of object methods. The *this* keyword represents whatever object it is in and now it can be in different objects.

What would have happened if we used the object name inside the method instead of `this`?



# Complex Objects

Object properties can be other objects. When we put objects inside of objects we say they are a *complex object*. That doesn't mean they are complicated, just that objects are composed with one or more other objects inside.

## An Object Inside an Object

An object can have a property that has an object as it's value. For example we can make a loft objects for our pigeons to live in (a pigeon house is called a *loft*). Here is a loft for just one pigeon. The pigeon property is an object literal.

```javascript
// Object literal
const loft = {
  water: 100,  // percent full water
  food: 100,    // percent full food
  pigeon: {
      name: "Agatha", 
      type: "Egyptian Swift", 
      speed: 50,
      fly: function() {
           return this.name + " is flying at " + this.speed + " MPH.";
      }
  }
}
```

Or, we can use an object constructor:

```javascript
// Object literal with object from object constructor
const loft = {
  water: 100,  // percent full water
  food: 100,    // percent full food
  pigeon: new Pigeon("Agatha", "Egyptian Swift", 50)
}
```

We access the pigeon in the loft like this:

```javascript
loft.pigeon.fly();
```



## An Array of Objects Inside an Object

We can also put objects in arrays and put arrays of objects inside objects.

Let's start with just an array of objects. Here is an array that represents a flock of pigeons. I could have written object literals in each element of the array, but it was much easier to use the Pigeon object constructor.

```javascript
// Array of Pigeon objects
let pigeons = [new Pigeon("Agatha", "Egyptian Swift", 50),
							new Pigeon("Elizabeth", "Egyptian Swift", 60),
							new Pigeon("Jutta", "Utility", 45)];
```

We can access an individual pigeon by it's array index:

```javascript
flock[1].fly();  // Elizabeth will fly
```

Now let's create a loft object that has an array of pigeon objects:

```javascript
// Object literal
const loft = {
  water: 100,   // percent full water
  food: 100,    // percent full food
  pigeons: [new Pigeon("Agatha", "Egyptian Swift", 50),
			new Pigeon("Elizabeth", "Egyptian Swift", 60),
			new Pigeon("Jutta", "Utility", 45)]
}
```

Alternatively, we could just put a declaration for an array that can hold pigeon objects in the loft object:

```javascript
const loft = {
  water: 100,   // percent full water
  food: 100,    // percent full food
  pigeons: []
}
```

And then add some pigeons:

```javascript
loft.pigeons.push(new Pigeon("Agatha", "Egyptian Swift", 60));
loft.pigeons.push(new Pigeon("Aberforth", "Egyptian Swift", 50));
loft.pigeons.push(new Pigeon("Rosalind", "Egyptian Swift", 55));
```

We can access a pigeon in the loft like this:

```
loft.pigeons[2].fly(); // Rosalind will fly
```

What code could we write to make all the pigeons fly?



## Examples

These are the same examples that are posted on Moodle.

[GPA Calculator with Objects](https://lcc-cit.github.io/CS133JS-CourseMaterials/Examples/Week07/GpaCalculator-Object.html)

This is a new version of the GPA calculator.

[Movies and Actors with Objects]()

This is a new version of the Movie and Actors web app.



## Alternate Syntaxes for Object Constructors

You will also see object constructor functions that create and return an object rather than setting properties on `this`. Here's an example:

```javascript
function Pigeon(name, breed, speed) {
  const obj = {};
	obj.name = name;
  obj.breed = breed;
  obj.speed = speed;
  obj.fly = function(){
    return this.name + " is flying at " + this.speed + " MPH.";
  };
  return obj;
}
```

Or you might see an object constructor written like this, where the creation of an object is combined with assignment of properties:

```javascript
function Pigeon(name, breed, speed) {
  return {
    name: name,
    breed: breed,
    speed: speed,
    fly: function(){
      return this.name + " is flying at " + this.speed + " MPH.";
    };
  }
}
```

And this can be simplified to:

```javascript
function Pigeon(name, breed, speed) {
  return {
    name,
    breed,
    speed,
    fly: function(){
      return this.name + " is flying at " + this.speed + " MPH.";
    };
  }
}
```



# References

## Tutorials

[Working With Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) - MDN Guide

[JavaScript Object Constructors](https://www.w3schools.com/js/js_object_constructors.asp) - W3Schools



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online), 2020, revised <time>2022</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 