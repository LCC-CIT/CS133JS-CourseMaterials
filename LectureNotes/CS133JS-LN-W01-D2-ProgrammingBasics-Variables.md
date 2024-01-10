---
title: Programming Basics
description: Introduction to the basic programming concepts for all programming languages: control structures, syntax and data types. Intro to specifics of JavaScript and how to use Visual Studio Code.
material: Lecture Notes
generator: Typora
author: Brian Bird
keywords: control structures, syntax, operators, variables, data types, overload, concatenation, dynamic type
---

<h1>Basics of Programming</h1>

**CS133JS Beginning Programming: JavaScript**

| Topics by Week                                           |                                    |
| -------------------------------------------------------- | ---------------------------------- |
| <mark>1. Intro to JavaScript programming</mark>          | 6. Arrays                          |
| 2.  Functions, Variable scope, Operators and Expressions | 7. Objects and Object Constructors |
| 3. Conditional Statements                                | 8. Objects                         |
| 4. Loops                                                 | 9. DOM                             |
| 5. Midterm                                               | 10. Final                          |



<h2>Table of Contents</h2>

[TOC]

# Announcements

- I have put everyone into groups
  - Groups A, B, and C are the lab assignment groups. Each group gets a different version of the lab assignment.
  - Numbered groups, 1, 2, 3, etc. are lab partner groups. There are three lab partners in each group and each of you are doing a different version of the lab assignment.
