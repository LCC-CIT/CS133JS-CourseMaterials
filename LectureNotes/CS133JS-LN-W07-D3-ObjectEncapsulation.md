---
title: Object Encapsulation
description: Creating JavaScript objects with getters and setters
keywords: encapsulation, getter, setter
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CS133JS Beginning Programming: JavaScript**

<h1>Encapsulation: Getters and Setters</h1>


| Topics by Week                           |                                                 |
| ---------------------------------------- | ----------------------------------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays                                       |
| 2. Functions, Operators and Expressions  | 7. Objects and <mark>Object Constructors</mark> |
| 3. Conditional Statements: if and switch | 8. Web Page I/O                                 |
| 4. Repetition: while, do while, and for  | 9. Review                                       |
| 5. Midterm Check-Point                   | 10. Final                                       |


<h2>Table of Contents</h2>

[TOC]

## Accessors

We can access the properties of a JavaScript object through special functions called *accessors*. These help us employ a programming concept called *encapsulation*. [TODO: Explain encapsulation.]

There are two kinds of accessors: *getters* and *setters*. One gets the value of a property, the other sets the value of a property. Here is an example in an object literal:

```javascript
const coffeeMaker = 
{ 
    grounds: 8,      // Tablespoons
    water: 32,			 // Ounces
  	set ozOfWater(w) {
    	this.water = w;
  	},
  	get ozOfWater() {
      return this.water;
    },
    brew: function() {
        return this.water + " ounces of coffee is ready!";
    }
};
```





## References

### Tutorials

[Getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) - MDN

[Setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) -MDN

[JavaScript Accessors](https://www.w3schools.com/js/js_object_accessors.asp) - W3Schools



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online), 2020, revised <time>2022</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 