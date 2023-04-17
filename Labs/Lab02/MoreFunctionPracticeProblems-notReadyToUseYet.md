<h1>JavaScript Function Practice Problems</h1>

## Problems

JavaScript practice problems that require a student to write a function using only math and string operators:

1. Write a function that takes a string as an argument and returns the string reversed.
2. Write a function that takes two numbers as arguments and returns the larger of the two numbers.
3. Write a function that takes two numbers as arguments and returns the smaller of the two numbers.
4. Write a function that takes two strings as arguments and returns true if the first string contains the second string, false otherwise.
5. Write a function that takes two numbers as arguments and returns true if the first number is divisible by the second number, false otherwise.
6. Write a function that takes two strings as arguments and returns true if they are anagrams of each other, false otherwise.
7. Write a function that takes a string as an argument and returns true if it is a palindrome, false otherwise.
8. Write a function that takes a string as an argument and returns the string in title case (the first letter of each word capitalized).
9. Write a function that takes two strings as arguments and returns true if they are the same length, false otherwise.
10. Write a function that takes two numbers as arguments and returns their absolute difference.

## Solutions

### Function Definitions

Here are the solutions to the problems above:

1. To reverse a string, you can use the following code:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}
```
2. To find the larger of two numbers, you can use the following code:
```javascript
function largerNumber(num1, num2) {
  return Math.max(num1, num2);
}
```
3. To find the smaller of two numbers, you can use the following code:
```javascript
function smallerNumber(num1, num2) {
  return Math.min(num1, num2);
}
```
4. To check if a string contains another string, you can use the following code:
```javascript
function containsString(str1, str2) {
  return str1.includes(str2);
}
```
5. To check if a number is divisible by another number, you can use the following code:
```javascript
function isDivisible(num1, num2) {
  return num1 % num2 === 0;
}
```
6. To check if two strings are anagrams of each other, you can use the following code:
```javascript
function isAnagram(str1, str2) {
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
```
7. To check if a string is a palindrome (reads the same forwards and backwards), you can use the following code:
```javascript
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
```
8. To convert a string to title case (the first letter of each word capitalized), you can use the following code:
```javascript
function toTitleCase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}
```
9. To check if two strings are of equal length, you can use the following code:
```javascript
function isEqualLength(str1, str2) {
  return str1.length === str2.length;
}
```
10. To find the absolute difference between two numbers, you can use the following code:
```javascript
function absoluteDifference(num1, num2) {
  return Math.abs(num1 - num2);
}
```



### Function calls

Here's an example HTML page that calls all the functions above:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Functions Example</title>
    <script src="functions.js"></script>
  </head>
  <body>
    <h1>Functions Example</h1>
    <p>Reverse String: "hello" -> "olleh"</p>
    <p id="reverseString"></p>
    <script>
      document.getElementById("reverseString").innerHTML = reverseString("hello");
    </script>

    <p>Larger Number: 5, 10 -> 10</p>
    <p id="largerNumber"></p>
    <script>
      document.getElementById("largerNumber").innerHTML = largerNumber(5, 10);
    </script>

    <p>Smaller Number: 5, 10 -> 5</p>
    <p id="smallerNumber"></p>
    <script>
      document.getElementById("smallerNumber").innerHTML = smallerNumber(5, 10);
    </script>

    <p>Contains String: "hello world", "world" -> true</p>
    <p id="containsString"></p>
    <script>
      document.getElementById("containsString").innerHTML = containsString("hello world", "world");
    </script>

    <p>Is Divisible: 10, 2 -> true</p>
    <p id="isDivisible"></p>
    <script>
      document.getElementById("isDivisible").innerHTML = isDivisible(10, 2);
    </script>

    <p>Is Anagram: "listen", "silent" -> true</p>
    <p id="isAnagram"></p>
    <script>
      document.getElementById("isAnagram").innerHTML = isAnagram("listen", "silent");
    </script>

    <p>Is Palindrome: "racecar" -> true</p>
    <p id="isPalindrome"></p>
    <script>
      document.getElementById("isPalindrome").innerHTML = isPalindrome("racecar");
    </script>

    <p>To Title Case: "the quick brown fox" -> "The Quick Brown Fox"</p>
    <p id="toTitleCase"></p>
    <script>
      document.getElementById("toTitleCase").innerHTML = toTitleCase("the quick brown fox");
    </script>

    <p>Is Equal Length: "hello", "world" -> true</p>
    <p id="isEqualLength"></p>
    <script>
      document.getElementById("isEqualLength").innerHTML = isEqualLength("hello", "world");
    </script>

    <p>Absolute Difference: 5, 10 -> 5</p>
    <p id="absoluteDifference"></p>
    <script>
      document.getElementById("absoluteDifference").innerHTML = absoluteDifference(5, 10);
    </script>

  </body>
</html>

```

You can save this code in an HTML file and include the functions.js file in the same directory. When you open the HTML file in a web browser, it will call all the functions and display their results on the page.
