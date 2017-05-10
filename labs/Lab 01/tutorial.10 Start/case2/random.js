/*
   New Perspectives on HTML and XHTML 5th Edition
   Tutorial 10
   Case Problem 2

   Function List:
   randInt
      Used to return a random integer from 1 to 'n'

*/


function randInt(n) {
   randNum = Math.ceil(Math.random()*n);
   return randNum;
}