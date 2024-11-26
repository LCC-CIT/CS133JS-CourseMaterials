---
title: Lab 8, Part 2
description: Modify a chatbot app that uses regular expressions.
keywords: regular expressions, regex, RegExp
material: Lab Instructions
generator: Typora
author: Brian Bird
---



<h1>Lab 8, Regular Expressions, Part 2: Chatbot</h1
**CS 133JS, Beginning Programming: JavaScript**

[TOC]

## Overview

There is only one version of this lab assignment for all groups. You will not do code reviews on this assignment.

The objective of this lab assignment is to get practice using string methods as well as regular expressions and the JavaScript RegExp object.

## About the Chatbot Code

You goal in this lab is to improve the chatbot so that more user input strings will match the chatbot prompt strings that trigger the chatbot's responses.

### Set up the Chatbot on your Computer

Download the [chatbot app files](https://github.com/LCC-CIT/CS133JS-CourseMaterials/archive/refs/tags/Lab8-Part2.zip) from GitHub (this link will download the files in a zip archive.) Unzip the files to an appropriate location on your machine.

You can run the chatbot by simply opening the index.html file in a browser.

### How the Chatbot Works

There are two *parallel arrays*: `prompts` and `replies`. When the user enters an input string it is regularized in the index.js `output` function. Next, the `compare` method searches the prompts array for a a prompt string that matches the user's input string. When it finds an exact match, it randomly selects one of the replies from the corresponding element of the replies array&mdash;corresponding means that the array indices are the same.

The prompts and replies arrays are 2D arrays which are arranged with each outer array containing a "row" of elements in an inner array. All the prompts in a given row are meant to match all the replies in a given row.

### Finding the Prompt that is the Best Match to User Input

The strategy we'll use to improve matches is to add code that can do partial matches between the user input string and the prompts. We will still want to give first priority to user input that exactly matches one of the prompts, but if the user input doesn't match any prompts, we want to be able to find a partial match.

#### Rating (scoring) the closeness of matches

In order to facilitate partial matches, our code will give a score of 0.0 to 1.0 based on how closely each prompt matches the user input. The scores will be calculated in the `compare` function, inside the nested loops that check for prompts that match the user input. Here is the original code with the inner loop slightly modified to get each prompt into its own variable named `onePrompt`.

```javascript
function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
		for (let x = 0; x < promptsArray.length; x++) {
      	for (let y = 0; y < promptsArray[x].length; y++) {
            let onePrompt = promptsArray[x][y];
            // If there is an exact match, stop searching the prompts
            if (onePrompt === string) {
                let replies = repliesArray[x];
                reply = replies[Math.floor(Math.random() * replies.length)];
                replyFound = true;
                // Stop inner loop when input value matches prompt
                break;
            }
        }
        if (replyFound) {
            // Stop the outer loop when a reply is found
            break;
        }
    }
    return reply;
}
```

The code to rate the closeness of matches will be added in an `else` after the `if` statement that checks for matches. Here is the code:

```JavaScript
else {
  // Count the words in the input that match the words in the prompt
  let words = string.split(/\s/);
  let matches = 0;
  for (let word of words) {
    let searchPattern = new RegExp("\\b" + word + "\\b");
    if (onePrompt.search(searchPattern) >= 0) {
      matches++;
    }
  }
  // Count the words in the prompt (spaces = wordCount - 1)
  let spacesArray = onePrompt.match(/\s/g);
  let promptWordCount = spacesArray == null ? 1 : spacesArray.length + 1;
  let score = matches / promptWordCount;
  // score is the ratio of matches to the number of prompt words.
  // Keep the highest scoring prompt from this row of prompts.
  if (scores[x] == null || scores[x] < score) {
    scores[x] = score;
  }
}
```

#### Selecting a high-scoring reply when there isn't an exact match

If the outer for loop has completed and there wasn't an exact match, then we will find the highest scoring match in the scores array and if the score is greater than 0.75 we will select the corresponding random response from the responses array.

```JavaScript
 if (!replyFound) {
        let highestScore = Math.max(...scores);
        if (highestScore > 0.75) {
            // TODO: turn this into a function it's not DRY
            let replies = repliesArray[scores.indexOf(highestScore)];
            reply = replies[Math.floor(Math.random() * replies.length)];
            replyFound = true;
        }
    }
```

## Instructions

You will modify the chatbot code to improve its performance.

### Add or Modify the RegExp Code

In the `output` function in `index.js`, there are a series of calls to the `.replace` method on the text input by the user. Modify or add at least five of these to improve the way user input is matched to the prompts (perhaps, specifically to your new prompts).

### Add More Prompts and Replies

Add at least five more rows of prompts and replies to the chatbot. Look at the way the input has been "regularized" in the `output` function and write your prompts accordingly.



## Submitting your lab work on Moodle

### Production Version

 Based on the code review and helpful advice from your lab partner, you may revise your web page. On the code review from your lab partner, complete the “Prod.” column to show what you revised. Upload the following to the *Lab 8 Production Version* assignment:

1. Both files from part 1.
2. A zip file containing the complete chatbot code for part 2.

This will be a total of 3 files.



### References

Sylvia Pap, [Make a Simple Chatbot with JavaScript!](https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc?signin=true), Dev Community, 2020.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written in 2018, revised in <time>2024</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 

------------

