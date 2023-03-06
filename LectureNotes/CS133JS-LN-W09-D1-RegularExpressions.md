---
title: Regular Expressions
description: How to use regular expressions for pattern matching in strings.
keywords: Regular Expression, Regex, RegExp, pattern, match, string, anchor, meta-character, escape character
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

One way to compare strings to see if they match is to use a  *Regular Expression* object, this object is a part of the JavaScript language, and something similar exists in almost every other programming language. 

`RegExp` – Regular expression object. Used for pattern matching in strings. A JavaScript RegExp object can be created two ways:

- Defined with forward slashes: `let pattern1 = /matchThis/;`

- Or by using the `new` operator: `let pattern2 = new RegExp("matchThisToo");`

The real power is in finding partial matches. Regular expressions are a powerful way to find matches for complex patterns in a string.

### RegExp Methods

These are the most commonly used methods. For a comprehensive list, see the [description of RegExp on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

#### `test`  

This method will return true when you pass it a string that contains a match for the pattern defined in the RegExp object.

```javascript
let pattern = /matchThis/;
let foundMatch = pattern.test("Does matchThis match?"); // foundMatch will be true
```

#### `exec`

This method will return an array of matched sub-strings, the array also has a number of properties; including the index of the first match in the string&mdash;if it finds one or more matches, otherwise it returns null.

```javascript
pattern = /th/;
let matches = pattern.exec("There are two matches in this sentence for 'th'.");
// matches: ["th"], matches.index: 25
```



### Matching "wild card" Characters

You might have used `*` and `?` as wildcards in a search before. 
 With `RegExp`, the syntax is a little different:

-  Use `.` to match any single character. 
  Example: `/They l.ve/` will match:

  - "They live"
  - "They love"

-  Adding a `*` will match <u>zero</u>-to-many of the character preceding the `*`. 
  Example: `/Bo*t/` will match:

  - "Bt"
  - "Bot"
  - "Boot"

- Adding the `+` will match <u>one</u>-to-many of the character preceding the `+`.

  Example: `/Bo+t/` will match:

  - "Bot"
  - "Boot"
  - But not "Bt"

- The dot-star, `.*` combination will match zero or more occurances of any character(s). 

  - For example, the pattern,`/she jump.* high/`, will match: 

    - "she jump high"

    - "she jumped high"

    - "she jumps high",

    - "she jumps high all the time."

    - "Yes, she jumps high!"

  - Interestingly, all these regexp patterns are the same:


      `/she jump/` is the same as: `/she jump.*/`, `/.*she jump/`, or `/.*she jump.*/`.
    
    This is because, if the regexp pattern doesn't specify that something must come before or after the pattern, then anything can.

- The dot-plus, `.+` combination will match one or more occurances of any character(s). 
  For example, the pattern, `/she jump.+ high/`, will match all the same strings as `/she jump.* high/` <u>except</u>  "she jump high".

  

### Matching at the Beginning, Middle, or End of a String

*Anchors* are used to indicate that a pattern must be applied at the beginning of a string, the end, or must match the entire string.

- The pattern below, without anchors, will match a string that <u>contains</u> “this” anywhere:

   ````javascript
   let pattern = /this/;
   let text = "Is this going to match?";
   let foundMatch = pattern.test(text);  // foundMatch will be true
   ````

- The `^` anchor indicates the match must be at the beginning of the string. This pattern will match any string that <u>starts</u> with “This”:

   ````javascript
  pattern = /^This/;
  text = "This should match";
  foundMatch = pattern.test(text);  // foundMatch will be true
  ````

- The `$` anchor indicates that match must be at the end of the string. This pattern will match any string that <u>ends</u> with “this” : 

  ````javascript
  pattern = /this$/;
  text = "The pattern will match this";
  foundMatch = pattern.test(text);  // foundMatch will be true
  ````

### Flags

- RegExp flags (aka properties): `g` – global, `i` – ignoreCase, `m` – multiline.

  - Put the property after the slash that ends the regular expression: 

    `let pattern = /this/i;`

### Groups

- Character groups – a group of characters that can match one character in a string:

  `let pattern = /[Tt]his/; // matches capital or lower case T`

- A group can be negated with a caret, ^ 

  `let pattern = /[^T]his/; // matches anything except a capital T`

- The caret also can be used to indicate a group that matches the beginning of a string. For example, checking for capitalization of at least the first character: 

  `let pattern = /^[A-Z][a-z]*/`

  (There can be zero or more lower case letters following the capital letter at the beginning. They may be followed by anything, including upper case letters.)

- The $ specifies that a char or group must be at the end of the string. For example, now only the first char can be capitalized:  

  `let pattern = /^[A-Z][a-z]*$/`
  
  (All the characters following the first character must be lower case all the way to the end.)
  
  

### Quantifiers

Curly braces, `{ }`, specify the number of times a pattern must match:

- Match the pattern exactly n times: `{ n }`
  
- Match the pattern at least n times: `{ n, }`
  
- Match the pattern from a minimum of n times to a maximum of x times: `{ n, x }`

For example, the pattern `/[0-9]{5}/` will match only strings containing 5 digit numbers like: "97405".



### Escape Characters

Escape character – backslash is an escape character that lets you use a special character, like the dot as a dot, not for pattern matching. For example, check for a period at the end of a string:

`let pattern = /\.$/`

### Metacharacters

Metacharacters are characters with a special meaning. A partial listing is shown below. Notice that the upper-case versions do the inverse of the lower-case versions. 

| Metacharacter | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| \w            | Find a word character (a-z, A-Z, 0-9 and _)                  |
| \W            | Find a non-word character                                    |
| \d            | Find a digit                                                 |
| \D            | Find a non-digit character                                   |
| \s            | Find a whitespace character                                  |
| \S            | Find a non-whitespace character                              |
| \b            | Find a match at either the beginning or end of a word.       |
| \B            | Finc a match that is not at the  beginning or end of a word. |

For a complete list, see the W3Schools *JavaScript RegExp Reference* in the [References](#References) below.

Here is an example that will only match whole words:

```javascript
let pattern = /\bpick\b/;
let results = pattern.exec("How many pecks of pickled peppers did Peter Piper pick?"); 
// results: ["pick"], result.index: 50 meaning it matched "pick" but not "pickled"
```



### Choice (Logical OR)

Pipe character, `|` to allow choice between patterns 

````javascript
let pattern = /JavaScript|C#|Python/;
console.log(pattern.test("We teach C# at LCC"));
````

If you want to add a modifer before or after the choice, put the choice inside parenthesis:

````javascript
let pattern = /^(JavaScript|C#|Python)/;
console.log(pattern.test("Python is an interesting language."));
````



### Examples

- Test for a valid e-mail address: 
   (This pattern uses `{2,}` to indicate a minimum of 2 characters.)

  `let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i`

- Rules for naming variables:  Names can contain letters, digits, underscores, and dollar signs, but names cannot begin with a digit: 

  `let pattern = /^[A-Z_$][A-Z0-9_$]*$/i`

- Check for a valid uoregon.edu address:

  `let pattern = /^[A-Z0-9._%+-]@uoregon.edu/i`



## Resource

[Regular Expression Test Page](https://regexkit.com/javascript-regex/)

Try out regular expressions to see how they work with different test strings.



## References

[JavaScript RegExp Reference](http://www.w3schools.com/jsref/jsref_obj_regexp.asp)&mdash;W3Schools

[Regular Expressions](https://eloquentjavascript.net/09_regexp.html)&mdash;Ch. 9 in *Eloquent JavaScript*, 3rd Edition, by Marijn Haverbeke, No Starch Press, 2018.

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online), written 2018, updated <time>2023</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 
