**CS133JS Beginning Programming: JavaScript**

<h1>More About Operators and Expressions</h1>



| Topics by Week                                       |              |
| ---------------------------------------------------- | ------------ |
| 1. Intro to JavaScript programming                   | 6. Arrays    |
| 2. Functions, <mark>Operators and Expressions</mark> | 7. Functions |
| 3. Conditional Statements                            | 8. Objects   |
| 4. Loops                                             | 9. DOM       |
| 5. Midterm                                           | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

------

# Review

## Math Operators

JavaScript has all the math operators you know: +, -, /, * and one you might not: % (the *modulo* operator) 

```javascript
var remainder = 8 % 3;
console.log(remainder); 
```

There are increment and decrement operators:

- postfix: `x++`, `x--`
- prefix: `++x`, `--x`

```javascript
 var count = 1;
 count++
 console.log(count);
 console.log(count++);
 console.log(count);
 console.log(++count);
 console.log(count);
```

 

## Comparison Operators



------

# More on Operators and Expressions

Review: An expression is a unit of code that can be evaluated to some value.

### Combined assignment and math operators

You can shorten the way you write statements that do a math operation and assign the result to a variable. For example `a = a + 5` can be shorted to `a += 5`. Here are more examples:

```javascript
var num = 4;
num += 2;
console.log(num);
num -= 3;
console.log(num);
num *= 10;
console.log(num);
num /= 5;
console.log(num);
num %= 2;
console.log(num);
 
```



### The range of numbers that can be represented

Run this code in the console to see what the limits are for numeric expressions in JavaScript.

```javascript
 var biggestNum = Number.MAX_VALUE; 
 var smallestNum = Number.MIN_VALUE; 
 var infiniteNum = Number.POSITIVE_INFINITY; 
 var negInfiniteNum = Number.NEGATIVE_INFINITY; 
 var biggestInt = 9007199254740991; 
 var smallestInt = -9007199254740991;

```

### Representation of infinity

- Test an expression to see if it is finite: `isFinite(n)`

  Try this with `1/0` in place of `n`.

- Test an expression to see if it is a valid number: `isNaN(n)`




------

# Reference

[MDN Reference: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) 

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------
   ```

   ```