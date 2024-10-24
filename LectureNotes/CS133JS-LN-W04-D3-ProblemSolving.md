---
title: Problem Solving
description: An introduction to the concepts of novel problem solving and algorithm design.
keywords: Problem solving, algorithm
material: Lecture Notes
generator: Typora
author: Brian Bird
---

<h1>Problem Solving</h1>

**CS133JS Beginning Programming: JavaScript**

| Topics by Week                                           |                                    |
| -------------------------------------------------------- | ---------------------------------- |
| 1. Intro to JavaScript programming                       | 6. Arrays                          |
| 2.  Functions, Variable scope, Operators and Expressions | 7. Objects and Object Constructors |
| 3. Conditional Statements: if and switch                 | 8. Web Page I/O                    |
| <mark>4. Repetition: while, do while, and for</mark>     | 9. Review                          |
| 5. Midterm                                               | 10. Final                          |



<h2>Table of Contents</h2>

[TOC]

## What is Problem Solving?

### Problem Solving with Computers

When we talk about problem solving in the context of computer programming, we mean coming up with computer code that will be a solution to some problem. The programmer is the real problem solver, not the computer. The programmer has to come up with a plan, a step-by-step set of instructions, for how the computer will solve a problem. We call this plan, an *algorithm*.

### Problem Solving in Life

There are many situations in life where we need to come up with "novel" (new) solutions to everyday problems. For example:

- There is some random food in the refrigerator and you want to use it to cook dinner. There are no recipes in your cookbook that use the ingredients you have, so what could you do?
  - Modify a recipe that uses some of the things you have as ingredients, but not all.
  - Make up a new recipe based on your experience of what tastes good together.
- You want to build a treehouse for your kids. You've found some plans on the internet, but the tree in your back yard is pretty different from the ones the plans are based on. How would you come up with a plan?
  - Modify one of the plans to fit your tree.
  - Come up with a whole new plan based on your imagination and experience building things.

A computer *algorithm* is similar to a recipe or a building plan.

### Problem Solving is an Art

Designing an algorithm is a bit like composing music or painting a picture. It's not like playing an instrument or painting by watching a step-by-step video. A computer programmer has to come up with a new algorithm every time there is a new problem to solve. Just like a painter, who does original paintings, uses creativity to come up with something new every time.

## What is an Algorithm?

An algorithm is a step-by-step set of instructions for accomplishing some task. Imagine a time traveler from the year 1000 arrived at your home and you needed to explain to them how to take a shower. You might do it by breaking it down into steps:

- Turn the knob counter-clockwise about half way.
- Adjust the water temperature.
  - Check the temperature of the water coming out of the faucet.
  - If it's too hot, turn the knob about 1/10 of the way clockwise.
  - If it's too cold, turn the know about 1/10 of the way counter-clockwise.
  - Repeat until the temperature is just right
- Pull up the lever on the faucet.
- Get into the shower.

There are many types of "algorithms" we use in everyday life: cooking recipes, DIY project videos, rules for driving a car, sheet music for playing an instrument, driving directions.

As a computer programmer we are creators of algorithms, the computer is the user of the algorithm. Programmers are not like the person following the driving directions, we are the one coming up with the driving directions.

## How to Design a Computer Algorithm

If we need to write a computer program to solve some problem, first we should think about how we would solve that problem ourselves (the human way to do it). 

### Grocery Bill Example

Let's say we are shopping at the grocery store and want to keep track of how much the items we put in our cart will cost. We would do this:

1. Read the price.
2. Is it a price per pound?
   - If yes:
     - Weigh the item.
     - Multiply the price by the weight.
3. Do we have a coupon for this item?
   - If yes:
     - Read the discount amount.
     - Subtract the discount from the price.
4. Add the price to our total.
5. Repeat for each item.



We can translate this algorithm into a JavaScript program like this:

```javascript
let repeat = "";
let total = 0;
do {
  	// 1. Read the price
    let price = parseFloat(prompt("Enter the price"));
  	// 2. If the price is per pound, calculate it
    let perPound = prompt("Is the price per pound? (yes/no)");
    if (perPound === "yes") {
        let weight = parseFloat(prompt("Enter the weight"));
        price *= weight;
    }
  	// 3. If there is a coupon, deduct the discount
    let coupon = prompt("Do you have a coupon? (yes/no)");
    if (coupon === "yes") {
        let discount = parseFloat(prompt("How many dollrs is the discount?"));
        price -= discount;
    }
  	// 4. Add the price to the total
    total += price;
  	// 5. Repeat for each item
    repeat = prompt("Do you want to add nother item? (yes/no)");
} while (repeat === "yes");
alert("Total: " + total)
```



### Example: Algorithm to Find Factors of a Number

If you had a math assignment to find the factors[^1] of various numbers, you would use an algorithm like this:

1. Start a list of factors with 1 since it is a factor of every number.

2. Read the number to factor.

3. Try dividing it by all the other numbers that are candidates for being factors (everything between 1 and the number itself).

   a. Try dividing by one of the candidate factors.

   b. If there was no remainder:

   - Add the candidate to the list of factors.

   Repeat, if there are more numbers to try.

4. Add the number itself to the list of factors, since it will always be a factor.



Now, we'll translate the algorithm into JavaScript:

```javascript
// 1. Start a list of factors
let factors = "1, "; // One is always a factor
// 2. Read the number
let theNumber = parseFloat(prompt("Enter a number"));
// 3a. Come up with all possible candidates for factors
for (let candidate = 1; candidate < theNumber; candidate++) {
    // 3b. Try dividing by a candidate
    if (theNumber % candidate === 0) {
        factors += candidate + ", ";
    }
}
// 4. Add the number itself to the list
factors += theNumber;
alert("The factors are: " + factors);
```



[^1]: Factors are whole numbers that can be evenly divided into another whole number. For example, the factors of 12 are: 12, 6, 4, 3, 2 and 1.

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written in 2018, revised in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------