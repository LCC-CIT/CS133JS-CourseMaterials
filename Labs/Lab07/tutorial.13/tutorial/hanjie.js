/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 13
   Tutorial Case

   Author: Brian Bird
   Date:   2/26/13

   Function List
   =============

   init()
      Run when the Web page is loaded; displays puzzle 1
      and loads the event handlers for the Web page buttons.

   swapPuzzle()
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   setupPuzzle()
      Sets up a new puzzle, adding the onclick event handlers for
      every puzzle cell.

   changeBackground()
      Changes the cell background from gold to gray to white and
      back to gold again. Checks the puzzle for a complete solution.

   peek()
      Temporarily displays incorrect cells. In correct white cell are
      displayed in pink; incorrect gray cells are displayed in red.

   unpeek()
      Returns the puzzle to its original state prior to peeking.

   showSolution()
      Removes all inline background color styles from the puzzle, showing
      the complete solution.

   checkSolution()
      Checks the current state of the puzzle, determining whether it 
      respreents a complete solution.

   drawGrid(puzzle)
      Returns a text string of the HTML code to
      display a hanjie Web table based on the contents of
      multi-dimensional array, puzzle.
	
*/

window.onload = init;

function init() {
   /* Write the first puzzle data into the Web page */
   document.getElementsByTagName("h1")[0].innerHTML = "Hanjie Puzzle 1";
   document.getElementById("hint").innerHTML = puzzle1Hint;
   document.getElementById("rating").innerHTML = puzzle1Rating;
   /* Display the first puzzle using the drawGrid() function  */
   document.getElementById("puzzle").innerHTML = drawGrid(puzzle1);
	/* Add event handlers for the puzzle buttons */
	var puzzleButtons = document.getElementsByClassName("puzzles");
	for (var i = 0; i < puzzleButtons.length; i++) {
	   puzzleButtons[i].onclick = swapPuzzle;
	}
	
	/* Set up the initial appearance of the first puzzle */
	setupPuzzle();	
}

function swapPuzzle() {
   /* Determine the puzzle to show based on the button' s id value  */
   var title = "Hanjie " + this.value;
   var hint = eval(this.id + "Hint");
   var rating = eval(this.id + "Rating");
   var puzzle = eval(this.id);
   
	/* Write the puzzle data into the Web page */
	document.getElementsByTagName("h1")[0].innerHTML = title;
	document.getElementById("hint").innerHTML = hint;
	document.getElementById("rating").innerHTML = rating;
	/* Display the puzzle using the drawGrid() function */
	document.getElementById("puzzle").innerHTML = drawGrid(puzzle);
	
	/* Set up the initial appearance of the first puzzle */
	setupPuzzle();
}

function setupPuzzle() {
   /* Match all of the data cells in the puzzle */
   var puzzleCells = document.querySelectorAll("#hanjieGrid td");
   /* Set the initial color of each cell to gold */
   for (var i = 0; i < puzzleCells.length; i++) {
      puzzleCells[i].style.backgroundColor = "rgb(233, 207, 29)";
   }
   
   /* Change the color with each click */
	puzzleCells[i].onclick = changeBackground;
}

function changeBackground() {
   /* Determine the current background color of the data cell */
   var bColor = this.style.backgroundColor;
   /* If the color is gold, make it dark gray; if the color 
      is dark gray, change it to white; if the color is white,
      change it back to gold */
   if (bColor == "rgb(233, 207, 29)") bColor = "rgb(101, 101, 101)"
   else if (bColor == "rgb(101, 101, 101)") bColor = "white"
   else bColor = "rgb(233, 207, 29)";
   /* Apply the new background color to the data cell */
   this.style.backgroundColor = bColor;
}

function drawGrid(puzzle) {

   /* Initial HTML String for the Hanjie Puzzle */
   var htmlString = "";

   /* puzzle is a multidimensional array containing the
      Hanjie puzzle layout. Marked cells are indicated by
      the # character. Empty cells are indicated by an
      empty text string. First, determine the number of rows
      and columns in the puzzle */

   var totalRows = puzzle.length;
   var totalCols = puzzle[0].length;

   /* Loop through the rows to create the rowCount array
      containing the totals for each row in the puzzle */

   var rowCount = [];
   for (var i = 0; i < totalRows; i++) {
      rowCount[i]="";
      spaceCount = 0;

      for (var j = 0; j < totalCols; j++) {
         if (puzzle[i][j] == "#") {
            spaceCount++;
            if (j == totalCols-1) rowCount[i] += spaceCount + "&nbsp;&nbsp;";
         } else {
            if (spaceCount > 0) {
               rowCount[i] += spaceCount + "&nbsp;&nbsp;";
               spaceCount = 0;
            } 
         }    
      }

   }

   /* Loop through the columns to create the colCount array
      containing the totals for each column in the puzzle */

   var colCount = [];
   for (var j = 0; j < totalCols; j++) {
      colCount[j]="";
      spaceCount = 0;

      for (var i = 0; i < totalRows; i++) {
         if (puzzle[i][j] == "#") {
            spaceCount++;
            if (i == totalRows-1) colCount[j] += spaceCount + "<br />";
         } else {
            if (spaceCount > 0) {
               colCount[j] += spaceCount + "<br />";
               spaceCount = 0;
            } 
         }    
      }

   }

   /* Create a Web table with the id, hanjieGrid, containing
      headers with the row and column totals.
      Each marked cell has the class name, marked; each
      empty cell has the class name, empty */

   htmlString = "<table id='hanjieGrid'><tr><th></th>";

   for (var j = 0; j < totalCols; j++) {
      htmlString += "<th class='cols'>" + colCount[j] + "</th>";
   }
   htmlString += "</tr>";

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr><th class='rows'>" + rowCount[i]+"</th>";

      for (var j = 0; j<totalCols; j++) {
         if (puzzle[i][j] == "#") htmlString += "<td  class='marked'></td>"
         else htmlString += "<td class='empty'></td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}
