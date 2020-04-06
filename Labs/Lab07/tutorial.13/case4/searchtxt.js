/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 13
   Case Problem 4

   Author: 
   Date:   

   Function List
   =============

   drawWordSearch(letters, words)
      Function to create a Web table containing hidden words where
      letters is a multi-dimensional array containing the grid of
      letters and words is a multi-dimensional array specifying
      the location of the hidden words in the puzzle

	
*/


function drawWordSearch(letters, words) {
   var rowSize = letters.length;
   var colSize = letters[0].length;

   var htmlCode = "<table id='wordsearchtable'>";

   for (var i = 0; i < rowSize; i++) {
      htmlCode += "<tr>";

      for (var j = 0; j < colSize; j++) {
         if (words[i][j] == " ") {
            htmlCode += "<td>";
         } else {
            htmlCode += "<td class='wordCell'>";
         }
         htmlCode += letters[i][j];
         htmlCode += "</td>";
      }

      htmlCode += "</tr>";
   }
   htmlCode += "</table>";

   return htmlCode;
}
