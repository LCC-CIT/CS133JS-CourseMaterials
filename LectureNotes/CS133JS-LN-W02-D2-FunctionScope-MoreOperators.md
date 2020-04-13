

**CS133JS Beginning Programming: JavaScript**

<h1>Basics of Programming</h1>



| Topics by Week                     |              |
| ---------------------------------- | ------------ |
| 1. Intro to JavaScript programming | 6. Arrays    |
| 2. Expressions and Operators       | 7. Functions |
| 3. Conditional Statements          | 8. Objects   |
| 4. Loops                           | 9. DOM       |
| 5. Midterm                         | 10. Final    |



<h2>Table of Contents</h2>

[TOC]

# Intro to Programming

- Programs are sets of instructions. They implement Algorithms.
- Three control structures
  - Sequence – we will learn this first
  - Selection (if statements)
  - Repetition (loops)
- Syntax (grammar)
  - Variables – dynamic typing
    - Primitive types: *number*, *boolean*, *string*, *undefined*
    - Best practice: declare and initialize before use
  - Operators: +, -, *, /, %, ++, --
  - Keywords (reserved words): http://www.w3schools.com/js/js_reserved.asp
  - Statements – End with a semicolon
- Console vs. Web page
- Input and output
  - Normally to and from form elements in a web page.
  - Can also be done with prompt and alert dialogs.
  - Output can be sent to the console log.


 	

# JavaScript Variables and Data Types

## Variables 
Variables are named memory locations.

- Draw a picture representing variables in computer memory.

## Example: Hello world

Last time, we wrote this code and ran it in the browser console: 

  ```javascript
  var name = prompt("Please enter your name");
      		document.write("Hello " + name + "!");
  ```
2. This time, we'll put it in a web page, but, first, install [Visual Studio Code](https://code.visualstudio.com/). 
   And, optionally, add the following extensions:

   - [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug)
   - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

3. Using VS Code, start with a standard [empty HTML page](../Examples/Empty.html) and add this code to the head element:

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

   

4. Let's *refactor* it to add a second variable and prompt: 
  ```javascript
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    document.write("Hello " + firstName + " " 		+ lastName + "!");
  ```

#### Discussion


- Two meanings for +   	
   (it’s an *overloaded* operator)  	

  - *addition* when used with numbers
  - *concatenation* when used with strings
  
- Quotes: two kinds, you can only nest one kind inside the other

  - Example:
    
     ```javascript
     document.write("Who said, 'Brevity is the soul of wit'? <br />");
     document.write('Tamil proverb: "Even elephants do slip"');
     ```

- write  vs. writeln

  - Repeat the example above, but put the script block inside a  `<pre>` block. The write line doesn’t generate a ` <br />` but it does generate a newline, so we need to put it inside a preformatted block.
    


## Data Types 

### Primitive Types:

- string
- number
- boolean
- undefined

  Example:

  ```javascript
  var words = "this is a string";
  var number1 = 1234;
  var truth = false;
  var stuff;
  
  document.writeln(typeof words);
  document.writeln(typeof number1);
  document.writeln(typeof truth);
  document.writeln(typeof stuff); 
  ```

#### Null and Undefined

This is a bit tricky. If we use the typeof keyword to check the type of a variable and we haven't assigned a value to that variable, then it will show it's type as "undefined". Also, if we check it's value it will be undefined.  So undefined is both a statement about the value and about the data type. 

But, null is just a value. It's the value that means "nothing", which is not the same as zero.

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


- A statement with two numbers

  ```javascript
  var number2 = 6;
  var sum = number1 + number2;
  document.writeln(sum);
  ```

- A statement with a number and a string

  ```javascript
  var result = number1 + words;
  document.writeln(result);
  ```

- Statement with a number and a boolean variable

  ```javascript
  var truth = true;   // true is equal to 1, false is 0
  var result = number1 + truth;
  document.writeln(result);
  ```


- Statement with a string and a boolean variable

  ```javascript
  var result = words + truth;
  document.writeln(result);
  ```

  

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------