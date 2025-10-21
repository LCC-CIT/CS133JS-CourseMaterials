---

title: Programming Basics
description: How to install, set up and use VS Code
material: Lecture Notes
generator: Typora
author: Brian Bird
keywords: IDE, Extensions, syntax, debugging
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

## Installing Visual Studio Code

This time, we'll put it in a web page, but, first, install [Visual Studio Code](https://code.visualstudio.com/). 
And, optionally, the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.



## Configuring AI Copilot

### Turning Off Inline Code Suggestions

1. Open Settings (Ctrl+,) on Windows.
2. In Settings search, type "inline suggest" and turn off "Editor: Inline Suggest: Enabled" (setting: editor.inlineSuggest.enabled).
3. (Optional) To stop GitHub Copilot from auto-triggering inline completions, open Settings JSON (Ctrl+Shift+P → Preferences: Open Settings (JSON)) and add the github.copilot.enable entry to disable for all languages. You can still trigger suggestions manually with Alt+.

### Completely Disable AI

1. Open Settings (Ctrl+,) on Windows.
2. Set "Disable and hide built-in AI features" to true (setting: chat.disableAIFeatures) to turn off built-in AI features like chat, completions and next-edit suggestions.
3. Turn off inline suggestions (setting: editor.inlineSuggest.enabled) to hide inline AI suggestions.
4. If you use GitHub Copilot, disable it in settings so it stops providing completions (setting: github.copilot.enable).
5. Restart VS Code to ensure changes take effect.



## References

-  [Visual Studio Code](https://code.visualstudio.com/)



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), written in 2018, revised in <time>2025</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

------------

[^1]: You can also use [Emmet](https://emmet.io/), which is built into VS Code, to insert "boilerplate" for an empty web page. In an HTML file, type `!` and then press tab to expand it into the HTML boilerplate.
[^2]: I disagree with the textbook, *Eloquaint JavaScript*, on this point. In [chapter 1](https://eloquentjavascript.net/01_values.html), the author asserts that both `null` and `undefined` are types, but I would say that `undefined` is a type and `null` is a value.
