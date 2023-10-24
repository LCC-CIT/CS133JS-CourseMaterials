# Javascript Quiz Questions



## Loop questions

1. 
   Which statement creates an infinite loop?

A) for (let i = 0; i < 10; i++) 

B) while (true) 

C) for (let i = 0; i <= 10; i--) 

D) do { } while (false) 

E) for (let i = 10; i >= 0; i--)

Answer: B



1. Which loop runs the code block first, before checking the condition?

A) while B) do-while C) for D) foreach E) repeat-until

Answer: B



1. What is the syntax for a basic while loop?

A) while (condition) {} B) while {condition} C) loop while (condition) D) repeat until (condition) E) while condition { }

Answer: A



1. What is the primary difference between a for loop and a while loop in JavaScript?

(a) A for loop is used for iterating over a specific number of times, while a while loop continues until a condition becomes false (b) A for loop is used for iterating over arrays, while a while loop is used for iterating over objects (c) A for loop is more efficient than a while loop (d) A for loop is used for declaring variables, while a while loop is used for executing code

Answer: (a) A for loop is used for iterating over a specific number of times, while a while loop continues until a condition becomes false



1. What is the purpose of the conditional expression in a while loop?

(a) To declare and initialize the loop control variable (b) To perform an action at the end of each loop iteration (c) To define the condition that determines when the loop terminates (d) To modify the value of the loop control variable after each iteration

Answer: (c) To define the condition that determines when the loop terminates



1. What is the output of the following code snippet?

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

A. `0 1 2 3 4`

B. `5 5 5 5 5`

C. `undefined undefined undefined undefined undefined`

D. `0 0 0 0 0`

Answer: A

1. What is the output of the following code snippet?

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

A. `0 1 2 3`

B. `1 2 3 4`

C. `undefined undefined undefined undefined`

D. `0`

Answer: A



9.What is the output of the following code snippet?

```javascript
let sum=0;
for(let i=0;i<10;i++){
    if(i%2==0){
        continue;
    }
    sum+=i;
}
console.log(sum);
```

A.`25`
B.`20`
C.`15`
D.`10`

Answer: A

10.What is the output of the following code snippet?

```javascript
let sum=0;
for(let i=0;i<10;i++){
    if(i%2==0){
        break;
    }
    sum+=i;
}
console.log(sum);
```

A.`25`
B.`20`
C.`15`
D.`10`

Answer: D

11.What is the output of the following code snippet?

```javascript
let sum=0;
for(let i=0;i<10;i++){
    if(i%2==0){
        continue;
    }
    else{
        break;
    }
    sum+=i;
}
console.log(sum);
```

A.`25`



## Loops with arrays

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
```

A. `1 2 3 4 5`

B. `5 4 3 2 1`

C. `undefined undefined undefined undefined undefined`

D. `0 0 0 0 0`

Answer: B

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= -1; i--) {
    console.log(arr[i]);
}
```

A. `undefined undefined undefined undefined undefined`
B. `5 4 3 2 1`
C. `undefined undefined undefined undefined`
D. `undefined`

Answer: A

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= -1; i--) {
    console.log(arr[i]);
    if (i === -1) break;
}
```

A. `undefined undefined undefined undefined undefined`
B. `5 4 3 2 1`
C. `undefined undefined undefined undefined`
D. `undefined`

Answer: B

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= -1; i--) {
    if (i === -1) break;
    console.log(arr[i]);
}
```

A. `undefined undefined undefined undefined undefined`
B. `5 4 3 2 1`
C. `undefined undefined undefined undefined`
D. `undefined`

Answer: B

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= -arr.length; i--) {
    console.log(arr[Math.abs(i)]);
}
```

A. `undefined undefined undefined undefined undefined`
B. `5 4 3 2 1`
C. `undefined undefined undefined`
D. `undefined`

Answer: B

1. What is the output of the following code snippet?

```javascript
let arr = [10,20,30];
for (let val of arr) {
    val += val;
}
console.log(arr);
```

A. `[10,20,30]`
B. `[20,40,60]`
C. `[NaN,NaN,NaN]`
D. `[null,null,null]`

Answer: A

1. What is the output of the following code snippet?

```javascript
let arr = [10,20,30];
for (let val in arr) {
    val += val;
}
console.log(arr);
```

A. `[10,20,30]`
B. `[20,40,60]`
C. `[NaN,NaN,NaN]`
D. `[null,null,null]`

Answer: A

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= -1; i--) {
    console.log(arr[i]);
    if (i === -1) break;
}
```

A. `undefined undefined undefined undefined undefined`

B. `5 4 3 2 1`

C. `undefined undefined undefined undefined`

D. `undefined`

Answer: B

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= -1; i--) {
    if (i === -1) break;
    console.log(arr[i]);
}
```

A. `undefined undefined undefined undefined undefined`

B. `5 4 3 2 1`

C. `undefined undefined undefined undefined`

D. `undefined`

Answer: B

1. What is the output of the following code snippet?

```javascript
let arr = [1,2,3,4,5];
for (let i = arr.length - 1; i >= -arr.length; i--) {
    console.log(arr[Math.abs(i)]);
}
```

A. `undefined undefined undefined undefined undefined`

B. `5 4 3 2 1`

C. `undefined undefined undefined`

D. `undefined`

Answer: B

1. What is the output of the following code snippet?

```javascript
let arr = [10,20,30];
for (let val of arr) {
    val += val;
}
console.log(arr);
```

A. `[10,20,30]`

B. `[20,40,60]`

C. `[NaN,NaN,NaN]`

D. `[null,null,null]`

Answer: A

1. 

## Loops with objects

1. What is the output of the following code snippet?

```javascript
let obj = {a:10,b:20,c:30};
for (let key in obj) {
    console.log(key);
}
```

A. `"a" "b" "c"`
B. `"a" "10" "b" "20" "c" "30"`
C. `"10" "20" "30"`
D. `"a,b,c"`

Answer: A

10.What is the output of the following code snippet?

```javascript
let obj = {a:10,b:20,c:30};
for (let key in obj) {
    console.log(obj[key]);
}
```

A.`"a" "b" "c"`
B.`"a" "10" "b" "20" "c" "30"`
C.`10 20 30`
D.`"a,b,c"`

Answer:

1. What is the output of the following code snippet?

```javascript
let obj = {a:10,b:20,c:30};
for (let key in obj) {
    console.log(key);
}
```

A. `"a" "b" "c"`
B. `"a" "10" "b" "20" "c" "30"`
C. `"10" "20" "30"`
D. `"a,b,c"`

Answer: A

8.What is the output of the following code snippet?

```javascript
let obj = {a:10,b:20,c:30};
for (let key in obj) {
    console.log(obj[key]);
}
```

A.`"a" "b" "c"`
B.`"a" "10" "b" "20" "c" "30"`
C.`10 20 30`
D.`"a,b,c"`

Answer: C

## Other Loop Questions

1. What is the output of the following code snippet?

```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

A. `0 1 2 3 4`

B. `5 5 5 5 5`

C. `undefined undefined undefined undefined undefined`

D. `0 0 0 0 0`

Answer: B