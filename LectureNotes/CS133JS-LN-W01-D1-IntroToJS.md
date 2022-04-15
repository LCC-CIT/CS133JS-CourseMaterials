---
title: Intro to the Course and to JavaScript
description: Course tour, overview of web programming and an intro to JavaScript programming. 
keywords: Static web pages, dynamic web pages, server-side code, client-side code, hello world
material: Lecture Notes
generator: Typora
author: Brian Bird
---

<h1>Intro to the Course and to JavaScript</h1>

**CS133JS Beginning Programming: JavaScript**

| Topics by Week                                           |                                    |
| -------------------------------------------------------- | ---------------------------------- |
| 1. <mark>Intro to JavaScript programming</mark>          | 6. Arrays                          |
| 2.  Functions, Variable scope, Operators and Expressions | 7. Objects and Object Constructors |
| 3. Conditional Statements: if and switch                 | 8. Web Page I/O                    |
| 4. Repetition: while, do while, and for                  | 9. Review                          |
| 5. Midterm                                               | 10. Final                          |



<h2>Table of Contents</h2>

[TOC]

# Introduction

## About Me

- Why I like to program
- Job history
- What I teach
- LCC's Programming Degree

## Static pages vs. dynamic (interactive) pages

### Examples

- [Facebook](https://www.facebook.com/) (likes, comments, add friend, etc.)
- [LTD](https://www.ltd.org/) static pages (about us) and dynamic (trip planner)

### Exercise

[LCC](https://www.lanecc.edu/) web site – which parts are interactive?


​       			

## Server-side vs. client side code

- Server-side code vs. client side (browser) code
   (Draw a picture)
- What needs to happen on the server?  
  - Storing data
  - Interaction with other users
  - Member information
  - Heavy processing tasks
- What can be done in the client?
  - Light-weight processing, examples:
    - Temperature and unit conversion
    - Time zone conversion
    - Single player games
  - Check user input before storing it
  - Animations
### Examples

Revisit these and discuss what might run on the server and what might run in the browser.

- [Facebook](https://www.facebook.com/) (likes, comments, add friend, etc.)
- [LTD](https://www.ltd.org/) static pages (about us) and dynamic (trip planner)

### Exercise

[LCC](https://www.lanecc.edu/) web site – which parts could run on the server? Which parts in the browser?



# Intro to JavaScript 

- Provides interactivity using client-side code.
  
  - Originally designed to just run in web browsers (client-side code) but now used everywhere including: server-side, desktop, and mobile
  
- A completely different language from Java, but has some similarities

  - JS is interpreted, dynamic, and multi-paradigm (procedural & Object Oriented, imperative & functional). *We’ll explain these things later.*

  ## Guided Exercise: Hello world

  1. Set up your computer to do JavaScript development.
     - Install [Firefox](https://www.mozilla.org/en-US/firefox/new/).
  2. Open Firefox, press F12, and select console. We'll put this code in the console.
     (Almost any browser will have a similar feature in it's *developer* menu)
  3. Enter the code below. (This is simple, but not very useful.) 
  ```javascript
  document.write("<p>Hello world!</p>");
  ```
  3. Lets add a *variable* named `name`. A variable is a thing we can use to store information. Now you'll be able to change the name, but you;'l need to change the source code to do it  :-(
  ```javascript
   var name = "world"; // can change to “other names”
   		 document.write("<p>Hello " + name + "!</p>");
  ```

4. Finally, we'll add a way for a user to enter information. We do that by adding an input prompt.
  ```javascript
  var name = prompt("Please enter your name");
  	document.write("<p>Hello " + name + "!</p>");
  ```
  Now it's almost useful :-)

Let's talk about how this works by looking at some key pieces of the code:

- `var`
  We use this JavaScript keyword to *declare* a variable. Declaring a variable means announcing to JavaScript that this is a new variable that we will be using.
- `prompt`
  A function built into JavaScript that pops up a dialog box that displays a message and lets the user enter some input.
- `=`
  The *assignment operator*. It takes the information (in this case a name) coming from the prompt on the right and puts it into the variable on the left. Note that in computer programming, the direction information flows with the `=` symbol is the opposite of algebra.

# Course Tour

- Syllabus – quick overview
- Reading and Quizzes
  
  - Purpose of quizzes isn’t testing, it’s focus and accountability.
- Lab assignments
  - Part 1 will usually be a tutorial exercise.
  - Part 2 will require problem-solving.
  - You will upload your solutions to Moodle and usually to citstudent as well.
- Code reviews
  - Each lab assignment has a beta and production version. Code reviews are done on the beta version.
  - One reason we do code reviews: they are used by development teams in the real world.
  - Look at the code review procedure document.
  
  
   	



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written in 2018, revised in <time>2022</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------