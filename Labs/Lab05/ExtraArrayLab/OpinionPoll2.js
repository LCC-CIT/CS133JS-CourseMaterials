/* CS133JS Extra Array Lab starter file */
/* By Brian Bird, 2020, revised 2022 */

// Global 2D array that will hold counts of votes
// In the nested arrays (inner arrays), the element at index:
//    0 holds the count of yes votes
//    1 holds the count of no votes
let votes = [
    [0, 0], // 0 yes votes, 0 no votes
    [0, 0],
    [0, 0]
];

// totalTimesVoted adds up the total of all the votes
// Parameters: none
// Returns: the total number of votes
/* TODO: Write this function.
   Add up the total of all the values in the inner arrays.
   Divide the total by three so that you return the total number
   of voters.
*/

/*************************************************/
/****************** Event Handler Code *********/
/*************************************************/

// addVotes adds one to the count of yes or no votes for one question
// Parameters: none
// Returns: nothing
/* TODO: Write this function.
   For each element of the outer array, this code needs to add 1 to either 
   element of the inner array, depending on which radio button was selected. 
   It will add noting if neither readio button was selected.

   Call getIndexFromRadio to get a number to use as an index for the inner array.
   If getIndexFromRadio returns -1, don't index the array or add to either vote count.

   Call updateTable at the end of this function.
*/


/*************************************************/
/****************** DOM Interaction Code *********/
/*************************************************/

// getIndexFromRadio gets the value of the radio button for the given question
// and returns an index for the inner array corresponding to yes-count or no-count.
// Parameter: qNumber - the question ID number
// Returns: 0 or 1 which will be used to index the inner arrays, or -1 if no answer was given.
function getIndexFromRadio(qNumber) {
    let element = document.querySelector("input[name='q" + qNumber + "']:checked");
    let value = -1; // -1 represents no response (no radio buttons checked)
    if (element != null) {
        value = element.value === "yes" ? 0 : 1;
    }
    return value;
}

// updateTable updates the vote count for on question and updates the total counts
// Parameter: questionNumber - the question ID number
// Returns: nothing
function updateTable(questionNumber) {
    let i = questionNumber - 1; // outer array index
    // Update vote counts for the specified question
    let td4 = document.querySelector("#row" + questionNumber + " td:nth-of-type(4)");
    td4.innerHTML = votes[i][0]; // yes votes
    let td5 = document.querySelector("#row" + questionNumber + " td:nth-of-type(5)");
    td5.innerHTML = votes[i][1]; // no votes
    // Update total
    let td3 = document.querySelector("tfoot td:nth-of-type(3)");
    td3.innerHTML = totalTimesVoted();

}