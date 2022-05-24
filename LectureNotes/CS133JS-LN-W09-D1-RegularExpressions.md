---
title: Regular Expressions
description: How to use regular expressions for pattern matching in strings.
keywords: Regular Expression, Regex, RegExp, pattern, match, string
material: Lecture Notes
generator: Typora
author: Brian Bird
---



**CS133JS Beginning Programming: JavaScript**

<h1>Regular Expressions</h1>


| Topics by Week                           |                                     |
| ---------------------------------------- | ----------------------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays                           |
| 2. Functions, Operators and Expressions  | 7. Objects and Object Constructors  |
| 3. Conditional Statements: if and switch | 8. Web Page I/O                     |
| 4. Repetition: while, do while, and for  | 9. <mark>Regular Expressions</mark> |
| 5. Midterm Check-Point                   | 10. Review                          |


<h2>Table of Contents</h2>

[TOC]

# Introduction

## Announcements



## Q and A

- Does anyone have any questions about anything?

  

## Regular Expressions

One way to compare strings to see if they match is to use a  Regular Expression object, this object is a part of the JavaScript language, and also of almost every other programming language.

`RegExp` – Regular expression object. Used for pattern matching in strings

- Defined with forward slashes: `let pattern1 = /matchThis/;`

- Or by using the `new` operator: `let pattern2 = new RegExp(“/matchThisToo/”);`

The real power is in finding partial matches. Regular expressions are a powerful way to find matches for complex patterns in a string.

### RegExp Methods

- 
  `test`  
  This method will return true when you pass it a string that matches the string in the RegExp object.

  ```javascript
  let pattern1 = /matchThis/;
  let foundMatch = pattern1.test(“matchThis”); // foundMatch will be true
  ```

- `match`

- `search`

### Matching at the Beginning, Middle, or End of a String

You might have used `*` and `?` as wildcards in a search before. 
 With `RegExp`, the syntax is different; you use `.` to match any single character. 
 Adding a `*` means to match zero to many occurrences of any character. 
 Adding a `+` will match one to many occurrences.

- The pattern below will match a string that <u>contains</u> “this”:

   ````javascript
   let pattern = /this/
   let text = "Is this going to match?";
   let foundMatch = pattern.test(text);  // foundMatch will be true
   ````

- This pattern will match any string that <u>starts</u> with “This”:

   ````javascript
  pattern = /^This/
  text = "This should match.";
  foundMatch = pattern.test(text);  // foundMatch will be true
   ````

- This pattern will match any string that <u>ends</u> with “this” : 

  ````javascript
  pattern = /this.$/
  text = "The pattern will match this.";
  foundMatch = pattern.test(text);  // foundMatch will be true
  ````

### Flags

- RegExp flags (aka properties): g – global, i – ignoreCase, m – multiline.

  - Put the property after the slash that ends the regular expression: 

    `let pattern = /this/i;`

### Groups

- Character groups – a group of characters that can match one in a string:

  `let pattern = /[Tt]his/; // matches capital or lower case T`

- A group can be negated with a caret, ^ 

  `let pattern = /[^T]his/; // matches anything except a capital T`

- The caret also can be used to indicate a group that matches the beginning of a string. For example, checking for capitalization of at least the first character: 

  `let pattern = /^[A-Z][a-z]*/`

- The $ specifies that a char or group must be at the end of the string. For example, now only the first char can be capitalized:  

  `let pattern = /^[A-Z][a-z]*$/`

###  Escape Characters

Escape character – backslash is an escape character that lets you use a special character, like the dot as a dot, not for pattern matching. 

### Choice (Logical OR)

Pipe character, `|` to allow choice between patterns 

````javascript
let pattern = /JavaScript|C#|python/;
console.log(pattern.test("We teach C# at LCC"));
````

### Examples

- Example – test for a valid e-mail address: 
   (also uses {2,} to indicate a minimum of 2 characters)

  `let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i`

- Example – rules for naming variables:  Names can contain letters, digits, underscores, and dollar signs, but names cannot begin with a digit: 

  `let pattern = /^[A-Z_$][A-Z0-9_$]*$/i`

- Another example – check for a valid uoregon.edu address:

  `let pattern = /^[A-Z0-9._%+-]@uoregon.edu/i`

  

## Reference

[JavaScript RegExp Reference](http://www.w3schools.com/jsref/jsref_obj_regexp.asp)&mdash;W3Schools

[Regular Expressions](https://eloquentjavascript.net/09_regexp.html)&mdash;Ch. 9 in *Eloquent JavaScript*, 3rd Edition, by Marijn Haverbeke, No Starch Press, 2018.

[String replace method](https://www.w3schools.com/jsref/jsref_replace.asp)&mdash;W3Schools

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online), <time>2022</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 