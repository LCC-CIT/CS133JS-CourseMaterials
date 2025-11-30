---
title: Style Standards
description: Coding style and best practices
keywords: style, best practices
material: Coding standards
generator: Typora
author: Brian Bird
---


# JavaScript Style and Best Practices

**For CS133JS, Beginning Programming: JavaScript**

## Coding Conventions for this Course

- Indentation: use standard indentation.

  - Many JS style guides reccomend indenting by two spaces.

- Variables

  - Names should be descriptive.
  - Names should use camelCase.
  - Should be declared with `let`.
  - Use strict mode (`"use strict";`)

- Constants

  - Declared with `const`.

  - Names should be descriptive.

  - Names should be in ALL_CAPS if the constant is for a value, not an object or array.

  - Should be used in place of literals.

- Code should be DRY&mdash;Don't Repeat Yourself.

  (No duplicated blocks of code).

- Separation of concerns.  
  Functions that do processing should not also do i/o.

- Functions

  - Names should be descriptive and use camelCase.
  - Should have only one return statement, sometimes two if it makes the code simpler and easier to read; but don't replace control structure logic with returns that short-circuit the control structure.
  - Should have a single purpose.

- Old code: any unused code should be removed.

- Comments: explanatory comments should be included.

- File names should be written in PascalCase and should not contain spaces or special characters other than numbers, dots, hyphens or underbars.

  

## References

[JavaScript guidelines](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript)&mdash;MDN

[JavaScript Style Guide](https://www.w3schools.com/js/js_conventions.asp)&mdash;W3Schools' coding conventions

[JavaScript Best Practices](https://www.w3schools.com/js/js_best_practices.asp)&mdash;W3Schools



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Course Materials by [Brian Bird](https://profbird.dev), written 2020, revised <time>2025</time> are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 
