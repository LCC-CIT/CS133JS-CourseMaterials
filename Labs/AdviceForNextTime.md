

## Grading

- Check for console errors

- Require "use strict"

- In style and best practice, check file naming.

- 

## Use Modules for JS in Starter files Instead of `<script>` Elements

Use modules and have the globals in a separate file rather than in a script element in the html file

Yes, that's actually a better architectural solution. Instead of defining globals in an HTML `<script>` tag, you could create a separate JavaScript module file that exports the objects, then import them where needed.

For example, you could create `globals.js`:

```javascript
export const book = {
   title: "drone man rising",
   author: "Micah lusby",
   copyright: "rage in press"
};

export const author = {
    name: "Micah lusby",
    birthday: "may seven"
};

export const microwave = {
    time: 0,
    cook: function() { /* ... */ }
};

export const cdPlayer = {
    // properties here
};
```

Then in ObjectExercises.js, import what you need:

```javascript
import { microwave, cdPlayer } from './globals.js';

function cookForOneMinute(){
    microwave.time = 60;
    return microwave.cook();
}

function listValues(){
    let text = " ";
    for (let key in cdPlayer) {
        text += cdPlayer[key] + " ";
    }
    return text.trim();
}
```

And in your HTML, use ES6 modules:

```html
<script type="module" src="ObjectExercises.js"></script>
```

This approach:

- Eliminates ESLint "undefined variable" errors naturally
- Makes dependencies explicit and clear
- Follows modern JavaScript best practices
- Makes code more testable and maintainable
- No need for ESLint configuration or `/* global */` comments

This is the cleanest long-term solution, especially for a course like CS133JS where you're learning proper JavaScript practices.

## Lab 8: Make Both Parts Required

Currently part 2 is XC. Make it normal credit



## Term Project

Revise instructions with a statement about AI to be more explicit that none of the code can have been written by AI or by anyone else.