- In the notes for the [into to the course](https://lcc-cit.github.io/CS133JS-CourseMaterials/LectureNotes/CS133JS-LN-W01-D1-IntroToJS.html), I added a list of the parts of HTML you should know for this class. These are the things you will need to know for this week's lab assignment:
  - HTML Elements
  - Attributes
  - Headings
  - Paragraphs
  - Quotations `<blockquote>`&mdash;for the group C assignment
  - Links `<a>`&mdash;for the group B assignment
  - Images `<img>`&mdash;for the group A assignment
  - Inline frames `<iframe>` (only used in the example)

# Intro to Programming

Programs are sets of instructions. They implement Algorithms.

An algorithm is a step-by-step set of instructions for doing something. 

**Example:** Imagine you had to tell a robot how to make a grilled cheese sandwich. You would need to give it very specific instructions like this:

> 1. Collect the following items before cooking:
>    - 2 slices of bread
>    - 2 teaspoons of butter
>    - 2 slices of cheese
>    - 1 teaspoon of whole grain mustard
> 2. Spread one side of each slice of bread with butter.
> 3. Spread a thin layer of mustard on one slice of bread.
> 5. Place both slices of cheese on top of the mustard.
> 9. Heat a frying pan over medium heat.
> 10. Place the sandwich in the pan and cook until both sides are golden brown and cheese is melted.

**Exercise:** How would we write the algorithm for the hello world program we ran yesterday? 
(It's listed a few paragraphs down on this page.)

## Three control structures

- Sequence – we will learn this first
- Selection (if statements)
- Repetition (loops)

**Question:** Which control structure was used in the grilled cheese algorithm? What about the hello world program?

## Syntax

The grammar of a programming language

- Variables
- Operators: =, +, -, *, /, %, ++, --
- Keywords (reserved words): http://www.w3schools.com/js/js_reserved.asp
- Statements – End with a semicolon

## JavaScript Programming

- Console vs. Web page
- Input and output (i/o)
  - Normally i/o is done to and form HTML *elements* in a web page.

    - We've already used `document.write` to put text, including HTML elements, directly into a web page.
    - Later, we'll learn how to put text into an element or get it out of an element.
  - Can also be done with `prompt` (for input) and `alert` (for output) dialogs. This works both in the console and in a web page.
  - 
    Output can be sent to the console *log*.

    ```javascript
     var name = "world";
     console.log("Hello " + name + "!");
    ```

    **Question:** Note that we didn't output an html element, like `<p></p>` to the console log. Why?


 	

# JavaScript Variables and Data Types

## Variables 
Variables are named memory locations.

- Instructor: draw a picture representing variables in computer memory.
- Variables are *declared* with `var` or `let` (we'll talk about `let` later).

## Example: Hello world

Last time, we wrote this code and ran it in the browser console: 

  ```javascript
  var name = prompt("Please enter your name");
      		document.write("Hello " + name + "!");
  ```
### Using Visual Studio Code

This time, we'll put it in a web page, but, first, install [Visual Studio Code](https://code.visualstudio.com/). 
And, optionally, add the following extensions:

- [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Beautify](https://marketplace.visualstudio.com/items?÷itemName=HookyQR.beautify)

### Putting JS Code in an HTML `<script>` Element

Using VS Code, start with a standard [empty HTML page](../Examples/Empty.html) and add this code to the head element inside of a HTML &lt;script&gt; element:

```HTML
<head>
    <meta charset="UTF-8" />
    <title>JS Demo</title>
    <script>
      var name = prompt("Please enter your name");
      document.write("Hello " + name + "!");
    </script>
</head>
```

We can also put script elements in the body of a web page:

```html
<body>
    <h1>My First JavaScript Program</h1>
    <script>
      var name = prompt("Please enter your name");
      document.write("Hello " + name + "!");
    </script>
</body>
```

Variables that are declared in one &lt;script&gt; element are visible in all the &lt;scrpit&gt; elements that are below it on the page.


```html
<body>
    <h1>Multiple Script Elements</h1>
    <script>
      var name = "June";
    </script>
    <!-- some more HTML -->
  <script>
     document.write("Hello " + name + "!");
  </script>
</body>
```



2. Let's *refactor* it to add a second variable and prompt: 
  ```javascript
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    document.write("Hello " + firstName + " " 		+ lastName + "!");
  ```

#### Discussion


- Two meanings for `+` (it’s an *overloaded* operator)  	

  - *addition* when used with numbers
  - *concatenation* when used with strings
  
- Quotes: two kinds, you can only nest one kind inside the other

  - Example:
    
     ```javascript
     document.write("Who said, 'Brevity is the soul of wit'? <br />");
     document.write('Tamil proverb: "Even elephants do slip"');
     ```

- Running code in the console vs. running in a browser


  - The console is mainly for experimenting and debugging code. It's not where the code will ultimately get used.

  - The console lets us immediately try out snippets of code and see instant results.

  - To run code in the browser we have to:


    - Write an HTML file in a code editor
    - Open the file in a browser
    - The code will run when we load or reload the web page.


​    

## Data Types 

### Primitive Types

- string
- number
- boolean
- undefined

Variables in JavaScript are *dynamically typed*, meaning we don't need to declare the type when we declare the variable. JavaScript figures out the type based on the data we assign to it.

Example:

```javascript
var words = "this is a string";
var number1 = 1234;
var truth = false;
var stuff;

console.log(typeof words);
console.log(typeof number1);
console.log(typeof truth);
console.log(typeof stuff); 
```

#### Null and Undefined

This is a bit tricky. If we use the `typeof` keyword to check the type of a variable and we haven't assigned a value to that variable, then it will show its type as *undefined*. Also, if we check its value, it will be *undefined*.  So *undefine*d can be either a description of the value or of the data type. 

But, *null* is just a value[^1]. It's the value that means "nothing", which is not the same as zero.

Try this in the console:

```javascript
var thing;
console.log(thing);
console.log(typeof thing);
thing = null;
console.log(thing);
console.log(typeof thing);
```



### Mixing data types 

What is happening here?

Note: these examples assume the variable declarations at the beginning of this section.


- A statement with two numbers

  ```javascript
  var number2 = 6;
  var sum = number1 + number2;
  console.log(sum);
  ```

- A statement with a number and a string

  ```javascript
  var result = number1 + words;
  console.log(result);
  ```

- Statement with a number and a boolean variable

  ```javascript
  var truth = true;   // true is equal to 1, false is 0
  var result = number1 + truth;
  console.log(result);
  ```


- Statement with a string and a boolean variable

  ```javascript
  var result = words + truth;
  console.log(result);
  ```




### Variable Naming Rules and Conventions

- Variable names must start with a letter, _ (underscore), or &dollar; (dollar sign). You can’t use a number as the first character. The rest of the variable name can include any letter, number, &dollar;, or _,  but no other characters including spaces, symbols, and punctuation marks.
- Normally, variables are named using *camelCase*, meaning that if a variable name is a compound word, the first word is all lower case and the first letter of any additional words are upper case.
- Variable names should be descriptive of what they are used for.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written in 2018, revised in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

------------

[^1]: I disagree with the textbook, *Eloquaint JavaScript*, on this point. In [chapter 1](https://eloquentjavascript.net/01_values.html), the author asserts that both `null` and `undefined` are types, but I would say that `undefined` is a type and `null` is a value.
