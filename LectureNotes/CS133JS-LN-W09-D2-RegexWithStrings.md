---
title: Strings with RegExp
description: How to use regular expressions with string methods
keywords: Regular Expression, Regex, RegExp, pattern, match, string, search, split, replace
material: Lecture Notes
generator: Typora
author: Brian Bird
---

**CS133JS Beginning Programming: JavaScript**

<h1>Regular Expressions</h1>

| Topics by Week                           |                                      |
| ---------------------------------------- | ------------------------------------ |
| 1. Intro to JavaScript programming       | 6. Arrays                            |
| 2. Functions, Operators and Expressions  | 7.  Objects and Object Constructors  |
| 3. Conditional Statements: if and switch | 8. Web Page I/O                      |
| 4. Repetition: while, do while, and for  | 9.  <mark>Regular Expressions</mark> |
| 5. Midterm Check-Point                   | 10. Term Project and Review          |
|                                          | 11. Final                            |

<h2>Table of Contents</h2>

[TOC]

## String Methods that use Regular Expressions

### `match`

These methods match a string against a string or a regular expression and return an array containing the matches, or null if no match is found.

- `match` using a string:
  
  ```javascript
  let text = "Peter Piper picked a peck of pickled peppers.";
  let resultArray = text.match("pi");
  // resultArray: ["pi"], resultArray.index: 12
  ```

- `match` using regex. Note that this is more flexible, for example, we can ignore case and match globally.
  
  ```javascript
  text = "Peter Piper picked a peck of pickled peppers.";
  resultArray = text.match(/pi/ig);  // ignore case
  // resultArray: ["Pi", "pi", pi"]
  ```

### `replace`

This method searches a string using another string value or a regular expression. It returns a new string with the value(s) replaced. It does not change the original string.

- Replace a sub-string with another string: 
  
  ```javascript
  text = "Peter Piper picked a peck of pickled peppers.";
  result = text.replace("peck", "pint");
  // result: "Peter Piper picked a pint of pickled peppers."
  ```

- Replace using regex: 
  
  ```javascript
  text = "Once a duck, always a duck.";
  result = text.replace(/duck/g, "titan");
  // result: "Once a titan, always a titan."
  ```

### `search`

This method matches a string against a regular expression. It returns the index (position) of the first match. If no match is found, it returns -1. The method is case sensitive.

```javascript
let text = "Spring is springing";
let position = text.search(/spring/ig);
// position: 0
```

### `split`

This method splits a string into an array of substrings. It returns a new array. It does not change the original string.

Note: if (" ") is used as separator, the string is split between words.

```javascript
let text = "Are you a robot?";
const outputArray = text.split(/\s/);
// outputArray: ["Are", "you", "a", "robot?"]
```

### Using Variables in a RegExp

Regular expression literals are constant, and can not be used with variables. 

You can use variables with a RegExp constructor. For example:

```javascript
let patternString = "( is){2}";
regExpObj = new RegExp(patternString, "g");
let result = regExpObj.test("It depends on what the meaning of is is");
// result: true
```

To insert a variable into a literal regex string (not RegExp object), just concatenate the variable into the appropriate part of the regex string. This will check to see if a string starts with the word in the variable.

```javascript
let word = "cat";
regExpObj = new RegExp("^" + word, "i");
let result = regExpObj.test("Cats are mammals.");
// result: true
```

## Reference

### W3Schools

[String match method](https://www.w3schools.com/jsref/jsref_match.asp)

[String replace method](https://www.w3schools.com/jsref/jsref_replace.asp)

[String split method](https://www.w3schools.com/jsref/jsref_split.asp)

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online), <time>2022</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 